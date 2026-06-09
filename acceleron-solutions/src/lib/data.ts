import { INDUSTRIES as INDUSTRY_MENU_ITEMS } from "@/features/industries/data/industries";

const INDUSTRY_MENU = INDUSTRY_MENU_ITEMS.map((industry) => ({
  label: industry.title,
  href: industry.href,
  desc: industry.menuDesc,
}));

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "SAP", href: "/services/sap", desc: "S/4HANA, RISE, HXM, CX, Analytics and managed services" },
      { label: "Salesforce", href: "/services/salesforce", desc: "Implementation, migration, Lightning, Sales Cloud and Service Cloud" },
      { label: "Zoho Suite", href: "/services/zoho", desc: "CRM, Books, People, Analytics, Workplace and ERP automation" },
      { label: "Software Development", href: "/services/software-development", desc: "Custom enterprise applications, web platforms and mobile apps" },
      { label: "IT Infrastructure", href: "/services/it-infrastructure", desc: "Network, cloud, email, AMC and managed operations" },
      { label: "Cyber Security", href: "/services/cyber-security", desc: "VAPT, ISO 27001, endpoint security and forensic response" },
      { label: "CXO Advisory", href: "/services/cxo-advisory", desc: "Technology roadmaps and strategic investment guidance" },
      { label: "Analytics", href: "/services/analytics", desc: "Data lakes, warehousing, visualization and reporting" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Vanijya", href: "/products/vanijya", desc: "Ecommerce for heavy engineering equipment customers" },
      { label: "FSM", href: "/products/fsm", desc: "AI-enabled field service and technician workflows" },
      { label: "LMS", href: "/products/lms", desc: "Lead-to-quote pipeline management integrated with ERP" },
      { label: "WOMS", href: "/products/woms", desc: "Work order orchestration across field operations" },
      { label: "Suraksha", href: "/products/suraksha", desc: "Safety, SOS and incident workflows for field teams" },
      { label: "QMS", href: "/products/qms", desc: "Workshop and quality management operations" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: INDUSTRY_MENU,
  },
  { label: "Insights", href: "/blogs" },
  { label: "Careers", href: "/careers" },
];

export const HERO_STATS = [
  { value: "80+", label: "years of Gainwell Group legacy" },
  { value: "300+", label: "technology and domain specialists" },
  { value: "8", label: "enterprise capability practices" },
  { value: "6", label: "countries in the operating network" },
];

export const STATS = [
  { value: 200, suffix: "+", label: "Projects Completed" },
  { value: 150, suffix: "+", label: "Enterprise Clients" },
  { value: 8, suffix: "+", label: "Service Practices" },
  { value: 300, suffix: "+", label: "Specialists" },
];

export const SERVICES = [
  {
    id: "sap",
    title: "SAP transformation",
    tagline: "Core ERP modernization",
    desc: "S/4HANA, RISE with SAP, analytics, HXM, CX, migration and managed services for business-critical enterprise environments.",
    href: "/services/sap",
    features: ["S/4HANA", "RISE with SAP", "Analytics", "Managed Services"],
  },
  {
    id: "salesforce",
    title: "Salesforce CRM",
    tagline: "Customer operations",
    desc: "Sales Cloud, Service Cloud, CPQ, Lightning Platform and migration programs that make customer workflows measurable.",
    href: "/services/salesforce",
    features: ["Sales Cloud", "Service Cloud", "CPQ", "Lightning"],
  },
  {
    id: "zoho",
    title: "Zoho business suite",
    tagline: "Process automation",
    desc: "Zoho CRM, Books, People, Payroll, Analytics and ERP implementations for leaner operating cycles.",
    href: "/services/zoho",
    features: ["CRM", "Books", "People", "Analytics"],
  },
  {
    id: "software-dev",
    title: "Software engineering",
    tagline: "Custom platforms",
    desc: "Secure web, mobile and enterprise software shaped around operations, integrations and long-term maintainability.",
    href: "/services/software-development",
    features: ["Web Apps", "Mobile Apps", "APIs", "Automation"],
  },
  {
    id: "it-infrastructure",
    title: "IT infrastructure",
    tagline: "Reliable foundations",
    desc: "Network design, cloud operations, email systems, monitoring and annual maintenance for resilient environments.",
    href: "/services/it-infrastructure",
    features: ["Cloud", "Network", "AMC", "Monitoring"],
  },
  {
    id: "cyber-security",
    title: "Cyber security",
    tagline: "Enterprise protection",
    desc: "Security programs covering VAPT, ISO 27001 readiness, endpoint protection, email defense and network forensics.",
    href: "/services/cyber-security",
    features: ["VAPT", "ISO 27001", "Endpoint", "Forensics"],
  },
];

