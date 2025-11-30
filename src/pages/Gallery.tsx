import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { siteContent } from "../data/content";
import { RotatingBadge } from "../components/ui/RotatingBadge";

export default function Gallery() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FFF8E1]">
      <Header />
      <main className="flex-grow">
         <section className="pt-20 pb-10 text-center space-y-6 px-4">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#D32F2F]">
              Gallery
            </h1>
            <p className="text-xl font-medium text-gray-700 max-w-2xl mx-auto">
              A visual feast of our culinary creations and vibrant atmosphere.
            </p>
         </section>

        <section className="px-4 pb-20">
           <div className="container mx-auto max-w-7xl">
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter="20px">
                    {siteContent.gallery.map((image, i) => (
                        <div key={i} className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                            <img
                                src={image}
                                style={{width: "100%", display: "block"}}
                                alt={`Gallery ${i + 1}`}
                                className="transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
