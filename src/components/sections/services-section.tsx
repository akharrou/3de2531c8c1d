
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
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
              <CardHeader className="items-start text-left"> {/* Changed alignment */}
                {service.icon}
                <CardTitle className="font-headline text-2xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-left"> {/* Changed alignment */}
                <CardDescription className="leading-relaxed text-muted-foreground">{service.description}</CardDescription>
              </CardContent>
              <CardFooter className="justify-start pt-4"> {/* Changed alignment */}
                <Link
                  href={service.href}
                  className="group inline-flex items-center text-primary font-medium text-sm hover:text-primary/80 transition-colors duration-200"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 ease-in-out rotate-45 group-hover:rotate-90" /> {/* Added rotate-45 */}
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
