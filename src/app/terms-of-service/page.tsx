import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-6 lg:px-8 py-16 pt-32 md:pt-40">
        <h1 className="font-headline text-4xl md:text-5xl font-bold mb-8 text-primary">Terms of Service</h1>
        <div className="prose prose-lg max-w-none text-foreground">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="font-headline text-2xl mt-6 mb-2">1. Agreement to Terms</h2>
          <p>
            By accessing or using our website, Chen Cardiology (the "Website"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, then you may not access the Website.
          </p>

          <h2 className="font-headline text-2xl mt-6 mb-2">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on Chen Cardiology's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on Chen Cardiology's Website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
          <p>
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by Chen Cardiology at any time.
          </p>

          <h2 className="font-headline text-2xl mt-6 mb-2">3. Disclaimer</h2>
          <p>
            The materials on Chen Cardiology's Website are provided on an 'as is' basis. Chen Cardiology makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p>
            Further, Chen Cardiology does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Website or otherwise relating to such materials or on any sites linked to this site. This website does not provide medical advice.
          </p>

          <h2 className="font-headline text-2xl mt-6 mb-2">4. Limitations</h2>
          <p>
            In no event shall Chen Cardiology or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Chen Cardiology's Website, even if Chen Cardiology or a Chen Cardiology authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>

          <h2 className="font-headline text-2xl mt-6 mb-2">5. Accuracy of Materials</h2>
          <p>
            The materials appearing on Chen Cardiology's Website could include technical, typographical, or photographic errors. Chen Cardiology does not warrant that any of the materials on its website are accurate, complete or current. Chen Cardiology may make changes to the materials contained on its website at any time without notice. However Chen Cardiology does not make any commitment to update the materials.
          </p>

          <h2 className="font-headline text-2xl mt-6 mb-2">6. Links</h2>
          <p>
            Chen Cardiology has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Chen Cardiology of the site. Use of any such linked website is at the user's own risk.
          </p>

          <h2 className="font-headline text-2xl mt-6 mb-2">7. Modifications</h2>
          <p>
            Chen Cardiology may revise these Terms of Service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.
          </p>

          <h2 className="font-headline text-2xl mt-6 mb-2">8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of California, USA and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
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
