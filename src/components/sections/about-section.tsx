
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Award, Medal, UserCheck, CheckCircle, Users, Briefcase, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

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

interface TeamMember {
  id: number;
  name: string;
  title: string;
  imageUrl: string;
  dataAiHint: string;
}

const teamMembersData: TeamMember[] = [
  { id: 1, name: 'Emily Carter', title: 'Chief Cardiac Nurse', imageUrl: 'https://placehold.co/200x200.png', dataAiHint: 'nurse headshot' },
  { id: 2, name: 'Michael Rivera', title: 'Senior Surgical Technologist', imageUrl: 'https://placehold.co/200x200.png', dataAiHint: 'technician headshot' },
  { id: 3, name: 'Jessica Lee', title: 'Patient Care Coordinator', imageUrl: 'https://placehold.co/200x200.png', dataAiHint: 'coordinator headshot' },
  { id: 4, name: 'David Kim', title: 'Clinical Research Associate', imageUrl: 'https://placehold.co/200x200.png', dataAiHint: 'researcher headshot' },
  { id: 5, name: 'Laura Jones', title: 'Cardiac Rehabilitation Specialist', imageUrl: 'https://placehold.co/200x200.png', dataAiHint: 'specialist headshot' },
  { id: 6, name: 'Brian Smith', title: 'Echocardiography Technician', imageUrl: 'https://placehold.co/200x200.png', dataAiHint: 'technician medical' },
  { id: 7, name: 'Olivia Brown', title: 'Medical Administrative Assistant', imageUrl: 'https://placehold.co/200x200.png', dataAiHint: 'assistant headshot' },
  { id: 8, name: 'Kevin Harris', title: 'Lead Cath Lab Nurse', imageUrl: 'https://placehold.co/200x200.png', dataAiHint: 'nurse professional' },
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <Card className="bg-card text-card-foreground rounded-xl shadow-lg w-[250px] md:w-[280px] h-auto flex-shrink-0 mx-3">
      <CardContent className="p-5 flex flex-col items-center text-center">
        <Image
          src={member.imageUrl}
          alt={member.name}
          width={120}
          height={120}
          className="rounded-full mb-4 shadow-md object-cover"
          data-ai-hint={member.dataAiHint}
        />
        <h4 className="font-headline text-lg font-semibold text-primary mb-1">{member.name}</h4>
        <p className="text-xs text-muted-foreground">{member.title}</p>
      </CardContent>
    </Card>
  );
};

const MarqueeRow: React.FC<{ members: TeamMember[]; direction: 'left' | 'right'; className?: string }> = ({ members, direction, className }) => {
  const animationClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';
  const itemsToRender = members.length > 0 ? [...members, ...members, ...members, ...members] : [];

  if (itemsToRender.length === 0) return null;

  return (
    <div className={cn("flex", className)}>
      <div className={cn("flex py-4", animationClass)} style={{ animationDuration: `${members.length * 12}s`}}>
        {itemsToRender.map((member, index) => (
          <TeamMemberCard key={`${member.id}-${index}`} member={member} />
        ))}
      </div>
    </div>
  );
};

export default function AboutSection() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Optional: Delay clearing selectedDoctor to allow fade-out animation of modal
    // setTimeout(() => setSelectedDoctor(null), 300); // Dialog handles its own state for content
  };

  const midPoint = Math.ceil(teamMembersData.length / 2);
  const row1Members = teamMembersData.slice(0, midPoint);
  const row2Members = teamMembersData.slice(midPoint);

  return (
    <section id="about" className="py-24 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-[1]">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-primary">Meet Our Doctors</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our renowned cardiologists are leaders in their fields, combining extensive experience with a commitment to compassionate, patient-first care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-24">
          {doctorsData.map((doctor, index) => (
            <div
              key={doctor.id}
              className="relative rounded-2xl shadow-xl overflow-hidden aspect-[3/4] cursor-pointer group animate-fadeInUp"
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
                priority={index < 2} // Prioritize loading for above-the-fold images
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
            else setIsModalOpen(true);
          }}>
            <DialogContent className="sm:max-w-3xl max-h-[90vh] flex flex-col p-0 rounded-lg shadow-2xl">
              <DialogHeader className="p-6 pb-2 border-b border-border">
                <DialogTitle className="font-headline text-2xl md:text-3xl text-primary">{selectedDoctor.name}</DialogTitle>
                <p className="text-sm md:text-base text-accent font-medium pt-1">{selectedDoctor.longTitle}</p>
              </DialogHeader>
              <ScrollArea className="flex-grow overflow-y-auto px-6">
                <div className="space-y-6 py-6">
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

        <div className="text-center pt-12 mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <Users className="w-10 h-10 text-primary mr-3" />
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
              Our Dedicated Team
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Behind every successful treatment is a team of skilled and compassionate professionals. Meet the dedicated individuals who support our doctors and care for our patients every day.
          </p>
        </div>
      </div>

      <div className="relative w-full max-w-none mb-16">
        <MarqueeRow members={row1Members} direction="left" />
        {row2Members.length > 0 && (
           <MarqueeRow members={row2Members} direction="right" className="mt-4" />
        )}
      </div>
    </section>
  );
}
