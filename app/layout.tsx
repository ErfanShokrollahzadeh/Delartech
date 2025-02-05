import { Navbar } from '@/components/shared/navbar';
import Footer from '@/components/footer';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Delart',
  description: 'We\'re a team of passionate individuals dedicated to creating exceptional digital experiences.',
  icons: {
    icon: '/images/green-ball.jpg', // Path to your green ball icon
    // You can also specify different sizes and types if needed
    // apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}