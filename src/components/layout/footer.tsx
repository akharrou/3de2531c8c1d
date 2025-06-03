import Link from 'next/link';
import { Linkedin, X, Facebook, Heart, Youtube } from 'lucide-react';
import NavLink from '@/components/nav-link';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: <Youtube className="h-5 w-5" />, href: 'https://youtube.com', label: 'YouTube' },
  { icon: <X className="h-5 w-5" />, href: 'https://twitter.com', label: 'X' },
  { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <Facebook className="h-5 w-5" />, href: 'https://facebook.com', label: 'Facebook' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 text-xl font-headline font-semibold text-primary mb-4">
              <Heart className="w-7 h-7 text-accent" />
              Chen Cardiology
            </Link>
            <p className="text-sm">Providing expert cardiac care with compassion and dedication.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-headline mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map(item => (
                <li key={item.label}>
                  <NavLink href={item.href} className="text-sm !px-0 !py-1 hover:text-accent">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold font-headline mb-4">Connect With Us</h3>
            <p className="text-sm mb-4">
              123 Heartbeat Ave, Cardio City, CA 90210
              <br />
              (555) 123-4567
              <br />
              contact@chencardiology.com
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-secondary-foreground hover:text-accent transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {currentYear} Chen Cardiology. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-accent">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-accent">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
