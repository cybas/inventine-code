const industries = [
    "Healthcare & Pharma",
    "Retail & E-commerce",
    "Logistics",
    "Manufacturing",
    "Real Estate",
    "Energy",
  ];
  
  export function Industries() {
    return (
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Industries we support</h2>
          </div>
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3 sm:gap-4">
            {industries.map((industry) => (
              <div key={industry} className="px-5 py-2 bg-secondary rounded-full text-secondary-foreground font-medium text-sm sm:text-base">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  