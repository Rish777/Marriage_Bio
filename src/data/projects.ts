export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  objectives: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
}

export const projectsData: Project[] = [
  {
    id: "enterprise-data-warehouse",
    title: "Medicare Revenue Data Mart (MRDM)",
    shortDescription: "Analyzed business requirements to design efficient data processing solutions, developed and optimized BTEQ scripts for complex transformations, automated workflows using Control-M and Python, and maintained comprehensive data mapping documentation.",
    fullDescription: "Led a comprehensive migration of an enterprise-level data warehouse from an on-premises Oracle system to Snowflake on AWS. Redesigned ETL pipelines using Apache Airflow and dbt, implementing modern data modeling techniques and optimizing for cloud performance. The new solution dramatically reduced query times and enabled real-time analytics capabilities.",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Teradat", "Bteq Scripts", "Control M", "Informatica","SQL"],
    featured: true,
    demoUrl: "/projects/enterprise-data-warehouse",
    githubUrl: "#",
    objectives: [
      "Migrate 5TB+ of historical data to a cloud-based platform",
      "Reduce query latency by at least 50%",
      "Implement automated data quality checks",
      "Design a scalable architecture to support future growth"
    ],
    challenges: [
      "Complex dependencies in legacy stored procedures",
      "Inconsistent data quality across source systems",
      "Tight migration window to minimize business disruption",
      "Integrating with existing security infrastructure"
    ],
    solutions: [
      "Implemented a parallel migration strategy with dual-running systems",
      "Developed a custom data validation framework",
      "Used dbt for transformation logic with version control",
      "Created detailed data lineage documentation"
    ],
    results: [
      "300% improvement in query performance",
      "Reduced ETL processing time from 8 hours to 45 minutes",
      "99.8% data validation accuracy",
      "50% reduction in infrastructure costs"
    ]
  },
  {
    id: "real-time-analytics",
    title: "Cloud Migration | Teradata → Snowflake | AWS",
    shortDescription: "Led the seamless migration of data from on-premises systems (Teradata, BTEQ, Informatica) to Snowflake on AWS, utilizing AWS Lambda, Glue, and Step Functions for optimized ETL processes and automation.",
    fullDescription: "Designed and implemented a real-time data streaming architecture using Apache Kafka, Spark Streaming, and Redis to analyze customer interaction data from multiple sources. The system processes millions of events daily, enabling immediate personalization and business insights that previously took hours to generate.",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Snowflake","Teradata", "Python", "AWS Lambda"," AWS Glue", "AWS S3", "AWS Step Functions","AWS RDS"],
    featured: true,
    objectives: [
      "Process customer events in real-time (under 5 seconds)",
      "Create a flexible pipeline to handle diverse data types",
      "Enable immediate personalization capabilities",
      "Provide comprehensive monitoring and alerting"
    ],
    challenges: [
      "High throughput requirements (10K+ events per second)",
      "Complex event correlation across multiple sources",
      "Ensuring exactly-once processing semantics",
      "Handling schema evolution without downtime"
    ],
    solutions: [
      "Implemented Kafka for resilient message queuing",
      "Used Spark Structured Streaming for stateful processing",
      "Developed a schema registry with backward compatibility",
      "Created a custom monitoring dashboard with Grafana"
    ],
    results: [
      "Average event processing time of 2.3 seconds",
      "Scalable to handle 50K+ events per second",
      "99.99% system availability",
      "Enabled new revenue-generating personalization features"
    ]
  },
  {
    id: "regulatory-reporting",
    title: "Health OS (HOS)",
    shortDescription: "Engineered automated ETL pipelines using AWS Lambda, Glue, and Snowflake, optimizing data workflows and reporting processes.",
    fullDescription: "Created a comprehensive ETL solution for a financial institution to automate the generation of regulatory reports. The system integrates data from multiple internal systems, applies complex transformation rules based on regulatory requirements, and generates accurate reports in multiple formats. The solution includes robust validation, audit trails, and version control.",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Python", "SQL", "Snowflake", "Pandas", "AWS Lambda","AWS Lambda"," AWS Glue", "AWS S3", "AWS Step Functions","AWS RDS"],
    featured: true,
    objectives: [
      "Automate manual reporting processes",
      "Ensure 100% compliance with regulatory standards",
      "Create audit trails for all data transformations",
      "Support multiple output formats (JSON, XML, CSV, PDF)"
    ],
    challenges: [
      "Highly complex business logic with 200+ rules",
      "Strict accuracy requirements with zero tolerance for errors",
      "Evolving regulatory requirements",
      "Multiple stakeholders with different needs"
    ],
    solutions: [
      "Modular pipeline design with explicit rule documentation",
      "Implemented multi-stage validation checks",
      "Created regression test suite with historical data",
      "Designed flexible output formatter system"
    ],
    results: [
      "Reduced report generation time from 5 days to 3 hours",
      "Saved 120+ hours of manual work monthly",
      "Eliminated reporting errors and compliance risks",
      "Improved data traceability for audits"
    ]
  },
  // {
  //   id: "data-quality",
  //   title: "Automated Data Quality Framework",
  //   shortDescription: "Built a comprehensive data quality monitoring system with automated issue detection.",
  //   fullDescription: "Developed an enterprise-wide data quality framework that automatically monitors and validates data across the organization's data ecosystem. The system applies configurable rules to detect anomalies, schema changes, and data integrity issues before they impact downstream systems and business decisions.",
  //   image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   technologies: ["Python", "Great Expectations", "Airflow", "PostgreSQL", "Grafana", "Slack API"],
  //   featured: false,
  //   objectives: [
  //     "Automate data quality monitoring across all critical datasets",
  //     "Provide early detection of data anomalies and issues",
  //     "Create a centralized system for defining and managing data quality rules",
  //     "Enable self-service rule creation for business users"
  //   ],
  //   challenges: [
  //     "Diverse data formats and structures across systems",
  //     "Balancing comprehensive coverage with performance",
  //     "Handling both technical and business-oriented quality rules",
  //     "Effective communication of issues to different stakeholder groups"
  //   ],
  //   solutions: [
  //     "Implemented Great Expectations with custom expectation extensions",
  //     "Created a metadata repository for rule management",
  //     "Developed tiered alert system based on issue severity",
  //     "Built integration with ticketing and chat systems"
  //   ],
  //   results: [
  //     "80% reduction in data-related production incidents",
  //     "Automated monitoring of 500+ tables with 2000+ quality checks",
  //     "Enhanced data governance and compliance capabilities",
  //     "Improved data trust across the organization"
  //   ]
  // },
  // {
  //   id: "multi-cloud-integration",
  //   title: "Multi-cloud Data Integration Platform",
  //   shortDescription: "Created a unified data platform integrating AWS, Azure, and on-premises data sources.",
  //   fullDescription: "Architected and implemented a sophisticated multi-cloud data integration platform that unifies data from AWS, Azure, and on-premises systems. The solution provides a consistent interface for data access, governance, and processing across heterogeneous environments while optimizing for cost and performance.",
  //   image: "https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   technologies: ["AWS", "Azure", "Terraform", "Python", "Apache NiFi", "Kubernetes"],
  //   featured: false,
  //   objectives: [
  //     "Create a unified data access layer across cloud providers",
  //     "Implement consistent governance and security controls",
  //     "Minimize cross-cloud data transfer costs",
  //     "Enable flexible deployment across environments"
  //   ],
  //   challenges: [
  //     "Different service models and APIs across cloud providers",
  //     "Complex network and security configurations",
  //     "Optimizing for both cost and performance",
  //     "Managing infrastructure as code across platforms"
  //   ],
  //   solutions: [
  //     "Developed abstraction layers for core data operations",
  //     "Implemented Terraform modules for infrastructure provisioning",
  //     "Used Kubernetes for consistent container orchestration",
  //     "Created smart data routing to minimize egress costs"
  //   ],
  //   results: [
  //     "Unified access to 50+ data sources across clouds",
  //     "40% reduction in cross-cloud data transfer costs",
  //     "Reduced new data source onboarding from weeks to days",
  //     "Comprehensive security and compliance controls"
  //   ]
  // }
];