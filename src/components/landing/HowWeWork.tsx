const processSteps = [
    { title: "Discovery.", description: "Align scope, constraints, and success metrics." },
    { title: "Design the system.", description: "Data model, roles/permissions, integration map." },
    { title: "Build in slices.", description: "Ship weekly increments with tests and dashboards." },
    { title: "Operate & improve.", description: "Track KPIs, reduce toil, iterate." },
  ];
  
  export function HowWeWork() {
    return (
      <section className="w-full py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">How we work</h2>
          </div>
          <ol className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {processSteps.map((step, index) => (
              <li key={index} className="flex gap-4 items-start">
                <span className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold font-headline">{step.title}</h3>
                  <p className="mt-1 text-muted-foreground">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }
  