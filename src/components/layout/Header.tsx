import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { siteContent, BRAND } from "../../data/content";
import { Button } from "../ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D32F2F] text-white font-bold">
            R
          </div>
          <span className="text-xl font-black tracking-tighter text-black font-sans">
            {BRAND.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {siteContent.navigation.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="text-sm font-medium hover:text-[#D32F2F] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white transition-colors"
          >
             <Link to="/#reservations">Reservations</Link>
          </Button>
          <Button
            className="rounded-full bg-[#D32F2F] text-white hover:bg-[#B71C1C] transition-colors"
            asChild
          >
            <Link to="/menu">Order Online</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white px-4 py-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {siteContent.navigation.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="text-lg font-medium py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-2">
             <Button
                asChild
                variant="outline"
                className="w-full rounded-full border-[#D32F2F] text-[#D32F2F]"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to="/#reservations">Reservations</Link>
              </Button>
              <Button
                className="w-full rounded-full bg-[#D32F2F] text-white"
                asChild
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to="/menu">Order Online</Link>
              </Button>
          </div>
        </div>
      )}
    </header>
  );
}
