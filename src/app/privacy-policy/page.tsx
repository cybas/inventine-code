
"use client";

import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function PrivacyPolicyPage() {
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
                  <BreadcrumbPage>Privacy</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="mt-8 text-3xl md:text-4xl font-bold font-headline">Privacy Policy for Codinvo.com</h1>
            <p className="mt-2 text-muted-foreground">Effective Date: 22nd November, 2024</p>
            <div className="mt-8 prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>At Codinvo.com, we are committed to protecting your privacy and safeguarding your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.codinvo.com or use our services. Please read this policy carefully to understand our practices regarding your information.</p>
                
                <div>
                    <h2 className="text-xl font-bold text-foreground">1. Information We Collect</h2>
                    <p>We collect information to provide better services to all our users. The information we collect may include:</p>
                    <h3 className="text-lg font-semibold text-foreground mt-2">1. Personal Information:</h3>
                    <ul className="list-disc pl-6">
                        <li>Name, email address, phone number, and any other details you provide via our contact forms, subscription sign-ups, or service inquiries.</li>
                    </ul>
                    <h3 className="text-lg font-semibold text-foreground mt-2">2. Technical Information:</h3>
                    <ul className="list-disc pl-6">
                        <li>IP address, browser type, operating system, referring URLs, and your interactions with our website.</li>
                        <li>Cookies and similar tracking technologies to enhance your browsing experience.</li>
                    </ul>
                    <h3 className="text-lg font-semibold text-foreground mt-2">3. Usage Data:</h3>
                    <ul className="list-disc pl-6">
                        <li>Information about your activity on our website, such as pages viewed, time spent, and navigation paths.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-bold text-foreground">2. How We Use Your Information</h2>
                    <p>We may use the collected information for the following purposes:</p>
                    <ol className="list-decimal pl-6">
                        <li>To Provide Services: Responding to inquiries, processing service requests, and providing requested solutions.</li>
                        <li>To Improve Our Website: Enhancing website functionality, usability, and performance based on user interactions.</li>
                        <li>To Communicate: Sending updates, newsletters, or promotional emails (only if you’ve opted in).</li>
                        <li>For Legal and Security Purposes: Protecting against fraud, unauthorized access, or illegal activities.</li>
                        <li>To Analyze and Personalize: Using analytics tools to understand user preferences and tailor our services accordingly.</li>
                    </ol>
                </div>
                
                <div>
                    <h2 className="text-xl font-bold text-foreground">3. Sharing Your Information</h2>
                    <p>We respect your privacy and will never sell, rent, or share your information with third parties for their direct marketing purposes. However, we may share your information in the following cases:</p>
                    <ol className="list-decimal pl-6">
                        <li>With Service Providers: Third-party vendors who assist in website hosting, analytics, payment processing, or other operational support.</li>
                        <li>For Legal Compliance: If required by law or to protect our legal rights.</li>
                        <li>In Business Transfers: If Inventive Code is involved in a merger, acquisition, or asset sale, your information may be transferred.</li>
                    </ol>
                </div>
                
                <div>
                    <h2 className="text-xl font-bold text-foreground">4. Cookies and Tracking Technologies</h2>
                    <p>We use cookies and similar technologies to enhance your experience. Cookies help us understand your preferences and improve our services. By using our website, you consent to the use of cookies as described in this policy.</p>
                    <ul className="list-disc pl-6">
                        <li>You can manage your cookie preferences through your browser settings.</li>
                        <li>Disabling cookies may impact your ability to use certain features of our website.</li>
                    </ul>
                </div>
                
                <div>
                    <h2 className="text-xl font-bold text-foreground">5. Data Security</h2>
                    <p>We implement robust security measures to protect your data from unauthorized access, alteration, or disclosure. However, no electronic transmission or storage method is 100% secure, and we cannot guarantee absolute security.</p>
                </div>
                
                <div>
                    <h2 className="text-xl font-bold text-foreground">6. Your Rights</h2>
                    <p>As a user, you have the following rights regarding your personal information:</p>
                    <ol className="list-decimal pl-6">
                        <li>Access and Correction: You can request access to your information and update any inaccuracies.</li>
                        <li>Data Deletion: You can request that we delete your personal information, subject to legal or contractual requirements.</li>
                        <li>Opt-Out: You can opt out of receiving marketing communications by following the unsubscribe link in our emails.</li>
                        <li>Data Portability: You can request a copy of your data in a structured format.</li>
                    </ol>
                </div>

                <div>
                    <h2 className="text-xl font-bold text-foreground">7. Third-Party Links</h2>
                    <p>Our website may contain links to third-party websites. This privacy policy does not apply to external sites, and we are not responsible for their content or privacy practices. Please review their policies before sharing any information.</p>
                </div>

                <div>
                    <h2 className="text-xl font-bold text-foreground">8. Updates to This Policy</h2>
                    <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The revised policy will be posted on this page with an updated effective date.</p>
                </div>

                <div>
                    <h2 className="text-xl font-bold text-foreground">9. Contact Us</h2>
                    <p>If you have any questions or concerns about this Privacy Policy, or if you wish to exercise your rights, please contact us at:</p>
                    <address className="not-italic mt-2">
                        <strong>Cybas Commercial Pvt Ltd</strong><br/>
                        10-1-13/2, Asilmetta,<br/>
                        Visakhapatnam – 530003,<br/>
                        Andhra Pradesh, India<br/>
                        Email: info@codinvo.com<br/>
                        Phone: +91 90521 34853
                    </address>
                </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
