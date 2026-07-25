import {
  Service,
  PortfolioProject,
  ReadyProject,
  ProcessStep,
  TechItem,
  Testimonial,
  PricingPlan,
  FAQItem,
  BlogPost
} from '../types';

export const agencyStats = {
  yearsExperience: 8,
  projectsCompleted: 250,
  happyClients: 180,
  countriesServed: 32,
  uptimeGuarantee: "99.9%",
  avgSpeedScore: "98/100"
};

export const servicesData: Service[] = [
  {
    id: 'business-websites',
    title: 'Business Websites',
    description: 'Corporate and brand websites crafted with extreme attention to detail, lightning speed, and modern interactive elements.',
    iconName: 'Building2',
    category: 'core',
    popular: true,
    features: ['Custom Design Systems', 'CMS Integration', 'Multi-language Support', 'Lead Capture Optimization']
  },
  {
    id: 'portfolio-websites',
    title: 'Portfolio Websites',
    description: 'High-impact personal & agency showcase sites designed to leave unforgettable impressions on recruiters and high-value clients.',
    iconName: 'Briefcase',
    category: 'core',
    features: ['Interactive Case Studies', '3D & Motion FX', 'Project Filtering', 'Dark Mode Default']
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    description: 'Conversion-engineered landing pages built for SaaS launches, marketing campaigns, and product drops.',
    iconName: 'Layout',
    category: 'growth',
    popular: true,
    features: ['A/B Testing Setup', 'Sub-1s Load Speeds', 'Stripe/Checkout Flow', 'Analytics Tracking']
  },
  {
    id: 'saas-applications',
    title: 'SaaS Applications',
    description: 'End-to-end cloud-native SaaS platforms with authentication, subscription billing, multi-tenancy, and real-time data.',
    iconName: 'Layers',
    category: 'core',
    popular: true,
    features: ['OAuth & MFA Auth', 'Stripe Billing & Plans', 'User Dashboard', 'Role-Based Access Control']
  },
  {
    id: 'admin-dashboards',
    title: 'Admin Dashboards',
    description: 'Sophisticated data analytics portals with interactive charting, live metrics, and comprehensive resource management.',
    iconName: 'LayoutDashboard',
    category: 'core',
    features: ['Real-time WebSockets', 'Interactive Recharts/D3', 'Export CSV/PDF', 'Audit Logging']
  },
  {
    id: 'ecommerce-stores',
    title: 'E-commerce Stores',
    description: 'Headless storefronts built for maximum speed and conversion, powered by Shopify Hydrogen, Next.js, or custom backends.',
    iconName: 'ShoppingBag',
    category: 'core',
    features: ['Instant Search & Filter', 'Cart & One-click Checkout', 'Inventory Sync', 'Global Currency Support']
  },
  {
    id: 'booking-systems',
    title: 'Booking Systems',
    description: 'Automated reservation and appointment engines with calendar sync, automated SMS/Email reminders, and deposit payments.',
    iconName: 'CalendarCheck',
    category: 'specialized',
    features: ['Timezone Detection', 'Google Calendar Sync', 'Deposit Collection', 'Staff Allocation']
  },
  {
    id: 'crm-development',
    title: 'CRM Development',
    description: 'Tailored Customer Relationship Management software to streamline your sales pipelines, deal stages, and client comms.',
    iconName: 'Users',
    category: 'specialized',
    features: ['Custom Pipeline Stages', 'Email Automation', 'Activity Timelines', 'Sales Forecasting']
  },
  {
    id: 'custom-web-applications',
    title: 'Custom Web Applications',
    description: 'Complex web platforms engineered around your specific business logic, workflow automation, and proprietary algorithms.',
    iconName: 'Cpu',
    category: 'specialized',
    features: ['Tailored Architecture', 'Scalable Microservices', 'High Concurrency', 'Zero Tech Debt']
  },
  {
    id: 'api-integration',
    title: 'API Integration',
    description: 'Seamless integration with third-party APIs including OpenAI, Gemini, Stripe, Twilio, Salesforce, and custom REST/GraphQL endpoints.',
    iconName: 'Webhook',
    category: 'specialized',
    features: ['OAuth 2.0 Flow', 'Webhook Handling', 'Rate Limiting & Caching', 'Fallback Security']
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    description: 'Transform outdated legacy sites into modern, ultra-fast web apps that align with contemporary UI standards like Stripe and Vercel.',
    iconName: 'Sparkles',
    category: 'growth',
    features: ['Design System Upgrade', 'Core Web Vitals Boost', 'SEO Migration', 'Mobile Optimization']
  },
  {
    id: 'seo-optimization',
    title: 'SEO Optimization',
    description: 'Technical SEO audits, SSR/SSG setup, structured JSON-LD metadata, and speed improvements to rank #1 on search engines.',
    iconName: 'TrendingUp',
    category: 'growth',
    features: ['Schema Markup', 'Core Web Vitals 100/100', 'Sitemap Automation', 'Semantic HTML5']
  },
  {
    id: 'performance-optimization',
    title: 'Performance Optimization',
    description: 'Optimizing existing web applications to achieve 95+ Google PageSpeed scores, sub-second TTFB, and zero layout shifts.',
    iconName: 'Zap',
    category: 'growth',
    features: ['Bundle Splitting', 'Image CDN Optimization', 'Edge Caching', 'Memory Leak Fixes']
  },
  {
    id: 'website-maintenance',
    title: 'Website Maintenance',
    description: '24/7 proactive monitoring, security updates, daily backups, performance tuning, and on-demand content edits.',
    iconName: 'ShieldCheck',
    category: 'growth',
    features: ['Automated Backups', 'Security Patching', 'Uptime Monitoring', 'Dedicated Developer Hours']
  }
];

