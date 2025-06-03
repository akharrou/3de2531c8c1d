import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import NavLink from '@/components/nav-link';
import { HeartPulse, Stethoscope, FlaskConical, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: <HeartPulse className="w-10 h-10 text-accent mb-4" />,
    title: 'Advanced Cardiac Diagnostics',
    description: 'Utilizing state-of-the-art technology for precise diagnosis of heart conditions, including ECG, echocardiograms, and stress tests.',
  },
  {
    icon: <Stethoscope className="w-10 h-10 text-accent mb-4" />,
    title: 'Minimally Invasive Surgery',
    description: 'Specializing in advanced, minimally invasive surgical techniques for faster recovery and optimal outcomes.',
  },
  {
    icon: <FlaskConical className="w-10 h-10 text-accent mb-4" />, // Representing research/advanced treatments
    title: 'Preventive Cardiology',
    description: 'Comprehensive risk assessment and personalized strategies to prevent heart disease and promote long-term cardiovascular wellness.',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-accent mb-4" />,
    title: 'Post-Operative Care',
    description: 'Dedicated follow-up and rehabilitation programs to ensure a smooth recovery and a healthy return to daily life.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">Our Cardiology Services</h2>
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
              <div className="p-6 pt-0 text-center">
                <NavLink href="#contact">
                  <Button variant="link" className="text-accent hover:text-primary text-base">
                    Book Appointment <span aria-hidden="true" className="ml-1">&rarr;</span>
                  </Button>
                </NavLink>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
