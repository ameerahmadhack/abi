import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog & Articles</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Insights, stories, and perspectives from Abis Fulani on content creation, technology, Nigerian culture, and
            more.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=1200&text=Featured+Post"
              alt="Featured post"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
              Featured Post
            </div>
            <h2 className="text-3xl font-bold">The Evolution of Digital Content Creation in Nigeria</h2>
            <p className="text-muted-foreground text-lg">
              From traditional media to social platforms, explore how digital content creation has evolved in Nigeria
              and the opportunities it presents for the next generation of creators.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>March 15, 2024</span>
              <span className="mx-2">•</span>
              <span>10 min read</span>
            </div>
            <Button asChild>
              <Link href="/blog/evolution-of-digital-content-creation">Read Article</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <Link href={`/blog/post-${index + 1}`} key={index} className="group">
                <div className="bg-background rounded-xl overflow-hidden shadow-sm h-full flex flex-col">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={`/placeholder.svg?height=720&width=1280&text=Article+${index + 1}`}
                      alt={`Article ${index + 1}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground mb-3">
                      {
                        [
                          "Technology",
                          "Content Creation",
                          "Social Media",
                          "Nigerian Culture",
                          "Education",
                          "Personal Growth",
                        ][index]
                      }
                    </div>
                    <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                      {
                        [
                          "5 Essential Tools Every Content Creator Needs in 2024",
                          "How to Build a Personal Brand That Stands Out",
                          "The Impact of Social Media on Nigerian Youth",
                          "Balancing Creativity and Commercialization in Content",
                          "Educational Content: The Future of Digital Media",
                          "My Journey: From University Student to Digital Influencer",
                        ][index]
                      }
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-1">
                      {
                        [
                          "Discover the must-have tools that will elevate your content creation game and help you stand out in a crowded digital landscape.",
                          "Learn the strategies I used to build a distinctive personal brand and how you can apply them to your own online presence.",
                          "An exploration of how social media platforms are shaping the perspectives and opportunities for young Nigerians.",
                          "Finding the sweet spot between artistic expression and commercial success in the content creation industry.",
                          "Why educational content is gaining traction and how creators can leverage this trend for impact and growth.",
                          "The lessons, challenges, and triumphs from my personal journey in the digital content space.",
                        ][index]
                      }
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground mt-auto">
                      <span>March {10 + index}, 2024</span>
                      <span className="mx-2">•</span>
                      <span>{5 + index} min read</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="/blog/archive">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Browse by Category</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            "Technology",
            "Content Creation",
            "Social Media",
            "Nigerian Culture",
            "Education",
            "Personal Growth",
            "Behind the Scenes",
            "Industry Insights",
          ].map((category, index) => (
            <Link href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`} key={index} className="group">
              <div className="relative h-40 rounded-xl overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=400&width=600&text=${category}`}
                  alt={category}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex items-end p-4">
                  <h3 className="text-white font-medium text-lg">{category}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to My Newsletter</h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
            Get the latest articles, insights, and updates delivered directly to your inbox. No spam, just valuable
            content.
          </p>

          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex h-10 w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-2 text-sm placeholder:text-primary-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/30"
              required
            />
            <Button type="submit" variant="secondary" className="shrink-0">
              Subscribe
            </Button>
          </form>
          <p className="text-xs mt-4 text-primary-foreground/70">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Abis Fulani.
          </p>
        </div>
      </section>
    </div>
  )
}