export const INDUSTRIES = INDUSTRY_MENU_ITEMS;

export const WHY_ACCELERON = [
  {
    title: "Legacy with execution depth",
    desc: "Acceleron brings the institutional trust of Gainwell Group into modern SAP, Salesforce, cloud and software programs.",
  },
  {
    title: "Domain-led consulting",
    desc: "Teams combine technology delivery with field knowledge across mining, manufacturing, capital goods, logistics and utilities.",
  },
  {
    title: "Committed delivery models",
    desc: "Engagements are shaped around clear scope, accountable milestones, governance rhythms and measurable business outcomes.",
  },
  {
    title: "Security-aware engineering",
    desc: "Architecture, integrations and operations are designed with security, access control and continuity in mind from day one.",
  },
];

export const PRODUCTS = [
  {
    id: "vanijya",
    title: "Vanijya",
    subtitle: "Ecommerce platform",
    desc: "A commerce experience for heavy engineering customers, built around parts discovery, offers, ordering and delivery visibility.",
    href: "/products/vanijya",
    image: "https://acceleronsolutions.io/wp-content/uploads/2024/09/4.png",
  },
  {
    id: "fsm",
    title: "FSM",
    subtitle: "Field service management",
    desc: "Ticketing, technician updates and AI-assisted knowledge workflows for faster field service resolution.",
    href: "/products/fsm",
    image: "https://acceleronsolutions.io/wp-content/uploads/2024/09/2.png",
  },
  {
    id: "lms",
    title: "LMS",
    subtitle: "Lead management system",
    desc: "Lead capture and opportunity management integrated with SAP to support quotes, orders and invoicing.",
    href: "/products/lms",
    image: "https://acceleronsolutions.io/wp-content/uploads/2024/09/3.png",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Your dedication and expertise during our S/4HANA on RISE implementation made a meaningful difference to the project.",
    name: "BS Kameswar Rao",
    title: "Director",
    company: "Parasea Coal Mine Project (P) Ltd",
  },
  {
    id: 2,
    quote:
      "Acceleron began with a strong understanding of our business, which became key to a successful ERP implementation.",
    name: "Shashi Agarwal",
    title: "Chief Financial Officer",
    company: "Gainwell Engineering (P) Ltd",
  },
  {
    id: 3,
    quote:
      "We were able to implement SAP S/4HANA successfully with the guidance and commitment of the Acceleron team.",
    name: "Ashish K Poddar",
    title: "Chief Financial Officer",
    company: "Tulip Compression (P) Ltd",
  },
];

export const BLOGS = [
  {
    id: 1,
    title: "Creating a sustainable supply chain framework through smart sourcing",
    excerpt:
      "How sourcing strategy, technology visibility and process discipline can help enterprises build stronger supply chains.",
    href: "/blogs/sustainable-supply-chain",
    category: "Supply Chain",
    readTime: "5 min read",
    date: "Jun 3, 2025",
    image: "https://acceleronsolutions.io/wp-content/uploads/2024/09/blog1.jpg",
  },
  {
    id: 2,
    title: "The urgent need for digitization in mining companies",
    excerpt:
      "Mining organizations need connected data, automation and safer operating models to stay competitive and resilient.",
    href: "/blogs/digitization-mining",
    category: "Mining",
    readTime: "7 min read",
    date: "Jul 10, 2025",
    image: "https://acceleronsolutions.io/wp-content/uploads/2024/09/blog2.jpg",
  },
  {
    id: 3,
    title: "How digital transformation is reshaping business operations",
    excerpt:
      "A practical view of how automation, analytics and platform modernization are changing enterprise work.",
    href: "/blogs/future-of-work",
    category: "Digital Transformation",
    readTime: "8 min read",
    date: "Aug 21, 2025",
    image: "https://acceleronsolutions.io/wp-content/uploads/2024/09/66e83673c8aecb3687fcc680_Hero-Digital-Literacy-A-Non-Ne.jpg",
  },
];

export const TECH_PARTNERS = [
  "SAP",
  "Salesforce",
  "Zoho",
  "Oracle",
  "MySQL",
  "MongoDB",
  "Next.js",
  "React",
  "Node.js",
  "Python",
  "Power BI",
  "Azure",
];

export const CLIENTS = [
  "Parasea Coal Mine Project",
  "Gainwell Engineering",
  "Tulip Compression",
  "Aurora Resources",
  "Evergreen Mining",
  "Vector Components",
  "Nexus Manufacturing",
  "Helios Logistics",
  "Parcelway Solutions",
  "NorthGrid Energy",
  "BlueWave Utilities",
  "Atlas Construct",
  "Nexa Build",
  "CoreTech Systems",
  "Helix Machinery",
];
