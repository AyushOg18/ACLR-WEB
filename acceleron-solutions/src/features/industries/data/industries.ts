export type JourneyStep = {
  phase: string;
  title: string;
  description: string;
};

export type CaseStudy = {
  title: string;
  company: string;
  category: string;
  summary: string;
  result: string;
};

export type Industry = {
  id: string;
  slug: string;
  title: string;
  href: string;
  menuDesc: string;
  heroTitle: string;
  heroSubtitle: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  outcomes: string[];
  focusPoints: string[];
  capabilities: string[];
  services: string[];
  journey: JourneyStep[];
  caseStudies: CaseStudy[];
  stats: { value: string; label: string }[];
  image: string;
  themeColor: string;
};

export const INDUSTRIES: Industry[] = [
  {
    id: "mining",
    slug: "mining",
    title: "Mining",
    href: "/industries/mining",
    menuDesc: "Digital operations for safety, productivity and visibility",
    heroTitle: "Mining operations that stay safe and productive.",
    heroSubtitle:
      "From pit planning to dispatch, we help mining leaders unify people, equipment and field data into a single actionable operating model.",
    overview:
      "Acceleron delivers connected mining systems for greater visibility across production, compliance, asset availability and workforce safety.",
    challenges: [
      "Fragmented drill-to-customer workflows and lack of real-time mine visibility.",
      "Manual equipment tracking and maintenance scheduling that creates downtime risk.",
      "Regulatory reporting and incident response workflows that remain paper-based.",
    ],
    solutions: [
      "Integrated dispatch, fleet tracking and work execution with end-to-end mine control.",
      "Operational dashboards that surface KPIs in real time for safety, yield and utilization.",
      "Digital inspections, compliance workflows and contractor coordination across sites.",
    ],
    outcomes: [
      "Higher equipment availability and reduced unplanned downtime.",
      "Faster decision-making through connected production and maintenance data.",
      "Stronger safety culture with automated field reporting and alerts.",
    ],
    focusPoints: [
      "Mine planning & dispatch",
      "Asset reliability",
      "Field safety & compliance",
      "Production visibility",
    ],
    capabilities: [
      "Integrated dispatch & scheduling",
      "Predictive maintenance workflows",
      "Digital compliance and reporting",
      "Real-time operations visibility",
    ],
    services: [
      "Integrated mine planning",
      "Field safety and compliance",
      "Predictive asset operations",
      "Operational command center",
    ],
    journey: [
      {
        phase: "Assess",
        title: "Operational baseline",
        description: "We map existing mine, fleet and field systems to identify the best digital transition path.",
      },
      {
        phase: "Optimize",
        title: "Execution improvement",
        description: "Pilot connected workflows in the pit, maintenance and safety control rooms.",
      },
      {
        phase: "Scale",
        title: "Enterprise adoption",
        description: "Roll out standardised processes across sites with governance, analytics and training.",
      },
    ],
    caseStudies: [
      {
        title: "Real-time pit visibility for a large mineral producer",
        company: "Evergreen Mining",
        category: "Operational excellence",
        summary: "A single digital command center reduced reporting lag and improved mine-to-mill alignment.",
        result: "24% faster decision cycle and 12% lower downtime.",
      },
      {
        title: "Safety-first field inspections for a global mine",
        company: "Aurora Resources",
        category: "Safety & compliance",
        summary: "Digitized inspection workflows increased hazard closure speed and reduced audit effort.",
        result: "35% improvement in closure times and higher regulatory confidence.",
      },
    ],
    stats: [
      { value: "98%", label: "shift handover accuracy" },
      { value: "30%", label: "improvement in equipment uptime" },
    ],
    image:
      "https://acceleronsolutions.io/wp-content/uploads/2024/01/mining.jpg",
    themeColor: "#102147",
  },
  {
    id: "manufacturing",
    slug: "manufacturing",
    title: "Discrete Manufacturing",
    href: "/industries/manufacturing",
    menuDesc: "Smart factory systems and production intelligence",
    heroTitle: "Manufacturing systems designed for modern production.",
    heroSubtitle:
      "We help manufacturers connect ERP, shop-floor execution and analytics so teams can deliver quality, speed and flexibility.",
    overview:
      "Acceleron builds solutions for discrete manufacturing that reduce changeover lead time, improve traceability and simplify order fulfilment.",
    challenges: [
      "Siloed production planning and execution systems that slow responses to demand shifts.",
      "Inconsistent quality documentation across work cells and product families.",
      "Limited visibility into machine utilization, inventory and downstream fulfilment.",
    ],
    solutions: [
      "Shop-floor integration with production scheduling, quality management and traceability.",
      "Product lifecycle controls that align engineering, manufacturing and service teams.",
      "Performance dashboards that prioritize throughput, yield and on-time delivery.",
    ],
    outcomes: [
      "Faster time-to-order with fewer manual handoffs.",
      "Improved product quality through consistent process enforcement.",
      "Higher factory utilisation supported by real-time execution data.",
    ],
    focusPoints: [
      "Manufacturing execution",
      "Quality & traceability",
      "ERP integration",
      "Demand-driven production",
    ],
    capabilities: [
      "Connected production planning",
      "Quality and traceability management",
      "Inventory and demand orchestration",
      "Shop-floor analytics",
    ],
    services: [
      "Smart factory execution",
      "Quality and traceability control",
      "Demand-driven scheduling",
      "ERP and shop-floor integration",
    ],
    journey: [
      {
        phase: "Design",
        title: "Factory digital blueprint",
        description: "We align ERP, MES and quality systems to a common execution model.",
      },
      {
        phase: "Deliver",
        title: "Deployment and automation",
        description: "We build the integration layer that supports real-time production control.",
      },
      {
        phase: "Measure",
        title: "Operational performance",
        description: "We give leaders dashboards that connect production, quality and fulfilment.",
      },
    ],
    caseStudies: [
      {
        title: "Rapid shop-floor digitization for a precision manufacturer",
        company: "Vector Components",
        category: "Factory transformation",
        summary: "A connected execution stack improved visibility across production cells.",
        result: "12% higher throughput and 18% fewer quality incidents.",
      },
      {
        title: "Traceability upgrade for regulated assembly lines",
        company: "Nexus Manufacturing",
        category: "Compliance",
        summary: "Automated quality gates reduced manual inspection effort and improved audit readiness.",
        result: "25% faster product release and stronger audit performance.",
      },
    ],
    stats: [
      { value: "24/7", label: "shop-floor visibility" },
      { value: "15%", label: "increase in on-time delivery" },
    ],
    image:
      "https://acceleronsolutions.io/wp-content/uploads/2024/01/manufacturing.jpg",
    themeColor: "#24345E",
  },
  {
    id: "capital-goods",
    slug: "capital-goods",
    title: "Capital Goods",
    href: "/industries/capital-goods",
    menuDesc: "Engineering, sales and service process modernization",
    heroTitle: "Capital goods teams powered by connected engineering and service.",
    heroSubtitle:
      "Our solutions tie sales, manufacturing and aftermarket operations together for complex equipment producers and service organisations.",
    overview:
      "Acceleron enables capital goods enterprises to modernise product development, order orchestration and field service delivery at scale.",
    challenges: [
      "Complex quote-to-cash processes with fragmented product configurations.",
      "Service teams lacking insight into asset history, warranties and spare parts.",
      "Manual handoffs between engineering, sales and operations on large projects.",
    ],
    solutions: [
      "Configure-price-quote workflows integrated with ERP and CRM.",
      "Connected service lifecycle management for installations, warranties and spare parts.",
      "Project visibility tools that align engineering, planning and execution teams.",
    ],
    outcomes: [
      "Higher quote accuracy and faster order conversion.",
      "Improved aftermarket profitability with better spare-part planning.",
      "Reduced operational risk across equipment handover and commissioning.",
    ],
    focusPoints: [
      "Configure-price-quote",
      "Asset & warranty service",
      "Project execution",
      "Sales engineering",
    ],
    capabilities: [
      "Product and quote orchestration",
      "Service lifecycle digitization",
      "Warranty and spare parts visibility",
      "Customer-facing aftermarket delivery",
    ],
    services: [
      "Quote-to-cash orchestration",
      "Field service digital delivery",
      "Warranty and spare parts planning",
      "Project-ready asset management",
    ],
    journey: [
      {
        phase: "Scope",
        title: "Offer and product definition",
        description: "We structure configurations, pricing and service packages for consistent quoting.",
      },
      {
        phase: "Build",
        title: "Engineering-to-order flow",
        description: "We connect order capture, build planning and asset documentation into one flow.",
      },
      {
        phase: "Operate",
        title: "Service and lifecycle",
        description: "We digitize field service, warranty and aftermarket channels for long-term revenue.",
      },
    ],
    caseStudies: [
      {
        title: "Connected aftermarket for heavy equipment",
        company: "Helix Machinery",
        category: "Service excellence",
        summary: "A digital field service platform improved visibility for warranty and spare part dispatch.",
        result: "20% faster service response and stronger customer retention.",
      },
      {
        title: "Quote automation for complex capital orders",
        company: "CoreTech Systems",
        category: "Sales acceleration",
        summary: "An integrated configuration and ERP quote engine reduced cycle time and error rates.",
        result: "30% faster proposal delivery and fewer reworks.",
      },
    ],
    stats: [
      { value: "40%", label: "faster sales cycle" },
      { value: "20%", label: "service response improvement" },
    ],
    image:
      "https://acceleronsolutions.io/wp-content/uploads/2024/01/capital-goods.jpg",
    themeColor: "#1E2A4B",
  },
  {
    id: "logistics",
    slug: "logistics",
    title: "Transportation & Logistics",
    href: "/industries/logistics",
    menuDesc: "Fleet, routes, supply chain and service execution",
    heroTitle: "Logistics networks built for speed and resilience.",
    heroSubtitle:
      "We architect transportation and supply chain solutions that improve asset utilisation, route planning and end-to-end delivery performance.",
    overview:
      "Acceleron delivers logistics systems that bring together fleet, warehouse and order management data for dependable service execution.",
    challenges: [
      "Route planning and load optimisation disconnected from real-time asset availability.",
      "Warehouse and inventory data that does not feed into customer fulfilment timelines.",
      "Limited visibility across last-mile service and field operations.",
    ],
    solutions: [
      "Unified transport planning with telematics, dispatch and fleet performance analytics.",
      "Warehouse workflows aligned with outbound scheduling and inventory accuracy.",
      "Service execution coordination for field deliveries, returns and asset maintenance.",
    ],
    outcomes: [
      "Better route efficiency and lower freight costs.",
      "Improved delivery predictability for customers and operations.",
      "Stronger control over supply chain exceptions and service timelines.",
    ],
    focusPoints: [
      "Dispatch & route planning",
      "Fleet optimisation",
      "Warehouse flow",
      "Service visibility",
    ],
    capabilities: [
      "End-to-end transport orchestration",
      "Fleet and asset visibility",
      "Warehouse execution synchronization",
      "Exception management",
    ],
    services: [
      "Transport orchestration",
      "Fleet visibility and telematics",
      "Warehouse execution synchronization",
      "Exception management",
    ],
    journey: [
      {
        phase: "Plan",
        title: "Supply chain orchestration",
        description: "We align transport, warehouse and customer commitments in a single plan.",
      },
      {
        phase: "Execute",
        title: "Fleet and fulfillment",
        description: "We give operations teams real-time visibility across assets, routes and loads.",
      },
      {
        phase: "Adapt",
        title: "Resilience and recovery",
        description: "We automate exception handling, service updates and inventory rebalancing.",
      },
    ],
    caseStudies: [
      {
        title: "Network resilience for a manufacturing logistics operator",
        company: "Helios Logistics",
        category: "Network optimization",
        summary: "A route and asset visibility suite reduced empty miles and improved service performance.",
        result: "18% lower empty mileage and 95% delivery compliance.",
      },
      {
        title: "Warehouse sync with last-mile delivery",
        company: "Parcelway Solutions",
        category: "Fulfillment",
        summary: "Visibility across warehouse and dispatch improved order accuracy and customer satisfaction.",
        result: "22% faster fulfillment and stronger on-time delivery.",
      },
    ],
    stats: [
      { value: "18%", label: "reduction in empty mileage" },
      { value: "95%", label: "delivery compliance" },
    ],
    image:
      "https://acceleronsolutions.io/wp-content/uploads/2024/01/logistics.jpg",
    themeColor: "#1F355F",
  },
  {
    id: "utilities",
    slug: "utilities",
    title: "Utilities",
    href: "/industries/utilities",
    menuDesc: "Infrastructure monitoring and utility management systems",
    heroTitle: "Utilities operations that stay reliable and customer-ready.",
    heroSubtitle:
      "We combine asset monitoring, outage planning and customer operations to help utilities improve resilience across networks and services.",
    overview:
      "Acceleron implements utility technology for better demand forecasting, asset uptime and service delivery across generation, transmission and distribution.",
    challenges: [
      "Aging infrastructure without integrated asset and outage management.",
      "Manual customer service workflows disconnected from field operations.",
      "Limited real-time insights for load, grid health and regulatory reporting.",
    ],
    solutions: [
      "Asset performance monitoring with preventative maintenance workflows.",
      "Outage and field crew coordination linked to customer communication channels.",
      "Analytics for demand management, reliability and compliance.",
    ],
    outcomes: [
      "Faster restoration and fewer unplanned outages.",
      "Improved asset lifecycle planning and maintenance efficiency.",
      "Stronger customer trust through service transparency.",
    ],
    focusPoints: [
      "Asset reliability",
      "Outage management",
      "Customer operations",
      "Grid analytics",
    ],
    capabilities: [
      "Preventive asset monitoring",
      "Crew and outage coordination",
      "Customer service integration",
      "Regulatory analytics",
    ],
    services: [
      "Asset reliability platform",
      "Crew and outage coordination",
      "Customer service integration",
      "Regulatory analytics",
    ],
    journey: [
      {
        phase: "Monitor",
        title: "Grid and asset health",
        description: "We connect sensor data, maintenance and field teams for a unified service view.",
      },
      {
        phase: "Respond",
        title: "Outage coordination",
        description: "We automate crew dispatch and customer notifications during service interruptions.",
      },
      {
        phase: "Improve",
        title: "Reliability planning",
        description: "We use performance insights to prioritize investments and reduce risk.",
      },
    ],
    caseStudies: [
      {
        title: "Service restoration for a regional utility",
        company: "NorthGrid Energy",
        category: "Grid operations",
        summary: "A digital outage coordination platform reduced customer impact and crew idle time.",
        result: "22% faster restoration and higher crew utilization.",
      },
      {
        title: "Predictive asset maintenance for distribution networks",
        company: "BlueWave Utilities",
        category: "Reliability",
        summary: "Integrated analytics identified asset risk before failures occurred.",
        result: "12% reduction in unplanned outages and stronger planning accuracy.",
      },
    ],
    stats: [
      { value: "22%", label: "reduction in outage time" },
      { value: "12%", label: "maintenance efficiency gain" },
    ],
    image:
      "https://acceleronsolutions.io/wp-content/uploads/2024/01/utilities.jpg",
    themeColor: "#102033",
  },
  {
    id: "engineering",
    slug: "engineering",
    title: "Engineering & Construction",
    href: "/industries/engineering",
    menuDesc: "EPC project execution and construction operations",
    heroTitle: "Construction programs delivered with visibility and control.",
    heroSubtitle:
      "We support EPC and construction teams with project planning, site execution and asset handover systems that keep projects on time and on budget.",
    overview:
      "Acceleron designs solutions for engineering and construction that unify project controls, field progress and commissioning processes.",
    challenges: [
      "Project schedules and field status updates trapped in spreadsheets and siloed apps.",
      "Inconsistent handover data between engineering, procurement and construction teams.",
      "Limited visibility into site safety, quality inspections and contract performance.",
    ],
    solutions: [
      "Project execution dashboards with milestone tracking, risk and cost visibility.",
      "Field reporting tools for safety, quality and quality close-out workflows.",
      "Commissioning and asset handover processes connected to documentation and maintenance planning.",
    ],
    outcomes: [
      "More predictable project delivery and fewer scope gaps.",
      "Better quality and safety outcomes through connected field inspections.",
      "Smarter asset handover with data that supports long-term operations.",
    ],
    focusPoints: [
      "Project controls",
      "Field execution",
      "Handover readiness",
      "Safety & quality",
    ],
    capabilities: [
      "Project and cost governance",
      "Site safety and quality workflows",
      "Commissioning readiness",
      "Hand-over data continuity",
    ],
    services: [
      "Project controls and governance",
      "Field execution visibility",
      "Commissioning readiness",
      "Handover data continuity",
    ],
    journey: [
      {
        phase: "Plan",
        title: "Scope and controls",
        description: "We align project governance, milestones and risk controls before work begins.",
      },
      {
        phase: "Execute",
        title: "Site delivery",
        description: "We surface real-time progress, inspections and compliance data from the field.",
      },
      {
        phase: "Handover",
        title: "Asset commissioning",
        description: "We ensure smooth transition from construction into operations with one trusted dataset.",
      },
    ],
    caseStudies: [
      {
        title: "Execution visibility for a multi-site EPC program",
        company: "Atlas Construct",
        category: "Project delivery",
        summary: "Centralized controls improved milestone reliability and reduced scope drift.",
        result: "30% faster milestone acceptance and fewer schedule changes.",
      },
      {
        title: "Digital inspection and handover readiness",
        company: "Nexa Build",
        category: "Commissioning",
        summary: "A handover platform reduced rework and improved asset readiness documentation.",
        result: "4x better inspection traceability and a cleaner turnover process.",
      },
    ],
    stats: [
      { value: "30%", label: "faster site turnover" },
      { value: "4x", label: "better inspection traceability" },
    ],
    image:
      "https://acceleronsolutions.io/wp-content/uploads/2024/01/engineering.jpg",
    themeColor: "#13254B",
  },
];
