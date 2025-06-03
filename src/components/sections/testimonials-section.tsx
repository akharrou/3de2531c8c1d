
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
const X_OFFSET_FACTOR = 200; // Horizontal distance factor between cards

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  }, []);

  useEffect(() => {
    if (testimonialsData.length > 1) {
      const intervalId = setInterval(nextTestimonial, AUTOPLAY_INTERVAL);
      return () => clearInterval(intervalId);
    }
  }, [nextTestimonial]);

  return (
    <React.Fragment>
      <section id="testimonials" className="py-24 bg-background text-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-primary">Patient Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from those whose lives we've touched.
            </p>
          </div>

          <div className="relative mt-12 h-[500px] flex items-center justify-center overflow-hidden">
            {testimonialsData.map((testimonial, index) => {
              // trueOffset determines the actual translation from the center without wrapping.
              const trueOffset = index - activeIndex;
              
              // stylingSlotFactor determines which "styling slot" the card effectively occupies 
              // for opacity, scale, etc. This wraps around.
              let stylingSlotFactor = trueOffset;
              if (testimonialsData.length > 1) {
                const N = testimonialsData.length;
                const halfLength = N / 2; 
                // If trueOffset is far to the right, wrap its styling slot to the left
                if (trueOffset > halfLength) { 
                  stylingSlotFactor = trueOffset - N;
                } 
                // If trueOffset is far to the left, wrap its styling slot to the right
                else if (trueOffset < -halfLength) {
                  stylingSlotFactor = trueOffset + N;
                }
              }
              
              const isActive = stylingSlotFactor === 0;
              const isImmediateNeighbor = Math.abs(stylingSlotFactor) === 1;
              const isOuterNeighbor = Math.abs(stylingSlotFactor) === 2;
              
              let cardStyle: React.CSSProperties = {
                width: '200px', // Smallest, for cards beyond the visible 5 or default
                height: '300px',
                transform: `translateX(${trueOffset * X_OFFSET_FACTOR}px) scale(0.6)`,
                opacity: 0,
                zIndex: 0,
                pointerEvents: 'none', 
              };

              if (isActive) {
                cardStyle = {
                  width: '320px',
                  height: '450px',
                  transform: `translateX(${trueOffset * X_OFFSET_FACTOR}px) scale(1)`,
                  opacity: 1,
                  zIndex: 30,
                  pointerEvents: 'auto',
                };
              } else if (isImmediateNeighbor) {
                cardStyle = {
                  width: '280px',
                  height: '390px',
                  transform: `translateX(${trueOffset * X_OFFSET_FACTOR}px) scale(0.85)`,
                  opacity: 0.7,
                  zIndex: 20,
                  pointerEvents: 'auto',
                };
              } else if (isOuterNeighbor) {
                cardStyle = {
                  width: '240px',
                  height: '330px',
                  transform: `translateX(${trueOffset * X_OFFSET_FACTOR}px) scale(0.7)`,
                  opacity: 0.4,
                  zIndex: 10,
                  pointerEvents: 'auto',
                };
              }
              // If it's not active, immediate, or outer, it uses the default style (opacity 0).

              return (
                <div
                  key={testimonial.name + index} // Ensure key is unique if names can repeat
                  className="absolute transition-all duration-700 ease-out"
                  style={cardStyle}
                >
                  <Card className="h-full w-full flex flex-col bg-card rounded-2xl shadow-xl overflow-hidden">
                    <CardContent className="pt-6 flex flex-col flex-grow items-center text-center justify-center p-4 md:p-6">
                      <Avatar className="h-20 w-20 mb-4">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                        <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                      </Avatar>
                      <p className="font-semibold text-lg md:text-xl text-primary mb-2">{testimonial.name}</p>
                      <div className="flex text-yellow-400 mb-3 md:mb-4">
                        {Array(testimonial.rating).fill(0).map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-muted-foreground text-sm md:text-base italic leading-relaxed px-2">
                        "{testimonial.quote}"
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

