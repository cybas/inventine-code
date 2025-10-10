
"use client";

import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-32">
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
                        <BreadcrumbPage>Contact</BreadcrumbPage>
                    </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="mt-6 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold font-headline">Let’s Connect to Transform Your Business</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We’re here to answer your questions and help you explore AI and IT solutions tailored to your needs. Whether you’re ready to start a project or simply want to learn more about what we can do for your business, reach out to us today. Let’s collaborate and make your vision a reality!
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto mt-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center gap-4">
                        <Phone className="h-8 w-8 text-primary" />
                        <h3 className="text-xl font-bold">Phone</h3>
                        <a href="tel:+919052134853" className="text-muted-foreground hover:text-primary">+91 90521 34853</a>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Mail className="h-8 w-8 text-primary" />
                        <h3 className="text-xl font-bold">Email</h3>
                        <a href="mailto:info@codinvo.com" className="text-muted-foreground hover:text-primary">info@codinvo.com</a>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <MapPin className="h-8 w-8 text-primary" />
                        <h3 className="text-xl font-bold">Address</h3>
                        <p className="text-muted-foreground">10-1-13/2, Asilmetta, Visakhapatnam - 530003 Andhra Pradesh, India</p>
                    </div>
                </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
