import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsTicker from '@/components/StatsTicker';
import Features from '@/components/Features';
import DashboardPreview from '@/components/DashboardPreview';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const Index = () => {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="min-h-screen bg-background font-body">
      <Navbar />
      <Hero />
      <StatsTicker />
      <Features />
      <DashboardPreview />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
