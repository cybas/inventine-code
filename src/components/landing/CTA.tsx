import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CTA() {
  return (
    <section className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline tracking-tight">
            Ready to reduce complexity?
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Let’s map the fastest path to value.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">Start a project</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
