import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

const contentCategories = [
  {
    title: 'Articles',
    description: 'In-depth reads on cardiovascular care and clinic updates.',
    items: [
      {
        title: 'Understanding Atrial Fibrillation',
        href: '#',
        imageUrl: 'https://placehold.co/600x400.png',
        imageHint: 'doctor reviewing charts'
      },
    ],
  },
  {
    title: 'Podcasts',
    description: 'Listen to conversations with Dr. Chen and guests.',
    items: [
      {
        title: 'Heart Matters Episode 1',
        href: '#',
        imageUrl: 'https://placehold.co/600x400.png',
        imageHint: 'microphone in studio'
      },
    ],
  },
  {
    title: 'Videos',
    description: 'Short clips that explain conditions and treatments.',
    items: [
      {
        title: 'Understanding Hypertension',
        href: '#',
        imageUrl: 'https://placehold.co/600x400.png',
        imageHint: 'doctor speaking on camera'
      },
    ],
  },
  {
    title: 'Research',
    description: 'Summaries of the latest cardiology studies.',
    items: [
      {
        title: 'New Stent Technology',
        href: '#',
        imageUrl: 'https://placehold.co/600x400.png',
        imageHint: 'closeup of medical stent'
      },
    ],
  },
];

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-24 md:pt-32 pb-16">
        <section className="container mx-auto px-6 lg:px-8">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">News &amp; Content</h1>
          <p className="text-lg text-muted-foreground mb-8">Stay informed with the latest updates, insights, and educational materials from our team.</p>
          <div className="grid md:grid-cols-2 gap-8">
            {contentCategories.map((category) => (
              <Card key={category.title} className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.items.map((item) => (
                    <Link key={item.title} href={item.href} className="group block">
                      <div className="aspect-video rounded-md overflow-hidden mb-2 relative">
                        <Image src={item.imageUrl} alt={item.title} fill className="object-cover" data-ai-hint={item.imageHint} />
                      </div>
                      <p className="font-medium text-card-foreground group-hover:text-primary transition-colors">{item.title}</p>
                    </Link>
                  ))}
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary font-medium flex items-center group">
                    See all {category.title.toLowerCase()}
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
