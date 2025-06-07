
// This component is not strictly needed if using CSS smooth scroll and simple <a> tags.
// However, if JS-driven smooth scroll or active state highlighting is desired later, it can be expanded.
// For now, it's a simple styled anchor.
"use client";

import Link from 'next/link';
import { cn } from '@/lib/utils';
import type React from 'react';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  onClick?: () => void; // For closing mobile menu
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className, activeClassName, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href || (href.startsWith("/#") && pathname === "/");


  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(
        // Default styles from previous version - adjust as needed for new dark theme
        // 'text-foreground hover:text-accent transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium',
        className, // Base classes passed in
        isActive && activeClassName // Active classes
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
