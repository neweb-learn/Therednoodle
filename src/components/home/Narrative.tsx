import { siteContent } from "../../data/content";
import { RotatingBadge } from "../ui/RotatingBadge";

export function Narrative() {
  return (
    <section className="flex flex-col md:flex-row bg-black text-white min-h-[600px]">
      {/* Left Content */}
      <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center relative order-2 md:order-1">
        <div className="max-w-md mx-auto md:mx-0 space-y-8">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none text-[#D32F2F]">
            {siteContent.about.heading}
          </h2>
          <div className="w-24 h-1 bg-[#D32F2F]" />
          <p className="text-xl leading-relaxed text-gray-300">
            {siteContent.about.body}
          </p>
        </div>
        
        {/* Badge positioned on the edge */}
        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 md:translate-y-0 md:top-1/2 md:-right-16 z-10 hidden md:block">
           <RotatingBadge text={siteContent.about.badge + " • "} className="text-[#D32F2F] bg-white rounded-full" />
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 h-[400px] md:h-auto relative order-1 md:order-2">
        <img
          src="https://images.unsplash.com/photo-1629883466253-bcd51c13ca7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Chef preparing fresh noodles"
          className="absolute inset-0 w-full h-full object-cover"
        />
         {/* Mobile Badge */}
         <div className="absolute bottom-0 right-8 transform translate-y-1/2 md:hidden z-10">
           <RotatingBadge text={siteContent.about.badge + " • "} className="text-[#D32F2F] bg-white rounded-full w-24 h-24" />
        </div>
      </div>
    </section>
  );
}
