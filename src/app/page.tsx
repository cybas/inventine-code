
import { Button } from "@/components/ui/button";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { BrainCircuit, Check, Users } from "lucide-react";
import Image from "next/image";

const industries = [
  { name: "Healthcare", description: "Revolutionize patient care with AI-driven diagnostics, personalized treatment plans, and predictive analytics." },
  { name: "Finance", description: "Enhance fraud detection, automate financial reporting, and streamline investment strategies." },
  { name: "Manufacturing", description: "Optimize production lines, predict equipment maintenance, and ensure quality control with AI." },
  { name: "Retail and E-commerce", description: "Deliver personalized shopping experiences, optimize inventory, and improve customer service with AI-powered insights." },
  { name: "Logistics and Supply Chain", description: "Optimize demand forecasting, enhance operational efficiency, and maintain precise inventory control with AI-driven solutions." },
  { name: "Education", description: "Create adaptive learning platforms, improve administrative efficiency, and enhance student engagement with AI." },
  { name: "Agriculture", description: "Increase crop yield with precision farming, automate irrigation systems, and detect plant diseases early." },
  { name: "Energy and Utilities", description: "Optimize energy consumption, predict maintenance needs, and support renewable energy integration" },
  { name: "Real Estate", description: "Simplify property searches, provide market insights, and automate tenant management with AI solutions." },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight">
                Empowering Enterprises to Thrive in the AI Era
              </h1>
              <p className="mt-4 md:mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Tailored solutions to embed AI into existing systems, enhancing efficiency and decision-making
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/contact">Start a Project</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline">Discover How AI Can Transform Your Enterprise</h2>
                </div>
            </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center gap-4">
                  <Badge variant="outline" className="p-3">
                      <BrainCircuit className="h-8 w-8 text-primary" />
                  </Badge>
                  <h3 className="text-xl font-bold font-headline">Redefining Business with AI</h3>
                  <p className="text-muted-foreground">Empowering enterprises to lower costs and increase efficiency with innovative AI solutions tailored to your industry.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                  <Badge variant="outline" className="p-3">
                      <Check className="h-8 w-8 text-primary" />
                  </Badge>
                  <h3 className="text-xl font-bold font-headline">Seamless Integration for Enterprises</h3>
                  <p className="text-muted-foreground">We bridge the gap between your existing systems and the AI-driven future, making the transition effortless.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                  <Badge variant="outline" className="p-3">
                      <Users className="h-8 w-8 text-primary" />
                  </Badge>
                  <h3 className="text-xl font-bold font-headline">Data-Driven Decision Making</h3>
                  <p className="text-muted-foreground">Leverage AI to analyze, predict, and optimize every aspect of your business for smarter operations.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge>Your AI Transformation Partner</Badge>
                <h2 className="text-3xl md:text-4xl font-bold font-headline mt-4">Collaborating with businesses to build customized AI solutions that enhance productivity and drive growth</h2>
                <p className="mt-4 text-muted-foreground">At Inventive Code, we specialize in crafting AI-driven solutions designed to revolutionize industries. From streamlining processes to optimizing decision-making, our expertise enables businesses to harness the power of AI for sustainable growth. Whether it’s healthcare, manufacturing, finance, or beyond, we’re committed to helping enterprises innovate, reduce costs, and enhance efficiency in a rapidly evolving digital landscape.</p>
                <h3 className="mt-6 text-xl font-bold font-headline">Empowering Enterprises with Tailored AI & IT Solutions.</h3>
                <p className="mt-2 text-muted-foreground">Driving Efficiency, Accuracy, and Growth</p>
              </div>
              <div>
                <Image src="https://picsum.photos/seed/1/600/400" data-ai-hint="abstract technology" alt="AI Transformation" width={600} height={400} className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
                <Badge>Innovating Across Industries with AI</Badge>
                <h2 className="text-3xl md:text-4xl font-bold font-headline mt-4">Together, we build a future where technology meets your business needs</h2>
                <p className="mt-4 text-muted-foreground">At Inventive Code, we bring the transformative potential of artificial intelligence to diverse industries. From automating routine operations in manufacturing to enabling smarter decision-making in healthcare, our solutions are designed to deliver measurable outcomes. By integrating cutting-edge AI systems into your existing processes, we help you stay ahead of the curve, improve operational accuracy, and unlock new growth opportunities.</p>
                <h3 className="mt-6 text-2xl font-bold text-primary">Transforming Businesses for the AI-Driven Future.</h3>
              </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Industries We Transform with AI</h2>
                    <p className="mt-4 text-muted-foreground">At Inventive Code, we cater to a wide range of industries, unlocking their potential with customized AI solutions. From healthcare to manufacturing, retail to finance, we design and deploy AI-powered systems that streamline operations, enhance decision-making, and drive innovation. Whether it’s automating workflows, optimizing logistics, or creating intelligent chatbots, our solutions are tailored to meet the specific needs of your industry.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {industries.map(industry => (
                        <div key={industry.name} className="p-6 rounded-lg border bg-card">
                            <h3 className="font-bold text-lg">{industry.name}</h3>
                            <p className="text-muted-foreground text-sm mt-2">{industry.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Transforming Business Operations with AI</h2>
                <p className="mt-4 text-muted-foreground">Artificial Intelligence has the potential to redefine how businesses operate by automating repetitive tasks, delivering actionable insights, and enhancing decision-making capabilities. From streamlining workflows to personalizing customer experiences, AI enables organizations to focus on innovation and growth. With scalable and customizable solutions, we help enterprises across industries embrace the transformative power of AI, driving efficiency and unlocking new opportunities for success.</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
