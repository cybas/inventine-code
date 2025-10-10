export function ContactStrip() {
    return (
      <section className="w-full py-8 md:py-12 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4 md:gap-8">
            <h3 className="text-lg font-medium">Prefer talking to a human?</h3>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-muted-foreground">
              <a href="mailto:info@inventivecode.com" className="hover:text-primary transition-colors">
                info@inventivecode.com
              </a>
              <span className="hidden sm:block text-border">·</span>
              <a href="tel:+919052134853" className="hover:text-primary transition-colors">
                +91 90521 34853
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  