export const portfolioProjectsData: PortfolioProject[] = [
  {
    id: 'pulse-analytics',
    title: 'Pulse AI Analytics Platform',
    category: 'Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Enterprise real-time data monitoring dashboard with AI predictive trend forecasting.',
    fullDescription: 'Pulse AI is a next-generation observability suite designed for Fintech & DevTech startups. We engineered a custom WebGL rendering canvas combined with WebSockets for sub-10ms telemetry updates.',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'D3.js', 'Node.js', 'Express', 'Gemini API'],
    liveDemoUrl: 'https://example.com/pulse-demo',
    githubUrl: 'https://github.com/nexus-agency/pulse-analytics',
    metrics: [
      { label: 'Data Processing Speed', value: '1.2M events/sec' },
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Conversion Lift', value: '+310%' }
    ],
    problemStatement: 'The client needed a platform capable of rendering high-frequency financial time-series data without crashing browser memory.',
    solutionStatement: 'We built a custom virtualized grid renderer with WebWorker data filtering and server-side vector caching.',
    clientName: 'Pulse Technologies Inc. (San Francisco)'
  },
  {
    id: 'aura-saas',
    title: 'Aura Cloud Collaboration SaaS',
    category: 'SaaS',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Multi-tenant cloud workflow builder with live canvas editing and automated team notifications.',
    fullDescription: 'Aura empowers global remote teams to architect systems visually. Features multiplayer CRDT state sync, Stripe usage billing, and integrated workspace SSO.',
    technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Supabase', 'Stripe'],
    liveDemoUrl: 'https://example.com/aura-demo',
    githubUrl: 'https://github.com/nexus-agency/aura-saas',
    metrics: [
      { label: 'Active Monthly Users', value: '85,000+' },
      { label: 'Monthly Recurring Rev', value: '$120k ARR' },
      { label: 'Latency', value: '<30ms' }
    ],
    problemStatement: 'Legacy tools had high latency during multi-user simultaneous canvas editing.',
    solutionStatement: 'Implemented Yjs state synchronization over WebSockets with optimistic UI updates.',
    clientName: 'Aura Workspaces (London, UK)'
  },
  {
    id: 'lumina-ecommerce',
    title: 'Lumina Luxury Fashion Storefront',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Ultra-fast headless luxury fashion storefront with 3D interactive product viewers.',
    fullDescription: 'Lumina showcases premium streetwear through frictionless micro-interactions, instant filter transitions, and dynamic multi-currency checkout.',
    technologies: ['React', 'Three.js', 'Tailwind CSS', 'Shopify Storefront API', 'Vercel Edge'],
    liveDemoUrl: 'https://example.com/lumina-demo',
    githubUrl: 'https://github.com/nexus-agency/lumina-store',
    metrics: [
      { label: 'Page Load Time', value: '0.4s' },
      { label: 'Mobile Conversion Rate', value: '4.8%' },
      { label: 'Average Order Value', value: '+$140' }
    ],
    problemStatement: 'Previous Shopify theme was slow, dropping mobile checkout rates significantly.',
    solutionStatement: 'Built a headless custom React app hosted on Vercel Edge with instant instant-page prefetching.',
    clientName: 'Lumina Studio (Paris, France)'
  },
  {
    id: 'nexus-business',
    title: 'Vanguard Capital Partners Website',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'Corporate financial institution portal with interactive portfolio calculator and investor portal.',
    fullDescription: 'A modern, high-trust digital presence for a $500M venture capital fund, featuring dynamic portfolio showcase and automated investor document distribution.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Sanity CMS'],
    liveDemoUrl: 'https://example.com/vanguard-demo',
    metrics: [
      { label: 'Inbound Inquiries', value: '+240%' },
      { label: 'Bounce Rate', value: '22%' },
      { label: 'Client Trust Rating', value: '100%' }
    ],
    problemStatement: 'Old corporate site appeared outdated and lacked dynamic portfolio updating capabilities.',
    solutionStatement: 'Created a sleek dark-theme design with headless CMS control and interactive return calculators.',
    clientName: 'Vanguard Capital (New York)'
  },
  {
    id: 'hyper-landing',
    title: 'HyperScale AI Product Landing Page',
    category: 'Landing Page',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'High-converting interactive landing page featuring animated product walkthroughs and interactive pricing.',
    fullDescription: 'Designed specifically to support HyperScale AI’s TechCrunch Product Hunt launch, driving over 15,000 signups on day one.',
    technologies: ['React', 'Tailwind CSS', 'Motion', 'Canvas FX', 'Vercel Analytics'],
    liveDemoUrl: 'https://example.com/hyperscale-demo',
    githubUrl: 'https://github.com/nexus-agency/hyperscale-landing',
    metrics: [
      { label: 'Launch Day Signups', value: '15,400' },
      { label: 'Conversion Rate', value: '14.2%' },
      { label: 'Product Hunt Rank', value: '#1 Product of Day' }
    ],
    problemStatement: 'Needed an extraordinary visual story that converted cold traffic into product waitlist leads.',
    solutionStatement: 'Engineered scroll-linked animations and live interactive AI output previews.',
    clientName: 'HyperScale Labs (Austin, TX)'
  },
  {
    id: 'orbit-crm',
    title: 'Orbit Real Estate CRM Dashboard',
    category: 'Dashboard',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    shortDescription: 'All-in-one property management dashboard with interactive map view and contract e-signatures.',
    fullDescription: 'Orbit provides real estate agencies with complete lead tracking, property pipeline management, automated tour scheduling, and document management.',
    technologies: ['React', 'TypeScript', 'Google Maps API', 'Tailwind CSS', 'Express', 'MongoDB'],
    liveDemoUrl: 'https://example.com/orbit-crm',
    metrics: [
      { label: 'Hours Saved/Agent', value: '18 hrs/week' },
      { label: 'Deal Close Rate', value: '+38%' },
      { label: 'Properties Managed', value: '12,000+' }
    ],
    problemStatement: 'Agents were overwhelmed by fragmented tools for property tracking, tours, and contracts.',
    solutionStatement: 'Unified all workflows into a single drag-and-drop dashboard with Google Maps cluster visualization.',
    clientName: 'Orbit Realty Group (Miami, FL)'
  }
];

