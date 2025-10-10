import { CheckCircle2 } from "lucide-react";

const outcomes = [
  { text: "Cut chaos, not corners. Automate the boring work, codify approvals, and reduce rework." },
  { text: "Integrate what you already use. Connect ERP/HR/Accounting, CRMs, and data lakes—no rip-and-replace." },
  { text: "Make it measurable. Dashboards and KPIs baked in from day one." },
];

export function ProblemOutcome() {
  return (
    <section className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Problem → Outcome</h2>
        </div>
        <div className="mt-12 max-w-4xl mx-auto">
          <ul className="space-y-8">
            {outcomes.map((outcome, index) => (
              <li key={index} className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-lg text-foreground">{outcome.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
