
"use client";

import React, { useState, useEffect, useCallback, useMemo } from 'react';
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
const NUM_VISIBLE_CARDS = 5;
const TRANSITION_DURATION = 700; // ms, should match CSS

export default function TestimonialsSection() {
  const numOriginalItems = testimonialsData.length;
  const numSideClones = Math.floor(NUM_VISIBLE_CARDS / 2);

  const displayItems = useMemo(() => {
    if (numOriginalItems === 0) return [];
    // Ensure there are enough items to clone from, or adjust cloning strategy
    const actualNumSideClones = Math.min(numSideClones, numOriginalItems > 0 ? numOriginalItems : 1);

    const clonesStart = testimonialsData.slice(numOriginalItems - actualNumSideClones);
    const clonesEnd = testimonialsData.slice(0, actualNumSideClones);
    return [...clonesStart, ...testimonialsData, ...clonesEnd];
  }, [numOriginalItems, numSideClones]);

  const [currentIndex, setCurrentIndex] = useState(numSideClones); // Start at the first "real" item
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex(prevIndex => prevIndex + 1);
  }, []);

  useEffect(() => {
    if (displayItems.length <= NUM_VISIBLE_CARDS && numOriginalItems <=1 ) return;

    const intervalId = setInterval(() => {
      nextTestimonial();
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(intervalId);
  }, [nextTestimonial, displayItems.length, numOriginalItems]);

  useEffect(() => {
    if (!transitionEnabled) {
      // Use rAF to ensure the class change (transition disabled) is applied before re-enabling
      requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });
    }
  }, [transitionEnabled]);

  useEffect(() => {
    // Logic for continuous loop (forward)
    if (currentIndex === numSideClones + numOriginalItems) {
      const timer = setTimeout(() => {
        setTransitionEnabled(false); // Disable transitions for the jump
        setCurrentIndex(numSideClones); // Jump to the first "real" item
      }, TRANSITION_DURATION); // Wait for the current transition to finish
      return () => clearTimeout(timer);
    }

    // Logic for continuous loop (backward - if implementing prev button)
    if (currentIndex === numSideClones - 1) {
      const timer = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(numSideClones + numOriginalItems - 1); // Jump to the last "real" item
      }, TRANSITION_DURATION);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, numOriginalItems, numSideClones, displayItems.length]);


  if (numOriginalItems === 0) {
    return (
      <section id="testimonials" className="py-24 bg-background text-foreground">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">No testimonials yet.</p>
        </div>
      </section>
    );
  }

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
            {displayItems.map((testimonial, extendedIndex) => {
              const trueOffset = extendedIndex - currentIndex;
              // stylingSlotFactor will determine which visual slot the card occupies
              // For example, if trueOffset is very large (due to cloning), stylingSlotFactor
              // might still be -2, -1, 0, 1, or 2 if it's visually in one of the 5 slots.
              // This part is complex if we want perfect wrapping for styling AND translation.
              // For now, trueOffset drives translation directly.
              // Styling (opacity, scale) is driven by its visual position.

              const isActive = trueOffset === 0;
              const isImmediateNeighbor = Math.abs(trueOffset) === 1;
              const isOuterNeighbor = Math.abs(trueOffset) === 2;
              
              let cardStyle: React.CSSProperties = {
                width: '200px', 
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
              
              return (
                <div
                  key={testimonial.name + extendedIndex} // Corrected key
                  className={cn(
                    "absolute ease-out",
                    transitionEnabled ? "duration-700 transition-all" : "duration-0" 
                  )}
                  style={cardStyle}
                >
                  <Card className="h-full w-full flex flex-col bg-card rounded-2xl shadow-xl overflow-hidden">
                    <CardContent className="pt-6 flex flex-col flex-grow items-center text-center justify-center p-3 md:p-5 overflow-hidden">
                      <Avatar className="h-20 w-20 mb-4 shrink-0">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                        <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                      </Avatar>
                      <p className="font-semibold text-lg md:text-xl text-primary mb-2 shrink-0">{testimonial.name}</p>
                      <div className="flex text-yellow-400 mb-3 md:mb-4 shrink-0">
                        {Array(testimonial.rating).fill(0).map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-muted-foreground text-xs md:text-sm italic leading-normal px-1 overflow-hidden">
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
