
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonialsData = [
  {
    name: 'John D.',
    avatarFallback: 'JD',
    image: 'https://placehold.co/80x80.png',
    aiHint: 'man portrait',
    quote: "Dr. Chen's expertise and compassionate care were exceptional. I felt truly listened to and my recovery has been remarkable. Highly recommend!",
    rating: 5,
  },
  {
    name: 'Emily S.',
    avatarFallback: 'ES',
    image: 'https://placehold.co/80x80.png',
    aiHint: 'woman portrait',
    quote: "From the moment I walked in, the entire team was professional and reassuring. Dr. Chen took the time to explain everything clearly. My heart health has never been better.",
    rating: 5,
  },
  {
    name: 'Michael B.',
    avatarFallback: 'MB',
    image: 'https://placehold.co/80x80.png',
    aiHint: 'person smiling',
    quote: "I was nervous about my procedure, but Dr. Chen and her staff made me feel comfortable and confident. The level of care I received was outstanding.",
    rating: 5,
  },
  {
    name: 'Sarah L.',
    avatarFallback: 'SL',
    image: 'https://placehold.co/80x80.png',
    aiHint: 'woman smiling',
    quote: "The follow-up care has been fantastic. Dr. Chen truly cares about her patients' long-term well-being. I feel supported every step of the way.",
    rating: 5,
  },
  {
    name: 'David K.',
    avatarFallback: 'DK',
    image: 'https://placehold.co/80x80.png',
    aiHint: 'man professional',
    quote: "A brilliant cardiologist with a human touch. Dr. Chen explained complex issues in a way I could understand and involved me in decisions about my care.",
    rating: 5,
  }
];

const AUTOPLAY_INTERVAL = 5000; // 5 seconds

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(nextTestimonial, AUTOPLAY_INTERVAL);
    return () => clearInterval(intervalId);
  }, [nextTestimonial]);

  return (
    <section id="testimonials" className="py-24 bg-background text-foreground">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-primary">Patient Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from those whose lives we've touched.
          </p>
        </div>

        <div className="relative mt-12 h-[450px] flex items-center justify-center overflow-hidden">
          {testimonialsData.map((testimonial, index) => {
            const offset = index - activeIndex;
            let positionFactor = offset;

            // Handle wrap-around for positioning
            // If a card is far left (e.g., index 0, activeIndex 4, offset -4 for 5 items)
            // it should appear on the right
            if (Math.abs(offset) > testimonialsData.length / 2) {
              if (offset < 0) { // far left, move to right
                positionFactor = offset + testimonialsData.length;
              } else { // far right, move to left
                positionFactor = offset - testimonialsData.length;
              }
            }
            
            const isActive = index === activeIndex;
            const isNeighbor = Math.abs(positionFactor) === 1;
            const isVisible = isActive || isNeighbor;


            return (
              <div
                key={testimonial.name + index}
                className={cn(
                  "absolute transition-all duration-700 ease-out",
                  isActive ? "z-20" : (isNeighbor ? "z-10" : "z-0")
                )}
                style={{
                  width: isActive ? '280px' : '240px', // w-70 vs w-60
                  height: isActive ? '400px' : '340px', // h-100 vs h-85
                  transform: `translateX(${positionFactor * 190}px) scale(${isActive ? 1 : 0.85})`,
                  opacity: isActive ? 1 : (isNeighbor ? 0.6 : 0),
                  pointerEvents: isVisible ? 'auto' : 'none',
                }}
              >
                {isVisible && (
                  <Card className="h-full w-full flex flex-col bg-card rounded-2xl shadow-xl overflow-hidden">
                    <CardContent className="pt-6 flex flex-col flex-grow items-center text-center justify-center p-4 md:p-6">
                      <Avatar className="h-16 w-16 md:h-20 md:w-20 mb-4">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                        <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                      </Avatar>
                      <p className="font-semibold text-lg md:text-xl text-primary mb-2">{testimonial.name}</p>
                      <div className="flex text-yellow-400 mb-3 md:mb-4">
                        {Array(testimonial.rating).fill(0).map((_, i) => (
                          <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-muted-foreground text-xs md:text-sm italic leading-relaxed px-2">
                        "{testimonial.quote}"
                      </blockquote>
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

