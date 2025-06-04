
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  // AccordionTrigger, // We will use AccordionPrimitive.Trigger directly for more control
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqCategories = [
  {
    title: "About Our Practice",
    items: [
      {
        question: "What is Dr. Chen's philosophy towards cardiac care?",
        answer:
          "Dr. Chen believes in a patient-centered approach, combining the latest medical advancements with compassionate, personalized care. She focuses on empowering patients with knowledge and involving them in their healthcare decisions to achieve the best possible outcomes.",
      },
      {
        question: "What types of cardiac conditions does Dr. Chen treat?",
        answer:
          "Dr. Chen treats a wide range of cardiovascular conditions, including coronary artery disease, heart failure, arrhythmias, valvular heart disease, and hypertension. She also provides preventive cardiology services.",
      },
      {
        question: "What makes Chen Cardiology unique?",
        answer:
          "Our clinic combines state-of-the-art diagnostic and treatment options with a warm, supportive environment. Dr. Chen is dedicated to continuous learning and applying the most current research to patient care, ensuring you receive the highest standard of cardiovascular treatment.",
      },
    ],
  },
  {
    title: "Appointments & Scheduling",
    items: [
      {
        question: "How do I schedule an appointment?",
        answer:
          "You can schedule an appointment by calling our office at (555) 123-4567 during business hours (Mon-Fri, 9 AM - 5 PM). You can also request an appointment through the contact form on our website, or use the \"Schedule Consultation\" button if an online scheduling portal is linked.",
      },
      {
        question: "What should I bring to my first appointment?",
        answer:
          "For your first appointment, please bring your insurance card, a valid photo ID, a list of all current medications (including over-the-counter drugs and supplements with dosages), and any relevant medical records, test results, or referral letters from other physicians.",
      },
      {
        question: "What if I need to cancel or reschedule my appointment?",
        answer:
          "We understand that plans can change. Please call our office at least 24 hours in advance if you need to cancel or reschedule your appointment. This allows us to offer the time slot to other patients in need of care.",
      },
    ],
  },
  {
    title: "Insurance & Billing",
    items: [
      {
        question: "What insurance plans do you accept?",
        answer:
          "We accept a wide variety of major insurance plans. As plan participation can change, we recommend contacting our office or checking directly with your insurance provider to confirm your coverage before your appointment.",
      },
      {
        question: "Who can I contact if I have a billing question?",
        answer:
          "For any billing inquiries, please call our billing department at (555) 789-0123 during business hours, or email us at billing@chencardiology.com. We are happy to assist you with understanding your statement or payment options.",
      },
    ],
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="pt-24 pb-12 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-5xl md:text-6xl font-bold text-primary">
            FAQ
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            Frequently Asked Questions
          </p>
        </div>

        {faqCategories.map((category, categoryIndex) => (
          <div key={category.title} className={`mb-12 ${categoryIndex > 0 ? 'pt-8' : ''}`}>
            <h3 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-8 text-left">
              {category.title}
            </h3>
            <Accordion type="single" collapsible className="w-full space-y-1">
              {category.items.map((item) => (
                <AccordionItem key={item.question} value={item.question} className="border-b border-border last:border-b-0">
                  <AccordionPrimitive.Header className="flex">
                    <AccordionPrimitive.Trigger
                      className={cn(
                        "group flex w-full flex-1 items-center justify-between text-left hover:no-underline py-6 text-lg font-body font-medium text-foreground"
                      )}
                    >
                      <span className="flex-1 pr-4">{item.question}</span>
                      <div className="relative h-5 w-5">
                        <Plus
                          className={cn(
                            "absolute top-0 left-0 h-5 w-5 text-primary shrink-0 transition-opacity duration-200 ease-in-out",
                            "group-data-[state=open]:opacity-0 opacity-100"
                          )}
                          aria-hidden="true"
                        />
                        <Minus
                          className={cn(
                            "absolute top-0 left-0 h-5 w-5 text-primary shrink-0 transition-opacity duration-200 ease-in-out",
                            "group-data-[state=open]:opacity-100 opacity-0"
                          )}
                          aria-hidden="true"
                        />
                      </div>
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2 pb-6 pr-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
}
