import { siteContent } from "../../data/content";
import { Instagram } from "lucide-react";

export function SocialStrip() {
  return (
    <section className="bg-white pt-20">
      <div className="text-center mb-12">
        <a 
          href={`https://instagram.com/${siteContent.social.heading.replace('@', '')}`} 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-2xl md:text-3xl font-black uppercase tracking-tight hover:text-[#D32F2F] transition-colors"
        >
          <Instagram className="w-8 h-8" />
          {siteContent.social.heading}
        </a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-5">
        {siteContent.social.images.map((image, index) => (
          <div key={index} className="aspect-square relative group overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#D32F2F]/0 group-hover:bg-[#D32F2F]/20 transition-colors duration-300 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}
