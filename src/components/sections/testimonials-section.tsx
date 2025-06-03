
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
    if (numOriginalItems < NUM_VISIBLE_CARDS) {
      // If not enough items to properly clone for a smooth loop with 5 visible,
      // duplicate items to fill up to NUM_VISIBLE_CARDS for display, but simple loop.
      // Or, for simplicity here, we'll just use original if not enough for cloning.
      // Proper handling for small N might involve more complex cloning or a different carousel mode.
      // For this implementation, we assume N >= NUM_VISIBLE_CARDS for perfect infinite loop.
      // If N is small, it will still "work" but might not be perfectly seamless if N < numSideClones.
      // The provided data (5 items) is okay for numSideClones = 2.
    }
    const clonesStart = testimonialsData.slice(numOriginalItems - numSideClones);
    const clonesEnd = testimonialsData.slice(0, numSideClones);
    return [...clonesStart, ...testimonialsData, ...clonesEnd];
  }, [numOriginalItems, numSideClones]);

  const [currentIndex, setCurrentIndex] = useState(numSideClones); // Start at the first "real" item
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex(prevIndex => prevIndex + 1);
  }, []);

  useEffect(() => {
    if (displayItems.length <= NUM_VISIBLE_CARDS && numOriginalItems <=1 ) return; // No cycling if not enough items or only one

    const intervalId = setInterval(() => {
      nextTestimonial();
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(intervalId);
  }, [nextTestimonial, displayItems.length, numOriginalItems]);

  useEffect(() => {
    if (!transitionEnabled) {
      // After a silent jump, re-enable transitions on the next frame
      requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });
    }
  }, [transitionEnabled]);

  useEffect(() => {
    if (currentIndex === numSideClones + numOriginalItems) { // Reached the end (first clone after real items)
      const timer = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(numSideClones); // Jump to the first real item
      }, TRANSITION_DURATION);
      return () => clearTimeout(timer);
    }
    // For reverse direction (not implemented here, but would be):
    // if (currentIndex === numSideClones - 1) { // Reached the beginning (last clone before real items)
    //   const timer = setTimeout(() => {
    //     setTransitionEnabled(false);
    //     setCurrentIndex(numSideClones + numOriginalItems - 1); // Jump to the last real item
    //   }, TRANSITION_DURATION);
    //   return () => clearTimeout(timer);
    // }
  }, [currentIndex, numOriginalItems, numSideClones]);


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
              
              // For styling, we only care about the 5 visual slots: -2, -1, 0, 1, 2
              // This means `stylingSlotFactor` determines which style to apply.
              const stylingSlotFactor = trueOffset;

              const isActive = stylingSlotFactor === 0;
              const isImmediateNeighbor = Math.abs(stylingSlotFactor) === 1;
              const isOuterNeighbor = Math.abs(stylingSlotFactor) === 2;
              
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
                  transform: `translateX(${stylingSlotFactor * X_OFFSET_FACTOR}px) scale(1)`,
                  opacity: 1,
                  zIndex: 30,
                  pointerEvents: 'auto',
                };
              } else if (isImmediateNeighbor) {
                cardStyle = {
                  width: '280px',
                  height: '390px',
                  transform: `translateX(${stylingSlotFactor * X_OFFSET_FACTOR}px) scale(0.85)`,
                  opacity: 0.7,
                  zIndex: 20,
                  pointerEvents: 'auto',
                };
              } else if (isOuterNeighbor) {
                cardStyle = {
                  width: '240px',
                  height: '330px',
                  transform: `translateX(${stylingSlotFactor * X_OFFSET_FACTOR}px) scale(0.7)`,
                  opacity: 0.4,
                  zIndex: 10,
                  pointerEvents: 'auto',
                };
              }
              
              return (
                <div
                  key={testimonial.name + extendedIndex} 
                  className={cn(
                    "absolute ease-out",
                    transitionEnabled ? "duration-700 transition-all" : "duration-0" 
                  )}
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
