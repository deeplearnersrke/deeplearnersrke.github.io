export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'core' | 'specialized' | 'growth';
  popular?: boolean;
  features: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Business' | 'SaaS' | 'E-commerce' | 'Dashboard' | 'Landing Page';
  image: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  liveDemoUrl: string;
  githubUrl?: string;
  metrics: { label: string; value: string }[];
  problemStatement: string;
  solutionStatement: string;
  clientName: string;
}

export interface ReadyProject {
  id: string;
  name: string;
  type: string;
  image: string;
  price: number;
  originalPrice: number;
  status: 'Available Now' | 'Reserved' | 'In Setup';
  features: string[];
  techStack: string[];
  previewUrl: string;
  customizationIncluded: string[];
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps & Cloud' | 'Tools';
  iconName: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  projectType: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  oneTimePrice: string;
  period: string;
  popular?: boolean;
  description: string;
  features: string[];
  ctaText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'process' | 'tech';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  budget: string;
  servicesNeeded: string[];
  details: string;
}
