import Link from "next/link"
import { Instagram, Youtube, TwitterIcon as TikTok, Facebook, Twitter } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export default function Footer() {
  return (
    <footer className="bg-muted py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <ScrollReveal>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold gradient-text">Abis Fulani</h3>
              <p className="text-muted-foreground">
                Digital content creator, influencer, and philanthropist dedicated to educating and entertaining
                audiences worldwide.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <TikTok className="h-5 w-5" />
                  <span className="sr-only">TikTok</span>
                </Link>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/content" className="text-muted-foreground hover:text-primary transition-colors">
                    Content
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/merch" className="text-muted-foreground hover:text-primary transition-colors">
                    Merch
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-muted-foreground hover:text-primary transition-colors">
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div>
              <h3 className="text-lg font-semibold mb-4">Foundation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/charity" className="text-muted-foreground hover:text-primary transition-colors">
                    About the Foundation
                  </Link>
                </li>
                <li>
                  <Link href="/charity#projects" className="text-muted-foreground hover:text-primary transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/charity#impact" className="text-muted-foreground hover:text-primary transition-colors">
                    Our Impact
                  </Link>
                </li>
                <li>
                  <Link href="/charity#donate" className="text-muted-foreground hover:text-primary transition-colors">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link
                    href="/charity#volunteer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Volunteer
                  </Link>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact Form
                  </Link>
                </li>
                <li>
                  <Link href="/contact#business" className="text-muted-foreground hover:text-primary transition-colors">
                    Business Inquiries
                  </Link>
                </li>
                <li>
                  <Link href="/contact#booking" className="text-muted-foreground hover:text-primary transition-colors">
                    Event Booking
                  </Link>
                </li>
                <li>
                  <Link href="/contact#press" className="text-muted-foreground hover:text-primary transition-colors">
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Abis Fulani. All rights reserved. Website designed by{" "}
            <Link href="/team" className="text-primary hover:underline">
              Ahmad
            </Link>
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

