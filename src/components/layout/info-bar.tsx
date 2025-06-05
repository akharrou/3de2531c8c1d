
import { MapPin, Phone, Mail, CalendarDays } from 'lucide-react';

export default function InfoBar() {
  const address = "123 Heartbeat Avenue, Cardio City, CA 90210";
  const encodedAddress = encodeURIComponent(address);

  return (
    <section className="bg-card text-card-foreground py-12 md:py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-10 text-sm">
          {/* Column 1: Location */}
          <div>
            <div className="flex items-center mb-4">
              <MapPin className="w-5 h-5 mr-3 text-primary shrink-0" />
              <span className="font-headline text-xl font-semibold text-primary">Location</span>
            </div>
            <p className="text-muted-foreground">{address.split(',')[0]}</p>
            <p className="text-muted-foreground">{address.split(',').slice(1).join(',').trim()}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-primary transition-colors mt-3 inline-block text-sm font-medium"
            >
              Get Directions &rarr;
            </a>
          </div>

          {/* Column 2: Contact Us */}
          <div>
            <div className="flex items-center mb-4">
              <Phone className="w-5 h-5 mr-3 text-primary shrink-0" />
              <span className="font-headline text-xl font-semibold text-primary">Contact Us</span>
            </div>
            <div className="space-y-2.5">
              <div className="flex items-center text-muted-foreground">
                <Phone className="w-4 h-4 mr-2.5 text-accent shrink-0" />
                <a href="tel:+15553622273" className="hover:text-accent transition-colors">(555) 362-2273</a>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-4 h-4 mr-2.5 text-accent shrink-0" />
                <a href="mailto:contact@chencardiology.com" className="hover:text-accent transition-colors">
                  contact@chencardiology.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Office Hours */}
          <div>
            <div className="flex items-center mb-4">
              <CalendarDays className="w-5 h-5 mr-3 text-primary shrink-0" />
              <span className="font-headline text-xl font-semibold text-primary">Office Hours</span>
            </div>
            <div className="space-y-1 text-muted-foreground">
              <p>Mon – Thu: 9:00 AM – 5:00 PM</p>
              <p>Friday: 9:00 AM – 3:00 PM</p>
              <p>Sat – Sun: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
