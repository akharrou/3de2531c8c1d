
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NavLink from '@/components/nav-link';
import { cn } from "@/lib/utils";

const serviceSubItems = [
  { label: 'Advanced Cardiac Diagnostics', href: '/services/advanced-cardiac-diagnostics' },
  { label: 'Minimally Invasive Surgery', href: '/services/minimally-invasive-surgery' },
  { label: 'Preventive Cardiology', href: '/services/preventive-cardiology' },
  { label: 'Post-Operative Care', href: '/services/post-operative-care' },
];

const resourcesSubItems = [
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'FAQ', href: '/#faq' },
];

const navItems = [
  { label: 'About', href: '/#about' },
  {
    label: 'Services',
    isDropdown: true,
    subItems: serviceSubItems,
    href: '/#services' // Fallback/main link for the "Services" text itself
  },
  {
    label: 'Resources',
    isDropdown: true,
    subItems: resourcesSubItems,
    href: '/#resources' // Generic href for main Resources link, could point to first subitem or a new page
  },
  { label: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [scheduleUrl, setScheduleUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    setScheduleUrl(process.env.NEXT_PUBLIC_SCHEDULE_URL);
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
    return (
      <NavLink href="/#contact" onClick={() => isMobile && setIsSheetOpen(false)} className={cn(!isMobile && "ml-2")}>
        <Button {...buttonProps}>
          Schedule Consultation
        </Button>
      </NavLink>
    );
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      "bg-card shadow-md py-3" // Adjusted padding slightly for image logo
    )}>
      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-red-blank.png"
            alt="Chen Cardiology"
            width={130} 
            height={35} 
            className="h-9 w-auto" // Adjust height as needed, e.g., h-8, h-9, h-10
            priority
          />
        </Link>

        {/* Desktop Navigation & Button */}
        <div className="hidden md:flex items-center">
          <nav className="space-x-1">
            {navItems.map((item) =>
              item.isDropdown ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "px-3 py-2 rounded-md font-medium transition-colors duration-200 hover:text-accent focus-visible:ring-0 focus-visible:ring-offset-0 text-sm",
                      )}
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="bg-card shadow-lg rounded-lg border-border mt-2 w-64">
                    {item.subItems?.map((subItem) => (
                      <DropdownMenuItem key={subItem.label} asChild className="cursor-pointer focus:bg-secondary">
                        <Link href={subItem.href} className="block px-4 py-2 text-sm text-foreground hover:text-accent w-full">
                          {subItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <NavLink 
                  key={item.label} 
                  href={item.href} 
                  className={cn(
                    "px-3 py-2 rounded-md font-medium transition-colors duration-200 hover:text-accent text-sm",
                     item.href === "/#contact" ? "mr-2" : "" 
                  )}
                >
                  {item.label}
                </NavLink>
              )
            )}
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
                <Link href="/" className="block mb-6" onClick={() => setIsSheetOpen(false)}>
                  <Image
                    src="/images/logo-red-blank.png"
                    alt="Chen Cardiology"
                    width={120}
                    height={32}
                    className="h-8 w-auto"
                  />
                </Link>
                <nav className="flex flex-col space-y-1">
                  {navItems.map((item) =>
                    item.isDropdown ? (
                      <div key={item.label} className="py-1">
                        <span className="block text-lg hover:text-accent py-1 font-medium text-muted-foreground cursor-default">{item.label}</span>
                        <div className="pl-4 mt-1 space-y-1 border-l border-border ml-2">
                          {item.subItems?.map((subItem) => (
                            <NavLink
                              key={subItem.label}
                              href={subItem.href}
                              onClick={() => setIsSheetOpen(false)}
                              className="block text-base hover:text-accent py-1.5 !px-2 !font-normal"
                            >
                              {subItem.label}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <NavLink
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsSheetOpen(false)}
                        className="block text-lg hover:text-accent py-2"
                      >
                        {item.label}
                      </NavLink>
                    )
                  )}
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
