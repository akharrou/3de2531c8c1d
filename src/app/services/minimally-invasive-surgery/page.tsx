
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ShieldPlus, Stethoscope, TrendingUp, Smile } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const benefits = [
  { title: 'Faster Recovery Times', description: 'Smaller incisions lead to quicker healing and a faster return to your daily activities.', icon: <TrendingUp className="w-6 h-6 text-accent" /> },
  { title: 'Reduced Pain & Scarring', description: 'Minimally invasive techniques mean less trauma to the body, resulting in less post-operative pain and smaller scars.', icon: <Smile className="w-6 h-6 text-accent" /> },
  { title: 'Shorter Hospital Stays', description: 'Many patients experience shorter hospital stays compared to traditional open-heart surgery.', icon: <TrendingUp className="w-6 h-6 text-accent" /> },
  { title: 'Lower Risk of Complications', description: 'Reduced risk of infection and other complications associated with large incisions.', icon: <ShieldPlus className="w-6 h-6 text-accent" /> },
];

export default function MinimallyInvasiveSurgeryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-secondary text-center">
          <div className="container mx-auto px-6 lg:px-8">
            <Stethoscope className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="font-headline text-4xl md:text-5xl xl:text-6xl font-bold text-primary mb-6">
              Minimally Invasive Cardiac Surgery
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced surgical solutions with a focus on faster recovery, less pain, and excellent outcomes. Experience the future of cardiac surgery.
            </p>
          </div>
        </section>

        {/* About the Service Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl order-last md:order-first">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Minimally Invasive Surgery procedure"
                  layout="fill"
                  objectFit="cover"
                  className="transform hover:scale-105 transition-transform duration-500 ease-in-out"
                  data-ai-hint="surgery modern operating"
                />
              </div>
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-6">
                  Sophisticated Care, Smaller Incisions
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Dr. Sarah Chen specializes in minimally invasive cardiac surgery, a state-of-the-art approach that uses small incisions and specialized instruments to perform complex heart procedures. This technique offers significant advantages over traditional open-heart surgery, including reduced trauma to the body and enhanced recovery.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our team is committed to providing the highest standard of surgical care, leveraging advanced technology and innovative methods. We carefully evaluate each patient to determine if minimally invasive surgery is the most appropriate and beneficial option for their specific condition.
                </p>
                <Link href="/#contact" passHref legacyBehavior>
                  <Button size="lg" className="rounded-xl">
                    Discuss Your Options <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-4">
                Advantages of Minimally Invasive Techniques
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the benefits that make minimally invasive surgery a preferred choice for many patients.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="bg-card shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col text-center">
                  <CardHeader className="items-center">
                    {benefit.icon}
                    <CardTitle className="font-headline text-xl text-primary mt-3">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Conditions Treated Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-4">
                Conditions We Treat
              </h2>
               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Minimally invasive approaches can be used for a variety of cardiac conditions, including:
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 max-w-4xl mx-auto">
              {[
                "Coronary Artery Bypass Grafting (CABG)",
                "Valve Repair and Replacement (e.g., Mitral, Aortic)",
                "Atrial Septal Defect (ASD) Repair",
                "Arrhythmia Surgery (e.g., Maze procedure for Atrial Fibrillation)",
                "Lead Placement for Pacemakers and Defibrillators",
                "Tumor Removal"
              ].map(condition => (
                <div key={condition} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{condition}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
              Considering Minimally Invasive Surgery?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Learn if this advanced surgical option is right for you. Contact Dr. Chen's team for a personalized consultation.
            </p>
            <Link href="/#contact" passHref legacyBehavior>
              <Button size="lg" variant="secondary" className="rounded-xl text-base px-8 py-3">
                Schedule a Surgical Consult
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
