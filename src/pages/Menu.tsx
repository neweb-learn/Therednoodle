import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { BRAND } from "../data/content";

const MENU_CATEGORIES = [
  {
    title: "Noodle Soups",
    items: [
      { name: "Classic Beef Pho", price: "$14", desc: "24hr bone broth, rare steak, brisket, rice noodles." },
      { name: "Chicken Pho", price: "$13", desc: "Free-range chicken, clear broth, herbs." },
      { name: "Spicy Beef (Bun Bo Hue)", price: "$15", desc: "Lemongrass, chili oil, beef shank, thick vermicelli." },
    ]
  },
  {
    title: "Banh Mi",
    items: [
      { name: "The O.G.", price: "$9", desc: "Pate, ham, headcheese, mayo, cucumber, pickles, cilantro." },
      { name: "Grilled Pork", price: "$9", desc: "Charbroiled pork, scallion oil, pickled carrots." },
      { name: "Lemongrass Tofu", price: "$8", desc: "Crispy tofu, vegan mayo, soy glaze." },
    ]
  },
  {
    title: "Small Plates",
    items: [
      { name: "Summer Rolls", price: "$6", desc: "Shrimp, pork, lettuce, vermicelli, peanut sauce." },
      { name: "Crispy Spring Rolls", price: "$7", desc: "Minced pork, wood ear mushroom, fish sauce." },
      { name: "Chicken Wings", price: "$10", desc: "Fish sauce glaze, garlic, chili." },
    ]
  }
];

export default function Menu() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FFF8E1]">
      <Header />
      <main className="flex-grow py-20 px-4">
        <div className="container mx-auto max-w-4xl space-y-16">
          <div className="text-center space-y-4">
            <h1 className="text-6xl font-black uppercase tracking-tighter text-[#D32F2F]">Menu</h1>
            <p className="text-xl font-medium">Authentic flavors, made fresh daily.</p>
          </div>

          {MENU_CATEGORIES.map((cat) => (
            <section key={cat.title} className="space-y-8">
              <div className="flex items-center gap-4">
                <h2 className="text-3xl font-black uppercase">{cat.title}</h2>
                <div className="h-1 flex-grow bg-black/10" />
              </div>
              <div className="grid gap-8">
                {cat.items.map((item) => (
                  <div key={item.name} className="bg-white p-6 rounded-2xl shadow-sm flex justify-between items-start gap-4 hover:shadow-md transition-shadow">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                    <span className="text-xl font-bold text-[#D32F2F]">{item.price}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
