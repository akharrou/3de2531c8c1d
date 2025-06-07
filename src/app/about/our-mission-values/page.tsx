
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Target, Users, Award, ShieldCheck, Lightbulb, HeartHandshake } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const coreValues = [
  {
    title: 'Patient-Centered Care',
    description: 'Placing your needs, preferences, and well-being at the forefront of every decision and action.',
    icon: <Users className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Clinical Excellence',
    description: 'Committing to the highest standards of medical expertise, utilizing evidence-based practices and continuous learning.',
    icon: <Award className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Integrity & Trust',
    description: 'Upholding transparency, honesty, and ethical conduct in all our interactions to build lasting trust.',
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Innovation & Advancement',
    description: 'Embracing and pioneering new technologies and treatments to offer the most advanced cardiac care.',
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Compassion & Empathy',
    description: 'Treating every patient with kindness, understanding, and respect, acknowledging their unique journey.',
    icon: <HeartHandshake className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Collaborative Approach',
    description: 'Working as a cohesive team, and in partnership with patients and referring physicians, for comprehensive care.',
    icon: <Users className="w-8 h-8 text-primary" />, // Re-using Users for collaboration
  },
];

export default function OurMissionValuesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-secondary">
           <div className="absolute inset-0 opacity-10">
            <Image 
              src="https://placehold.co/1920x1080.png" // A subtle background pattern or abstract image
              alt="Abstract background"
              fill
              className="object-cover"
              data-ai-hint="abstract texture light"
            />
          </div>
          <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
            <Target className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="font-headline text-4xl md:text-5xl xl:text-6xl font-bold text-primary mb-6">
              Our Mission &amp; Guiding Values
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that drive our unwavering commitment to your heart health and overall well-being.
            </p>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-8">
                Our Mission
              </h2>
              <blockquote className="relative border-l-4 border-primary pl-6 md:pl-8 py-4">
                <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed italic">
                  "To deliver exceptional, comprehensive, and compassionate cardiovascular care, leveraging cutting-edge technology and a patient-first approach to improve lives and foster a heart-healthy community."
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Our Core Values Section */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These values are the bedrock of our practice, guiding every interaction and decision.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value) => (
                <Card key={value.title} className="bg-card shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col text-center items-center p-6">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    {value.icon}
                  </div>
                  <CardHeader className="p-0 mb-2">
                    <CardTitle className="font-headline text-xl text-primary">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 flex-grow">
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
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
              Partner With a Team That Cares
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Learn more about our services or schedule a consultation to experience our value-driven approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#services" passHref legacyBehavior>
                <Button size="lg" variant="secondary" className="rounded-xl text-base px-8 py-3">
                    Explore Our Services
                </Button>
                </Link>
                <Link href="/#contact" passHref legacyBehavior>
                <Button size="lg" variant="outline" className="rounded-xl text-base px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Schedule Consultation <ArrowRight className="w-5 h-5 ml-2" />
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
