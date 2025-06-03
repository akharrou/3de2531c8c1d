import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center px-4">
      <h1 className="text-6xl font-bold text-primary font-headline mb-4">404</h1>
      <h2 className="text-3xl font-semibold font-headline mb-6">Page Not Found</h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Link href="/">
        <Button size="lg" className="rounded-xl">
          Go Back to Homepage
        </Button>
      </Link>
    </div>
  );
}
