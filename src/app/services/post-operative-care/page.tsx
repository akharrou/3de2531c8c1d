
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Users, ClipboardCheck, Repeat, ShieldCheck } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const careComponents = [
  { title: 'Personalized Recovery Plans', description: 'Tailored rehabilitation programs designed to match your specific procedure and individual recovery pace.', icon: <ClipboardCheck className="w-6 h-6 text-accent" /> },
  { title: 'Ongoing Monitoring & Support', description: 'Regular check-ups and advanced monitoring to track your progress and address any concerns promptly.', icon: <Repeat className="w-6 h-6 text-accent" /> },
  { title: 'Medication Management', description: 'Expert guidance on post-operative medications to optimize healing and prevent complications.', icon: <ShieldCheck className="w-6 h-6 text-accent" /> },
  { title: 'Lifestyle Adjustment Counseling', description: 'Support for making sustainable lifestyle changes to promote long-term heart health and well-being.', icon: <Users className="w-6 h-6 text-accent" /> },
];

export default function PostOperativeCarePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-secondary text-center">
          <div className="container mx-auto px-6 lg:px-8">
            <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="font-headline text-4xl md:text-5xl xl:text-6xl font-bold text-primary mb-6">
              Post-Operative Cardiac Care
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Dedicated support for your journey to full recovery. Our comprehensive post-operative care ensures a smooth transition back to a healthy, active life.
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
                  alt="Doctor consulting with patient post-operation"
                  layout="fill"
                  objectFit="cover"
                  className="transform hover:scale-105 transition-transform duration-500 ease-in-out"
                  data-ai-hint="doctor patient consultation"
                />
              </div>
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-6">
                  Your Partner in Recovery and Beyond
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Successful cardiac surgery is just the beginning of your journey to improved heart health. At Chen Cardiology, our post-operative care program is designed to provide comprehensive support, monitoring, and rehabilitation to ensure you achieve the best possible long-term outcomes.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Dr. Sarah Chen and her dedicated team work closely with you after your procedure, offering personalized care plans that address your specific needs. From managing medications to guiding your return to physical activity, we are committed to helping you regain strength and confidence.
                </p>
                <Link href="/#contact" passHref legacyBehavior>
                  <Button size="lg" className="rounded-xl">
                    Learn About Our Recovery Programs <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Components of Care Section */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-4">
                Comprehensive Support After Your Procedure
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our post-operative care encompasses a range of services to ensure your optimal recovery.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {careComponents.map((component) => (
                <Card key={component.title} className="bg-card shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                  <CardHeader>
                     <div className="flex items-center mb-3">
                      {component.icon}
                      <CardTitle className="font-headline text-xl text-primary ml-3">{component.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm leading-relaxed">{component.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Importance of Follow-up Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-4">
                The Importance of Diligent Follow-Up
              </h2>
               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Consistent post-operative care is crucial for:
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 max-w-4xl mx-auto">
              {[
                "Monitoring healing progress and incision sites",
                "Early detection and management of potential complications",
                "Adjusting medications as needed",
                "Gradual and safe resumption of physical activities",
                "Addressing any patient concerns or questions",
                "Ensuring long-term success of the surgical intervention"
              ].map(point => (
                <div key={point} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
              Committed to Your Full Recovery
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Your well-being is our priority. If you are preparing for cardiac surgery or have recently undergone a procedure, let us guide your recovery.
            </p>
            <Link href="/#contact" passHref legacyBehavior>
              <Button size="lg" variant="secondary" className="rounded-xl text-base px-8 py-3">
                Inquire About Post-Operative Care
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
