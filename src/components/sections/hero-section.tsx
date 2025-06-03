
import { Button } from '@/components/ui/button';
import NavLink from '@/components/nav-link';
import { Activity, CalendarDays, Clock } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  const stats = [
    { value: '5000+', label: 'Successful Procedures', icon: <Activity className="w-6 h-6 text-accent" /> },
    { value: '15+', label: 'Years of Experience', icon: <CalendarDays className="w-6 h-6 text-accent" /> },
    { value: '24/7', label: 'Patient Care', icon: <Clock className="w-6 h-6 text-accent" /> },
  ];

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
            <NavLink href="#contact">
              <Button size="lg" className="w-full sm:w-auto rounded-xl text-base px-8 py-6">Schedule Consultation</Button>
            </NavLink>
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
      </div>
    </section>
  );
}
