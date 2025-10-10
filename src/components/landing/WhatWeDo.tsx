import { BrainCircuit, ShoppingCart, DatabaseZap, GitMerge, Gem, Palette } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const services: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "AI Systems & Agents",
    description: "Retrieval, summarization, and workflow agents with human-in-the-loop guardrails.",
    icon: BrainCircuit,
  },
  {
    title: "E-commerce Platforms (B2B/B2C)",
    description: "Catalog ops, payments, promotions, role-based dashboards, multi-tenant ready.",
    icon: ShoppingCart,
  },
  {
    title: "Data & Catalog Ops",
    description: "Normalization, enrichment, OKPD/HS mappings, validation rules, multilingual attributes.",
    icon: DatabaseZap,
  },
  {
    title: "ERP/HR/Accounting Integrations",
    description: "Events, webhooks, and batch jobs to keep systems in sync—plus audit trails.",
    icon: GitMerge,
  },
  {
    title: "Web & Mobile Apps",
    description: "Modern frontends focused on performance, accessibility, and SEO.",
    icon: Gem,
  },
  {
    title: "Creative & Marketing Enablement",
    description: "Landing pages, analytics, and content pipelines that support growth.",
    icon: Palette,
  },
];

export function WhatWeDo() {
  return (
    <section id="services" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">What we do</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col gap-4 p-6 rounded-lg bg-card border hover:shadow-md transition-shadow">
              <service.icon className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold font-headline">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
