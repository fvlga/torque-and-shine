import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Services, Gallery, Trust } from "@/components/Sections";
import { PricingTable, Testimonials } from "@/components/PricingAndReviews";
import BookingForm from "@/components/BookingForm";
import { FAQAccordion, Footer } from "@/components/FaqAndFooter";

export default function Home() {
  return (
    <>
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-amber focus:px-4 focus:py-2 focus:text-asphalt"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Trust />
        <PricingTable />
        <Testimonials />
        <BookingForm />
        <FAQAccordion />
      </main>
      <Footer />
    </>
  );
}
