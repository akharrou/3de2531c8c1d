
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HeartPulse, Stethoscope, FlaskConical, ShieldCheck, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <HeartPulse className="w-10 h-10 text-accent mb-4" />,
    title: 'Advanced Cardiac Diagnostics',
    description: 'Utilizing state-of-the-art technology for precise diagnosis of heart conditions, including ECG, echocardiograms, and stress tests.',
    href: '/services/advanced-cardiac-diagnostics',
  },
  {
    icon: <Stethoscope className="w-10 h-10 text-accent mb-4" />,
    title: 'Minimally Invasive Surgery',
    description: 'Specializing in advanced, minimally invasive surgical techniques for faster recovery and optimal outcomes.',
    href: '/services/minimally-invasive-surgery',
  },
  {
    icon: <FlaskConical className="w-10 h-10 text-accent mb-4" />,
    title: 'Preventive Cardiology',
    description: 'Comprehensive risk assessment and personalized strategies to prevent heart disease and promote long-term cardiovascular wellness.',
    href: '/services/preventive-cardiology',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-accent mb-4" />,
    title: 'Post-Operative Care',
    description: 'Dedicated follow-up and rehabilitation programs to ensure a smooth recovery and a healthy return to daily life.',
    href: '/services/post-operative-care',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 bg-background overflow-hidden">
       {/* Removed Top Fade from About */}

      <div className="container mx-auto px-6 lg:px-8 relative z-[1]">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-primary">Our Cardiology Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive care for your heart, from prevention to advanced treatment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeInUp" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <CardHeader className="items-center text-center">
                {service.icon}
                <CardTitle className="font-headline text-2xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                <CardDescription className="leading-relaxed text-muted-foreground">{service.description}</CardDescription>
              </CardContent>
              <CardFooter className="justify-center pt-4">
                <Link href={service.href} legacyBehavior passHref>
                  <Button variant="outline" className="rounded-xl border-primary text-primary hover:bg-primary hover:text-primary-foreground group">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      {/* Removed Bottom Fade to Testimonials */}
    </section>
  );
}
