
"use client";

import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function RefundAndCancellationPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
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
                  <BreadcrumbPage>Refund and Cancellation Policy</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="mt-8 text-3xl md:text-4xl font-bold font-headline">Refund and Cancellation Policy</h1>
            <p className="mt-2 text-muted-foreground">Effective Date: 26/11/2024</p>
            <div className="mt-8 prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>At Cybas Commercial Pvt Ltd, we are committed to providing high-quality IT and AI integration services. However, we understand that unforeseen circumstances may arise. This Refund and Cancellation Policy outlines the conditions under which cancellations and refunds are applicable.</p>
                
                <div>
                    <h2 className="text-xl font-bold text-foreground">1. Cancellations</h2>
                    <h3 className="text-lg font-semibold text-foreground mt-2">1. Cancellation Before Project Commencement</h3>
                    <ul className="list-disc pl-6">
                        <li>Cancellations are allowed as long as the project has not commenced.</li>
                        <li>If you wish to cancel a project, you must notify us via email at info@codinvo.com or by contacting us at +91 90521 34853.</li>
                    </ul>
                     <h3 className="text-lg font-semibold text-foreground mt-2">2. Project Commencement Definition</h3>
                    <ul className="list-disc pl-6">
                        <li>A project is considered commenced once we have initiated any development, design, or consultation work as per the agreed scope.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-bold text-foreground">2. Refunds</h2>
                    <h3 className="text-lg font-semibold text-foreground mt-2">1. Eligibility for Refund</h3>
                    <ul className="list-disc pl-6">
                        <li>Refunds are only applicable if the project has not commenced.</li>
                        <li>If you have made a payment and the project has not started, you may request a full refund by contacting us at info@codinvo.com or +91 90521 34853.</li>
                    </ul>
                     <h3 className="text-lg font-semibold text-foreground mt-2">2. Refund Process</h3>
                    <ul className="list-disc pl-6">
                        <li>Refunds will be processed within 10–15 business days after we confirm your eligibility for a refund.</li>
                        <li>Refunds will be issued via the original payment method used at the time of purchase.</li>
                    </ul>
                     <h3 className="text-lg font-semibold text-foreground mt-2">3. Non-Refundable Situations</h3>
                    <ul className="list-disc pl-6">
                        <li>Once the Project Commences — No refunds will be issued once the project has commenced, as defined above. Partial refunds are not applicable for work already initiated or completed.</li>
                        <li>For Change of Mind — Refunds or cancellations will not be entertained for a change of mind after the project has commenced.</li>
                    </ul>
                </div>
                
                <div>
                    <h2 className="text-xl font-bold text-foreground">3. How to Request a Refund or Cancellation</h2>
                    <h3 className="text-lg font-semibold text-foreground mt-2">1. Contact Information</h3>
                    <p>Send your cancellation or refund request to info@codinvo.com with the following details:</p>
                    <ul className="list-disc pl-6">
                        <li>Full Name</li>
                        <li>Project Name/ID</li>
                        <li>Reason for Cancellation or Refund</li>
                        <li>Payment Details</li>
                    </ul>
                    <h3 className="text-lg font-semibold text-foreground mt-2">2. Review and Confirmation</h3>
                    <p>We will review your request and confirm whether it meets our cancellation and refund policy criteria.</p>
                </div>
                
                <div>
                    <h2 className="text-xl font-bold text-foreground">4. Disputes</h2>
                    <p>If you have any disputes or concerns regarding refunds or cancellations, please contact us at:</p>
                    <ul className="list-disc pl-6">
                        <li>Email: info@codinvo.com</li>
                        <li>Phone: +91 90521 34853</li>
                    </ul>
                    <p>We will work to resolve your issue promptly.</p>
                </div>
                
                <div>
                    <h2 className="text-xl font-bold text-foreground">5. Changes to This Policy</h2>
                    <p>We reserve the right to update or modify this Refund and Cancellation Policy at any time without prior notice. Changes will be effective immediately upon posting on our website.</p>
                </div>
                
                <address className="not-italic mt-4">
                    <strong>Cybas Commercial Pvt Ltd</strong><br/>
                    10-1-13/2, Asilmetta,<br/>
                    Visakhapatnam – 530003,<br/>
                    Andhra Pradesh, India
                </address>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
