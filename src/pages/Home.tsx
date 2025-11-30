import { Hero } from "../components/home/Hero";
import { Offerings } from "../components/home/Offerings";
import { Narrative } from "../components/home/Narrative";
import { ActionSplit } from "../components/home/ActionSplit";
import { SocialStrip } from "../components/home/SocialStrip";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Offerings />
        <Narrative />
        <ActionSplit />
        <SocialStrip />
      </main>
      <Footer />
    </div>
  );
}
