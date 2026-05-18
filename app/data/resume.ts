// Single source of truth for the resume content rendered on the landing page.
// Also consumed by the structured-data (schema.org) graph.

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  location: string;
}

export interface Project {
  name: string;
  tagline: string;
  period: string;
  url?: string;
  description: string;
  highlights: string[];
  stack: string[];
}

export const about =
  "Senior fullstack software engineer with ~10 years building and scaling " +
  "backend systems. I specialize in Node.js, TypeScript and event-driven " +
  "architecture on AWS — designing serverless platforms, pricing engines and " +
  "microservices for products used by millions. I care about domain-driven " +
  "design, clean architecture and shipping reliable software. Based in Lima, " +
  "Peru, working remotely.";

export const experience: ExperienceItem[] = [
  {
    company: "Restaurant Brands International (RBI)",
    role: "Fullstack Senior Software Developer",
    period: "Feb 2023 — Jan 2026",
    location: "Remote",
    highlights: [
      "Designed and built the Offers & Pricing Engine (Node.js, NestJS, React) following Domain-Driven Design, supporting complex offer logic and dynamic pricing for millions of users.",
      "Architected serverless event-driven workflows (AWS Lambda, SQS, SNS, DynamoDB Streams, Kinesis) processing real-time cart and pricing events at scale.",
      "Led a major refactor of legacy combo-meal logic and cart mappings, improving pricing accuracy across web and mobile.",
      "Implemented DynamoDB Streams with TTL-based archival for expired offers, reducing API response times for active offers.",
      "Contributed to architecture reviews, defined coding standards and mentored junior engineers across teams.",
    ],
  },
  {
    company: "EasyHealth",
    role: "Senior Backend Engineer",
    period: "Jan 2022 — Jan 2023",
    location: "Remote",
    highlights: [
      "Led the migration of a monolithic Node.js application from Azure to Google Cloud Platform using Docker and Kubernetes (GKE), improving deployment consistency and reducing cloud costs.",
      "Designed CI/CD pipelines with GitHub Actions, automating testing, security checks and container builds.",
      "Refactored the platform into microservices communicating via Apache Kafka, improving decoupling and throughput.",
    ],
  },
  {
    company: "Hapi",
    role: "Senior Software Developer / Technical Lead",
    period: "Jan 2021 — Dec 2021",
    location: "Remote",
    highlights: [
      "Built secure microservices in Node.js and NestJS using Domain-Driven Design for stock and cryptocurrency trading.",
      "Implemented Kafka-based communication between microservices on a scalable cluster (Kubernetes + Strimzi).",
      "Created a documented boilerplate to jump-start new microservices (Dockerized NestJS, Kafka, Vault, Prisma).",
      "Migrated infrastructure from Google Cloud to AWS, setting up VPCs, subnets and security groups.",
    ],
  },
  {
    company: "Globant",
    role: "Software Consultant / Technical Leader",
    period: "Mar 2018 — Jan 2021",
    location: "Remote",
    highlights: [
      "Autodesk: contributed to the 3D-design marketplace and led metadata tooling on AWS Serverless and Terraform (Node.js, NestJS, React).",
      "Disney Parks: implemented cross-team solutions and secure infrastructure prototypes using AWS, Vault and Kafka.",
      "Built reusable React/Redux components and reduced deployment time via AWS Lambda workflows.",
    ],
  },
  {
    company: "Belatrix / Applying Consulting",
    role: "UI Engineer / Software Engineer",
    period: "Jul 2015 — Mar 2018",
    location: "Lima, Peru",
    highlights: [
      "Kargo (AdTech): built internal tools for digital ad creation with Angular and Node.js/Express.",
      "AOL: led the backend team developing REST API endpoints in Java (Spring/Hibernate).",
      "Built a document-indexing application using Java, AngularJS and Elasticsearch on AWS.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Localy.lat",
    tagline: "Event-venue marketplace platform",
    period: "2025 — Present",
    url: "https://localy.lat",
    description:
      "A platform connecting people with event venues, built end to end with Domain-Driven Design and running on a fully AWS-native infrastructure.",
    highlights: [
      "Migrated the platform from Supabase/Vercel to a fully AWS-native stack — Next.js deployed via OpenNext (CloudFront, Lambda, S3) and provisioned as infrastructure-as-code with SST.",
      "Moved persistence to PostgreSQL on Amazon RDS and added event-driven processing with Lambda and SQS.",
      "Automated deployments with an AWS CodePipeline CI/CD flow; DNS and content delivery via Route 53 and CloudFront.",
      "Built user, host and admin modules — multi-step host onboarding, admin dashboards, Google auth and Google Maps integration.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "AWS",
      "SST",
      "OpenNext",
      "Lambda",
      "RDS",
      "S3",
      "SQS",
      "CloudFront",
      "Route 53",
      "CodePipeline",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Node.js", "TypeScript", "JavaScript (ES6+)", "Python", "Java"],
  },
  {
    label: "Backend & Architecture",
    items: [
      "NestJS",
      "Express.js",
      "Domain-Driven Design",
      "Event-Driven Architecture",
      "Microservices",
      "GraphQL",
    ],
  },
  {
    label: "Cloud & Infrastructure",
    items: [
      "AWS (Lambda, SQS, SNS, DynamoDB, Kinesis, S3, CloudFront, IAM)",
      "GCP (GKE, Cloud Functions)",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Pulumi",
      "Vault",
    ],
  },
  {
    label: "Data & Messaging",
    items: [
      "PostgreSQL",
      "DynamoDB",
      "MySQL",
      "MongoDB",
      "Elasticsearch",
      "Kafka",
      "Strimzi",
      "Prisma",
      "TypeORM",
      "Supabase",
    ],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Vue", "Angular", "React Native", "Tailwind CSS"],
  },
  {
    label: "Testing & CI/CD",
    items: [
      "Jest",
      "Vitest",
      "Cypress",
      "Playwright",
      "GitHub Actions",
      "CircleCI",
    ],
  },
];

export const education: EducationItem[] = [
  {
    title: "Bachelor of Systems Engineering",
    institution: "Universidad Nacional Federico Villarreal",
    location: "Lima, Peru",
  },
  {
    title: "Advanced English",
    institution: "ICPNA — English Institute",
    location: "Lima, Peru",
  },
];
