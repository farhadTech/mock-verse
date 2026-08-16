import Hero from "../components/landing/Hero";
import ExamModules from "../components/landing/ExamModules";
import WhyMockVerse from "../components/landing/WhyMockVerse";
import HowItWorks from "../components/landing/HowItWorks";
import CTA from "../components/landing/CTA";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <main>
      <Hero />

      <ExamModules />

      <WhyMockVerse />

      <HowItWorks />

      <CTA />

      <Footer />
    </main>
  );
};

export default Home;