
"use client";

import Script from 'next/script';
import { Button } from '@/components/ui/button';
import NavLink from '@/components/nav-link';
import { Activity, CalendarDays, Clock, Youtube, Linkedin, Facebook, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

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

export default function HeroSection() {
  const stats = [
    { value: '5000+', label: 'Successful Procedures', icon: <Activity className="w-6 h-6 text-accent" /> },
    { value: '15+', label: 'Years of Experience', icon: <CalendarDays className="w-6 h-6 text-accent" /> },
    { value: '24/7', label: 'Patient Care', icon: <Clock className="w-6 h-6 text-accent" /> },
  ];

  // Removed scheduleUrl state as the button will now always link to #contact
  const [themeBackgroundHsl, setThemeBackgroundHsl] = useState<string>('');
  const [themeSecondaryHsl, setThemeSecondaryHsl] = useState<string>('');


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const computedStyle = getComputedStyle(document.documentElement);
      setThemeBackgroundHsl(computedStyle.getPropertyValue('--background').trim());
      setThemeSecondaryHsl(computedStyle.getPropertyValue('--secondary').trim());
    }
  }, []);


  const fromColor = themeBackgroundHsl ? `hsl(${themeBackgroundHsl} / 1)` : 'rgba(255,255,255,1)'; 
  const toColor = themeBackgroundHsl ? `hsl(${themeBackgroundHsl} / 0.70)` : 'rgba(255,255,255,0.70)'; 
  const gradientBottomFromColor = themeSecondaryHsl ? `hsl(${themeSecondaryHsl})` : 'hsl(var(--secondary))';


  return (
    <section id="hero" className="relative bg-background pt-24 pb-20 md:pt-28 md:pb-24 overflow-hidden min-h-screen flex flex-col justify-center">
      <Script
        src="https://unpkg.com/@splinetool/viewer@1.9.99/build/spline-viewer.js"
        type="module"
        strategy="lazyOnload"
      />

      <div className="absolute inset-0 z-0 animate-splineFadeIn" style={{ animationDelay: '2s' }}>
        <spline-viewer
          url="https://prod.spline.design/JIVBFKZGiNrXPIaW/scene.splinecode"
          loading-anim-type="spinner-small-dark"
          style={{ width: '100%', height: '100%', display: 'block', outline: 'none', border: 'none' }}
        />
      </div>

       <div
        className="absolute inset-0 z-[5] bg-gradient-to-l pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to left, ${fromColor}, ${toColor})`,
        }}
      ></div>
      
      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-[6] bg-gradient-to-t pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to top, ${gradientBottomFromColor}, transparent)`,
        }}
      ></div>


      <div className="container mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        <div className="animate-fadeInUp max-w-3xl" style={{ animationDelay: '0.1s' }}>
          <div className="mb-6 inline-block bg-muted/70 backdrop-blur-sm text-foreground/90 px-3 py-1 rounded-full text-xs font-medium shadow-sm border border-border/30">
            Board-certified cardiac surgeon
          </div>
          <h1 className="font-headline text-5xl md:text-6xl xl:text-7xl font-bold mb-6">
            Dr. Sarah Chen: <span className="text-primary">Expert Cardiac Care</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            We are a multidisciplinary team of cardiac surgeons and cardiologists dedicated to delivering world-class heart care using cutting-edge techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-10">
            <NavLink href="/#contact">
              <Button size="lg" className="w-full sm:w-auto rounded-xl text-base px-8 py-6">Schedule Visit</Button>
            </NavLink>
            <NavLink href="#about">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto rounded-xl text-base px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Learn More
              </Button>
            </NavLink>
          </div>
        </div>

        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl w-full animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          {stats.map((stat, index) => (
            <div key={index} className={cn(
                "bg-card/80 backdrop-blur-sm px-2 py-4 rounded-xl shadow-lg text-center transition-transform hover:scale-105 duration-300",
                "border border-white/20" 
            )}>
              <div className="flex justify-center mb-2">{stat.icon}</div>
              <p className="text-2xl font-bold text-primary mb-0.5">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 animate-fadeInUp flex justify-center" style={{ animationDelay: '0.5s' }}>
          <div className="flex space-x-6">
            {socialLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Pulsating Arrow Down */}
        <div className="mt-8 md:mt-10 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="inline-block animate-pulsate-subtle"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ChevronDown className="w-10 h-10 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}
