
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Code, ChevronDown, Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useState } from 'react';

const Logo = () => (
  <Link href="/" className="flex items-center gap-2 text-foreground" prefetch={false}>
    <Code className="h-6 w-6 text-primary" />
    <span className="text-xl font-bold font-headline">Inventive Code</span>
  </Link>
);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const policyLinks = [
    { href: "/terms-conditions", label: "Terms & Conditions" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/refund-and-cancellation-policy", label: "Refund and Cancellation Policy" },
]

export function Header() {
    const [isSheetOpen, setIsSheetOpen] = useState(false);
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-1 sm:gap-2">
          {navLinks.map(link => (
            <Button key={link.href} asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Policies <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {policyLinks.map(link=>(
                <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-6 p-6">
                <Logo />
                <nav className="flex flex-col gap-4">
                  {navLinks.map(link => (
                    <SheetClose key={link.href} asChild>
                      <Link href={link.href} className="text-lg font-medium text-muted-foreground hover:text-foreground">{link.label}</Link>
                    </SheetClose>
                  ))}
                  <div className="pt-4 border-t">
                     <h3 className="text-lg font-semibold mb-2 text-foreground">Policies</h3>
                     {policyLinks.map(link => (
                         <SheetClose key={link.href} asChild>
                            <Link href={link.href} className="block py-2 text-muted-foreground hover:text-foreground">{link.label}</Link>
                         </SheetClose>
                     ))}
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
