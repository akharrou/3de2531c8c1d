
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TestimonialData {
  id: number;
  name: string;
  quote: string;
  rating: number;
  month: string;
  year: number;
}

const testimonialsData: TestimonialData[] = [
  {
    id: 1,
    name: 'John D.',
    quote: "Dr. Chen's expertise and compassionate care were exceptional. I felt truly listened to and my recovery has been remarkable. Highly recommend!",
    rating: 5,
    month: 'March',
    year: 2024,
  },
  {
    id: 2,
    name: 'Emily S.',
    quote: "From the moment I walked in, the entire team was professional and reassuring. Dr. Chen took the time to explain everything clearly. My heart health has never been better.",
    rating: 5,
    month: 'February',
    year: 2024,
  },
  {
    id: 3,
    name: 'Michael B.',
    quote: "I was nervous about my procedure, but Dr. Chen and her staff made me feel comfortable and confident. The level of care I received was outstanding.",
    rating: 5,
    month: 'January',
    year: 2024,
  },
  {
    id: 4,
    name: 'Sarah L.',
    quote: "The follow-up care has been fantastic. Dr. Chen truly cares about her patients' long-term well-being. I feel supported every step of the way.",
    rating: 5,
    month: 'December',
    year: 2023,
  },
  {
    id: 5,
    name: 'David K.',
    quote: "A brilliant cardiologist with a human touch. Dr. Chen explained complex issues in a way I could understand and involved me in decisions about my care.",
    rating: 4,
    month: 'November',
    year: 2023,
  },
  {
    id: 6,
    name: 'Jessica P.',
    quote: "The clinic is modern, and the staff are incredibly friendly. Scheduling was easy, and Dr. Chen is a top-notch professional.",
    rating: 5,
    month: 'October',
    year: 2023,
  }
];

const TestimonialCard: React.FC<{ testimonial: TestimonialData }> = ({ testimonial }) => {
  return (
    <Card className="bg-card text-card-foreground rounded-xl shadow-lg w-[300px] md:w-[350px] h-auto flex-shrink-0 mx-4">
      <CardContent className="p-6 flex flex-col justify-between h-full">
        <div>
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-headline text-xl font-semibold text-primary">{testimonial.name}</h3>
            <div className="flex items-center">
              {Array(5).fill(0).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-5 h-5",
                    i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/50"
                  )}
                />
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            {testimonial.month} {testimonial.year}
          </p>
          <blockquote className="text-sm text-foreground leading-relaxed italic">
            "{testimonial.quote}"
          </blockquote>
        </div>
      </CardContent>
    </Card>
  );
};

const MarqueeRow: React.FC<{ testimonials: TestimonialData[]; direction: 'left' | 'right'; className?: string }> = ({ testimonials, direction, className }) => {
  const animationClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';
  // Ensure there are enough items for a smooth scroll, especially if the list is very short.
  // For very short lists, more duplication might be needed or adjust animation.
  const itemsToRender = testimonials.length > 0 ? [...testimonials, ...testimonials, ...testimonials, ...testimonials] : []; // Duplicate 4 times for longer marquee

  if (itemsToRender.length === 0) return null;

  return (
    <div className={cn("flex", className)}>
      <div className={cn("flex py-4", animationClass)} style={{ animationDuration: `${testimonials.length * 15}s`}}> {/* Adjust speed based on number of items */}
        {itemsToRender.map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};


export default function TestimonialsSection() {
  if (testimonialsData.length === 0) {
    return (
      <section id="testimonials" className="py-16 bg-secondary text-foreground">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">No testimonials yet.</p>
        </div>
      </section>
    );
  }

  // Split testimonials into two rows for the marquee
  const midPoint = Math.ceil(testimonialsData.length / 2);
  const row1Testimonials = testimonialsData.slice(0, midPoint);
  const row2Testimonials = testimonialsData.slice(midPoint);

  return (
    <section id="testimonials" className="py-20 bg-secondary text-foreground overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-primary">Patient Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from those whose lives we've touched.
          </p>
        </div>
      </div>
      
      {/* Marquee Container - need to remove container padding for full-width effect or manage carefully */}
      <div className="relative w-full max-w-none"> 
        {/* Optional: Add fades if desired, currently removed for cleaner marquee */}
        {/* <div className="absolute left-0 top-0 bottom-0 z-10 w-16 md:w-24 bg-gradient-to-r from-secondary to-transparent pointer-events-none"></div> */}
        {/* <div className="absolute right-0 top-0 bottom-0 z-10 w-16 md:w-24 bg-gradient-to-l from-secondary to-transparent pointer-events-none"></div> */}
        
        <MarqueeRow testimonials={row1Testimonials} direction="left" />
        {row2Testimonials.length > 0 && (
           <MarqueeRow testimonials={row2Testimonials} direction="right" className="mt-4" />
        )}
      </div>
    </section>
  );
}
