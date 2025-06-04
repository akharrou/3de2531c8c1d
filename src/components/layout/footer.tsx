
import Link from 'next/link';
import { Linkedin, Facebook, Heart, Youtube } from 'lucide-react';
import NavLink from '@/components/nav-link';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const XLogo = () => (
  <svg
    className="h-5 w-5"
    fill="currentColor"
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M6.5605469,3 L20.001953,20.6875 L6.96875,38 L10.03125,38 L21.53125,22.65625 L31.599609,38 L43.439453,38 L28.908203,19.160156 L42.439453,3 L39.371094,3 L27.341797,17.34375 L18.400391,3 L6.5605469,3 z M12.03125,5 L16.96875,5 L37.96875,36 L33.03125,36 L12.03125,5 z" />
  </svg>
);

const socialLinks = [
  { icon: <Youtube className="h-5 w-5" />, href: 'https://youtube.com', label: 'YouTube' },
  { icon: <XLogo />, href: 'https://x.com', label: 'X' },
  { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <Facebook className="h-5 w-5" />, href: 'https://facebook.com', label: 'Facebook' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground py-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          {/* Left Block: Logo, Tagline, Horizontal Quick Links */}
          <div className="flex flex-col items-start mb-6 md:mb-0">
            <Link href="/" className="flex items-center gap-2 text-xl font-headline font-semibold text-primary mb-2">
              <Heart className="w-7 h-7 text-accent" />
              Chen Cardiology
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Providing expert cardiac care with compassion and dedication.
            </p>
            <nav>
              <ul className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2">
                {navItems.map(item => (
                  <li key={item.label}>
                    <NavLink href={item.href} className="text-sm !px-0 !py-1 hover:text-accent">
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right Block: Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0 self-center md:self-start">
            {socialLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-card-foreground hover:text-accent transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal Links */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Chen Cardiology. All rights reserved.</p>
          <div className="flex flex-wrap justify-center space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-accent">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-accent">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
