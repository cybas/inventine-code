import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Code } from 'lucide-react';

const Logo = () => (
  <Link href="/" className="flex items-center gap-2 text-foreground" prefetch={false}>
    <Code className="h-6 w-6 text-primary" />
    <span className="text-xl font-bold font-headline">Inventive Code</span>
  </Link>
);

export function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <nav className="flex items-center gap-2 sm:gap-4">
          <Button asChild variant="ghost" className="hidden md:flex text-muted-foreground hover:text-foreground">
            <Link href="/#services">Services</Link>
          </Button>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">Start a project</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
