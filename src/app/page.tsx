import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Demo from '@/components/sections/Demo';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Demo />
      <Testimonials />
      <CTA />
    </>
  );
}