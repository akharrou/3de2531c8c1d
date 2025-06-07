
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Award, Medal, UserCheck, CheckCircle, Briefcase, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface Doctor {
  id: string;
  name: string;
  shortTitle: string;
  longTitle: string;
  imageUrl: string;
  dataAiHint: string;
  bio: string[];
  education: string[];
  achievements: Array<{ title: string; icon: React.ReactNode }>;
}

const doctorsData: Doctor[] = [
  {
    id: 'sarah-chen',
    name: 'Dr. Sarah Chen',
    shortTitle: 'Chief of Cardiology',
    longTitle: 'MD, FACC, Chief of Cardiology, Cardiac Surgeon',
    imageUrl: 'https://placehold.co/600x800.png',
    dataAiHint: 'doctor portrait woman professional',
    bio: [
      "Dr. Sarah Chen is a highly respected and experienced cardiologist renowned for her expertise in diagnosing and treating a wide range of cardiovascular conditions. With over 15 years of dedicated service, Dr. Chen combines cutting-edge medical advancements with a compassionate, patient-centered approach.",
      "Her philosophy is rooted in empowering patients with knowledge and involving them in their healthcare journey. Dr. Chen is committed to lifelong learning and stays at the forefront of cardiological research and innovative treatment modalities."
    ],
    education: [
      "MD, Stanford University School of Medicine",
      "Residency in Internal Medicine, Johns Hopkins Hospital",
      "Fellowship in Cardiology, Massachusetts General Hospital"
    ],
    achievements: [
      { title: 'Board Certified Cardiologist', icon: <Award className="w-5 h-5 mr-2 text-primary" /> },
      { title: 'Fellow of the American College of Cardiology (FACC)', icon: <Medal className="w-5 h-5 mr-2 text-primary" /> },
      { title: 'Top Doctor Award (2021-2023)', icon: <UserCheck className="w-5 h-5 mr-2 text-primary" /> },
      { title: 'Advanced Heart Failure & Transplant Cardiology Specialist', icon: <CheckCircle className="w-5 h-5 mr-2 text-primary" /> },
    ]
  },
  {
    id: 'james-lee',
    name: 'Dr. James Lee',
    shortTitle: 'Lead Interventional Cardiologist',
    longTitle: 'MD, PhD, FACC, Lead Interventional Cardiologist',
    imageUrl: 'https://placehold.co/600x800.png',
    dataAiHint: 'doctor portrait man professional',
    bio: [
      "Dr. James Lee is a distinguished interventional cardiologist known for his pioneering work in minimally invasive cardiac procedures. With a strong background in both clinical practice and cardiovascular research, Dr. Lee brings a wealth of knowledge to complex cases, always prioritizing patient safety and optimal outcomes.",
      "He is particularly recognized for his expertise in transcatheter valve replacement and repair, offering patients advanced alternatives to traditional open-heart surgery. Dr. Lee is dedicated to innovation and actively contributes to clinical trials shaping the future of cardiology."
    ],
    education: [
      "MD, PhD, Yale School of Medicine",
      "Residency in Internal Medicine, UCSF Medical Center",
      "Fellowship in Interventional Cardiology, Cleveland Clinic"
    ],
    achievements: [
      { title: 'Board Certified Interventional Cardiologist', icon: <Award className="w-5 h-5 mr-2 text-primary" /> },
      { title: 'Director of Cardiac Catheterization Laboratory', icon: <Briefcase className="w-5 h-5 mr-2 text-primary" /> },
      { title: 'Pioneer in Transcatheter Valve Therapies', icon: <Sparkles className="w-5 h-5 mr-2 text-primary" /> },
      { title: 'Clinical Excellence Award (2022)', icon: <UserCheck className="w-5 h-5 mr-2 text-primary" /> },
    ]
  }
];


export default function AboutSection() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Consider setting selectedDoctor to null if it improves cleanup or state logic,
    // though Dialog's onOpenChange might handle this sufficiently.
    // setSelectedDoctor(null);
  };

  return (
    <section id="about" className="py-24 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-[1]">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-primary">Meet Our Doctors</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our renowned cardiologists are leaders in their fields, combining extensive experience with a commitment to compassionate, patient-first care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-24">
          {doctorsData.map((doctor, index) => (
            <div
              key={doctor.id}
              className="relative rounded-2xl shadow-xl overflow-hidden aspect-square cursor-pointer group animate-fadeInUp"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              onClick={() => openModal(doctor)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openModal(doctor);}}
              aria-label={`View details for ${doctor.name}`}
            >
              <Image
                src={doctor.imageUrl}
                alt={doctor.name}
                layout="fill"
                objectFit="cover"
                className="transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                data-ai-hint={doctor.dataAiHint}
                priority={index < 2} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white z-10">
                <h3 className="font-headline text-2xl sm:text-3xl font-semibold">{doctor.name}</h3>
                <p className="text-md sm:text-lg opacity-90">{doctor.shortTitle}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedDoctor && (
          <Dialog open={isModalOpen} onOpenChange={(open) => {
            if (!open) closeModal();
            else setIsModalOpen(true); // This ensures the modal opens if controlled externally via onOpenChange.
          }}>
            <DialogContent className="sm:max-w-3xl max-h-[90vh] flex flex-col p-0 rounded-lg shadow-2xl">
              <DialogHeader className="p-6 pb-2 border-b border-border">
                <DialogTitle className="font-headline text-2xl md:text-3xl text-primary">{selectedDoctor.name}</DialogTitle>
                <p className="text-sm md:text-base text-accent font-medium pt-1">{selectedDoctor.longTitle}</p>
              </DialogHeader>
              <ScrollArea className="flex-grow overflow-y-auto px-6"> {/* Added px-6 for padding consistency */}
                <div className="space-y-6 py-6"> {/* Added py-6 for vertical padding */}
                  <div>
                    <h4 className="text-lg font-semibold font-headline mb-2 text-primary">Biography</h4>
                    {selectedDoctor.bio.map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground leading-relaxed mb-3 text-sm md:text-base">{paragraph}</p>
                    ))}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold font-headline mb-2 text-primary">Education & Credentials</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm md:text-base">
                      {selectedDoctor.education.map((edu, index) => (
                        <li key={index}>{edu}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold font-headline mb-3 text-primary">Achievements & Recognitions</h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {selectedDoctor.achievements.map((achievement, index) => (
                        <Badge key={index} variant="secondary" className="py-1.5 px-3 rounded-md text-xs sm:text-sm flex items-center bg-card border-primary/20 text-primary shadow-sm">
                          {/* Ensure icon is cloned correctly and has appropriate styling if needed */}
                          {React.cloneElement(achievement.icon as React.ReactElement, { className: "w-4 h-4 mr-1.5" })}
                          {achievement.title}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollArea>
              <div className="p-6 border-t border-border flex justify-end">
                <DialogClose asChild>
                  <Button variant="outline" className="rounded-lg" onClick={closeModal}>Close</Button>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
}
