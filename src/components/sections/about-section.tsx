
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Medal, UserCheck, CheckCircle, Briefcase, Sparkles, BookOpen, ArrowRight, Linkedin as LinkedinIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const XLogo = ({ className }: { className?: string }) => (
  <svg
    className={cn("h-4 w-4", className)}
    fill="currentColor"
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M6.5605469,3 L20.001953,20.6875 L6.96875,38 L10.03125,38 L21.53125,22.65625 L31.599609,38 L43.439453,38 L28.908203,19.160156 L42.439453,3 L39.371094,3 L27.341797,17.34375 L18.400391,3 L6.5605469,3 z M12.03125,5 L16.96875,5 L37.96875,36 L33.03125,36 L12.03125,5 z" />
  </svg>
);

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
  socials?: {
    x?: string;
    linkedin?: string;
  };
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
    ],
    socials: {
      x: 'https://x.com/drsarahchen_placeholder',
      linkedin: 'https://linkedin.com/in/drsarahchen_placeholder'
    }
  },
  {
    id: 'james-lee',
    name: 'Dr. James Lee',
    shortTitle: 'Lead Interventional Cardiologist',
    longTitle: 'MD, PhD, FACC, Lead Interventional Cardiologist',
    imageUrl: 'https://placehold.co/600x800.png',
    dataAiHint: 'doctor portrait man professional depth',
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
    ],
    socials: {
      linkedin: 'https://linkedin.com/in/drjameslee_placeholder'
    }
  },
  {
    id: 'emily-carter',
    name: 'Dr. Emily Carter',
    shortTitle: 'Preventive Cardiology Specialist',
    longTitle: 'MD, MPH, Preventive Cardiology Specialist',
    imageUrl: 'https://placehold.co/600x800.png',
    dataAiHint: 'doctor portrait woman friendly office',
    bio: [
      "Dr. Emily Carter is dedicated to the proactive prevention of heart disease. She focuses on early detection, risk factor modification, and patient education to empower individuals to take control of their cardiovascular health. Dr. Carter is known for her thorough, personalized approach to developing lifestyle and medical strategies for long-term wellness.",
      "She is passionate about community health and frequently engages in outreach programs to promote heart-healthy living. Her research interests include the impact of nutrition and exercise on cardiac outcomes."
    ],
    education: [
      "MD, Duke University School of Medicine",
      "MPH, Harvard T.H. Chan School of Public Health",
      "Residency in Internal Medicine, Brigham and Women's Hospital",
      "Fellowship in Preventive Cardiology, Mayo Clinic"
    ],
    achievements: [
      { title: 'Board Certified in Cardiovascular Disease', icon: <Award className="w-5 h-5 mr-2 text-primary" /> },
      { title: 'Specialist in Lipidology', icon: <CheckCircle className="w-5 h-5 mr-2 text-primary" /> },
      { title: 'Author of \"Heart Smart Living\"', icon: <BookOpen className="w-5 h-5 mr-2 text-primary" /> },
      { title: 'Community Health Advocate Award', icon: <UserCheck className="w-5 h-5 mr-2 text-primary" /> },
    ],
    socials: {
      x: 'https://x.com/dremilycarter_placeholder'
    }
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 md:mb-16">
          {doctorsData.map((doctor, index) => (
            <div
              key={doctor.id}
              className="relative rounded-2xl shadow-xl overflow-hidden aspect-[4/5] cursor-pointer group animate-fadeInUp"
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
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                data-ai-hint={doctor.dataAiHint}
                priority={index < 3} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {(doctor.socials?.x || doctor.socials?.linkedin) && (
                <div className="absolute top-3 right-3 z-20 flex space-x-1.5">
                  {doctor.socials.x && (
                    <a
                      href={doctor.socials.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-primary transition-colors duration-200 p-1 rounded-full hover:bg-white/20"
                      aria-label={`${doctor.name} on X`}
                      onClick={(e) => e.stopPropagation()} 
                    >
                      <XLogo className="h-4 w-4" />
                    </a>
                  )}
                  {doctor.socials.linkedin && (
                    <a
                      href={doctor.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-primary transition-colors duration-200 p-1 rounded-full hover:bg-white/20"
                      aria-label={`${doctor.name} on LinkedIn`}
                      onClick={(e) => e.stopPropagation()} 
                    >
                      <LinkedinIcon className="h-4 w-4" />
                    </a>
                  )}
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white z-10">
                <h3 className="font-headline text-xl sm:text-2xl font-semibold">{doctor.name}</h3>
                <p className="text-sm sm:text-base opacity-90">{doctor.shortTitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Link href="/about/our-team" passHref legacyBehavior>
            <Button size="lg" className="rounded-xl">
              Meet The Rest of The Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>

        {selectedDoctor && (
          <Dialog open={isModalOpen} onOpenChange={(open) => {
            if (!open) closeModal();
            else setIsModalOpen(true);
          }}>
            <DialogContent className="sm:max-w-3xl max-h-[90vh] flex flex-col p-0 rounded-lg shadow-2xl">
              <DialogHeader className="p-6 pb-4 border-b border-border flex flex-row justify-between items-start">
                <div>
                  <DialogTitle className="font-headline text-2xl md:text-3xl text-primary">{selectedDoctor.name}</DialogTitle>
                  <p className="text-sm md:text-base text-accent font-medium pt-1">{selectedDoctor.longTitle}</p>
                </div>
                {(selectedDoctor.socials?.x || selectedDoctor.socials?.linkedin) && (
                  <div className="flex space-x-2 items-center flex-shrink-0 ml-4 mt-1">
                    {selectedDoctor.socials.x && (
                      <a
                        href={selectedDoctor.socials.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 p-1"
                        aria-label={`${selectedDoctor.name} on X`}
                      >
                        <XLogo className="h-5 w-5" />
                      </a>
                    )}
                    {selectedDoctor.socials.linkedin && (
                      <a
                        href={selectedDoctor.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 p-1"
                        aria-label={`${selectedDoctor.name} on LinkedIn`}
                      >
                        <LinkedinIcon className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                )}
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
      </div>
    </section>
  );
}
