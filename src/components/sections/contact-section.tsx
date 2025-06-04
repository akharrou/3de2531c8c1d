
import ContactForm from '@/components/contact-form';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactDetails = [
  { icon: <MapPin className="w-5 h-5 text-accent" />, text: '123 Heartbeat Avenue, Cardio City, CA 90210' },
  { icon: <Phone className="w-5 h-5 text-accent" />, text: '(555) 123-4567' },
  { icon: <Mail className="w-5 h-5 text-accent" />, text: 'contact@chencardiology.com' },
  { icon: <Clock className="w-5 h-5 text-accent" />, text: 'Mon - Fri: 9:00 AM - 5:00 PM' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="pt-12 pb-24 bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-primary">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to help. Reach out to schedule an appointment or ask any questions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-card p-8 md:p-10 rounded-2xl shadow-xl animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-headline text-3xl font-semibold text-primary mb-6">Send Us a Message</h3>
            <ContactForm />
          </div>
          <div className="space-y-8 pt-2 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div>
              <h3 className="font-headline text-3xl font-semibold text-primary mb-6">Contact Information</h3>
              <ul className="space-y-4">
                {contactDetails.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {detail.icon}
                    <span className="text-secondary-foreground text-base">{detail.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.719304630678!2d-118.40149768478374!3d34.05223498060691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d2900001%3A0x1ad8e8a7beefda8b!2sBeverly%20Hills%2C%20CA%2C%20USA!5e0!3m2!1sen!2suk!4v1620828080800!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="Clinic Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
