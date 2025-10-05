import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, TwitterIcon as TikTok, Youtube, Instagram } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border"
import AnimatedSection from "@/components/animated-section"
import { FloatingElement } from "@/components/ui/floating-element"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Contact Header */}
      <section className="bg-muted py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h1 className="text-4xl font-bold mb-4 gradient-text animated-gradient-text">Get in Touch</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a question, business inquiry, or just want to say hello? Fill out the form below and I'll get back to
              you as soon as possible.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <AnimatedSection direction="left">
              <h2 className="text-2xl font-bold mb-6 gradient-text">Send a Message</h2>

              <AnimatedGradientBorder>
                <form className="space-y-6 p-6 bg-background rounded-xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input
                        id="first-name"
                        placeholder="Enter your first name"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input
                        id="last-name"
                        placeholder="Enter your last name"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="inquiry-type" className="text-sm font-medium">
                      Inquiry Type
                    </label>
                    <Select>
                      <SelectTrigger
                        id="inquiry-type"
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                      >
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="business">Business Collaboration</SelectItem>
                        <SelectItem value="speaking">Speaking Engagement</SelectItem>
                        <SelectItem value="charity">Charity Foundation</SelectItem>
                        <SelectItem value="press">Press/Media</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Enter your message"
                      rows={6}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  <FloatingElement amplitude={3} period={3}>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/50"
                    >
                      Send Message
                    </Button>
                  </FloatingElement>
                </form>
              </AnimatedGradientBorder>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="right" delay={0.3}>
            <h2 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h2>

            <div className="space-y-6">
              <AnimatedGradientBorder>
                <div className="flex items-start p-4 bg-background rounded-xl">
                  <Mail className="h-5 w-5 mr-3 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">contact@abisfulani.com</p>
                    <p className="text-muted-foreground">business@abisfulani.com</p>
                  </div>
                </div>
              </AnimatedGradientBorder>

              <AnimatedGradientBorder>
                <div className="flex items-start p-4 bg-background rounded-xl">
                  <Phone className="h-5 w-5 mr-3 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+234 (0) 123 456 7890</p>
                    <p className="text-muted-foreground">(Business hours only)</p>
                  </div>
                </div>
              </AnimatedGradientBorder>

              <AnimatedGradientBorder>
                <div className="flex items-start p-4 bg-background rounded-xl">
                  <MapPin className="h-5 w-5 mr-3 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Office Address</h3>
                    <p className="text-muted-foreground">
                      Abis Fulani Foundation
                      <br />
                      123 Victoria Island
                      <br />
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </AnimatedGradientBorder>

              <AnimatedGradientBorder>
                <div className="flex items-start p-4 bg-background rounded-xl">
                  <Clock className="h-5 w-5 mr-3 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday: 10:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </AnimatedGradientBorder>
            </div>

            <div className="mt-8">
              <AnimatedGradientBorder>
                <div className="p-6 bg-background rounded-xl">
                  <h3 className="font-semibold mb-2">For Press Inquiries</h3>
                  <p className="text-muted-foreground mb-4">
                    For press kits, interview requests, and media inquiries, please contact our press team directly.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full hover:text-primary hover:border-primary transition-colors"
                    asChild
                  >
                    <a href="mailto:press@abisfulani.com">press@abisfulani.com</a>
                  </Button>
                </div>
              </AnimatedGradientBorder>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text">Frequently Asked Questions</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How can I collaborate with Abis Fulani?",
                answer:
                  'For business collaborations, please use the contact form and select "Business Collaboration" as your inquiry type. Our team will review your proposal and get back to you within 48 hours.',
              },
              {
                question: "Can Abis speak at my event?",
                answer:
                  "Yes! Abis is available for speaking engagements. Please provide details about your event, including date, location, audience, and topic in your inquiry.",
              },
              {
                question: "How can I support the Charity Foundation?",
                answer:
                  "You can support our foundation through donations, volunteering, or partnerships. Visit the Charity page for more information or contact us directly.",
              },
              {
                question: "Does Abis offer mentorship programs?",
                answer:
                  "Abis occasionally offers mentorship programs for aspiring content creators. Follow our social media channels for announcements about upcoming opportunities.",
              },
            ].map((faq, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-background p-6 rounded-xl hover-lift">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold gradient-text">Find Us</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">Visit our office in Lagos, Nigeria</p>
        </AnimatedSection>

        <AnimatedGradientBorder>
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=1600&text=Map+Location"
              alt="Office Location Map"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-4 bg-background/80 backdrop-blur-md rounded-xl">
                <h3 className="font-semibold text-lg">Abis Fulani Foundation</h3>
                <p className="text-muted-foreground">123 Victoria Island, Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </AnimatedGradientBorder>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-6">Connect With Abis</h2>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
              Follow Abis Fulani on social media for daily content, behind-the-scenes moments, and community engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <FloatingElement amplitude={5} period={4}>
                <Button variant="secondary" size="lg" className="hover:shadow-lg transition-shadow" asChild>
                  <a href="https://tiktok.com/@abisfulani" target="_blank" rel="noopener noreferrer">
                    <TikTok className="mr-2 h-5 w-5" />
                    TikTok
                  </a>
                </Button>
              </FloatingElement>
              <FloatingElement amplitude={5} period={4} phase={1}>
                <Button variant="secondary" size="lg" className="hover:shadow-lg transition-shadow" asChild>
                  <a href="https://youtube.com/abisfulani" target="_blank" rel="noopener noreferrer">
                    <Youtube className="mr-2 h-5 w-5" />
                    YouTube
                  </a>
                </Button>
              </FloatingElement>
              <FloatingElement amplitude={5} period={4} phase={2}>
                <Button variant="secondary" size="lg" className="hover:shadow-lg transition-shadow" asChild>
                  <a href="https://instagram.com/abisfulani" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-5 w-5" />
                    Instagram
                  </a>
                </Button>
              </FloatingElement>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

