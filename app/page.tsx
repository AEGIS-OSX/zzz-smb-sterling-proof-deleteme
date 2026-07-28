"use client";

import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import TheMethod from "@/app/components/TheMethod";
import NYCContext from "@/app/components/NYCContext";
import ServiceDetails from "@/app/components/ServiceDetails";
import Testimonials from "@/app/components/Testimonials";
import BookingForm from "@/app/components/BookingForm";

export default function Home() {
  return (
    <main id="top">
      <Nav />
      <Hero />
      <TheMethod />
      <NYCContext />
      <ServiceDetails />
      <Testimonials />
      <BookingForm />
    </main>
  );
}
