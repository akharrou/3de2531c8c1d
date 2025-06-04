
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ServicesSection from '@/components/sections/services-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import FaqSection from '@/components/sections/faq-section';
import ContactSection from '@/components/sections/contact-section';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        {/* HeroSection already has internal animations, so we won't double-apply here, 
            but ensure its content starts appearing early. 
            If specific overall animation is needed for Hero as a block, 
            it can be added with a very small delay or integrated into its own component.
        */}
        <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <HeroSection />
        </div>
        <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <AboutSection />
        </div>
        <div className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <ServicesSection />
        </div>
        <div className="animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
          <TestimonialsSection />
        </div>
        <div className="animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <FaqSection />
        </div>
        <div className="animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
