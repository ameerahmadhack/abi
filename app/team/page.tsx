import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

export default function TeamPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=Our+Team"
          alt="Our Team"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 gradient-text animated-gradient-text">
              Meet Our Team
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              The talented individuals behind Abis Fulani's digital presence and creative content.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text">The Creative Minds</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our team combines expertise in content creation, design, development, and marketing to deliver exceptional
            digital experiences.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Ahmad - Lead Designer & Developer */}
          <ScrollReveal>
            <AnimatedGradientBorder containerClassName="h-full">
              <div className="bg-background rounded-xl overflow-hidden h-full flex flex-col">
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=600&width=600&text=Ahmad"
                    alt="Ahmad - Lead Designer & Developer"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-1 gradient-text">Ahmad</h3>
                  <p className="text-primary font-medium mb-4">Lead Designer & Developer</p>
                  <p className="text-muted-foreground mb-6 flex-1">
                    A visionary UI/UX designer and developer with a passion for creating beautiful, functional digital
                    experiences. Ahmad brings websites to life with stunning animations and intuitive interfaces.
                  </p>
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:text-primary hover:border-primary transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:text-primary hover:border-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:text-primary hover:border-primary transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:text-primary hover:border-primary transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedGradientBorder>
          </ScrollReveal>

          {/* Abis Fulani */}
          <ScrollReveal delay={200}>
            <AnimatedGradientBorder containerClassName="h-full">
              <div className="bg-background rounded-xl overflow-hidden h-full flex flex-col">
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=600&width=600&text=Abis+Fulani"
                    alt="Abis Fulani - Founder & Content Creator"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-1 gradient-text">Abis Fulani</h3>
                  <p className="text-primary font-medium mb-4">Founder & Content Creator</p>
                  <p className="text-muted-foreground mb-6 flex-1">
                    The creative force behind the brand, Abis brings his unique perspective and engaging personality to
                    every piece of content, inspiring millions across multiple platforms.
                  </p>
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:text-primary hover:border-primary transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:text-primary hover:border-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:text-primary hover:border-primary transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:text-primary hover:border-primary transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedGradientBorder>
          </ScrollReveal>

          {/* Sarah */}
          <ScrollReveal delay={400}>
            <AnimatedGradientBorder containerClassName="h-full">
              <div className="bg-background rounded-xl overflow-hidden h-full flex flex-col">
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=600&width=600&text=Sarah"
                    alt="Sarah - Marketing Director"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-1 gradient-text">Sarah</h3>
                  <p className="text-primary font-medium mb-4">Marketing Director</p>
                  <p className="text-muted-foreground mb-6 flex-1">
                    A strategic thinker with a deep understanding of digital marketing, Sarah develops and implements
                    campaigns that expand Abis Fulani's reach and impact.
                  </p>
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:text-primary hover:border-primary transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:text-primary hover:border-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:text-primary hover:border-primary transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:text-primary hover:border-primary transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedGradientBorder>
          </ScrollReveal>
        </div>
      </section>

      {/* Extended Team */}
      <section className="py-20 bg-muted relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Extended Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The talented professionals who contribute to our success behind the scenes.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Michael", role: "Video Editor" },
              { name: "Amina", role: "Content Writer" },
              { name: "David", role: "Photographer" },
              { name: "Fatima", role: "Community Manager" },
              { name: "John", role: "Sound Engineer" },
              { name: "Zainab", role: "Graphic Designer" },
              { name: "Tunde", role: "Production Assistant" },
              { name: "Chioma", role: "Social Media Specialist" },
            ].map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 100}>
                <div className="bg-background rounded-xl p-6 hover-lift">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src={`/placeholder.svg?height=200&width=200&text=${member.name.charAt(0)}`}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-primary text-sm">{member.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold gradient-text">Join Our Team</h2>
              <p className="text-muted-foreground text-lg">
                We're always looking for talented individuals who are passionate about digital content creation, design,
                and technology.
              </p>
              <p className="text-muted-foreground text-lg">
                If you're creative, driven, and eager to make an impact in the digital space, we'd love to hear from
                you.
              </p>
              <Button className="relative overflow-hidden group" asChild>
                <Link href="/contact">
                  <span className="relative z-10">View Open Positions</span>
                  <span className="absolute inset-0 bg-accent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.3}>
            <AnimatedGradientBorder>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=720&width=1280&text=Join+Our+Team"
                  alt="Join Our Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
              </div>
            </AnimatedGradientBorder>
          </AnimatedSection>
        </div>
      </section>

      {/* Credits Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-6">Website Credits</h2>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-4">
              This website was designed and developed by Ahmad, bringing Abis Fulani's vision to life with beautiful
              animations and responsive design.
            </p>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
              Special thanks to the entire team for their contributions to this digital experience.
            </p>
            <Button variant="secondary" size="lg" className="hover:shadow-lg transition-shadow" asChild>
              <Link href="/contact">Get in Touch with Our Team</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

