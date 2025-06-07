
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, BriefcaseMedical, Linkedin as LinkedinIcon } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import TeamGalleryWrapper from '@/components/team-gallery-wrapper'; 
import { cn } from '@/lib/utils';


// Define XLogo here or import if it's made globally available
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


export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  dataAiHint: string;
  bio: string[];
  department?: string;
  responsibilities?: string[];
  contact?: {
    email?: string;
    phone?: string;
  };
  socials?: {
    x?: string;
    linkedin?: string;
  };
}

const teamMembersData: TeamMember[] = [
  {
    id: 'jane-doe',
    name: 'Jane Doe',
    role: 'Cardiac Nurse',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'nurse portrait friendly woman',
    bio: ["Jane is a compassionate cardiac nurse with 10 years of experience in providing exceptional patient care in fast-paced cardiology units.", "She specializes in post-operative care, patient education on heart-healthy lifestyles, and managing chronic heart conditions."],
    department: "Nursing Unit",
    responsibilities: ["Monitoring patient vital signs & recovery", "Administering medications & treatments", "Educating patients and families", "Collaborating with cardiologists on care plans"],
    socials: {
      x: 'https://x.com/janedoe_placeholder',
      linkedin: 'https://linkedin.com/in/janedoe_placeholder'
    }
  },
  {
    id: 'john-smith',
    name: 'John Smith',
    role: 'Cardiology Technician',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'technician portrait professional man',
    bio: ["John is a skilled cardiology technician proficient in a wide array of diagnostic procedures, including ECG, stress testing, and Holter monitoring.", "He is committed to ensuring equipment accuracy and patient comfort during tests."],
    department: "Diagnostic Lab",
    responsibilities: ["Performing ECG and stress tests", "Applying and managing Holter monitors", "Maintaining diagnostic equipment", "Assisting with echocardiograms"],
    socials: {} // No socials
  },
  {
    id: 'alice-brown',
    name: 'Alice Brown',
    role: 'Admin Staff',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'admin staff portrait welcoming',
    bio: ["Alice plays a pivotal role in ensuring our clinic operations run smoothly and efficiently.", "She's often the first friendly face or voice patients interact with, dedicated to providing excellent administrative support."],
    department: "Administration",
    responsibilities: ["Scheduling appointments", "Managing patient records and billing", "Handling patient inquiries and communication", "Coordinating referrals"],
    socials: {
      linkedin: 'https://linkedin.com/in/alicebrown_placeholder'
    }
  },
  {
    id: 'robert-jones',
    name: 'Robert Jones',
    role: 'Surgical Assistant',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'surgical assistant portrait focused',
    bio: ["Robert is a dedicated surgical assistant with extensive experience in cardiac procedures.", "He works closely with our surgeons to ensure optimal patient outcomes in the operating room."],
    department: "Surgical Team",
    responsibilities: ["Preparing operating rooms and sterile equipment", "Assisting surgeons during procedures", "Post-operative patient monitoring", "Maintaining surgical inventory"],
    socials: {
      x: 'https://x.com/robertjones_placeholder'
    }
  },
  {
    id: 'lisa-green',
    name: 'Lisa Green',
    role: 'Cardiac Nurse',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'nurse portrait smiling woman',
    bio: ["Lisa brings warmth and expertise to her role as a cardiac nurse, focusing on patient advocacy and comprehensive care.", "She has a passion for preventive cardiology education and empowers patients to take active roles in their health."],
    department: "Outpatient Clinic",
    responsibilities: ["Conducting patient assessments", "Developing and implementing nursing care plans", "Community health outreach and education programs", "Managing patient follow-ups"],
    socials: {
      x: 'https://x.com/lisagreen_placeholder',
      linkedin: 'https://linkedin.com/in/lisagreen_placeholder'
    }
  },
  {
    id: 'mark-white',
    name: 'Mark White',
    role: 'Cardiology Technician',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'technician portrait serious man',
    bio: ["Mark is an expert in non-invasive cardiac imaging, ensuring our diagnostic capabilities are top-notch.", "He specializes in echocardiography and vascular ultrasound, providing critical data for patient diagnosis."],
    department: "Imaging Suite",
    responsibilities: ["Operating echocardiogram and ultrasound machines", "Analyzing cardiac and vascular images", "Collaborating with cardiologists on diagnostic reports", "Ensuring quality control for imaging equipment"],
    // No socials property means undefined, handled as no socials
  },
  {
    id: 'sandra-adams',
    name: 'Sandra Adams',
    role: 'Practice Manager',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'manager portrait professional woman',
    bio: ["Sandra oversees the daily operations of Chen Cardiology, ensuring a high standard of service and patient satisfaction.", "With a background in healthcare administration, she focuses on efficiency and team coordination."],
    department: "Management",
    responsibilities: ["Overseeing clinic operations", "Staff management and development", "Ensuring regulatory compliance", "Patient satisfaction initiatives"],
    socials: {
      linkedin: 'https://linkedin.com/in/sandraadams_placeholder'
    }
  },
  {
    id: 'kevin-harris',
    name: 'Kevin Harris',
    role: 'Clinical Research Coordinator',
    imageUrl: 'https://placehold.co/400x400.png',
    dataAiHint: 'researcher portrait thoughtful man',
    bio: ["Kevin manages our clinical trials and research projects, contributing to advancements in cardiac care.", "He is meticulous in data collection and ensuring ethical research practices."],
    department: "Research & Development",
    responsibilities: ["Coordinating clinical trials", "Managing research data and documentation", "Liaising with research partners", "Ensuring adherence to research protocols"],
    socials: {
      x: 'https://x.com/kevinharris_placeholder'
    }
  }
];


export default function OurTeamPage() {
  const roles = Array.from(new Set(teamMembersData.map(member => member.role))).sort();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-secondary text-center">
          <div className="container mx-auto px-6 lg:px-8">
            <Users className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="font-headline text-4xl md:text-5xl xl:text-6xl font-bold text-primary mb-6">
              Our Dedicated Team
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A collaborative multidisciplinary group of surgeons, cardiologists, care providers, technicians, and support staff dedicated to your well-being.
            </p>
          </div>
        </section>

        {/* Beyond Our Doctors Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-6">
                  The Power of Collaboration
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At Chen Cardiology, we believe that exceptional patient care is a team effort. While our renowned cardiologists lead the way, they are supported by a highly skilled and dedicated team of nursing professionals, experienced cardiac technicians, and compassionate administrative staff. 
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Every member of our team plays a crucial role in ensuring your experience is seamless, comfortable, and effective. From your first call to your post-procedure follow-up, you'll encounter professionals who are not only experts in their respective fields but also deeply committed to your health and peace of mind.
                </p>
                 <Link href="/#about" passHref legacyBehavior>
                  <Button size="lg" className="rounded-xl">
                    Meet Our Doctors <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Diverse medical team collaborating"
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
                  data-ai-hint="diverse medical team"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section id="meet-the-team" className="py-16 md:py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <BriefcaseMedical className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary mb-6">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore the profiles of our dedicated professionals. Use the filters to find team members by role or search by name.
              </p>
            </div>
            
            <TeamGalleryWrapper teamMembers={teamMembersData} allRoles={roles} />

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
              Your Health, Our Collective Priority
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Experience the difference that a truly collaborative and dedicated cardiac team can make.
            </p>
            <Link href="/#contact" passHref legacyBehavior>
              <Button size="lg" variant="secondary" className="rounded-xl text-base px-8 py-3">
                Contact Our Team Today
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