export const readyProjectsData: ReadyProject[] = [
  {
    id: 'ready-restaurant',
    name: 'Savoria - Restaurant & Table Booking',
    type: 'Restaurant / Hospitality',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    price: 14999,
    originalPrice: 29999,
    status: 'Available Now',
    features: ['Online Table Reservation', 'Interactive Digital Menu', 'Razorpay/UPI Food Ordering', 'Admin Kitchen Display'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express'],
    previewUrl: 'https://example.com/demo/restaurant',
    customizationIncluded: ['Logo & Branding Replacement', 'Menu Data Import', 'Razorpay/UPI Gateway Setup', 'Color Theme Customization']
  },
  {
    id: 'ready-gym',
    name: 'FitPulse - Gym & Membership System',
    type: 'Gym & Fitness',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    price: 12999,
    originalPrice: 24999,
    status: 'Available Now',
    features: ['Member Portal & QR Check-in', 'Trainer Schedule Booking', 'Recurring Subscription Payments', 'Workout Log Tracker'],
    techStack: ['React', 'Tailwind CSS', 'Supabase', 'Razorpay', 'Framer Motion'],
    previewUrl: 'https://example.com/demo/gym',
    customizationIncluded: ['Membership Tiers Config', 'Brand Colors', 'Payment Gateway Integration']
  },
  {
    id: 'ready-school',
    name: 'EduClass - School ERP & Parent Portal',
    type: 'Education',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    price: 24999,
    originalPrice: 49999,
    status: 'Available Now',
    features: ['Student Attendance & Marks', 'Parent Progress Dashboard', 'Fee Payment Gateway', 'Teacher Homework Manager'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Express', 'MongoDB'],
    previewUrl: 'https://example.com/demo/school-erp',
    customizationIncluded: ['School Logo & Details', 'Grade System Configuration', 'Database Deployment']
  },
  {
    id: 'ready-clinic',
    name: 'MediCare - Clinic & Patient Portal',
    type: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    price: 19999,
    originalPrice: 39999,
    status: 'Available Now',
    features: ['Doctor Appointment Scheduler', 'Patient Prescription Records', 'SMS/WhatsApp Reminders', 'Doctor Teleconsult Interface'],
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'Firebase Auth & Firestore'],
    previewUrl: 'https://example.com/demo/clinic',
    customizationIncluded: ['Specialty Departments Setup', 'Doctor Schedules Setup', 'WhatsApp Gateway Integration']
  },
  {
    id: 'ready-hotel',
    name: 'GrandStay - Hotel & Resort Booking Platform',
    type: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    price: 21999,
    originalPrice: 44999,
    status: 'Available Now',
    features: ['Room Availability Calendar', 'INR & UPI Booking Engine', 'Guest Reviews System', 'Admin Room Inventory Manager'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Express', 'Supabase'],
    previewUrl: 'https://example.com/demo/hotel',
    customizationIncluded: ['Room Category Import', 'Seasonal Rate Setup', 'Domain & SSL Deployment']
  },
  {
    id: 'ready-realestate',
    name: 'UrbanSpace - Real Estate Portal',
    type: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    price: 18999,
    originalPrice: 35999,
    status: 'Available Now',
    features: ['Property Map Search', 'Home Loan EMI Calculator', 'Agent Lead Contact Form', 'Virtual 360 Tour Embeds'],
    techStack: ['React', 'Tailwind CSS', 'Google Maps API', 'Node.js'],
    previewUrl: 'https://example.com/demo/real-estate',
    customizationIncluded: ['Listing Data Import', 'Agent Profile Configuration', 'Custom Filter Criteria']
  },
  {
    id: 'ready-construction',
    name: 'BuildTech - Construction Company Site',
    type: 'Corporate Construction',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80',
    price: 12499,
    originalPrice: 24999,
    status: 'Available Now',
    features: ['Project Portfolio Showcase', 'Equipment Specs Directory', 'RFQ Cost Estimator', 'Safety Compliance Certificates'],
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    previewUrl: 'https://example.com/demo/construction',
    customizationIncluded: ['Project Images Upload', 'Company Credentials Setup', 'Quote Request Email Config']
  },
  {
    id: 'ready-lms',
    name: 'SkillForge - Online Course Platform',
    type: 'EdTech / LMS',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80',
    price: 22999,
    originalPrice: 45999,
    status: 'Available Now',
    features: ['Video Lesson Player', 'Quiz & Certificate Engine', 'Instructor Payout System', 'Student Discussion Forum'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Express', 'Supabase'],
    previewUrl: 'https://example.com/demo/lms',
    customizationIncluded: ['Course Catalog Setup', 'Video Host Setup (Vimeo/Mux)', 'Payment Gateway Setup']
  },
  {
    id: 'ready-hr',
    name: 'PeopleOps - HR & Payroll System',
    type: 'SaaS / Internal Tools',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    price: 24999,
    originalPrice: 49999,
    status: 'Available Now',
    features: ['Employee Directory & Onboarding', 'Leave & Attendance Tracking', 'GST & Payslip Generator', 'Performance Appraisal Engine'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    previewUrl: 'https://example.com/demo/hr',
    customizationIncluded: ['Company Org Chart Config', 'Leave Policy Setup', 'PDF Payslip Template Branding']
  },
  {
    id: 'ready-invoice',
    name: 'BillQuick - Invoice Generator & Billing',
    type: 'Finance Tool',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    price: 9999,
    originalPrice: 19999,
    status: 'Available Now',
    features: ['Instant GST PDF Invoice Generator', 'Client Recurring Invoices', 'Razorpay UPI Payment Links', 'Indian Tax & GST Logic'],
    techStack: ['React', 'Tailwind CSS', 'jsPDF', 'Node.js'],
    previewUrl: 'https://example.com/demo/invoice',
    customizationIncluded: ['GSTIN Address & Logo Header', 'Tax Compliance Rules', 'Email Dispatch Setup']
  },
  {
    id: 'ready-inventory',
    name: 'StockPro - Inventory & Warehousing',
    type: 'Operations Tool',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    price: 16999,
    originalPrice: 32999,
    status: 'Available Now',
    features: ['Barcode Scanner Reader', 'Low Stock Alert Trigger', 'Multi-warehouse Transfer', 'Supplier Purchase Orders'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Express', 'SQLite/PostgreSQL'],
    previewUrl: 'https://example.com/demo/inventory',
    customizationIncluded: ['Product SKUs Bulk Import', 'Alert Threshold Config', 'Cloud Server Hosting']
  },
  {
    id: 'ready-salon',
    name: 'GlowUp - Salon & Spa Booking App',
    type: 'Beauty & Lifestyle',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    price: 11999,
    originalPrice: 22999,
    status: 'Available Now',
    features: ['Stylist Slot Booking', 'Service Price Catalog', 'Automated WhatsApp Reminders', 'Client Loyalty Points Tracker'],
    techStack: ['React', 'Tailwind CSS', 'Firebase Auth', 'Twilio/WhatsApp API'],
    previewUrl: 'https://example.com/demo/salon',
    customizationIncluded: ['Salon Services Menu Config', 'Stylist Profiles Upload', 'SMS/WhatsApp Template Customization']
  }
];

export const processStepsData: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Discovery & Consultation',
    description: 'We dive deep into your business goals, target audience, technical constraints, and competitive positioning.',
    deliverables: ['Project Scope Document', 'Technical Architecture Plan', 'Fixed Timeline & Budget'],
    duration: '1-2 Days'
  },
  {
    stepNumber: 2,
    title: 'Planning & Strategy',
    description: 'We craft detailed user flow maps, database schemas, API specs, and component architecture diagrams.',
    deliverables: ['User Flow Maps', 'Database Schema Blueprint', 'UX Wireframes'],
    duration: '2-3 Days'
  },
  {
    stepNumber: 3,
    title: 'UI/UX Design',
    description: 'High-fidelity interactive visual designs crafted in Figma following modern standards like Linear and Vercel.',
    deliverables: ['Interactive Figma Prototypes', 'Custom Design System', 'Component Style Guide'],
    duration: '3-5 Days'
  },
  {
    stepNumber: 4,
    title: 'Development',
    description: 'Clean, modular, production-ready code with responsive layouts, smooth motion, and robust backend integrations.',
    deliverables: ['Modular React/Next.js Codebase', 'API Proxy Routes', 'Clean Commit History'],
    duration: '1-3 Weeks'
  },
  {
    stepNumber: 5,
    title: 'Testing & QA',
    description: 'Rigorous cross-browser testing, accessibility (WCAG AA) verification, security audits, and speed optimizations.',
    deliverables: ['Lighthouse 95+ Audit Report', 'Cross-Device QA Signoff', 'Security Audit'],
    duration: '2-4 Days'
  },
  {
    stepNumber: 6,
    title: 'Deployment & Launch',
    description: 'Seamless deployment to Cloud Run, Vercel, AWS, or GitHub Pages with custom domain and SSL setup.',
    deliverables: ['Live Production Deployment', 'Custom Domain & SSL', 'CI/CD Pipeline Setup'],
    duration: '1 Day'
  },
  {
    stepNumber: 7,
    title: 'Support & Growth',
    description: 'Post-launch monitoring, performance tuning, regular security updates, and feature iterations.',
    deliverables: ['30 Days Free Support', 'Admin Video Documentation', 'SLA Maintenance Plan'],
    duration: 'Ongoing'
  }
];

export const techStackData: TechItem[] = [
  { name: 'HTML5', category: 'Frontend', iconName: 'Code', description: 'Semantic HTML5 for high accessibility & SEO.' },
  { name: 'CSS3', category: 'Frontend', iconName: 'Palette', description: 'Modern CSS Grid, Flexbox, Animations & Custom Variables.' },
  { name: 'JavaScript', category: 'Frontend', iconName: 'FileCode', description: 'ESNext features with high runtime performance.' },
  { name: 'TypeScript', category: 'Frontend', iconName: 'Code2', description: 'Strict type safety preventing runtime errors across full stack.' },
  { name: 'React', category: 'Frontend', iconName: 'Atom', description: 'React 19 with hooks, context, and optimized component structure.' },
  { name: 'Next.js', category: 'Frontend', iconName: 'Globe', description: 'App Router, Server Components, SSR, SSG, and edge routing.' },
  { name: 'Node.js', category: 'Backend', iconName: 'Server', description: 'Asynchronous event-driven runtime for scalable microservices.' },
  { name: 'Express', category: 'Backend', iconName: 'Terminal', description: 'Fast, unopinionated, minimal web framework for API proxying.' },
  { name: 'MongoDB', category: 'Database', iconName: 'Database', description: 'NoSQL document database for dynamic schema flexibility.' },
  { name: 'Firebase', category: 'Database', iconName: 'Flame', description: 'Real-time Firestore, Auth, Storage, and Security Rules.' },
  { name: 'Supabase', category: 'Database', iconName: 'Zap', description: 'Open-source Postgres alternative with instant GraphQL/REST APIs.' },
  { name: 'Tailwind CSS', category: 'Frontend', iconName: 'Layers', description: 'Utility-first CSS framework for rapid responsive styling.' },
  { name: 'Bootstrap', category: 'Frontend', iconName: 'LayoutGrid', description: 'Enterprise UI grid systems & accessible legacy components.' },
  { name: 'Git', category: 'Tools', iconName: 'GitBranch', description: 'Version control with branching strategies & merge reviews.' },
  { name: 'GitHub', category: 'Tools', iconName: 'Github', description: 'Automated CI/CD Workflows, GitHub Actions, & Pull Requests.' },
  { name: 'Docker', category: 'DevOps & Cloud', iconName: 'Container', description: 'Containerized application environments for Cloud Run & Kubernetes.' },
  { name: 'Vercel', category: 'DevOps & Cloud', iconName: 'Triangle', description: 'Global edge network hosting with instant previews.' },
  { name: 'AWS', category: 'DevOps & Cloud', iconName: 'Cloud', description: 'EC2, S3, Lambda, CloudFront, & ECS enterprise infrastructure.' }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Marcus Vance',
    role: 'Co-Founder & CTO',
    company: 'Pulse AI Labs',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    content: 'Nexus delivered our complex real-time analytics dashboard 2 weeks ahead of schedule. The site speed is incredible and our conversion rate jumped 300% on launch week!',
    rating: 5,
    projectType: 'SaaS Dashboard'
  },
  {
    id: 'test-2',
    name: 'Elena Rostova',
    role: 'VP of Product',
    company: 'Aura Cloud Workspaces',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    content: 'Working with Nexus was hands-down the best agency experience we have ever had. The Linear-level polish, attention to micro-interactions, and code quality are unmatched.',
    rating: 5,
    projectType: 'Web Application'
  },
  {
    id: 'test-3',
    name: 'David Chen',
    role: 'Head of Growth',
    company: 'Lumina Fashion Group',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: 'Our headless e-commerce migration executed flawlessly. Page load times dropped from 3.8s to 0.4s and mobile sales skyrocketed overnight. Highly recommended!',
    rating: 5,
    projectType: 'E-commerce Store'
  },
  {
    id: 'test-4',
    name: 'Sophia Thorne',
    role: 'Managing Director',
    company: 'Vanguard Capital',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    content: 'Nexus transformed our brand image completely. Institutional investors consistently compliment us on how clean, modern, and trustworthy our website feels.',
    rating: 5,
    projectType: 'Corporate Website'
  }
];

export const pricingPlansData: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Package',
    subtitle: 'Perfect for local Indian businesses, shops, startups & landing pages',
    price: '₹14,999',
    oneTimePrice: '₹14,999',
    period: 'one-time',
    description: 'High-converting single or multi-page website built with extreme speed, WhatsApp chat integration & top SEO standards.',
    features: [
      'Up to 5 Custom Pages',
      'Mobile First Responsive Design',
      'Tailwind CSS + Framer Motion',
      'Contact Form & WhatsApp Direct Chat',
      'Google Maps & Local SEO Setup',
      'Lighthouse Speed Score 98+',
      '14 Days Dedicated Post-Launch Support'
    ],
    ctaText: 'Get Started'
  },
  {
    id: 'business',
    name: 'Business Pro',
    subtitle: 'Ideal for growing Indian SMEs, SaaS platforms, and online stores',
    price: '₹39,999',
    oneTimePrice: '₹39,999',
    period: 'one-time',
    popular: true,
    description: 'Full custom web application or eCommerce store with database, user auth, Razorpay/UPI payments & admin dashboard.',
    features: [
      'Up to 15 Custom Pages / Views',
      'Full Stack Architecture (Node/Express/MongoDB)',
      'User Authentication & Role Management',
      'Razorpay / UPI / Cashfree Payment Gateways',
      'Admin Analytics & Order Dashboard',
      'Interactive Animations & Motion FX',
      'WhatsApp Order/Lead Notifications',
      '30 Days Dedicated Support'
    ],
    ctaText: 'Start Business Project'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Suite',
    subtitle: 'For large Indian enterprises, multi-branch ERPs, and complex SaaS',
    price: '₹89,999+',
    oneTimePrice: '₹89,999+',
    period: 'custom',
    description: 'Tailored enterprise-grade web platform with GST invoice generator, AI pipelines, high concurrency microservices & SLA support.',
    features: [
      'Unlimited Pages & Custom Views',
      'Custom Microservices Architecture',
      'GST Invoice Generator & Tax Rules',
      'Gemini / AI Model API Integrations',
      'Real-time WebSockets Engine',
      'Custom Design System & Figma UI',
      'Automated CI/CD Pipeline & Cloud Hosting',
      'Dedicated Tech Lead & 90 Days SLA'
    ],
    ctaText: 'Contact Enterprise Team'
  }
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How long does a typical web project take from start to finish?',
    answer: 'Timeline depends on project scope. A Starter landing page takes 1-2 weeks. A complete Business Pro platform or SaaS app takes 3-5 weeks. Ready Projects can be customized and deployed in as little as 48 hours!',
    category: 'general'
  },
  {
    id: 'faq-2',
    question: 'Will I own 100% of the code and intellectual property?',
    answer: 'Yes! Upon final payment, full intellectual property rights, code repositories, design assets, and administrative access are completely transferred to you with zero royalty fees.',
    category: 'general'
  },
  {
    id: 'faq-3',
    question: 'What tech stack do you recommend for high performance?',
    answer: 'We specialize in React, TypeScript, Next.js, Tailwind CSS, Framer Motion, and Node.js. For databases, we leverage Supabase, Firebase, MongoDB, or PostgreSQL. This stack provides sub-second load times, infinite scaling, and zero security vulnerabilities.',
    category: 'tech'
  },
  {
    id: 'faq-4',
    question: 'How do ready-to-buy projects work?',
    answer: 'Our Ready Projects are fully built, production-ready web applications. Once you select a ready project, our team customizes your branding, logo, colors, pricing models, and payment credentials, and deploys it to your custom domain within 48 hours.',
    category: 'process'
  },
  {
    id: 'faq-5',
    question: 'What is your payment structure?',
    answer: 'We typically split payments into 50% upfront deposit upon contract signing and 50% upon final launch and delivery. For Ready Projects, payment is 100% upfront or split 50/50 prior to customization.',
    category: 'pricing'
  },
  {
    id: 'faq-6',
    question: 'Do you offer ongoing website maintenance and support?',
    answer: 'Yes! Every project includes 14 to 90 days of free support. After that, we offer optional monthly SLA retainer plans for security updates, backups, server optimization, and continuous feature additions.',
    category: 'pricing'
  },
  {
    id: 'faq-7',
    question: 'Can you integrate AI features like Gemini or ChatGPT into our site?',
    answer: 'Absolutely. We are experts in AI API integrations, including Gemini 2.5/3.0, custom prompt engineering, AI chatbots, vector search, image synthesis, and automated document processors.',
    category: 'tech'
  },
  {
    id: 'faq-8',
    question: 'Can you work with our existing design or legacy backend?',
    answer: 'Yes! We can build frontend interfaces from existing Figma files or refactor legacy monolithic backends into high-speed modern APIs without disrupting your live traffic.',
    category: 'process'
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Why Sub-Second Page Speed is the #1 Growth Lever in 2026',
    excerpt: 'Discover how modern edge architecture and React 19 performance optimizations directly boost conversion rates and organic search rankings.',
    content: 'In 2026, user patience is measured in milliseconds. Studies show every 100ms delay in page load drops conversion rates by 7%. In this deep dive, we explore how server components, edge caching, and atomic CSS drastically reduce load times...',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    category: 'Engineering',
    date: 'July 18, 2026',
    readTime: '5 min read',
    author: {
      name: 'Alex Mercer',
      role: 'Principal Architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80'
    }
  },
  {
    id: 'blog-2',
    title: 'Building Linear-Grade Micro-Interactions with Tailwind & Motion',
    excerpt: 'Step-by-step guide on creating tactile, fluid UI controls that make web applications feel like native desktop software.',
    content: 'Design systems like Linear, Vercel, and Stripe have redefined user expectations. We break down the exact spring physics, border glow effects, and keyboard navigation patterns that bring Web UI to life...',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    category: 'UI/UX Design',
    date: 'July 10, 2026',
    readTime: '7 min read',
    author: {
      name: 'Sophia Chen',
      role: 'Head of Product Design',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80'
    }
  },
  {
    id: 'blog-3',
    title: 'Headless E-commerce vs Monolithic Platforms: The ROI Analysis',
    excerpt: 'Comparing Shopify Hydrogen, Next.js, and traditional platforms for enterprise brand scaling.',
    content: 'When is it time to ditch traditional web builders for a custom headless frontend? We break down the costs, speed improvements, and flexibility tradeoffs for $1M+ ARR storefronts...',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    category: 'E-commerce',
    date: 'June 28, 2026',
    readTime: '6 min read',
    author: {
      name: 'David Vance',
      role: 'Lead Full-Stack Dev',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'
    }
  }
];
