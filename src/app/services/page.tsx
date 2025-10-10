
"use client";

import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const serviceCategories = [
  {
    title: "AI and Machine Learning Solutions",
    items: [
      { text: "AI Integration Services — Automate workflows, enhance decision-making, and improve productivity with tailored AI solutions seamlessly embedded into your business processes." },
      { text: "LLM Modeling and Customization — Customize Large Language Models to align with your enterprise requirements, enabling intelligent interactions and data-driven insights." },
      { text: "Machine Learning Architecture — Design scalable machine learning systems that provide predictive analytics, improving efficiency and driving innovation." },
    ],
  },
  {
    title: "Development Services",
    items: [
      { text: "Web Development — Develop responsive, scalable, and user-centric websites that align with your business objectives and deliver an exceptional user experience." },
      { text: "App Development — Build powerful mobile applications with seamless functionality and cutting-edge features to reach your audience on the go." },
      { text: "Custom IT Solutions — Address your unique business challenges with tailored IT services, including system optimization and cloud computing." },
    ],
  },
  {
    title: "ERP and Data Solutions",
    items: [
      { text: "ERP Solutions with AI Integration — Transform your enterprise resource planning with AI-driven insights for smarter resource management, forecasting, and efficiency." },
      { text: "Data-Driven Analytics — Leverage your data for actionable insights using advanced analytics and visualization tools that empower smarter decisions." },
      { text: "Business Process Automation — Streamline repetitive tasks, reduce operational costs, and improve efficiency with end-to-end process automation solutions." },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
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
                    <BreadcrumbPage>Services</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              
              <div className="mt-6 text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline mt-2">
                  Empowering Enterprises with Custom-Built Digital and AI Solutions
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Comprehensive Solutions for the AI-Driven Future
                </p>
              </div>
              
              <div className="mt-8 text-lg text-muted-foreground space-y-6">
                <p>
                  At Inventive Code, we specialize in crafting tailored solutions that bridge the gap between cutting-edge technology and real-world business needs. From AI integration and LLM modeling to robust web and mobile app development, our services are designed to enhance efficiency, reduce costs, and future-proof your operations. Whether you’re adopting AI for the first time or scaling your existing systems, we’re here to transform your vision into reality.
                </p>
                <p>
                  We believe in the power of technology to transform businesses. Our expertise spans across diverse industries, enabling us to design solutions tailored to your specific needs. Whether it’s integrating artificial intelligence to automate workflows, developing state-of-the-art mobile and web applications, or building robust ERP systems, we focus on delivering measurable results that enhance your efficiency and scalability.
                </p>
                 <p>
                  Our team of experts combines technical proficiency with a deep understanding of market dynamics to offer solutions that are innovative, reliable, and future-proof. From startups to large enterprises, we partner with businesses at every stage of their journey to ensure seamless implementation and integration of cutting-edge technologies. With Inventive Code, you don’t just adapt to the future; you thrive in it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                 <h2 className="text-3xl md:text-4xl font-bold font-headline">
                    Transforming Ideas into Innovation: Comprehensive Tech and AI Solutions for Your Business
                </h2>
              </div>
              <div className="space-y-12">
                {serviceCategories.map((category) => (
                  <div key={category.title}>
                    <h3 className="text-2xl md:text-3xl font-bold font-headline mb-6">{category.title}</h3>
                    <ul className="space-y-6">
                      {category.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-4">
                          <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <p className="text-lg text-foreground">{item.text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
