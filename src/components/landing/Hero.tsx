import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight">
            AI, E-commerce & Integrations that ship and scale
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We build pragmatic systems—LLM/AI workflows, storefronts, and data operations—integrated with your ERP, HR, and accounting. Less noise, more outcomes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">Start a project</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/#services">See services</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Built on Firebase + Gemini. Enterprise-ready.
          </p>
        </div>
      </div>
    </section>
  );
}
