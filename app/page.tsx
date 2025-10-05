import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Instagram, Youtube, TwitterIcon as TikTok, Facebook } from "lucide-react"
import AnimatedHero from "@/components/animated-hero"
import AnimatedSection from "@/components/animated-section"
import AnimatedCard from "@/components/animated-card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border"
import { AnimatedText } from "@/components/ui/animated-text"
import { FloatingElement } from "@/components/ui/floating-element"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <AnimatedHero />

      {/* About Preview Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Abis Fulani Profile"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay" />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.4}>
            <div className="space-y-6">
              <AnimatedText text="About Abis Fulani" className="text-3xl font-bold gradient-text" />
              <p className="text-muted-foreground text-lg">
                Abis Fulani is a renowned Nigerian digital content creator known for his engaging and informative videos
                across multiple platforms. With millions of followers across TikTok, YouTube, and Instagram, Abis has
                established himself as a leading voice in educational and entertaining content.
              </p>
              <p className="text-muted-foreground text-lg">
                Beyond content creation, Abis is passionate about giving back to his community through the Abis Fulani
                Charity Foundation, which focuses on education and youth empowerment.
              </p>
              <Button variant="outline" className="group relative overflow-hidden" asChild>
                <Link href="/about">
                  <span className="relative z-10">Read Full Bio</span>
                  <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-20 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 gradient-text animated-gradient-text">Featured Content</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore some of Abis Fulani's most popular and trending content from across his social media platforms.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item, index) => (
              <ScrollReveal key={item} delay={index * 200} direction="up">
                <AnimatedCard className="bg-background rounded-xl overflow-hidden hover-lift">
                  <div className="relative aspect-video">
                    <Image
                      src={`/placeholder.svg?height=720&width=1280&text=Video+${item}`}
                      alt={`Featured video ${item}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors hover:scale-110 transform duration-300 shadow-lg">
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
                          className="text-white ml-1"
                        >
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-xl mb-2">Video Title {item}</h3>
                    <p className="text-muted-foreground">
                      A brief description of this amazing video content that showcases Abis Fulani's talent and
                      expertise.
                    </p>
                    <div className="flex items-center mt-4 text-sm text-muted-foreground">
                      <span>2.4M views</span>
                      <span className="mx-2">•</span>
                      <span>3 weeks ago</span>
                    </div>
                  </div>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <AnimatedGradientBorder containerClassName="inline-block">
              <Button className="bg-background text-foreground hover:text-primary transition-colors" asChild>
                <Link href="/content">View All Content</Link>
              </Button>
            </AnimatedGradientBorder>
          </div>
        </div>
      </section>

      {/* Charity Foundation Preview */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="space-y-6 order-2 md:order-1" direction="left">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary animate-pulse-slow">
              Making A Difference
            </div>
            <h2 className="text-3xl font-bold gradient-text">Abis Fulani Charity Foundation</h2>
            <p className="text-muted-foreground text-lg">
              The Abis Fulani Charity Foundation is dedicated to empowering young Nigerians through education,
              technology training, and community development initiatives.
            </p>
            <p className="text-muted-foreground text-lg">
              Since its inception, the foundation has helped over 500 students access quality education and provided
              technology resources to underserved communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <FloatingElement amplitude={3} period={3}>
                <Button className="relative overflow-hidden group" asChild>
                  <Link href="/charity">
                    <span className="relative z-10">Learn About Our Work</span>
                    <span className="absolute inset-0 bg-accent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                  </Link>
                </Button>
              </FloatingElement>
              <FloatingElement amplitude={3} period={3} phase={1.5}>
                <Button variant="outline" className="group" asChild>
                  <Link href="/charity#donate">
                    <span className="group-hover:text-primary transition-colors">Donate Now</span>
                  </Link>
                </Button>
              </FloatingElement>
            </div>
          </AnimatedSection>

          <AnimatedSection className="order-1 md:order-2" direction="right" delay={0.3}>
            <AnimatedGradientBorder containerClassName="w-full aspect-video">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=720&width=1280&text=Charity+Foundation"
                  alt="Abis Fulani Charity Foundation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
              </div>
            </AnimatedGradientBorder>
          </AnimatedSection>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-muted relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-6 gradient-text">Connect With Abis</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
              Follow Abis Fulani on social media for daily content, behind-the-scenes moments, and community engagement.
            </p>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                icon: TikTok,
                name: "TikTok",
                handle: "@abisfulani",
                followers: "5.2M Followers",
                url: "https://tiktok.com",
              },
              {
                icon: Youtube,
                name: "YouTube",
                handle: "Abis Fulani",
                followers: "2.8M Subscribers",
                url: "https://youtube.com",
              },
              {
                icon: Instagram,
                name: "Instagram",
                handle: "@abisfulani",
                followers: "1.5M Followers",
                url: "https://instagram.com",
              },
              {
                icon: Facebook,
                name: "Facebook",
                handle: "Abis Fulani",
                followers: "950K Followers",
                url: "https://facebook.com",
              },
            ].map((social, index) => (
              <ScrollReveal key={social.name} delay={index * 150}>
                <Link href={social.url} target="_blank" rel="noopener noreferrer" className="group">
                  <AnimatedCard
                    className="flex flex-col items-center p-6 bg-background rounded-xl"
                    glowColor={index % 2 === 0 ? "rgba(138, 43, 226, 0.4)" : "rgba(90, 24, 154, 0.4)"}
                  >
                    <social.icon className="h-12 w-12 mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium">{social.name}</span>
                    <span className="text-muted-foreground mt-1">{social.handle}</span>
                    <span className="text-primary mt-2 font-medium">{social.followers}</span>
                  </AnimatedCard>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <AnimatedSection direction="left">
            <h2 className="text-3xl font-bold gradient-text">Latest Articles</h2>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <Button variant="outline" className="group" asChild>
              <Link href="/blog">
                View All
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, index) => (
            <ScrollReveal key={item} delay={index * 200} direction="up">
              <Link href={`/blog/post-${item}`} className="group">
                <AnimatedCard className="bg-background rounded-xl overflow-hidden">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={`/placeholder.svg?height=720&width=1280&text=Blog+${item}`}
                      alt={`Blog post ${item}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-muted-foreground mb-3">March 1{item}, 2024</div>
                    <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                      The Future of Digital Content Creation in Nigeria
                    </h3>
                    <p className="text-muted-foreground">
                      Exploring the evolving landscape of digital content creation and the opportunities it presents for
                      young Nigerians.
                    </p>
                  </div>
                </AnimatedCard>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
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
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
              Subscribe to Abis Fulani's newsletter for exclusive content, updates on new projects, and announcements.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex h-10 w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-2 text-sm placeholder:text-primary-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/30"
                required
              />
              <Button type="submit" variant="secondary" className="shrink-0 hover:shadow-lg transition-shadow">
                Subscribe
              </Button>
            </form>
            <p className="text-xs mt-4 text-primary-foreground/70">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from Abis Fulani.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

