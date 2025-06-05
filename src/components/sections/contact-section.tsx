
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
          <div className="bg-card p-8 md:p-10 rounded-2xl shadow-xl animate-fadeInUp flex flex-col h-[700px]" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-headline text-3xl font-semibold text-primary mb-6">Send Us a Message</h3>
            <ContactForm />
          </div>
          <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            {/* Calendly inline widget begin */}
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/commons-aymen/30min?hide_gdpr_banner=1&primary_color=a41e39"
              style={{ minWidth: '320px', height: '700px', overflow: 'hidden', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}
            ></div>
            <Script
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="lazyOnload"
            />
            {/* Calendly inline widget end */}
          </div>
        </div>
      </div>
    </section>
  );
}

