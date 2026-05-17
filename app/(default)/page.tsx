export const metadata = {
  title: "Home - Quality Solutions 360",
  description:
    "Engineering efficiency IS the revenue strategy.",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import About from "@/components/about";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />

      <BusinessCategories />

      <FeaturesPlanet />

      <About />

      <LargeTestimonial />

      <Cta />
    </>
  );
}