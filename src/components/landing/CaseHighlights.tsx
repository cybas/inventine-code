import { Star } from "lucide-react";

const highlights = [
  { text: "B2B2C platform — Coupons, commissions, distributor routing; returns-aware payout logic." },
  { text: "Data normalization at scale — Million-row pipelines; multilingual attributes; audits and SLAs." },
  { text: "Enterprise AI assistants — Policy-aware retrieval, templated responses, and action triggers." },
];

export function CaseHighlights() {
  return (
    <section className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Light case highlights</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-8">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-4">
                <Star className="h-6 w-6 text-accent fill-accent mt-1 flex-shrink-0" />
                <p className="text-lg text-foreground">{highlight.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
