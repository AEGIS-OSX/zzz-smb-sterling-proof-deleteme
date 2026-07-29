import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import BrewingStory from "@/app/components/BrewingStory";
import FlavorNotes from "@/app/components/FlavorNotes";
import Stockists from "@/app/components/Stockists";
import OrderCta from "@/app/components/OrderCta";

export default function Home() {
  return (
    <main id="top">
      <Nav />
      <Hero />
      <BrewingStory />
      <FlavorNotes />
      <Stockists />
      <OrderCta />
    </main>
  );
}
