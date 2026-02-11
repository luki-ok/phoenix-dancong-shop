import HeroSection from "./components/home/HeroSection";
import CatalogSection from "./components/home/CatalogSection";
import AiAssistantSection from "./components/home/AiAssistantSection";
import InsightsSection from "./components/home/InsightsSection";
import { products } from "./data/products";

export default function Home() {

  return (
    <main className="tea-container space-y-16">
      <HeroSection />
      <CatalogSection products={products} />
      <AiAssistantSection />
      <InsightsSection />
    </main>
  );
}
