export type DayKey =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type TradingHours = {
  open: string;
  close: string;
};

export type RestaurantConfig = {
  name: string;
  tagline: string;
  suburb: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  googleMapsLink: string;
  googlePlaceId: string;
  orderingLink: string;
  reservationLink: string;
  clickAndCollectLink: string;
  qrCodeValue: string;
  social: {
    facebook: string;
    instagram: string;
    tiktok: string;
  };
  hours: Record<DayKey, TradingHours>;
  cuisine: string;
  priceRange: string;
  heroVideo: string;
  heroImage: string;
  establishedYear: number;
  whyChooseUs: Array<{
    icon: string;
    title: string;
    desc: string;
  }>;
};

export const RESTAURANT_CONFIG = {
  name: "Deccan Flavours",
  tagline: "Authentic South Indian & Deccan Cuisine in the Heart of Wentworthville",
  suburb: "Wentworthville",
  address: "Unit 4/80 Station St, Wentworthville NSW 2145, Australia",
  phone: "+61 2 9688 4234",
  email: "info@deccanflavours.com.au",
  website: "https://deccanflavours.com.au",
  googleMapsLink: "https://maps.google.com/?q=Deccan+Flavours+80+Station+St+Wentworthville+NSW",
  googlePlaceId: "",
  orderingLink: "https://www.ubereats.com/",
  reservationLink: "/reserve",
  clickAndCollectLink: "/order",
  qrCodeValue: "https://deccanflavours.com.au/order",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://instagram.com/",
    tiktok: "",
  },
  hours: {
    monday: { open: "11:00", close: "21:30" },
    tuesday: { open: "11:00", close: "21:30" },
    wednesday: { open: "11:00", close: "21:30" },
    thursday: { open: "11:00", close: "21:30" },
    friday: { open: "11:00", close: "22:30" },
    saturday: { open: "10:00", close: "22:30" },
    sunday: { open: "10:00", close: "21:30" },
  },
  cuisine: "South Indian · Deccan · Halal",
  priceRange: "$$",
  heroVideo: "/videos/biryani-hero.mp4",
  heroImage: "/images/hero-biryani.png",
  establishedYear: 2015,
  whyChooseUs: [
    {
      icon: "🍛",
      title: "Deccan Heritage",
      desc: "Recipes rooted in the royal kitchens of Hyderabad and the Deccan Plateau",
    },
    {
      icon: "🌱",
      title: "Fresh & Local",
      desc: "Australian produce, hand-ground masalas, and never a compromise on freshness",
    },
    {
      icon: "👨‍👩‍👧",
      title: "Welcoming Dine-in",
      desc: "A warm family table for groups, celebrations and everyday meals",
    },
    {
      icon: "🕌",
      title: "100% Halal",
      desc: "Fully halal-certified kitchen proudly serving Western Sydney's community",
    },
    {
      icon: "⚡",
      title: "Quick Delivery",
      desc: "Hot to your door via UberEats and DoorDash, or collect directly from us",
    },
    {
      icon: "🏅",
      title: "Community Favourite",
      desc: "Wentworthville's go-to for South Indian comfort food since 2015",
    },
  ],
} satisfies RestaurantConfig;
