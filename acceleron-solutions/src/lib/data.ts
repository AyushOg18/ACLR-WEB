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
  { label: "Insights", href: "/insights" },
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

export const INSIGHT_CATEGORIES = [
  { id: "artificial-intelligence", label: "Artificial Intelligence" },
  { id: "data-analytics", label: "Data & Analytics" },
  { id: "enterprise-platforms", label: "Enterprise Platforms" },
  { id: "industry-transformation", label: "Industry Transformation" },
  { id: "cloud-infrastructure", label: "Cloud & Infrastructure" },
  { id: "cyber-security", label: "Cyber Security" },
  { id: "digital-operations", label: "Digital Operations" },
  { id: "customer-experience", label: "Customer Experience" },
];

export const INSIGHT_INDUSTRIES = [
  { id: "mining", label: "Mining" },
  { id: "manufacturing", label: "Discrete Manufacturing" },
  { id: "transportation-logistics", label: "Transportation & Logistics" },
  { id: "utilities", label: "Utilities" },
  { id: "engineering-construction", label: "Engineering & Construction" },
  { id: "capital-goods", label: "Capital Goods" },
];

export type InsightCategory = {
  id: string;
  label: string;
};

export type InsightIndustry = {
  id: string;
  label: string;
};

export type InsightSection = {
  title: string;
  description: string;
  bullets?: string[];
};

export type InsightArticle = {
  id: string;
  slug: string;
  href: string;
  title: string;
  excerpt: string;
  category: string;
  industry: string;
  tags: string[];
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  popularity: number;
  featured: boolean;
  trending: boolean;
  image: string;
  executiveSummary: string;
  pullQuote: string;
  sections: InsightSection[];
  keyTakeaways: string[];
  related: string[];
  type: 'Article' | 'Whitepaper' | 'Case Study' | 'Research Report';
};

export type ResearchReport = {
  id: string;
  title: string;
  description: string;
  cta: string;
  href: string;
};

export const RESEARCH_REPORTS = [
  {
    id: "platform-readiness",
    title: "Enterprise Platform Readiness Index",
    description:
      "A practical framework for assessing strategic platform maturity across operations, data and risk management.",
    cta: "Download report",
    href: "#",
  },
  {
    id: "industrial-cyber-resilience",
    title: "Industrial Cyber Resilience Guide",
    description:
      "A blueprint for securing critical industrial systems while preserving operational continuity.",
    cta: "View insights",
    href: "#",
  },
  {
    id: "ai-demand-signal",
    title: "AI Demand Signal Playbook",
    description:
      "A research-led approach to applying intelligence across forecasting, planning and customer engagement.",
    cta: "Download summary",
    href: "#",
  },
];

