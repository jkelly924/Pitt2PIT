import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import ComparisonTable from '../components/ComparisonTable';
import WhyChooseBatch from '../components/WhyChooseBatch';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="bg-white">
        <HowItWorks />
        <div className="max-w-7xl mx-auto px-4">
          <ComparisonTable />
          <WhyChooseBatch />
          <CallToAction />
        </div>
        <Footer />
      </div>
    </div>
  );
}
