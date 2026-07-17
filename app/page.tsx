import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustedBy } from "@/components/trusted-by";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portfolio";
import { Process } from "@/components/process";
import { WhyUs } from "@/components/why-us";
import { TechStack } from "@/components/tech-stack";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <Portfolio />
      <Process />
      <WhyUs />
      <TechStack />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
