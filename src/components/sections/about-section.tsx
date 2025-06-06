
import Image from 'next/image';
import { Award, Medal, UserCheck, CheckCircle, Users, Briefcase, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const drSarahChenAchievements = [
  { title: 'Board Certified Cardiologist', icon: <Award className="w-5 h-5 mr-2" /> },
  { title: 'Fellow of the American College of Cardiology (FACC)', icon: <Medal className="w-5 h-5 mr-2" /> },
  { title: 'Top Doctor Award (2021-2023)', icon: <UserCheck className="w-5 h-5 mr-2" /> },
  { title: 'Advanced Heart Failure & Transplant Cardiology Specialist', icon: <CheckCircle className="w-5 h-5 mr-2" /> },
];

const drJamesLeeAchievements = [
  { title: 'Board Certified Interventional Cardiologist', icon: <Award className="w-5 h-5 mr-2" /> },
  { title: 'Director of Cardiac Catheterization Laboratory', icon: <Briefcase className="w-5 h-5 mr-2" /> },
  { title: 'Pioneer in Transcatheter Valve Therapies', icon: <Sparkles className="w-5 h-5 mr-2" /> },
  { title: 'Clinical Excellence Award (2022)', icon: <UserCheck className="w-5 h-5 mr-2" /> },
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

        {/* Dr. Sarah Chen */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
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
            <h3 className="font-headline text-3xl font-semibold text-primary">Dr. Sarah Chen, MD, FACC</h3>
            <p className="text-accent font-medium">Chief of Cardiology, Cardiac Surgeon</p>
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
                {drSarahChenAchievements.map((achievement, index) => (
                  <Badge key={index} variant="secondary" className="py-2 px-4 rounded-lg text-sm flex items-center bg-card border-primary/20 text-primary shadow-sm">
                    {achievement.icon}
                    {achievement.title}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dr. James Lee */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6 animate-fadeInUp md:order-2" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-headline text-3xl font-semibold text-primary">Dr. James Lee, MD, PhD, FACC</h3>
            <p className="text-accent font-medium">Lead Interventional Cardiologist</p>
            <p className="text-muted-foreground leading-relaxed">
              Dr. James Lee is a distinguished interventional cardiologist known for his pioneering work in minimally invasive cardiac procedures. With a strong background in both clinical practice and cardiovascular research, Dr. Lee brings a wealth of knowledge to complex cases, always prioritizing patient safety and optimal outcomes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              He is particularly recognized for his expertise in transcatheter valve replacement and repair, offering patients advanced alternatives to traditional open-heart surgery. Dr. Lee is dedicated to innovation and actively contributes to clinical trials shaping the future of cardiology.
            </p>
            <div>
              <h4 className="text-xl font-semibold font-headline mb-3 text-primary">Education & Credentials:</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>MD, PhD, Yale School of Medicine</li>
                <li>Residency in Internal Medicine, UCSF Medical Center</li>
                <li>Fellowship in Interventional Cardiology, Cleveland Clinic</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold font-headline mb-4 text-primary">Achievements & Recognitions:</h4>
              <div className="flex flex-wrap gap-3">
                {drJamesLeeAchievements.map((achievement, index) => (
                  <Badge key={index} variant="secondary" className="py-2 px-4 rounded-lg text-sm flex items-center bg-card border-primary/20 text-primary shadow-sm">
                    {achievement.icon}
                    {achievement.title}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="animate-fadeInUp md:order-1" style={{ animationDelay: '0.4s' }}>
            <Image
              src="https://placehold.co/500x600.png"
              alt="Dr. James Lee"
              width={500}
              height={600}
              className="rounded-2xl shadow-xl object-cover w-full h-auto md:h-[600px]"
              data-ai-hint="doctor professional portrait"
            />
          </div>
        </div>

        {/* Our Dedicated Team Section */}
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

      {/* Team Marquee Container */}
      <div className="relative w-full max-w-none mb-16">
        <MarqueeRow members={row1Members} direction="left" />
        {row2Members.length > 0 && (
           <MarqueeRow members={row2Members} direction="right" className="mt-4" />
        )}
      </div>

    </section>
  );
}
