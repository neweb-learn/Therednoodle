import { siteContent } from "../../data/content";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UtensilsCrossed } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-[#D32F2F] text-white min-h-[80vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Corner Images - Absolute Positioned */}
      <div className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 transform -translate-x-1/4 -translate-y-1/4 z-0 opacity-90">
        <img 
          src={siteContent.hero.images.topLeft} 
          alt="Vietnamese Food" 
          className="w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl rotate-12"
        />
      </div>
      <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 transform translate-x-1/4 -translate-y-1/4 z-0 opacity-90">
        <img 
          src={siteContent.hero.images.topRight} 
          alt="Vietnamese Food" 
          className="w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl -rotate-12"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 transform -translate-x-1/4 translate-y-1/4 z-0 opacity-90">
        <img 
          src={siteContent.hero.images.bottomLeft} 
          alt="Vietnamese Food" 
          className="w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl -rotate-45"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 transform translate-x-1/4 translate-y-1/4 z-0 opacity-90">
        <img 
          src={siteContent.hero.images.bottomRight} 
          alt="Vietnamese Food" 
          className="w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl rotate-45"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-none drop-shadow-lg">
          {siteContent.hero.headline}
        </h1>
        <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto opacity-90 drop-shadow-md">
          {siteContent.hero.subhead}
        </p>
        <Button
          asChild
          className="bg-white text-[#D32F2F] hover:bg-[#FFF8E1] hover:text-[#B71C1C] text-lg px-8 py-6 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl"
        >
          <Link to={siteContent.hero.cta.link}>{siteContent.hero.cta.label}</Link>
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-10 pointer-events-none">
        <UtensilsCrossed size={400} />
      </div>
    </section>
  );
}
