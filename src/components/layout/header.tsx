
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

const aboutSubItems = [
  { label: 'Our Practice', href: '/about/our-practice' },
  { label: 'Our Mission & Values', href: '/about/our-mission-values' },
  { label: 'Our Team', href: '/about/our-team' },
  { label: 'Our Office & Facilities', href: '/about/our-office-facilities' },
];

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
  {
    label: 'About',
    isDropdown: true,
    subItems: aboutSubItems,
    // No top-level href, it's just a dropdown trigger
  },
  {
    label: 'Services',
    isDropdown: true,
    subItems: serviceSubItems,
    href: '/#services' // Main services link still points to section
  },
  {
    label: 'Resources',
    isDropdown: true,
    subItems: resourcesSubItems,
    href: '/#resources' // Main resources link could point to a general resources page or a key section
  },
  { label: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const renderScheduleButton = (isMobile = false) => {
    const buttonProps = isMobile 
      ? { size: "default" as const, className: "w-full rounded-xl py-3 text-base" }
      : { size: "sm" as const, className: "rounded-xl" };

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
      "bg-card shadow-md py-3" 
    )}>
      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/images/logo-red-blank.png"
            alt="Chen Cardiology Logo"
            width={35} 
            height={35} 
            className="h-9 w-auto" 
            priority
          />
          <span className="font-headline text-xl font-semibold text-primary group-hover:text-primary/80 transition-colors">
            Chen Cardiology
          </span>
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
                         // If item.href exists, it means this dropdown trigger might also be a link
                        item.href ? "data-[state=open]:bg-accent/50" : "data-[state=open]:bg-accent/50"
                      )}
                      // Conditionally render as NavLink if item.href exists
                      // For now, all dropdown triggers are just buttons.
                      // If we want the main dropdown item to also be a link, we'd need different logic.
                    >
                      {item.href ? (
                        <NavLink href={item.href} className="!p-0 !hover:bg-transparent !text-current">
                          {item.label}
                        </NavLink>
                      ) : (
                        item.label
                      )}
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
                  href={item.href as string} 
                  className={cn(
                    "px-3 py-2 rounded-md font-medium transition-colors duration-200 hover:text-accent text-sm"
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
                <Link href="/" className="flex items-center gap-2 mb-6" onClick={() => setIsSheetOpen(false)}>
                  <Image
                    src="/images/logo-red-blank.png"
                    alt="Chen Cardiology Logo"
                    width={32}
                    height={32}
                    className="h-8 w-auto"
                  />
                   <span className="font-headline text-lg font-semibold text-primary">
                    Chen Cardiology
                  </span>
                </Link>
                <nav className="flex flex-col space-y-1">
                  {navItems.map((item) =>
                    item.isDropdown ? (
                      <div key={item.label} className="py-1">
                        <span 
                          className={cn(
                            "block text-lg hover:text-accent py-1 font-medium cursor-default",
                            item.href ? "text-foreground" : "text-muted-foreground"
                          )}
                          onClick={() => {
                            if(item.href) {
                              // Handle navigation if main dropdown is a link
                              const targetId = item.href.substring(1);
                              const targetElement = document.getElementById(targetId);
                              if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
                              setIsSheetOpen(false);
                            }
                          }}
                        >
                          {item.label}
                          {!item.href && <ChevronDown className="inline-block ml-1 h-4 w-4 relative -top-0.5" />}
                        </span>
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
                        href={item.href as string}
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
