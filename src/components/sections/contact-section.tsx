
"use client"; // Required for useEffect and Script

import { useEffect } from 'react';
import ContactForm from '@/components/contact-form';
import Script from 'next/script';

export default function ContactSection() {
  const officeAddressLine1 = "1600 Amphitheatre Parkway"; // Placeholder: Googleplex
  const officeAddressLine2 = "Mountain View, CA 94043"; // Placeholder
  const officeTitle = "Chen Cardiology (Example Location)";
  // IMPORTANT: Replace with your actual coordinates and Place ID
  const officeCoords = { lat: 37.4220, lng: -122.0841 }; // Placeholder: Googleplex
  const officePlaceId = "ChIJj61_rTxdj4AR0AoADvfwitA"; // Placeholder: Googleplex Place ID

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_APIKEY || process.env.GOOGLE_MAPS_APIKEY;

  useEffect(() => {
    if (!apiKey) {
      console.error("Google Maps API Key is not defined. Please set NEXT_PUBLIC_GOOGLE_MAPS_APIKEY or GOOGLE_MAPS_APIKEY.");
      return;
    }

    const configureMap = async () => {
      // Wait for the custom element to be defined
      await customElements.whenDefined('gmpx-store-locator');
      
      const locator = document.querySelector('gmpx-store-locator') as HTMLElement & { configureFromQuickBuilder?: (config: any) => void };

      if (locator?.configureFromQuickBuilder) {
        const CONFIGURATION = {
          locations: [
            {
              title: officeTitle,
              address1: officeAddressLine1,
              address2: officeAddressLine2,
              coords: officeCoords,
              placeId: officePlaceId,
            },
          ],
          mapOptions: {
            center: officeCoords,
            fullscreenControl: true,
            mapTypeControl: false,
            streetViewControl: false,
            zoom: 15, // Zoom level for a single location
            mapId: "", // Optional: Your Map ID if you have one
          },
          mapsApiKey: apiKey,
          capabilities: {
            input: false,
            autocomplete: false,
            directions: false,
            distanceMatrix: false,
            details: false,
            actions: false,
          },
        };
        locator.configureFromQuickBuilder(CONFIGURATION);
      } else {
        console.error("gmpx-store-locator element or configureFromQuickBuilder method not found.");
      }
    };

    // Ensure the external library is loaded before trying to configure
    const libraryScript = document.querySelector('script[src*="@googlemaps/extended-component-library"]');
    if ((window as any).google && (window as any).google.maps && (window as any).customElements && (window as any).customElements.get('gmpx-store-locator')) {
      // If already loaded and defined (e.g., on fast refresh)
      configureMap();
    } else if (libraryScript) {
      libraryScript.addEventListener('load', configureMap);
    } else {
      // This case should ideally be handled by the Script component's onLoad or strategy
      // For safety, we wait for DOMContentLoaded if script tag isn't found immediately.
      document.addEventListener('DOMContentLoaded', configureMap);
    }

    return () => {
      if (libraryScript) {
        libraryScript.removeEventListener('load', configureMap);
      }
      document.removeEventListener('DOMContentLoaded', configureMap);
    };
  }, [apiKey, officeTitle, officeAddressLine1, officeAddressLine2, officeCoords, officePlaceId]);

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
        <div className="mt-12 bg-card p-8 md:p-10 rounded-2xl shadow-xl animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <h3 className="font-headline text-3xl font-semibold text-primary mb-2">Walk-in Clinic</h3>
          <p className="text-sm text-muted-foreground mb-6">
            No appointment needed—walk in whenever it’s convenient during clinic hours—our cardiac team is ready for quick questions, routine care, or urgent check-ins.
          </p>
          <div className="rounded-lg overflow-hidden h-[300px] shadow-md">
            {apiKey ? (
              <>
                <gmpx-api-loader key={apiKey} solution-channel="GMP_QB_locatorplus_v11_c"></gmpx-api-loader>
                <gmpx-store-locator></gmpx-store-locator>
              </>
            ) : (
              <p className="text-center text-destructive p-4">Google Maps API Key is missing. Map cannot be displayed.</p>
            )}
          </div>
        </div>
      </div>
      <Script 
        type="module" 
        src="https://ajax.googleapis.com/ajax/libs/@googlemaps/extended-component-library/0.6.11/index.min.js" 
        strategy="lazyOnload" // Loads after the page is idle
      />
    </section>
  );
}
