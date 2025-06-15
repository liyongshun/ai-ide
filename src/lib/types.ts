export interface NavItem {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: NavItem[];
}

export interface Feature {
  name: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  content: string;
  author: {
    name: string;
    role: string;
    icon: React.ReactNode;
  };
} 