import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { siteContent } from "../data/content";
import { RotatingBadge } from "../components/ui/RotatingBadge";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-black text-white py-24 px-4 md:px-8 relative overflow-hidden">
          <div className="container mx-auto max-w-5xl relative z-10 text-center space-y-8">
             <RotatingBadge text={siteContent.about.badge + " • "} className="text-black bg-[#FFF8E1] rounded-full mx-auto mb-8" />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none text-[#D32F2F]">
              Our Story
            </h1>
            <p className="text-xl md:text-3xl font-medium max-w-3xl mx-auto text-gray-300 leading-relaxed">
              {siteContent.about.body}
            </p>
          </div>
          {/* Abstract Background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
             <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#D32F2F] rounded-full filter blur-[120px]" />
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 px-4">
           <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                    {siteContent.about.heading}
                  </h2>
                  <div className="w-20 h-2 bg-[#D32F2F]" />
                  <p className="text-lg text-gray-600 leading-relaxed">
                    At The Red Noodle, we believe that food is more than just sustenance—it's an experience. 
                    Inspired by the bustling streets of Hanoi and the vibrant energy of modern pop art, 
                    we bring you a dining experience that is as bold visually as it is flavorful.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our chefs use traditional techniques passed down through generations, combining them with 
                    fresh, locally sourced ingredients to create dishes that honor the past while embracing the future.
                  </p>
              </div>
              <div className="relative">
                  <img 
                    src={siteContent.about.images[0]} 
                    alt="Restaurant Interior" 
                    className="rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                  />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#D32F2F] rounded-full -z-10" />
              </div>
           </div>
        </section>

        {/* Values Section */}
        <section className="bg-[#FFF8E1] py-24 px-4 text-center">
           <div className="container mx-auto max-w-4xl space-y-12">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                The Noodle Way
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                 {[
                   { title: "Fresh", desc: "Ingredients sourced daily from local markets." },
                   { title: "Authentic", desc: "Recipes that stay true to their roots." },
                   { title: "Simple", desc: "No fuss, just great food." }
                 ].map((value, i) => (
                   <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
                      <h3 className="text-2xl font-bold mb-4 text-[#D32F2F] uppercase">{value.title}</h3>
                      <p className="text-gray-600">{value.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
