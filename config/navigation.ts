export interface NavItem {
  label: string;
  href: string;
}

export interface BrandConfig {
  name: string;
  logoSrc: string;
  altText?: string;
}

export const BRAND_INFO: BrandConfig = {
  name: "Expense Tracker",
  logoSrc: "/assets/logo.png",
  altText: "Expense Tracker Logo",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#rating" },
  { label: "FAQs", href: "#faqs" },
];
