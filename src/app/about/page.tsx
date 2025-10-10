
"use client";

import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";


export default function AboutPage() {
  const whyUsPoints = [
    { text: "Strategic Implementation — We specialize in integrating cutting-edge AI and IT solutions tailored to your business needs, streamlining operations, and enhancing efficiency to help you stay ahead of the curve." },
    { text: "Dedicated Expertise — Our team of skilled developers and AI experts work closely with you, providing personalized solutions that drive measurable results across industries." },
    { text: "Future-Ready Solutions — We focus on building scalable, innovative technologies that prepare your business for the challenges of tomorrow, ensuring long-term growth and adaptability." },
  ]
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>About Us</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              
              <div className="mt-6 text-center">
                <h1 className="text-sm tracking-widest uppercase text-primary font-semibold">About us</h1>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline mt-2">
                  Empowering Enterprises to Embrace AI and Digital Excellence
                </h2>
              </div>
              
              <div className="mt-8 text-lg text-muted-foreground space-y-6">
                <p>
                  At Inventive Code, we are dedicated to empowering businesses to thrive in the AI-driven future. Our mission is to provide tailored AI solutions that enhance efficiency, drive innovation, and deliver measurable results
                </p>
                <p>
                  Our expertise lies in creating tailored AI and IT solutions for businesses across industries. From integrating AI into ERP systems to building intuitive web and mobile applications, we craft innovative solutions designed to enhance efficiency, reduce costs, and unlock new opportunities. Our team of skilled professionals collaborates closely with clients to understand their unique needs, delivering scalable and impactful results.
                </p>
                <p>
                  We believe that technology is more than just a tool—it’s a catalyst for growth. At Inventive Code, we aim to empower enterprises of all sizes to harness the potential of AI and cutting-edge digital solutions. Whether it’s optimizing processes, enabling smarter decision-making, or transforming customer experiences, we are dedicated to helping businesses thrive in an increasingly dynamic world.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">What we do</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Transforming Enterprises Through Innovative Solutions
              </p>
            </div>
            <div className="mt-8 max-w-3xl mx-auto text-muted-foreground space-y-4 text-center">
              <p>
                At Inventive Code, we specialize in crafting intelligent, scalable, and customized solutions for businesses across diverse industries. From developing advanced AI-powered systems to integrating ERP solutions, creating bespoke web and mobile applications, and enabling seamless digital transformation, our focus is on innovation and impact. We empower enterprises to streamline operations, enhance efficiency, and stay ahead in the fast-evolving technological landscape.
              </p>
              <p>
                Whether you’re looking to adopt AI, optimize workflows, or create cutting-edge digital platforms, we partner with you every step of the way to deliver results that matter.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Us</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Simplify Your Path to AI-Driven Success
              </p>
            </div>
            <div className="mt-12 max-w-4xl mx-auto">
              <ul className="space-y-8">
                {whyUsPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-lg text-foreground">{point.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
