
import Image from 'next/image';
import Link from 'next/link';
import { Building, MapPin, Microscope, Users, Computer, ArrowRight, Video, Wifi, Coffee } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const facilityFeatures = [
  {
    title: 'Welcoming Reception & Lounge',
    description: 'A calm and comfortable space designed to make you feel at ease from the moment you arrive. Enjoy complimentary refreshments and Wi-Fi.',
    icon: <Coffee className="w-10 h-10 text-primary" />,
    imageSrc: 'https://placehold.co/600x400.png',
    dataAiHint: 'modern clinic reception',
  },
  {
    title: 'Advanced Consultation Rooms',
    description: 'Private and spacious rooms equipped with the latest diagnostic tools for comprehensive discussions and examinations.',
    icon: <Users className="w-10 h-10 text-primary" />,
    imageSrc: 'https://placehold.co/600x400.png',
    dataAiHint: 'doctor consultation room',
  },
  {
    title: 'State-of-the-Art Diagnostic Suite',
    description: 'Featuring in-house ECG, Echocardiography, Stress Testing, and Holter monitoring for timely and accurate assessments.',
    icon: <Microscope className="w-10 h-10 text-primary" />,
    imageSrc: 'https://placehold.co/600x400.png',
    dataAiHint: 'medical diagnostic equipment',
  },
  {
    title: 'Comfortable Recovery Area',
    description: 'A serene space for post-procedure observation and relaxation, ensuring your comfort and safety.',
    icon: <Building className="w-10 h-10 text-primary" />, // Placeholder, consider a bed or lounge chair icon
    imageSrc: 'https://placehold.co/600x400.png',
    dataAiHint: 'hospital recovery room',
  },
];

const technologyHighlights = [
  {
    title: 'Latest Cardiac Imaging Systems',
    description: 'High-resolution imaging technology for detailed views of heart structures and function.',
    icon: <Video className="w-8 h-8 text-accent" />,
  },
  {
    title: 'Integrated Electronic Health Records (EHR)',
    description: 'Secure and efficient access to your medical history for seamless, coordinated care.',
    icon: <Computer className="w-8 h-8 text-accent" />,
  },
  {
    title: 'Telehealth Capabilities',
    description: 'Secure video consultations for remote follow-ups and discussions, offering convenience and accessibility.',
    icon: <Wifi className="w-8 h-8 text-accent" />,
  },
];

export default function OurOfficeFacilitiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-secondary text-center">
          <div className="container mx-auto px-6 lg:px-8">
            <Building className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="font-headline text-4xl md:text-5xl xl:text-6xl font-bold text-primary mb-6">
              Our Office &amp; Facilities
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Step into a space designed for healing, comfort, and cutting-edge cardiac care.
            </p>
          </div>
        </section>

        {/* Ambiance and Design Philosophy Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://placehold.co/600x450.png"
                  alt="Elegant clinic interior"
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
                  data-ai-hint="modern clinic interior"
                />
              </div>
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-6">
                  A Healing Environment
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At Chen Cardiology, we believe that the environment plays a crucial role in the healing process. Our clinic has been thoughtfully designed to create a serene, welcoming, and professional atmosphere. From natural light to comfortable furnishings, every detail is curated to reduce anxiety and promote a sense of well-being.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our facilities are equipped with the latest medical technologies, seamlessly integrated into a patient-friendly layout that prioritizes your comfort, privacy, and efficient care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Facility Features Section */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-4">
                Explore Our Spaces
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the key areas of our clinic, designed with your care journey in mind.
              </p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {facilityFeatures.map((feature) => (
                <Card key={feature.title} className="bg-card shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src={feature.imageSrc}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      data-ai-hint={feature.dataAiHint}
                    />
                  </div>
                  <CardHeader className="pt-6">
                    <div className="flex items-center mb-2">
                      {feature.icon}
                      <CardTitle className="font-headline text-xl text-primary ml-3">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-last relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://placehold.co/600x450.png"
                  alt="Advanced medical technology interface"
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
                  data-ai-hint="medical technology interface"
                />
              </div>
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-6">
                  Empowered by Technology
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We are committed to utilizing the most advanced medical technology to provide superior diagnostic accuracy and treatment efficacy. Our investment in cutting-edge equipment reflects our dedication to offering you the best possible cardiac care.
                </p>
                <div className="space-y-4">
                  {technologyHighlights.map((tech) => (
                    <div key={tech.title} className="flex items-start">
                      <div className="flex-shrink-0 p-2 bg-primary/10 rounded-full mr-4">
                        {tech.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">{tech.title}</h4>
                        <p className="text-muted-foreground text-sm">{tech.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Location Map Hint & CTA */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4" />
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
              Visit Us for a Personal Tour
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              We invite you to experience our welcoming environment firsthand. Contact us to schedule a visit or your next appointment. You can find our location map on the Contact page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" passHref legacyBehavior>
                <Button size="lg" variant="secondary" className="rounded-xl text-base px-8 py-3">
                  Schedule Appointment <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
               <Link href="/#contact" passHref legacyBehavior>
                <Button size="lg" variant="outline" className="rounded-xl text-base px-8 py-3 border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary">
                  View Map &amp; Directions
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