export const INSIGHTS: InsightArticle[] = [
  {
    id: "enterprise-platform-modernization",
    slug: "enterprise-platform-modernization",
    href: "/insights/enterprise-platform-modernization",
    title: "Enterprise platform modernization for resilient operations",
    excerpt:
      "How integrated platforms, analytics and cloud foundations create measurable business resiliency for manufacturing leaders.",
    category: "Enterprise Platforms",
    industry: "Discrete Manufacturing",
    tags: ["platform modernization", "operational resilience", "analytics"],
    author: "Meera Kapoor",
    authorRole: "Technology Strategy Lead",
    date: "Sep 12, 2025",
    readTime: "7 min read",
    popularity: 95,
    featured: true,
    trending: true,
    image: "https://acceleronsolutions.io/wp-content/uploads/2024/09/blog1.jpg",
    executiveSummary:
      "A practical framework for aligning enterprise platforms to outcomes such as productivity, risk reduction, and faster planning cycles.",
    pullQuote:
      "Modern enterprise platforms make strategy operational by connecting processes, data and governance across functions.",
    sections: [
      {
        title: "Why modern platforms matter",
        description:
          "Enterprises must move beyond isolated upgrades and toward platform strategies that drive agility, insight, and value across operations.",
      },
      {
        title: "From data silos to connected decisions",
        description:
          "A modern platform should unify transaction, analytic and compliance systems so teams can act from a single source of truth.",
        bullets: [
          "Consolidate core operations and analytics",
          "Embed data governance into business process",
          "Use automation to reduce manual reconciliation",
        ],
      },
      {
        title: "Measuring value in operations",
        description:
          "The most effective modernizations are defined by faster planning, improved forecasting and a lower total cost of ownership.",
      },
    ],
    keyTakeaways: [
      "Align platform modernization to measurable business outcomes.",
      "Invest in data governance as a platform foundation.",
      "Use enterprise automation to reduce risk and accelerate decisions.",
    ],
    related: ["sustainable-supply-chain-framework", "digitization-mining"],
    type: "Whitepaper"
  },
  {
    id: "sustainable-supply-chain-framework",
    slug: "sustainable-supply-chain-framework",
    href: "/insights/sustainable-supply-chain-framework",
    title: "Sustainable supply chain frameworks for resilient enterprises",
    excerpt:
      "How sourcing strategy, visibility and process discipline help organizations reduce risk while improving supplier performance.",
    category: "Industry Transformation",
    industry: "Transportation & Logistics",
    tags: ["supply chain", "sustainability", "visibility"],
    author: "Ravi Patel",
    authorRole: "Supply Chain Transformation Lead",
    date: "Jun 3, 2025",
    readTime: "6 min read",
    popularity: 88,
    featured: false,
    trending: true,
    image: "https://acceleronsolutions.io/wp-content/uploads/2024/09/blog2.jpg",
    executiveSummary:
      "This insight explains how stronger data, risk management and collaboration create a supply chain that supports both cost control and sustainability commitments.",
    pullQuote:
      "Resilient supply chains are built on clarity, accountability and the technologies that make both visible.",
    sections: [
      {
        title: "Connecting supplier networks",
        description:
          "Enterprises need a connected supplier ecosystem to manage costs, mitigate disruption and demonstrate sustainable compliance.",
      },
      {
        title: "Embedding visibility into sourcing",
        description:
          "Visibility is no longer a nice-to-have; it is a strategic capability for risk-aware procurement and operational continuity.",
        bullets: [
          "Centralize supplier performance metrics",
          "Standardize contract and compliance workflows",
          "Apply AI to identify early risk signals",
        ],
      },
      {
        title: "Balancing resilience with cost discipline",
        description:
          "The right operating model keeps service levels high while making inventory, logistics and supplier decisions more predictable.",
      },
    ],
    keyTakeaways: [
      "Design supply chain practices around transparency and responsiveness.",
      "Use analytics to convert risk signals into early actions.",
      "Align sustainability goals with execution and supplier accountability.",
    ],
    related: ["enterprise-platform-modernization", "data-strategy-digital-operations"],
    type: "Research Report"
  },
  {
    id: "digitization-mining",
    slug: "digitization-mining",
    href: "/insights/digitization-mining",
    title: "The urgent need for digitization in mining companies",
    excerpt:
      "Mining organizations need connected data, automation and safer operating models to stay competitive and resilient.",
    category: "Digital Operations",
    industry: "Mining",
    tags: ["digitization", "operations", "mining"],
    author: "Ananya Singh",
    authorRole: "Digital Operations Director",
    date: "Jul 10, 2025",
    readTime: "7 min read",
    popularity: 82,
    featured: false,
    trending: true,
    image: "https://acceleronsolutions.io/wp-content/uploads/2024/09/blog2.jpg",
    executiveSummary:
      "A disciplined digitization program can help mining operators combine operational control, safety and predictive planning into one business process.",
    pullQuote:
      "Digitization is not a technology project; it is the foundation for more reliable, safer and more profitable operations.",
    sections: [
      {
        title: "Closing the operational feedback loop",
        description:
          "Mining teams must connect field data with planning, maintenance and safety systems to improve responsiveness and reduce unplanned downtime.",
      },
      {
        title: "Enabling safer, smarter operations",
        description:
          "Automation and data insights help operators manage risk while improving asset utilization and workforce productivity.",
        bullets: [
          "Standardize real-time drill and asset reporting",
          "Use analytics for predictive maintenance",
          "Integrate safety processes into digital workflows",
        ],
      },
      {
        title: "From pilot projects to scaled impact",
        description:
          "The highest-value digitization initiatives are those that scale beyond a proof-of-concept and into business-as-usual practice.",
      },
    ],
    keyTakeaways: [
      "Connect field operations, maintenance and planning systems.",
      "Use predictive analytics to reduce downtime and risk.",
      "Create a digital operating model that can scale across sites.",
    ],
    related: ["enterprise-platform-modernization", "cyber-risk-posture-industrial-operations"],
    type: "Case Study"
  },
  {
    id: "cyber-risk-posture-industrial-operations",
    slug: "cyber-risk-posture-industrial-operations",
    href: "/insights/cyber-risk-posture-industrial-operations",
    title: "Strengthening cyber risk posture for industrial operations",
    excerpt:
      "Industrial businesses must balance operational performance with a cyber strategy that protects critical systems and regulatory continuity.",
    category: "Cyber Security",
    industry: "Capital Goods",
    tags: ["cybersecurity", "operations", "risk"],
    author: "Priya Nair",
    authorRole: "Cyber Risk Practice Lead",
    date: "Oct 2, 2025",
    readTime: "6 min read",
    popularity: 90,
    featured: false,
    trending: false,
    image: "https://acceleronsolutions.io/wp-content/uploads/2024/09/blog3.jpg",
    executiveSummary:
      "A structured cyber risk posture gives industrial operators the visibility they need to protect critical production systems and maintain regulatory compliance.",
    pullQuote:
      "Secure industrial operations require a practical blend of technology controls, process discipline and executive accountability.",
    sections: [
      {
        title: "Protecting mission-critical systems",
        description:
          "The most consequential risks in industrial settings are often those that affect safety, continuity and regulatory reporting.",
      },
      {
        title: "Embedding security into operations",
        description:
          "Security must be part of standard operating procedures rather than a separate function, with teams owning detection, response and recovery.",
        bullets: [
          "Apply segmented access to operational networks",
          "Establish clear incident response roles",
          "Monitor both IT and OT environments continuously",
        ],
      },
      {
        title: "Managing risk through governance",
        description:
          "Strong governance links cyber controls to business objectives and helps leaders make risk-informed investment decisions.",
      },
    ],
    keyTakeaways: [
      "Treat cyber resilience as part of operational excellence.",
      "Build security processes into industrial workflows.",
      "Maintain governance that connects risk to business outcomes.",
    ],
    related: ["enterprise-platform-modernization", "data-analytics-engineering-construction"],
    type: "Article"
  },
  {
    id: "ai-demand-forecasting-ecosystems",
    slug: "ai-demand-forecasting-ecosystems",
    href: "/insights/ai-demand-forecasting-ecosystems",
    title: "Applying AI to demand forecasting and planning ecosystems",
    excerpt:
      "Intelligent forecasting practices can improve planning accuracy, reduce inventory waste and strengthen customer responsiveness.",
    category: "Artificial Intelligence",
    industry: "Utilities",
    tags: ["AI", "forecasting", "planning"],
    author: "Daniel Roy",
    authorRole: "AI Strategy Director",
    date: "Nov 15, 2025",
    readTime: "8 min read",
    popularity: 92,
    featured: false,
    trending: true,
    image: "https://acceleronsolutions.io/wp-content/uploads/2024/09/blog4.jpg",
    executiveSummary:
      "Leveraging AI across forecasting and planning helps enterprises create more predictable operations and faster customer response cycles.",
    pullQuote:
      "AI becomes valuable when it enhances planning decisions and creates a repeatable process for continuous improvement.",
    sections: [
      {
        title: "Making planning more predictive",
        description:
          "AI models should be used to enrich existing planning workflows with signals from demand, weather and supply data.",
      },
      {
        title: "Improving collaboration across teams",
        description:
          "Forecasting is most effective when planning, operations and commercial teams work from shared performance models.",
        bullets: [
          "Bring data from sales, operations and external sources together",
          "Create a single planning cadence across functions",
          "Use scenario analysis to manage uncertainty",
        ],
      },
      {
        title: "Measuring value in planning maturity",
        description:
          "High-performance planning is measured by reduced volatility, fewer stockouts and stronger customer delivery confidence.",
      },
    ],
    keyTakeaways: [
      "Use AI to surface signals, not replace core planning processes.",
      "Create shared planning models across commercial and operations teams.",
      "Measure AI impact through forecast accuracy and service reliability.",
    ],
    related: ["sustainable-supply-chain-framework", "cloud-enabled-customer-experience"],
    type: "Research Report"
  },
  {
    id: "cloud-enabled-customer-experience",
    slug: "cloud-enabled-customer-experience",
    href: "/insights/cloud-enabled-customer-experience",
    title: "Cloud-enabled customer experience for enterprise services",
    excerpt:
      "Cloud-powered customer engagement helps enterprise service teams deliver consistent, real-time responses while preserving operational control.",
    category: "Cloud & Infrastructure",
    industry: "Transportation & Logistics",
    tags: ["cloud", "customer experience", "service operations"],
    author: "Laura Chen",
    authorRole: "Cloud Transformation Lead",
    date: "Dec 2, 2025",
    readTime: "6 min read",
    popularity: 85,
    featured: false,
    trending: false,
    image: "https://acceleronsolutions.io/wp-content/uploads/2024/09/blog5.jpg",
    executiveSummary:
      "This insight explains how cloud-native services can improve customer responsiveness while keeping enterprise teams aligned with operational standards.",
    pullQuote:
      "The most effective customer experiences are underpinned by infrastructure that supports speed, security and service consistency.",
    sections: [
      {
        title: "Designing services for speed and reliability",
        description:
          "Cloud services should be architected to make customer interactions faster, while preserving the controls enterprise teams need.",
      },
      {
        title: "Supporting agents with the right data",
        description:
          "Customer teams require access to operational context, inventory visibility and service history within a cloud platform.",
        bullets: [
          "Integrate service and logistics data",
          "Use cloud-based intelligence for routing and prioritization",
          "Preserve governance for security and compliance",
        ],
      },
      {
        title: "Measuring experience outcomes",
        description:
          "Value comes from improved response times, higher service consistency and clearer enterprise decision-making.",
      },
    ],
    keyTakeaways: [
      "Align cloud services with enterprise controls and customer speed.",
      "Provide teams with operational context at the point of service.",
      "Measure customer experience through reliability and responsiveness.",
    ],
    related: ["ai-demand-forecasting-ecosystems", "customer-experience-capital-goods"],
    type: "Article"
  },
  {
    id: "data-analytics-engineering-construction",
    slug: "data-analytics-engineering-construction",
    href: "/insights/data-analytics-engineering-construction",
    title: "Data & analytics for modern engineering and construction programs",
    excerpt:
      "How unified project controls, site telemetry, and integrated data analytics help EPC contractors reduce risk and improve delivery margins.",
    category: "Data & Analytics",
    industry: "Engineering & Construction",
    tags: ["data analytics", "project controls", "EPC", "construction telemetry"],
    author: "Sanjay Sen",
    authorRole: "Capital Projects Advisory Lead",
    date: "Jul 28, 2025",
    readTime: "8 min read",
    popularity: 84,
    featured: false,
    trending: false,
    image: "https://acceleronsolutions.io/wp-content/uploads/2024/09/blog1.jpg",
    executiveSummary:
      "A practical guide for implementing connected data platforms across procurement, field scheduling, and quality execution to drive project predictability.",
    pullQuote:
      "Integrated project dashboards turn execution metrics into predictive signals, allowing site managers to act before schedule variance occurs.",
    sections: [
      {
        title: "The challenge of fragmented project data",
        description:
          "Modern EPC and construction projects generate massive data from sensors, schedules, and quality inspections, but much of it remains siloed in point solutions."
      },
      {
        title: "Unifying controls for predictable delivery",
        description:
          "By implementing a centralized analytics engine, project owners can synchronize engineering models, procurement timelines, and actual field progress.",
        bullets: [
          "Establish a single schedule-cost risk baseline",
          "Streamline site inspection and safety data streams",
          "Automate material dispatch and storage tracking"
        ]
      },
      {
        title: "Quantifying margins through data maturity",
        description:
          "Empirical results show that real-time progress tracking reduces project timeline slippage and keeps material utilization aligned with the baseline budget."
      }
    ],
    keyTakeaways: [
      "Centralize site progress, cost, and safety data into a single source of truth.",
      "Use predictive analytics to forecast schedule and budget deviations early.",
      "Align subcontractor deliverables directly with the digital project baseline."
    ],
    related: ["enterprise-platform-modernization", "digitization-mining"],
    type: "Research Report"
  },
  {
    id: "customer-experience-capital-goods",
    slug: "customer-experience-capital-goods",
    href: "/insights/customer-experience-capital-goods",
    title: "Redefining the customer experience in Capital Goods aftermarket services",
    excerpt:
      "How manufacturers use connected customer service, spare-parts visibility, and proactive maintenance to increase customer lifetime value.",
    category: "Customer Experience",
    industry: "Capital Goods",
    tags: ["customer experience", "aftermarket service", "capital goods", "CRM integration"],
    author: "Vikram Mehta",
    authorRole: "Customer Solutions Director",
    date: "Aug 15, 2025",
    readTime: "7 min read",
    popularity: 89,
    featured: false,
    trending: false,
    image: "https://acceleronsolutions.io/wp-content/uploads/2024/09/blog3.jpg",
    executiveSummary:
      "This paper analyzes the transition from reactive maintenance models to proactive, digitally-enabled aftermarket services that keep heavy engineering assets operational.",
    pullQuote:
      "In heavy equipment, customer experience is not about a sleek portal; it is about keeping machines running and making spare parts accessible when they are needed.",
    sections: [
      {
        title: "The shift to service-led business models",
        description:
          "Capital goods companies are realizing that long-term margins are driven by aftermarket support, warranty management, and parts logistics rather than just the initial equipment sale."
      },
      {
        title: "Connecting field operations with customer platforms",
        description:
          "To deliver exceptional aftermarket services, companies must connect technician dispatch, warranty tracking, and parts inventory directly into their CRM.",
        bullets: [
          "Provide technicians with mobile access to asset history",
          "Integrate parts ordering with the core ERP",
          "Automate maintenance scheduling based on IoT usage indicators"
        ]
      },
      {
        title: "Measuring aftermarket success",
        description:
          "Successful customer experience transformation is measured by first-time-fix rates, parts order accuracy, and overall equipment availability."
      }
    ],
    keyTakeaways: [
      "Integrate field service technician workflows with central CRM systems.",
      "Provide real-time spare-parts visibility to reduce machine downtime.",
      "Measure customer satisfaction through first-time-fix rates and equipment availability."
    ],
    related: ["enterprise-platform-modernization", "cyber-risk-posture-industrial-operations"],
    type: "Case Study"
  }
];

export const BLOGS = INSIGHTS;

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
