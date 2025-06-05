
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, BarChart3, Zap, ShieldAlert, HeartHandshake, UserCheck } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const pillars = [
  { title: 'Comprehensive Risk Assessment', description: 'Detailed evaluation of your genetic predispositions, lifestyle factors, and existing health conditions to quantify your cardiovascular risk.', icon: <BarChart3 className="w-6 h-6 text-accent" /> },
  { title: 'Personalized Lifestyle Plans', description: 'Customized guidance on nutrition, exercise, stress management, and smoking cessation tailored to your specific needs and goals.', icon: <UserCheck className="w-6 h-6 text-accent" /> },
  { title: 'Advanced Screening & Early Detection', description: 'Utilizing cutting-edge diagnostic tools to identify early signs of heart disease before symptoms arise.', icon: <Zap className="w-6 h-6 text-accent" /> },
  { title: 'Management of Risk Factors', description: 'Proactive management of conditions like hypertension, high cholesterol, and diabetes to minimize their impact on your heart health.', icon: <ShieldAlert className="w-6 h-6 text-accent" /> },
];

export default function PreventiveCardiologyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-secondary text-center">
          <div className="container mx-auto px-6 lg:px-8">
            <HeartHandshake className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="font-headline text-4xl md:text-5xl xl:text-6xl font-bold text-primary mb-6">
              Preventive Cardiology
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Proactive care for a healthier tomorrow. Our preventive cardiology program empowers you to take control of your heart health and reduce the risk of future cardiac events.
            </p>
          </div>
        </section>

        {/* About the Service Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-6">
                  Investing in Your Long-Term Heart Health
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Preventive cardiology at Chen Cardiology focuses on identifying and mitigating risk factors for heart disease before they lead to serious health problems. Dr. Sarah Chen and her team are passionate about empowering patients with the knowledge and tools to lead heart-healthy lives.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our comprehensive approach combines thorough risk assessment, personalized lifestyle counseling, and advanced screening techniques. We work collaboratively with you to develop a proactive plan that fits your life, aiming to prevent the onset or progression of cardiovascular conditions.
                </p>
                <Link href="/#contact" passHref legacyBehavior>
                  <Button size="lg" className="rounded-xl">
                    Start Your Prevention Journey <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Healthy lifestyle choices"
                  layout="fill"
                  objectFit="cover"
                  className="transform hover:scale-105 transition-transform duration-500 ease-in-out"
                  data-ai-hint="healthy food exercise"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pillars of Prevention Section */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-4">
                Our Approach to Cardiovascular Prevention
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We build our preventive strategies on four key pillars to ensure comprehensive care.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillars.map((pillar) => (
                <Card key={pillar.title} className="bg-card shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                  <CardHeader>
                     <div className="flex items-center mb-3">
                      {pillar.icon}
                      <CardTitle className="font-headline text-xl text-primary ml-3">{pillar.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Who Can Benefit Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-4">
                Who Can Benefit from Preventive Cardiology?
              </h2>
               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Preventive care is valuable for a wide range of individuals, including those with:
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 max-w-4xl mx-auto">
              {[
                "Family history of heart disease",
                "High blood pressure (Hypertension)",
                "High cholesterol levels (Hyperlipidemia)",
                "Diabetes or pre-diabetes",
                "History of smoking",
                "Obesity or overweight concerns",
                "Sedentary lifestyle",
                "Previous heart attack or stroke",
                "Desire to proactively manage heart health"
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
              Protect Your Heart for a Lifetime
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              It's never too early or too late to focus on heart disease prevention. Partner with us to safeguard your cardiovascular future.
            </p>
            <Link href="/#contact" passHref legacyBehavior>
              <Button size="lg" variant="secondary" className="rounded-xl text-base px-8 py-3">
                Book a Preventive Screening
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
