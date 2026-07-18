import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Menu, X, Home, BookOpen, Info, Building2, Laptop } from 'lucide-react';
import Button from './ui/Button';

const navLinks = [
  { label: 'Home', href: '#home', Icon: Home },
  { label: 'Courses', href: '#courses', Icon: BookOpen },
  { label: 'Learning Options', href: '#learning-options', Icon: Laptop },
  { label: 'About Us', href: '#/about', Icon: Info },
  { label: 'Corporate Training', href: '#/corporate-training', Icon: Building2 },
];

const APPLICATION_FORM_URL = 'https://forms.gle/cQ1HY477y55KoirbA';

const PAGE_ROUTES: Record<string, string> = {
  about: 'About Us',
  'corporate-training': 'Corporate Training',
};

const HOME_SECTION_IDS = ['home', 'courses', 'learning-options'];
const SECTION_LABEL: Record<string, string> = {
  home: 'Home',
  courses: 'Courses',
  'learning-options': 'Learning Options',
};

function currentPage() {
  return window.location.hash.replace(/^#\/?/, '');
}

function isHashPage() {
  return currentPage() in PAGE_ROUTES;
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [page, setPage] = useState(() => currentPage());
  const [activeNav, setActiveNav] = useState(() => PAGE_ROUTES[currentPage()] ?? 'Home');

  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [pill, setPill] = useState({ left: 0, width: 0, opacity: 0 });

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Route + active-state sync on hash change
  useEffect(() => {
    const onHashChange = () => {
      const p = currentPage();
      setPage(p);
      const label = PAGE_ROUTES[p];
      if (label) setActiveNav(label);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Scroll-spy: slide active pill across Home sections
  useEffect(() => {
    if (page) return; // only on the Home page
    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        });
        const pick = HOME_SECTION_IDS.filter((id) => visible.has(id)).pop();
        if (pick) setActiveNav(SECTION_LABEL[pick]);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    HOME_SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [page]);

  // Position the sliding pill under the active item
  useLayoutEffect(() => {
    const idx = navLinks.findIndex((l) => l.label === activeNav);
    const li = itemRefs.current[idx];
    if (li) setPill({ left: li.offsetLeft, width: li.offsetWidth, opacity: 1 });
    else setPill((p) => ({ ...p, opacity: 0 }));
  }, [activeNav]);

  // Recompute pill position on resize
  useEffect(() => {
    const onResize = () => {
      const idx = navLinks.findIndex((l) => l.label === activeNav);
      const li = itemRefs.current[idx];
      if (li) setPill({ left: li.offsetLeft, width: li.offsetWidth, opacity: 1 });
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [activeNav]);

  const handleNavClick = (label: string, href: string) => {
    setActiveNav(label);
    setMobileOpen(false);

    if (href.startsWith('#/')) {
      window.location.hash = href.slice(1);
      return;
    }

    if (isHashPage()) {
      window.location.hash = '';
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
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
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('Home', '#home');
            }}
            className="flex items-center gap-2 shrink-0"
          >
            <img
              src="https://i.imgur.com/Z2zp8CH.png"
              alt="Cre8tiverse Academy logo"
              className="h-9 lg:h-11 w-auto"
            />
          </a>

          {/* Desktop nav with sliding pill */}
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
                    onClick={() => handleNavClick(link.label, link.href)}
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

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button onClick={handleApplyNow} variant="secondary" className="px-7 py-3 text-sm">
              Apply Now
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-brand-blue"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 animate-fade-up">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const Icon = link.Icon;
                const isActive = activeNav === link.label;
                return (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.label, link.href)}
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
