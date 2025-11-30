import { siteContent } from "../../data/content";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Utensils, Sandwich, Circle } from "lucide-react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "bowl":
      return Utensils;
    case "baguette":
      return Sandwich;
    case "roll":
      return Circle; // Using Circle as an abstract representation or potentially another icon like Nut/Cookie if available, but Circle is safe.
    default:
      return Utensils;
  }
};

export function Offerings() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {siteContent.features.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <div key={index} className="flex flex-col items-center text-center space-y-6 group">
                <div className="w-32 h-32 rounded-full bg-[#FFF8E1] flex items-center justify-center text-[#D32F2F] transition-transform group-hover:scale-110 duration-300">
                  <Icon size={64} strokeWidth={1.5} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-black uppercase tracking-tight text-black">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-600 max-w-xs mx-auto">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-20 text-center">
          <Button
            asChild
            className="bg-[#D32F2F] text-white hover:bg-[#B71C1C] text-lg px-10 py-6 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
          >
            <Link to="/menu">Order Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
