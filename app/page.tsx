import Footer from '@/components/footer/Footer';
import Hero from './sections/Hero';
import Navbar from '@/components/navbar/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen pt-[40px]">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
