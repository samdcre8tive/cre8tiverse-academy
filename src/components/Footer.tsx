import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
} from 'lucide-react';
import { navigate } from '../App';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/courses' },
  { label: 'Learning Options', href: '/learning-options' },
  { label: 'About Us', href: '/about' },
  { label: 'Corporate Training', href: '/corporate-training' },
  { label: 'Contact Us', href: '/contact' },
];

export const socials = [
  { name: 'Facebook', href: 'https://web.facebook.com/cre8tiverse/', Icon: Facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/cre8tiverse/', Icon: Instagram },
  { name: 'X (Twitter)', href: 'https://twitter.com/cre8tiverse', Icon: Twitter },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/cre8tiverse', Icon: Linkedin },
  { name: 'YouTube', href: 'https://www.youtube.com/@cre8tiverse', Icon: Youtube },
  { name: 'TikTok', href: 'https://www.tiktok.com/@cre8tiverse', Icon: TikTokIcon },
];

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-blue-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <img
              src="https://i.imgur.com/pb6rmMm.png"
              alt="Cre8tiverse Academy logo"
              className="block mx-auto h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] lg:h-[80px] lg:w-[80px] object-contain mb-4"
            />
            <p className="text-center text-white font-bold text-base sm:text-lg lg:text-xl">
              Cre8tiverse Academy
            </p>
            <p className="mt-3 text-center text-sm text-white/70 leading-relaxed">
              Preparing Africa's next generation of digital professionals.
            </p>
            <p className="mt-3 text-center text-sm font-semibold text-brand-orange">
              Innovate. Create. Inspire.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(link.href);
                    }}
                    className="text-sm text-white/70 hover:text-brand-orange transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin size={18} className="shrink-0 mt-0.5 text-brand-orange" />
                <span>Abuja, Nigeria</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Mail size={18} className="shrink-0 mt-0.5 text-brand-orange" />
                <a
                  href="mailto:info@cre8tiverse.com"
                  className="hover:text-brand-orange transition-colors"
                >
                  info@cre8tiverse.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Phone size={18} className="shrink-0 mt-0.5 text-brand-orange" />
                <a
                  href="tel:+2348024167522"
                  className="hover:text-brand-orange transition-colors"
                >
                  +234 802 416 7522
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Follow Us
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {socials.map((social) => {
                const Icon = social.Icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-brand-orange hover:border-brand-orange hover:bg-white/5 transition-all duration-200"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Cre8tiverse Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
