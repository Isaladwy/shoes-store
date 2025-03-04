import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

export const metadata: Metadata = {
  title: 'Shoes-Shop',
  description: 'Generated by create next app',
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased `}>
        <Navbar />
        <main className="min-h-screen pt-[40px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
