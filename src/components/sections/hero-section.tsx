
import { Button } from '@/components/ui/button';
import NavLink from '@/components/nav-link';
import { Activity, CalendarDays, Clock, Youtube, Linkedin, Facebook } from 'lucide-react';
import Image from 'next/image';

// Define XLogo component (same as in footer)
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

// Define socialLinks array (same as in footer)
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

  const scheduleUrl = process.env.NEXT_PUBLIC_SCHEDULE_URL;

  return (
    <section id="hero" className="relative bg-background pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        {/* Optional subtle background pattern or image */}
        {/* <Image src="https://placehold.co/1920x1080.png" alt="Subtle background" layout="fill" objectFit="cover" /> */}
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Dr. Sarah Chen: <span className="text-primary">Expert Cardiac Care</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            Leading cardiologist dedicated to advancing your heart health through compassionate, state-of-the-art care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            {scheduleUrl ? (
              <a href={scheduleUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto rounded-xl text-base px-8 py-6">Schedule Consultation</Button>
              </a>
            ) : (
              <NavLink href="#contact">
                <Button size="lg" className="w-full sm:w-auto rounded-xl text-base px-8 py-6">Schedule Consultation</Button>
              </NavLink>
            )}
            <NavLink href="#about">
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-xl text-base px-8 py-6 border-primary text-primary hover:bg-primary/10">
                Learn More
              </Button>
            </NavLink>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
          {stats.map((stat, index) => (
            <div key={index} className="bg-card px-2 py-4 rounded-xl shadow-lg text-center transition-transform hover:scale-105 duration-300">
              <div className="flex justify-center mb-2">{stat.icon}</div>
              <p className="text-2xl font-bold text-primary mb-0.5">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 animate-fadeInUp flex justify-center md:justify-start" style={{ animationDelay: '0.9s' }}>
          <div className="flex space-x-4">
            {socialLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
