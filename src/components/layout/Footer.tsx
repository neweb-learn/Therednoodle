import { siteContent, BRAND } from "../../data/content";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#FFF8E1] py-12 text-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D32F2F] text-white font-bold">
                R
              </div>
              <span className="text-xl font-black tracking-tighter">
                {BRAND.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Street Food Culture meets Modern Pop Art. Bold flavors, fresh ingredients, and high energy.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-[#D32F2F]">Navigate</h3>
            <ul className="space-y-2 text-sm">
              {siteContent.navigation.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="hover:text-[#D32F2F]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-[#D32F2F]">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>{siteContent.footer.address}</li>
              <li>{siteContent.footer.contact}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-[#D32F2F]">Hours</h3>
            <ul className="space-y-2 text-sm">
              <li>{siteContent.footer.hours}</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-black/10 pt-8 text-center text-sm opacity-60">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
