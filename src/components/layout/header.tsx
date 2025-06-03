"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import NavLink from '@/components/nav-link'; // Re-using NavLink for consistent behavior
import { cn } from "@/lib/utils";

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-card shadow-md py-4" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-headline font-semibold text-primary">
          <Heart className="w-7 h-7 text-accent" />
          Chen Cardiology
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-2">
          {navItems.map((item) => (
            <NavLink key={item.label} href={item.href} className={isScrolled ? "text-sm" : "text-base"}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-card p-6">
              <div className="flex flex-col space-y-6">
                <Link href="/" className="flex items-center gap-2 text-lg font-headline font-semibold text-primary mb-4" onClick={() => setIsSheetOpen(false)}>
                  <Heart className="w-6 h-6 text-accent" />
                  Chen Cardiology
                </Link>
                {navItems.map((item) => (
                  <NavLink
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsSheetOpen(false)}
                    className="block text-lg hover:text-accent"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
