import './globals.css';
import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });
const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron'
});

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
      <body className={`${orbitron.className} ${orbitron.variable}`}>
        <Header />
        
          {children}
        <Footer/>
      </body>
    </html>
  );
}