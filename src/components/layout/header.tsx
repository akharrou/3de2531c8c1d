
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import NavLink from '@/components/nav-link';
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

        {/* Desktop Navigation & Button */}
        <div className="hidden md:flex items-center">
          <nav className="space-x-1"> {/* Reduced space for tighter links */}
            {navItems.map((item) => (
              <NavLink 
                key={item.label} 
                href={item.href} 
                className={cn(
                  "px-3 py-2 rounded-md font-medium transition-colors duration-200 hover:text-accent",
                  isScrolled ? "text-sm" : "text-base",
                  item.label === "Contact" ? "mr-2" : "" // Add margin to contact before button
                )}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <NavLink href="#contact">
            <Button size="sm" className="rounded-xl ml-2"> {/* Use size="sm" for header, ml-2 for spacing */}
              Schedule Consultation
            </Button>
          </NavLink>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-card p-6 flex flex-col">
              <div>
                <Link href="/" className="flex items-center gap-2 text-lg font-headline font-semibold text-primary mb-6" onClick={() => setIsSheetOpen(false)}>
                  <Heart className="w-6 h-6 text-accent" />
                  Chen Cardiology
                </Link>
                <nav className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsSheetOpen(false)}
                      className="block text-lg hover:text-accent py-1"
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </nav>
              </div>
              <div className="mt-auto pt-6"> 
                <NavLink href="#contact" onClick={() => setIsSheetOpen(false)}>
                  <Button size="default" className="w-full rounded-xl py-3 text-base">
                    Schedule Consultation
                  </Button>
                </NavLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
