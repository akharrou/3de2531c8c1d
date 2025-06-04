import Image from 'next/image';
import { Award, Medal, UserCheck, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const achievements = [
  { title: 'Board Certified Cardiologist', icon: <Award className="w-5 h-5 mr-2" /> },
  { title: 'Fellow of the American College of Cardiology (FACC)', icon: <Medal className="w-5 h-5 mr-2" /> },
  { title: 'Top Doctor Award (2021-2023)', icon: <UserCheck className="w-5 h-5 mr-2" /> },
  { title: 'Advanced Heart Failure & Transplant Cardiology Specialist', icon: <CheckCircle className="w-5 h-5 mr-2" /> },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-primary">About Dr. Sarah Chen</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated to providing exceptional heart care with a personalized approach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <Image
              src="https://placehold.co/500x600.png"
              alt="Dr. Sarah Chen"
              width={500}
              height={600}
              className="rounded-2xl shadow-xl object-cover w-full h-auto md:h-[600px]"
              data-ai-hint="doctor portrait"
            />
          </div>
          <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-headline text-3xl font-semibold text-primary">A Commitment to Excellence in Cardiology</h3>
            <p className="text-muted-foreground leading-relaxed">
              Dr. Sarah Chen is a highly respected and experienced cardiologist renowned for her expertise in diagnosing and treating a wide range of cardiovascular conditions. With over 15 years of dedicated service, Dr. Chen combines cutting-edge medical advancements with a compassionate, patient-centered approach.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Her philosophy is rooted in empowering patients with knowledge and involving them in their healthcare journey. Dr. Chen is committed to lifelong learning and stays at the forefront of cardiological research and innovative treatment modalities.
            </p>
            <div>
              <h4 className="text-xl font-semibold font-headline mb-3 text-primary">Education & Credentials:</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>MD, Stanford University School of Medicine</li>
                <li>Residency in Internal Medicine, Johns Hopkins Hospital</li>
                <li>Fellowship in Cardiology, Massachusetts General Hospital</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold font-headline mb-4 text-primary">Achievements & Recognitions:</h4>
              <div className="flex flex-wrap gap-3">
                {achievements.map((achievement, index) => (
                  <Badge key={index} variant="secondary" className="py-2 px-4 rounded-lg text-sm flex items-center bg-card border-primary/20 text-primary shadow-sm">
                    {achievement.icon}
                    {achievement.title}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
