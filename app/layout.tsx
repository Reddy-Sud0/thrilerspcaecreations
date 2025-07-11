import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'ThrillscapeCreation - Amusement Parks & Entertainment Solutions',
  description: 'Leading provider of turnkey amusement park development, VR simulators, theme park rides, and entertainment solutions. From concept to reality.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}