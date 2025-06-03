import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-6 lg:px-8 py-16 pt-32 md:pt-40">
        <h1 className="font-headline text-4xl md:text-5xl font-bold mb-8 text-primary">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none text-foreground">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="font-headline text-2xl mt-6 mb-2">Introduction</h2>
          <p>
            Welcome to Chen Cardiology. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at contact@chencardiology.com.
          </p>

          <h2 className="font-headline text-2xl mt-6 mb-2">Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our services, when you participate in activities on the Website (such as submitting our contact form) or otherwise when you contact us.
          </p>
          <p>The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following:</p>
          <ul>
            <li>Names</li>
            <li>Phone numbers</li>
            <li>Email addresses</li>
            <li>Mailing addresses</li>
            <li>Other similar data</li>
          </ul>

          <h2 className="font-headline text-2xl mt-6 mb-2">How We Use Your Information</h2>
          <p>
            We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>

          <h2 className="font-headline text-2xl mt-6 mb-2">Will Your Information Be Shared With Anyone?</h2>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
          </p>

          <h2 className="font-headline text-2xl mt-6 mb-2">How Long Do We Keep Your Information?</h2>
          <p>
            We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
          </p>

          <h2 className="font-headline text-2xl mt-6 mb-2">How Do We Keep Your Information Safe?</h2>
          <p>
            We aim to protect your personal information through a system of organizational and technical security measures.
          </p>
          
          <h2 className="font-headline text-2xl mt-6 mb-2">Your Privacy Rights</h2>
          <p>
            In some regions (like the European Economic Area and the UK), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information.
          </p>

          <h2 className="font-headline text-2xl mt-6 mb-2">Updates to This Notice</h2>
          <p>
            We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible.
          </p>

          <h2 className="font-headline text-2xl mt-6 mb-2">How Can You Contact Us About This Notice?</h2>
          <p>
            If you have questions or comments about this notice, you may email us at contact@chencardiology.com or by post to:
            <br />
            Chen Cardiology
            <br />
            123 Heartbeat Avenue
            <br />
            Cardio City, CA 90210
          </p>
          
          <div className="mt-12 text-center">
            <Link href="/">
              <Button size="lg" className="rounded-xl">
                Go Back to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
