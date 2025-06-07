
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

interface MegaMenuSubItem {
  label: string;
  description: string;
  href: string;
  icon?: React.ReactNode; // Optional icon
}

interface MegaMenuGroup {
  title: string;
  items: MegaMenuSubItem[];
}

interface MegaMenuCta {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  buttonText: string;
  buttonHref: string;
}

interface NavItem {
  label: string;
  href?: string; // Optional for items that are only dropdown triggers
  isMegaMenu?: boolean;
  megaMenuGroups?: MegaMenuGroup[];
  megaMenuCta?: MegaMenuCta;
  isSimpleDropdown?: boolean;
  subItems?: Array<{ label: string; href: string }>; // For simple dropdowns
}


const aboutMegaMenuGroups: MegaMenuGroup[] = [
  {
    title: 'Explore Our Practice',
    items: [
      { label: 'Our Practice', description: 'Learn about our history and foundation.', href: '/about/our-practice' },
      { label: 'Our Mission & Values', description: 'The principles guiding our care.', href: '/about/our-mission-values' },
    ],
  },
  {
    title: 'Meet The Experts',
    items: [
      { label: 'Our Team', description: 'Dedicated professionals supporting you.', href: '/about/our-team' },
      { label: 'Our Offices', description: 'State-of-the-art facilities.', href: '/about/our-office-facilities' },
    ],
  },
];

const aboutMegaMenuCta: MegaMenuCta = {
  title: 'Pioneering Heart Care',
  description: 'Dr. Chen and our team are committed to advancing cardiovascular medicine with a patient-first approach.',
  imageUrl: 'https://placehold.co/300x180.png',
  imageHint: 'modern medical team',
  buttonText: 'Meet Dr. Chen',
  buttonHref: '/#about',
};

const servicesMegaMenuGroups: MegaMenuGroup[] = [
  {
    title: 'Core Treatments',
    items: [
      { label: 'Advanced Diagnostics', description: 'Precise insights into your heart health.', href: '/services/advanced-cardiac-diagnostics' },
      { label: 'Minimally Invasive Surgery', description: 'Cutting-edge surgical solutions.', href: '/services/minimally-invasive-surgery' },
    ],
  },
  {
    title: 'Specialized Programs',
    items: [
      { label: 'Preventive Cardiology', description: 'Proactive strategies for a healthy heart.', href: '/services/preventive-cardiology' },
      { label: 'Post-Operative Care', description: 'Comprehensive support for recovery.', href: '/services/post-operative-care' },
    ],
  },
];

const servicesMegaMenuCta: MegaMenuCta = {
  title: 'Comprehensive Heart Solutions',
  description: 'From diagnosis to recovery, we offer a full spectrum of cardiology services tailored to your needs.',
  imageUrl: 'https://placehold.co/300x180.png',
  imageHint: 'heart technology abstract',
  buttonText: 'Explore All Services',
  buttonHref: '/#services',
};

const resourcesSubItems = [
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'FAQ', href: '/#faq' },
];

