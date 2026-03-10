import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsTicker from '@/components/StatsTicker';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import RecentAnalyses from '@/components/RecentAnalyses';
import DashboardPreview from '@/components/DashboardPreview';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const Index = () => {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="min-h-screen scroll-smooth bg-background font-body">
      <Navbar />
      <Hero />
      <StatsTicker />
      <Features />
      <HowItWorks />
      <RecentAnalyses />
      <DashboardPreview />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
