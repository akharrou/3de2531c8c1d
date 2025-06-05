
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Activity, ShieldQuestion, HeartPulse } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  { title: 'Electrocardiogram (ECG/EKG)', description: 'Recording the electrical activity of your heart to detect arrhythmias, coronary artery disease, and other heart conditions.', icon: <Activity className="w-6 h-6 text-accent" /> },
  { title: 'Echocardiogram', description: 'Using ultrasound waves to create images of your heart, assessing its structure and function, including valves and chambers.', icon: <HeartPulse className="w-6 h-6 text-accent" /> },
  { title: 'Stress Testing', description: 'Monitoring your heart while you exercise on a treadmill or stationary bike to evaluate its response to physical stress.', icon: <Activity className="w-6 h-6 text-accent" /> },
  { title: 'Holter & Event Monitoring', description: 'Portable devices that record your heart’s activity over a period, capturing infrequent irregularities.', icon: <HeartPulse className="w-6 h-6 text-accent" /> },
  { title: 'Cardiac CT and MRI', description: 'Advanced imaging techniques providing detailed pictures of heart anatomy and blood vessels.', icon: <ShieldQuestion className="w-6 h-6 text-accent" /> },
];

export default function AdvancedCardiacDiagnosticsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-secondary text-center">
          <div className="container mx-auto px-6 lg:px-8">
            <HeartPulse className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="font-headline text-4xl md:text-5xl xl:text-6xl font-bold text-primary mb-6">
              Advanced Cardiac Diagnostics
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Precision in every heartbeat. Our state-of-the-art diagnostic services provide deep insights into your cardiovascular health, guiding effective treatment plans.
            </p>
          </div>
        </section>

        {/* About the Service Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-6">
                  Understanding Your Heart with Clarity
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At Chen Cardiology, we believe that accurate diagnosis is the cornerstone of effective cardiac care. Our Advanced Cardiac Diagnostics center is equipped with the latest technology to provide a comprehensive evaluation of your heart's condition. Dr. Chen and her team are dedicated to uncovering the precise nature of any cardiovascular issues, ensuring you receive the most appropriate and personalized treatment.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We offer a wide range of non-invasive and minimally invasive diagnostic procedures designed to assess heart function, detect abnormalities, and evaluate risk factors. Our patient-centric approach means we take the time to explain each test and its results, empowering you with knowledge about your heart health.
                </p>
                <Link href="/#contact" passHref legacyBehavior>
                  <Button size="lg" className="rounded-xl">
                    Schedule a Consultation <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Advanced Cardiac Diagnostic Equipment"
                  layout="fill"
                  objectFit="cover"
                  className="transform hover:scale-105 transition-transform duration-500 ease-in-out"
                  data-ai-hint="medical equipment heart"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features/Tests Offered Section */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-4">
                Our Comprehensive Diagnostic Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We utilize a variety of cutting-edge tests to gain a complete picture of your heart health.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <Card key={feature.title} className="bg-card shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                  <CardHeader>
                    <div className="flex items-center mb-3">
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

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-4">
                Why Chen Cardiology for Your Diagnostics?
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-headline text-xl font-semibold text-primary mb-2">Expert Interpretation</h3>
                <p className="text-muted-foreground text-sm">Dr. Chen's extensive experience ensures accurate analysis of test results for optimal treatment planning.</p>
              </div>
              <div className="p-6">
                <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-headline text-xl font-semibold text-primary mb-2">Patient Comfort</h3>
                <p className="text-muted-foreground text-sm">We prioritize your comfort and ensure a stress-free experience during all diagnostic procedures.</p>
              </div>
              <div className="p-6">
                <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-headline text-xl font-semibold text-primary mb-2">Advanced Technology</h3>
                <p className="text-muted-foreground text-sm">Access to the latest diagnostic equipment for the most precise and reliable assessments.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
              Take the First Step Towards a Healthier Heart
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              If you have concerns about your heart health or require diagnostic testing, contact us today.
            </p>
            <Link href="/#contact" passHref legacyBehavior>
              <Button size="lg" variant="secondary" className="rounded-xl text-base px-8 py-3">
                Request An Appointment
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
