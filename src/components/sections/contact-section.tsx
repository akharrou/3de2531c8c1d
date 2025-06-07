
import ContactForm from '@/components/contact-form';
import Script from 'next/script';

export default function ContactSection() {
  const officeAddress = "123 Heartbeat Avenue, Cardio City, CA 90210";
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(officeAddress)}`;

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
          {/* Inquiries Form */}
          <div className="bg-card p-8 md:p-10 rounded-2xl shadow-xl animate-fadeInUp flex flex-col h-[700px]" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-headline text-3xl font-semibold text-primary mb-2">Inquiries</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Have a question, comment, or just want to say hello? We’re here to help. Reach out with the form below and our team will get back to you—usually within one business day.
            </p>
            <ContactForm />
          </div>

          {/* Schedule Visit Calendly Embed */}
          <div className="bg-card p-8 md:p-10 rounded-2xl shadow-xl animate-fadeInUp flex flex-col h-[700px]" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-headline text-3xl font-semibold text-primary mb-2">Schedule Visit</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Choose a convenient date and time below, or call us at (555) 123-4567.
            </p>
            {/* Calendly inline widget begin */}
            <div
              className="calendly-inline-widget flex-grow" 
              data-url="https://calendly.com/commons-aymen/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=a41e39" 
              style={{ width: '100%', overflow: 'hidden' }} 
            ></div>
            <Script
              id="calendly-widget-script" 
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="lazyOnload" 
            />
            {/* Calendly inline widget end */}
          </div>
        </div>

        {/* Walk-in Clinic Map Section */}
        <div className="mt-12 bg-card p-8 md:p-10 rounded-2xl shadow-xl animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <h3 className="font-headline text-3xl font-semibold text-primary mb-2">Walk-in Clinic</h3>
          <p className="text-sm text-muted-foreground mb-6">
            No appointment needed—walk in whenever it’s convenient during clinic hours—our cardiac team is ready for quick questions, routine care, or urgent check-ins.
          </p>
          <div className="rounded-lg overflow-hidden h-[300px] shadow-md">
            <iframe
              src={googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chen Cardiology Office Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
