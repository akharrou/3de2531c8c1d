
import ContactForm from '@/components/contact-form';
import Script from 'next/script';

export default function ContactSection() {
  return (
    <section id="contact" className="pt-12 pb-24 bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-primary">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;re here to help. Reach out to schedule an appointment or ask any questions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Send us a message Form */}
          <div className="bg-card p-8 md:p-10 rounded-2xl shadow-xl animate-fadeInUp flex flex-col h-[700px]" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-headline text-3xl font-semibold text-primary mb-2">Send Us a Message</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Our team will review your inquiry and get back to you shortly.
            </p>
            <ContactForm />
          </div>

          {/* Schedule Consultation Calendly Embed */}
          <div className="bg-card p-8 md:p-10 rounded-2xl shadow-xl animate-fadeInUp flex flex-col h-[700px]" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-headline text-3xl font-semibold text-primary mb-2">Schedule Consultation</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Book a free 30-minute consultation with one of our specialist cardiologists.
            </p>
            {/* Calendly inline widget begin */}
            <div
              className="calendly-inline-widget flex-grow" // Added flex-grow
              data-url="https://calendly.com/commons-aymen/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=a41e39" // Ensure this URL is precise
              style={{ width: '100%', overflow: 'hidden' }} // Adjusted style for full width and to allow flex-grow to manage height
            ></div>
            <Script
              id="calendly-widget-script" // Added an ID for clarity
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="lazyOnload" // Continues to use lazyOnload, generally good for non-critical third-party scripts
            />
            {/* Calendly inline widget end */}
          </div>
        </div>
      </div>
    </section>
  );
}
