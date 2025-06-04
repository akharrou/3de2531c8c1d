
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
const NUM_VISIBLE_CARDS = 5; // Defines how many cards are styled for visibility, others fade
const TRANSITION_DURATION = 700; // ms, should match CSS

export default function TestimonialsSection() {
  const numOriginalItems = testimonialsData.length;
  const numSideClones = Math.floor(NUM_VISIBLE_CARDS / 2);

  const displayItems = useMemo(() => {
    if (numOriginalItems === 0) return [];
    const actualNumSideClones = Math.min(numSideClones, numOriginalItems > 0 ? numOriginalItems : 1);

    const clonesStart = testimonialsData.slice(numOriginalItems - actualNumSideClones);
    const clonesEnd = testimonialsData.slice(0, actualNumSideClones);
    return [...clonesStart, ...testimonialsData, ...clonesEnd];
  }, [numOriginalItems, numSideClones]);

  const [currentIndex, setCurrentIndex] = useState(numSideClones);
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
      requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });
    }
  }, [transitionEnabled]);

  useEffect(() => {
    if (currentIndex === numSideClones + numOriginalItems) {
      const timer = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(numSideClones);
      }, TRANSITION_DURATION);
      return () => clearTimeout(timer);
    }

    if (currentIndex === numSideClones - 1) {
      const timer = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(numSideClones + numOriginalItems - 1);
      }, TRANSITION_DURATION);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, numOriginalItems, numSideClones, displayItems.length]);


  if (numOriginalItems === 0) {
    return (
      <section id="testimonials" className="pt-24 pb-16 bg-secondary text-foreground">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">No testimonials yet.</p>
        </div>
      </section>
    );
  }

  return (
    <React.Fragment>
      <section id="testimonials" className="pt-24 pb-16 bg-secondary text-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-primary">Patient Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from those whose lives we've touched.
            </p>
          </div>

          <div className="relative mt-10 h-[500px] w-full overflow-hidden">
            {/* Left Fade Overlay */}
            <div className="absolute left-0 top-0 bottom-0 z-30 w-32 md:w-48 bg-gradient-to-r from-secondary to-transparent pointer-events-none"></div>

            {displayItems.map((testimonial, extendedIndex) => {
              const trueOffset = extendedIndex - currentIndex;
              
              const isActive = trueOffset === 0;
              const isImmediateNeighbor = Math.abs(trueOffset) === 1;
              const isOuterNeighbor = Math.abs(trueOffset) === 2;

              const horizontalTransformValue = trueOffset * X_OFFSET_FACTOR;
              let scaleValue = 0.6;
              let opacityValue = 0;
              let zIndexValue = 0;
              let cardWidth = '200px';
              let cardHeight = '300px';
              let pointerEventsValue: 'auto' | 'none' = 'none';

              if (isActive) {
                scaleValue = 1;
                opacityValue = 1;
                zIndexValue = 30;
                cardWidth = '320px';
                cardHeight = '450px';
                pointerEventsValue = 'auto';
              } else if (isImmediateNeighbor) {
                scaleValue = 0.85;
                opacityValue = 0.7;
                zIndexValue = 20;
                cardWidth = '280px';
                cardHeight = '390px';
                pointerEventsValue = 'auto';
              } else if (isOuterNeighbor) {
                scaleValue = 0.7;
                opacityValue = 0.4;
                zIndexValue = 10;
                cardWidth = '240px';
                cardHeight = '330px';
                pointerEventsValue = 'auto';
              }
              
              const cardStyle: React.CSSProperties = {
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: cardWidth,
                height: cardHeight,
                transform: `translateX(calc(-50% + ${horizontalTransformValue}px)) translateY(-50%) scale(${scaleValue})`,
                opacity: opacityValue,
                zIndex: zIndexValue,
                pointerEvents: pointerEventsValue,
              };
              
              return (
                <div
                  key={testimonial.name + extendedIndex} 
                  className={cn(
                    "ease-out", 
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
            {/* Right Fade Overlay */}
            <div className="absolute right-0 top-0 bottom-0 z-30 w-32 md:w-48 bg-gradient-to-l from-secondary to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
