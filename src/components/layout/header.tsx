
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
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scheduleUrl, setScheduleUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    setScheduleUrl(process.env.NEXT_PUBLIC_SCHEDULE_URL);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderScheduleButton = (isMobile = false) => {
    const buttonProps = isMobile 
      ? { size: "default" as const, className: "w-full rounded-xl py-3 text-base" }
      : { size: "sm" as const, className: "rounded-xl" };

    if (scheduleUrl) {
      return (
        <a href={scheduleUrl} target="_blank" rel="noopener noreferrer" className={cn(!isMobile && "ml-2")}>
          <Button {...buttonProps} onClick={() => isMobile && setIsSheetOpen(false)}>
            Schedule Consultation
          </Button>
        </a>
      );
    }
    // Fallback to NavLink if URL is not set
    return (
      <NavLink href="#contact" onClick={() => isMobile && setIsSheetOpen(false)} className={cn(!isMobile && "ml-2")}>
        <Button {...buttonProps}>
          Schedule Consultation
        </Button>
      </NavLink>
    );
  };

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
          <nav className="space-x-1">
            {navItems.map((item) => (
              <NavLink 
                key={item.label} 
                href={item.href} 
                className={cn(
                  "px-3 py-2 rounded-md font-medium transition-colors duration-200 hover:text-accent",
                  isScrolled ? "text-sm" : "text-base",
                  item.href === "#contact" ? "mr-2" : "" // Keep margin for the last actual nav item before button
                )}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          {renderScheduleButton()}
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
                {renderScheduleButton(true)}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
