export const siteContent = {
  seo: {
    title: "The Noodle Way | Authentic Vietnamese",
    metaDescription: "Experience the essence of Vietnam's signature dishes. Pho, Banh Mi, and more.",
  },
  navigation: [
    { label: "About", path: "/about" },
    { label: "Menu", path: "/menu" }, // Dedicated Page
    { label: "Gallery", path: "/gallery" }
  ],
  hero: {
    headline: "Vietnamese Flavors at Their Best",
    subhead: "Experience the Essence of Vietnam's Signature Dishes",
    cta: { label: "View Menu", link: "/menu" },
    images: {
      topLeft: "https://images.unsplash.com/photo-1710186012479-d79e9d2a7065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      topRight: "https://images.unsplash.com/photo-1696029741809-12b752232b2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      bottomLeft: "https://images.unsplash.com/photo-1743964817404-a6328e2333ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      bottomRight: "https://images.unsplash.com/photo-1724280984027-22b086d86878?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
    }
  },
  features: [
    { title: "Pho", desc: "Savor the richness...", icon: "bowl" },
    { title: "Banh Mi", desc: "Indulge in the perfect blend...", icon: "baguette" },
    { title: "Goi Cuon", desc: "Delight in freshness...", icon: "roll" }
  ],
  about: {
    heading: "Pure. Authentic. Delicious.",
    body: "Embark on a culinary journey to Vietnam - Right at your table.",
    badge: "Fresh Authentic Simple",
    images: [
        "https://images.unsplash.com/photo-1689649066342-b538b76b023e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    ]
  },
  actionSplit: {
    delivery: {
      heading: "Taste Vietnam's Finest from Anywhere",
      icon: "scooter",
      cta: { label: "Order Now", link: "/menu" }
    },
    reservation: {
      heading: "Reserve a Table",
      cta: { label: "Find a Table", link: "/#reservations" }
    }
  },
  social: {
    heading: "@mysitevietnamese",
    images: [
      { src: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80", alt: "Bowl of Pho" },
      { src: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=600&q=80", alt: "Street Lanterns" },
      { src: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=600&q=80", alt: "Chopsticks holding noodles" },
      { src: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80", alt: "Dumpling steamer" },
      { src: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80", alt: "Spring rolls" }
    ]
  },
  footer: {
    address: "500 Terry Francine Street, SF, CA",
    contact: "info@mysite.com",
    hours: "Mon-Fri: 8am - 8pm"
  },
  gallery: [
      "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1724280984027-22b086d86878?auto=format&fit=crop&w=800&q=80",
  ]
};

export const BRAND = {
  name: "THE RED NOODLE", // Keeping this for consistent branding usage if needed
  colors: {
    primary: "#D32F2F",
    surface: "#FFF8E1",
    white: "#FFFFFF",
    black: "#000000",
  },
};
