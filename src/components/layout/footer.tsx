import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { NileCareLogo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-secondary/50">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 flex items-center space-x-2">
              <NileCareLogo className="h-8 w-8 text-primary" />
              <span className="font-bold sm:inline-block font-headline text-2xl">
                NileCare
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Nile King’s Special Hospital: A next-generation, patient-centered digital healthcare platform.
            </p>
            <div className="mt-6">
              <h3 className="font-semibold text-foreground mb-2">Subscribe to our newsletter</h3>
              <form className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="bg-background"/>
                <Button type="submit" variant="accent">Subscribe</Button>
              </form>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4 font-headline">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link href="/doctors" className="text-muted-foreground hover:text-primary">Find a Doctor</Link></li>
              <li><Link href="/book-appointment" className="text-muted-foreground hover:text-primary">Appointments</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 font-headline">Departments</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Cardiology</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Pediatrics</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Orthopedics</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">More...</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 font-headline">Contact Us</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>123 Nile Avenue, Cairo, Egypt</li>
              <li>contact@nilecare.com</li>
              <li>+20 2 1234 5678</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-muted/80 py-4">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} NileCare - Nile King’s Special Hospital. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