const navItems: NavItem[] = [
  {
    label: 'About',
    isMegaMenu: true,
    megaMenuGroups: aboutMegaMenuGroups,
    megaMenuCta: aboutMegaMenuCta,
  },
  {
    label: 'Services',
    isMegaMenu: true,
    megaMenuGroups: servicesMegaMenuGroups,
    megaMenuCta: servicesMegaMenuCta,
    href: '/#services' // Main services link can still point to section
  },
  {
    label: 'Resources',
    isSimpleDropdown: true,
    subItems: resourcesSubItems,
  },
  { label: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const renderScheduleButton = (isMobile = false) => {
    const buttonProps = isMobile
      ? { size: "default" as const, className: "w-full rounded-md py-3 text-base bg-primary text-primary-foreground hover:bg-primary/90" }
      : { size: "sm" as const, className: "rounded-md bg-primary text-primary-foreground hover:bg-primary/90" };

    return (
      <NavLink href="/#contact" onClick={() => isMobile && setIsSheetOpen(false)} className={cn(!isMobile && "ml-4")}>
        <Button {...buttonProps}>
          Schedule Visit
        </Button>
      </NavLink>
    );
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      "bg-slate-900 text-slate-200 shadow-lg py-3"
    )}>
      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between h-12">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/images/logo-red-blank.png" // Assuming this logo works on dark, otherwise use a white variant
            alt="Chen Cardiology Logo"
            width={32}
            height={32}
            className="h-8 w-auto"
            priority
          />
          <span className="font-headline text-xl font-semibold text-white group-hover:text-slate-300 transition-colors">
            Chen Cardiology
          </span>
        </Link>

        {/* Desktop Navigation & Button */}
        <div className="hidden md:flex items-center">
          <nav className="space-x-1">
            {navItems.map((item) => (
              <DropdownMenu key={item.label} onOpenChange={(isOpen) => setOpenDropdown(isOpen ? item.label : null)}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "px-3 py-2 rounded-md font-medium transition-colors duration-150 hover:text-white focus-visible:ring-0 focus-visible:ring-offset-0 text-sm",
                      item.href && "hover:bg-slate-700", // if it's also a link
                      !item.href && "hover:bg-slate-700", // if it's just a dropdown trigger
                      openDropdown === item.label && "bg-slate-700 text-white"
                    )}
                  >
                    {item.href && !item.isMegaMenu && !item.isSimpleDropdown ? (
                      <NavLink href={item.href} className="!p-0 !hover:bg-transparent !text-current">
                        {item.label}
                      </NavLink>
                    ) : (
                      item.label
                    )}
                    {(item.isMegaMenu || item.isSimpleDropdown) && <ChevronDown className="ml-1 h-4 w-4" />}
                  </Button>
                </DropdownMenuTrigger>
                
                {item.isMegaMenu && item.megaMenuGroups && item.megaMenuCta && (
                  <DropdownMenuContent
                    align="start"
                    className="bg-slate-800 shadow-2xl rounded-lg border-slate-700 mt-2 p-0 min-w-[720px] max-w-5xl text-slate-200"
                  >
                    <div className="flex">
                      <div className="grid grid-cols-2 gap-x-6 gap-y-4 p-6 flex-grow">
                        {item.megaMenuGroups.map((group) => (
                          <div key={group.title}>
                            <h3 className="text-xs uppercase font-semibold text-slate-400 mb-3 tracking-wider">{group.title}</h3>
                            <ul className="space-y-1">
                              {group.items.map((subItem) => (
                                <li key={subItem.label}>
                                  <Link href={subItem.href} className="block p-2 -ml-2 rounded-md hover:bg-slate-700 transition-colors group">
                                    <span className="font-medium text-sm text-white group-hover:text-primary-foreground">{subItem.label}</span>
                                    <p className="text-xs text-slate-400 group-hover:text-slate-300">{subItem.description}</p>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="bg-slate-700/50 p-6 rounded-r-lg w-[300px] flex-shrink-0">
                        <h4 className="font-semibold text-white mb-2 text-md">{item.megaMenuCta.title}</h4>
                        <p className="text-xs text-slate-300 mb-3">{item.megaMenuCta.description}</p>
                        <div className="aspect-video rounded-md overflow-hidden mb-4 relative">
                           <Image src={item.megaMenuCta.imageUrl} alt={item.megaMenuCta.title} fill className="object-cover" data-ai-hint={item.megaMenuCta.imageHint} />
                        </div>
                        <Button asChild size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-md">
                          <Link href={item.megaMenuCta.buttonHref}>{item.megaMenuCta.buttonText}</Link>
                        </Button>
                      </div>
                    </div>
                  </DropdownMenuContent>
                )}

                {item.isSimpleDropdown && item.subItems && (
                   <DropdownMenuContent align="start" className="bg-slate-800 shadow-lg rounded-lg border-slate-700 mt-2 w-56 text-slate-200">
                    {item.subItems.map((subItem) => (
                      <DropdownMenuItem key={subItem.label} asChild className="cursor-pointer focus:bg-slate-700 focus:text-white">
                        <Link href={subItem.href} className="block px-4 py-2 text-sm text-slate-200 hover:text-white w-full">
                          {subItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                )}
              </DropdownMenu>
            ))}
          </nav>
          {renderScheduleButton()}
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-200 hover:text-white hover:bg-slate-700">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-slate-900 p-6 flex flex-col text-slate-200 border-l border-slate-700">
              <div>
                <Link href="/" className="flex items-center gap-2 mb-6" onClick={() => setIsSheetOpen(false)}>
                  <Image
                    src="/images/logo-red-blank.png"
                    alt="Chen Cardiology Logo"
                    width={32}
                    height={32}
                    className="h-8 w-auto"
                  />
                   <span className="font-headline text-lg font-semibold text-white">
                    Chen Cardiology
                  </span>
                </Link>
                <nav className="flex flex-col space-y-1">
                  {navItems.map((item) => {
                    if (item.isMegaMenu || item.isSimpleDropdown) {
                      const subItems = item.isMegaMenu ? item.megaMenuGroups?.flatMap(g => g.items) : item.subItems;
                      return (
                        <div key={item.label} className="py-1">
                          <span
                            className={cn(
                              "block text-lg hover:text-white py-1 font-medium cursor-default",
                              item.href ? "text-slate-100" : "text-slate-300" // Main item that's also a link vs just a category
                            )}
                            onClick={() => {
                              if(item.href) { // If the main dropdown item is a link itself
                                const targetId = item.href.substring(1); // Assuming hash links
                                const targetElement = document.getElementById(targetId);
                                if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
                                setIsSheetOpen(false);
                              }
                              // Could add toggle for sub-items here if needed
                            }}
                          >
                            {item.label}
                            <ChevronDown className="inline-block ml-1 h-4 w-4 relative -top-0.5" />
                          </span>
                          <div className="pl-4 mt-1 space-y-1 border-l border-slate-700 ml-2">
                            {subItems?.map((subItem) => (
                              <NavLink
                                key={subItem.label}
                                href={subItem.href}
                                onClick={() => setIsSheetOpen(false)}
                                className="block text-base hover:text-primary py-1.5 !px-2 !font-normal text-slate-300"
                              >
                                {subItem.label}
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      )
                    }
                    return (
                      <NavLink
                        key={item.label}
                        href={item.href as string}
                        onClick={() => setIsSheetOpen(false)}
                        className="block text-lg hover:text-primary py-2 text-slate-100"
                      >
                        {item.label}
                      </NavLink>
                    )
                  })}
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
