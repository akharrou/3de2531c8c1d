
"use client"; 

import ContactForm from '@/components/contact-form';
import Script from 'next/script';
import { CalendarDays } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="pt-12 pb-24 bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-primary">Contact Us & Plan Your Visit</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reach out, book your visit, or stop by—our team is ready to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Inquiries Form */}
          <div className="bg-card p-8 md:p-10 rounded-2xl shadow-xl animate-fadeInUp flex flex-col h-[700px]" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-headline text-3xl font-semibold text-primary mb-2">Inquiries</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Have a question, comment, or just want to say hello? Send us a message below and our team will get back to you—usually within one business day.
            </p>
            <ContactForm />
            <div className="flex-grow"></div>
          </div>

          {/* Schedule Visit Calendly Embed */}
          <div className="bg-card p-8 md:p-10 rounded-2xl shadow-xl animate-fadeInUp flex flex-col h-[700px]" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-headline text-3xl font-semibold text-primary mb-2">Schedule Visit</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Choose a convenient date and time below, or call us at (555) 123-4567.
            </p>
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
          </div>
        </div>

        {/* Walk-in Clinic Map Section */}
        <div className="mt-8 bg-card p-8 md:p-10 rounded-2xl shadow-xl animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <div className="flex justify-between items-start mb-6">
            {/* Left: Title and Tagline */}
            <div>
              <h3 className="font-headline text-3xl font-semibold text-primary mb-2">Walk-in Clinic</h3>
              <p className="text-sm text-muted-foreground max-w-md"> 
                No appointment needed—walk in whenever it’s convenient during clinic hours—our cardiac team is ready for quick questions, routine care, or urgent check-ins.
              </p>
            </div>
            {/* Right: Office Hours */}
            <div className="text-sm text-right flex-shrink-0 ml-6">
              <div className="flex items-center justify-end mb-1">
                <h4 className="font-semibold text-foreground">Clinic Hours:</h4>
                <CalendarDays className="w-5 h-5 ml-2 text-primary shrink-0" />
              </div>
              <div className="text-muted-foreground">
                <p>Mon – Thu: 9:00 AM – 5:00 PM</p>
                <p>Friday: 9:00 AM – 3:00 PM</p>
                <p>Sat – Sun: Closed</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden h-[300px] shadow-md">
            <iframe 
              src="https://storage.googleapis.com/maps-solutions-ynlwz9bjem/locator-plus/veyv/locator-plus.html"
              width="100%" 
              height="100%"
              style={{ border:0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
