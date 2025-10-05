import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border"
import { AnimatedText } from "@/components/ui/animated-text"
import { FloatingElement } from "@/components/ui/floating-element"
import AnimatedSection from "@/components/animated-section"

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=About+Abis+Fulani"
          alt="About Abis Fulani"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animated-gradient-text bg-clip-text text-transparent">
              About Abis Fulani
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Digital content creator, influencer, and philanthropist on a mission to educate and inspire.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <AnimatedGradientBorder containerClassName="w-full aspect-square">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=800&text=Abis+Fulani"
                  alt="Abis Fulani"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay" />
              </div>
            </AnimatedGradientBorder>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.3}>
            <div className="space-y-6">
              <AnimatedText text="My Story" className="text-3xl font-bold gradient-text" />
              <p className="text-muted-foreground text-lg">
                Born and raised in Lagos, Nigeria, Abis Fulani discovered his passion for digital content creation
                during his university years. With a background in Computer Science from the University of Lagos, Abis
                combined his technical knowledge with his natural charisma to create educational and entertaining
                content.
              </p>
              <p className="text-muted-foreground text-lg">
                What started as a hobby quickly gained traction, and by 2020, Abis had amassed a significant following
                across multiple platforms. His unique approach to explaining complex topics in an accessible and
                engaging manner resonated with audiences worldwide.
              </p>
              <p className="text-muted-foreground text-lg">
                Today, Abis is recognized as one of Nigeria's leading digital content creators, with millions of
                followers across TikTok, YouTube, Instagram, and Facebook. Beyond content creation, he is passionate
                about leveraging his platform for social good through the Abis Fulani Charity Foundation.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-muted relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text">Achievements & Recognition</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "award",
                title: "TikTok Creator of the Year",
                description: "Recognized as Nigeria's top educational content creator on TikTok in 2022 and 2023.",
              },
              {
                icon: "youtube",
                title: "YouTube Silver Button",
                description:
                  "Awarded the YouTube Silver Creator Button for surpassing 100,000 subscribers in record time.",
              },
              {
                icon: "influencer",
                title: "Digital Influencer Award",
                description: 'Named "Digital Influencer of the Year" at the 2023 Nigerian Social Media Awards.',
              },
              {
                icon: "forbes",
                title: "Forbes 30 Under 30",
                description:
                  "Featured in Forbes Africa's 30 Under 30 list for innovations in digital content creation.",
              },
              {
                icon: "humanitarian",
                title: "Humanitarian Award",
                description:
                  "Received the Youth Humanitarian Award for charitable work through the Abis Fulani Foundation.",
              },
              {
                icon: "brand",
                title: "Brand Ambassador",
                description: "Selected as brand ambassador for multiple international technology and lifestyle brands.",
              },
            ].map((achievement, index) => (
              <ScrollReveal key={achievement.title} delay={index * 100}>
                <div className="bg-background p-6 rounded-xl shadow-sm hover-lift">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      {achievement.icon === "award" && <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11"></path>}
                      {achievement.icon === "award" && (
                        <path d="M15 7a3 3 0 1 0-6 0c0 1.66 1.34 3 3 3 1.66 0 3-1.34 3-3z"></path>
                      )}

                      {achievement.icon === "youtube" && <circle cx="12" cy="8" r="7"></circle>}
                      {achievement.icon === "youtube" && (
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                      )}

                      {achievement.icon === "influencer" && <path d="M12 20h9"></path>}
                      {achievement.icon === "influencer" && (
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                      )}

                      {achievement.icon === "forbes" && <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>}
                      {achievement.icon === "forbes" && <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>}

                      {achievement.icon === "humanitarian" && (
                        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                      )}

                      {achievement.icon === "brand" && (
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      )}
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedSection direction="left">
            <AnimatedGradientBorder containerClassName="h-full">
              <div className="bg-background p-8 rounded-xl h-full">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Vision</h3>
                <p className="text-muted-foreground text-lg">
                  To create a world where digital content serves as a powerful tool for education, inspiration, and
                  positive social change, particularly in underserved communities across Africa.
                </p>
              </div>
            </AnimatedGradientBorder>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.3}>
            <AnimatedGradientBorder containerClassName="h-full">
              <div className="bg-background p-8 rounded-xl h-full">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Mission</h3>
                <p className="text-muted-foreground text-lg">
                  To leverage digital platforms to create engaging, educational, and entertaining content that empowers
                  individuals, particularly youth, with knowledge and skills while promoting Nigerian culture and values
                  globally.
                </p>
              </div>
            </AnimatedGradientBorder>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text">My Journey</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              The key milestones that have shaped my career and impact
            </p>
          </AnimatedSection>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30"></div>

            {[
              {
                year: "2015",
                title: "University Years",
                description:
                  "Started creating educational content while studying Computer Science at the University of Lagos.",
              },
              {
                year: "2018",
                title: "First Viral Video",
                description:
                  "Created my first viral video explaining complex tech concepts in simple terms, reaching over 1 million views.",
              },
              {
                year: "2020",
                title: "Full-time Creator",
                description:
                  "Took the leap to become a full-time content creator, focusing on educational and entertaining content.",
              },
              {
                year: "2021",
                title: "Charity Foundation",
                description:
                  "Established the Abis Fulani Charity Foundation to give back to communities across Nigeria.",
              },
              {
                year: "2022",
                title: "International Recognition",
                description: "Featured in international media and reached 5 million followers across all platforms.",
              },
              {
                year: "2023",
                title: "Expanding Impact",
                description:
                  "Launched new initiatives including mentorship programs and expanded the foundation's reach.",
              },
            ].map((item, index) => (
              <ScrollReveal key={item.year} delay={index * 150}>
                <div className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                    <div className="bg-background p-6 rounded-xl shadow-sm hover-lift">
                      <span className="text-primary font-bold text-lg">{item.year}</span>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>

                  <div className="w-1/2"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5" />

        {/* Animated shapes */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 20 + 10}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
              Whether you're interested in collaborations, speaking engagements, or just want to say hello, I'd love to
              hear from you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <FloatingElement amplitude={5} period={4}>
                <Button variant="secondary" size="lg" className="hover:shadow-lg transition-shadow" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </FloatingElement>
              <FloatingElement amplitude={5} period={4} phase={2}>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
                  asChild
                >
                  <Link href="/content">Explore My Content</Link>
                </Button>
              </FloatingElement>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

