import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Menu, X, Home, BookOpen, Info, Building2, Laptop, MessageCircle } from 'lucide-react';
import Button from './ui/Button';
import { navigate } from '../App';

type NavEntry = {
  label: string;
  href: string;
  Icon: typeof Home;
  section?: string;
  isPage?: boolean;
};

const navLinks: NavEntry[] = [
  { label: 'Home', href: '/', Icon: Home, section: 'home' },
  { label: 'Courses', href: '/#courses', Icon: BookOpen, section: 'courses' },
  { label: 'Learning Options', href: '/#learning-options', Icon: Laptop, section: 'learning-options' },
  { label: 'About Us', href: '/about', Icon: Info, isPage: true },
  { label: 'Corporate Training', href: '/corporate-training', Icon: Building2, isPage: true },
  { label: 'Contact Us', href: '/contact', Icon: MessageCircle, isPage: true },
];

const APPLICATION_FORM_URL = 'https://forms.gle/cQ1HY477y55KoirbA';

const PAGE_ROUTES = ['about', 'corporate-training', 'contact'];

const SECTION_LABELS: Record<string, string> = {
  home: 'Home',
  courses: 'Courses',
  'learning-options': 'Learning Options',
};

function currentRoute() {
  return window.location.pathname.replace(/^\//, '');
}

function isStandalonePage() {
  return PAGE_ROUTES.includes(currentRoute());
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [page, setPage] = useState(() => currentRoute());
  const [activeNav, setActiveNav] = useState(() => {
    const r = currentRoute();
    const link = navLinks.find((l) => l.href === `/${r}`);
    return link ? link.label : 'Home';
  });

  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [pill, setPill] = useState({ left: 0, width: 0, opacity: 0 });

  const pendingScroll = useRef<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onPopState = () => {
      const r = currentRoute();
      setPage(r);
      const link = navLinks.find((l) => l.href === `/${r}`);
      setActiveNav(link ? link.label : 'Home');
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Scroll-spy: slide active pill across Home sections
  useEffect(() => {
    if (page) return;
    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        });
        const pick = ['home', 'courses', 'learning-options'].filter((id) => visible.has(id)).pop();
        if (pick) {
          const label = SECTION_LABELS[pick];
          if (label) setActiveNav(label);
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    ['home', 'courses', 'learning-options'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [page]);

  // After navigating home for a section scroll, perform the scroll once the DOM is ready
  useEffect(() => {
    if (page || !pendingScroll.current) return;
    const id = pendingScroll.current;
    pendingScroll.current = null;

    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => scrollToSection(id));
    } else {
      const tryScroll = () => {
        if (document.getElementById(id)) {
          scrollToSection(id);
        } else {
          requestAnimationFrame(tryScroll);
        }
      };
      requestAnimationFrame(tryScroll);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useLayoutEffect(() => {
    const idx = navLinks.findIndex((l) => l.label === activeNav);
    const li = itemRefs.current[idx];
    if (li) setPill({ left: li.offsetLeft, width: li.offsetWidth, opacity: 1 });
    else setPill((p) => ({ ...p, opacity: 0 }));
  }, [activeNav]);

  useEffect(() => {
    const onResize = () => {
      const idx = navLinks.findIndex((l) => l.label === activeNav);
      const li = itemRefs.current[idx];
      if (li) setPill({ left: li.offsetLeft, width: li.offsetWidth, opacity: 1 });
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [activeNav]);

  const handleNavClick = (entry: NavEntry) => {
    setActiveNav(entry.label);
    setMobileOpen(false);

    const { href, section, isPage } = entry;

    // Independent pages: navigate directly
    if (isPage) {
      navigate(href);
      return;
    }

    // Home / Courses / Learning Options — all live on the homepage
    const targetSection = section ?? 'home';

    if (isStandalonePage()) {
      pendingScroll.current = targetSection;
      navigate('/');
    } else {
      if (targetSection === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        scrollToSection(targetSection);
      }
    }
  };

  const handleApplyNow = () => {
    setMobileOpen(false);
    window.open(APPLICATION_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 animate-fade-down ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-soft' : 'bg-white'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(navLinks[0]);
            }}
            className="flex items-center gap-2 shrink-0"
          >
            <img
              src="https://i.imgur.com/Z2zp8CH.png"
              alt="Cre8tiverse Academy logo"
              className="h-9 lg:h-11 w-auto"
            />
          </a>

          <ul className="hidden lg:flex items-center gap-1 relative">
            <div
              aria-hidden
              className="absolute top-0 bottom-0 rounded-full bg-brand-orange shadow-soft transition-all duration-300 ease-out"
              style={{ left: pill.left, width: pill.width, opacity: pill.opacity }}
            />
            {navLinks.map((link, i) => {
              const Icon = link.Icon;
              const isActive = activeNav === link.label;
              return (
                <li key={link.label} ref={(el) => (itemRefs.current[i] = el)}>
                  <button
                    onClick={() => handleNavClick(link)}
                    className={`relative z-10 flex items-center gap-2 px-5 py-2.5 text-[15px] rounded-full font-medium transition-colors duration-300 ease-out ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-ink-dark hover:text-brand-blue hover:bg-brand-blue/5'
                    }`}
                  >
                    <Icon
                      size={18}
                      className={`transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-brand-blue/70'
                      }`}
                    />
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block ml-8">
            <Button onClick={handleApplyNow} variant="secondary" className="px-7 py-3 text-sm">
              Apply Now
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-brand-blue"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 animate-fade-up">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const Icon = link.Icon;
                const isActive = activeNav === link.label;
                return (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 ease-out ${
                        isActive
                          ? 'bg-brand-orange text-white font-semibold shadow-soft'
                          : 'text-ink-dark hover:bg-ink-light hover:text-brand-blue'
                      }`}
                    >
                      <Icon
                        size={18}
                        className={isActive ? 'text-white' : 'text-brand-blue/70'}
                      />
                      {link.label}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 px-4">
              <Button onClick={handleApplyNow} variant="secondary" className="w-full">
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
