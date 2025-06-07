
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building, Microscope, Users, Hospital } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const facilityHighlights = [
  {
    title: 'Comfortable Waiting Areas',
    description: 'Spacious and serene waiting rooms designed for your comfort and peace of mind.',
    icon: <Users className="w-10 h-10 text-accent" />,
    imageSrc: 'https://placehold.co/600x400.png',
    dataAiHint: 'clinic waiting room',
  },
  {
    title: 'Advanced Examination Rooms',
    description: 'Private and well-equipped consultation rooms for thorough assessments.',
    icon: <Hospital className="w-10 h-10 text-accent" />,
    imageSrc: 'https://placehold.co/600x400.png',
    dataAiHint: 'medical exam room',
  },
  {
    title: 'State-of-the-Art Diagnostic Lab',
    description: 'In-house diagnostics for quick and accurate test results, facilitating faster treatment plans.',
    icon: <Microscope className="w-10 h-10 text-accent" />,
    imageSrc: 'https://placehold.co/600x400.png',
    dataAiHint: 'medical diagnostic lab',
  },
];

export default function OurPracticePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-secondary text-center">
          <div className="container mx-auto px-6 lg:px-8">
            <Building className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="font-headline text-4xl md:text-5xl xl:text-6xl font-bold text-primary mb-6">
              Our Practice: A Legacy of Cardiac Excellence
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience cardiac care in a facility designed for your well-being, equipped with advanced technology and staffed by a compassionate team.
            </p>
          </div>
        </section>

        {/* A Legacy of Excellence Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-6">
                  Founded on Principles of Care and Innovation
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Chen Cardiology was established with a clear vision: to provide comprehensive, cutting-edge cardiovascular care in a patient-centric environment. For over [Number] years, we have been dedicated to the heart health of our community, consistently adopting the latest medical advancements and treatment protocols.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our practice is more than just a clinic; it's a place where medical expertise meets genuine compassion. We believe in building lasting relationships with our patients, partnering with them on their journey to optimal heart health.
                </p>
              </div>
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Modern clinic exterior or welcoming interior"
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
                  data-ai-hint="modern clinic building"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Technology, Compassionate Care Section */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl md:order-last">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Advanced medical technology in use"
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
                  data-ai-hint="medical technology heart"
                />
              </div>
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-6">
                  Technology Driven, Patient Focused
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We invest in state-of-the-art diagnostic and therapeutic technology to ensure our patients receive the most accurate assessments and effective treatments available. From advanced imaging systems to minimally invasive surgical tools, our commitment to technological excellence is unwavering.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  However, technology is only one part of the equation. Our team's expertise in utilizing these tools, combined with a deep sense of empathy and dedication to personalized care, is what truly sets Chen Cardiology apart. We treat the whole patient, not just the condition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Facility Highlights Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-4">
                Designed for Your Comfort &amp; Care
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our facility is thoughtfully designed to provide a welcoming and efficient environment for your cardiac care needs.
              </p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
              {facilityHighlights.map((highlight) => (
                <Card key={highlight.title} className="bg-card shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden">
                  <div className="relative h-56 w-full">
                    <Image
                      src={highlight.imageSrc}
                      alt={highlight.title}
                      fill
                      className="object-cover"
                      data-ai-hint={highlight.dataAiHint}
                    />
                  </div>
                  <CardHeader className="pt-6">
                    <div className="flex items-center mb-2">
                      {highlight.icon}
                      <CardTitle className="font-headline text-xl text-primary ml-3">{highlight.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Exceptional Cardiac Care?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contact us today to schedule a consultation or learn more about our practice.
            </p>
            <Link href="/#contact" passHref legacyBehavior>
              <Button size="lg" variant="secondary" className="rounded-xl text-base px-8 py-3">
                Schedule Your Visit <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
