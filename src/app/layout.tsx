import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Chen Cardiology',
  description: 'Expert cardiac care by Dr. Sarah Chen.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Public+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <Script
          src='https://cdn.jotfor.ms/agent/embedjs/01973c7171c87645a8f8cb025bf2bdeb6f45/embed.js?skipWelcome=1&maximizable=1'
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
