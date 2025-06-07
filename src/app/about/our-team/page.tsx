
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, UserCheck, BriefcaseMedical } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';

export default function OurTeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-secondary text-center">
          <div className="container mx-auto px-6 lg:px-8">
            <Users className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="font-headline text-4xl md:text-5xl xl:text-6xl font-bold text-primary mb-6">
              Our Dedicated Team
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A collaborative multidisciplinary group of surgeons, cardiologists, care providers, technicians, and support staff dedicated to your well-being.
            </p>
          </div>
        </section>

        {/* Beyond Our Doctors Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-6">
                  The Power of Collaboration
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At Chen Cardiology, we believe that exceptional patient care is a team effort. While our renowned cardiologists lead the way, they are supported by a highly skilled and dedicated team of nursing professionals, experienced cardiac technicians, and compassionate administrative staff. 
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Every member of our team plays a crucial role in ensuring your experience is seamless, comfortable, and effective. From your first call to your post-procedure follow-up, you'll encounter professionals who are not only experts in their respective fields but also deeply committed to your health and peace of mind.
                </p>
                 <Link href="/#about" passHref legacyBehavior>
                  <Button size="lg" className="rounded-xl">
                    Meet Our Doctors <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Diverse medical team collaborating"
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
                  data-ai-hint="diverse medical team"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <BriefcaseMedical className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              We are proud of our entire team, including specialized nurses, certified technicians, and dedicated administrative professionals who ensure our practice runs smoothly and efficiently. Detailed profiles and more information about our diverse team members will be featured here soon.
            </p>
            <div className="relative h-80 md:h-[450px] rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
               <Image
                  src="https://placehold.co/800x450.png"
                  alt="Placeholder for group team photo"
                  fill
                  className="object-cover"
                  data-ai-hint="medical team group"
                />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
              Your Health, Our Collective Priority
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Experience the difference that a truly collaborative and dedicated cardiac team can make.
            </p>
            <Link href="/#contact" passHref legacyBehavior>
              <Button size="lg" variant="secondary" className="rounded-xl text-base px-8 py-3">
                Contact Our Team Today
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
