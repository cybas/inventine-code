import { Building, Factory, HeartPulse, Home, Leaf, ShoppingCart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const industries: { name: string; icon: LucideIcon, description: string }[] = [
  {
    name: "Healthcare & Pharma",
    icon: HeartPulse,
    description: "HIPAA-compliant patient portals, data integration, and supply chain management."
  },
  {
    name: "Retail & E-commerce",
    icon: ShoppingCart,
    description: "Custom storefronts, B2B/B2C platforms, and catalog automation at scale."
  },
  {
    name: "Logistics",
    icon: Building,
    description: "Route optimization, warehouse management, and real-time tracking systems."
  },
  {
    name: "Manufacturing",
    icon: Factory,
    description: "ERP integration, production scheduling, and quality control dashboards."
  },
  {
    name: "Real Estate",
    icon: Home,
    description: "Property management systems, CRM integrations, and client portals."
  },
  {
    name: "Energy",
    icon: Leaf,
    description: "Grid management, renewable energy monitoring, and asset tracking."
  },
];

export function Industries() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Industries we support</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We apply our expertise across a wide range of sectors, delivering solutions that meet specific industry challenges.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div key={industry.name} className="flex flex-col items-center text-center p-6 rounded-lg bg-card border hover:shadow-lg transition-shadow">
              <industry.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold font-headline">{industry.name}</h3>
              <p className="mt-2 text-muted-foreground text-sm">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
