import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TwitterIcon as TikTok, Youtube, Instagram } from "lucide-react"

export default function ContentPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">My Content</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore Abis Fulani's videos, posts, and content across various platforms. From educational tutorials to
            entertaining skits, there's something for everyone.
          </p>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-20 container mx-auto px-4">
        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="tiktok">TikTok</TabsTrigger>
            <TabsTrigger value="youtube">YouTube</TabsTrigger>
            <TabsTrigger value="instagram">Instagram</TabsTrigger>
          </TabsList>

          <TabsContent value="featured">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-background rounded-xl overflow-hidden shadow-sm group">
                  <div className="relative aspect-video">
                    <Image
                      src={`/placeholder.svg?height=720&width=1280&text=Featured+${item}`}
                      alt={`Featured video ${item}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
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
                    <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {Math.floor(Math.random() * 10) + 1}:{Math.floor(Math.random() * 50) + 10}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=100&width=100&text=AF"
                          alt="Abis Fulani"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                          How to Create Viral Content in 2024 - Tips and Tricks
                        </h3>
                        <p className="text-muted-foreground text-sm mt-1">Abis Fulani</p>
                        <div className="flex items-center mt-1 text-xs text-muted-foreground">
                          <span>
                            {Math.floor(Math.random() * 10) + 1}.{Math.floor(Math.random() * 9) + 1}M views
                          </span>
                          <span className="mx-1">•</span>
                          <span>{Math.floor(Math.random() * 11) + 1} months ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tiktok">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {Array.from({ length: 15 }).map((_, index) => (
                <div key={index} className="bg-background rounded-xl overflow-hidden shadow-sm group">
                  <div className="relative aspect-[9/16]">
                    <Image
                      src={`/placeholder.svg?height=1920&width=1080&text=TikTok+${index + 1}`}
                      alt={`TikTok video ${index + 1}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
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
                    <div className="absolute bottom-2 left-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center justify-between">
                      <span>
                        {Math.floor(Math.random() * 10) + 1}.{Math.floor(Math.random() * 9) + 1}M
                      </span>
                      <TikTok className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button asChild>
                <a href="https://tiktok.com/@abisfulani" target="_blank" rel="noopener noreferrer">
                  <TikTok className="mr-2 h-4 w-4" />
                  Follow on TikTok
                </a>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="youtube">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-background rounded-xl overflow-hidden shadow-sm group">
                  <div className="relative aspect-video">
                    <Image
                      src={`/placeholder.svg?height=720&width=1280&text=YouTube+${index + 1}`}
                      alt={`YouTube video ${index + 1}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer">
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
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {Math.floor(Math.random() * 20) + 10}:{Math.floor(Math.random() * 59) + 10}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                      {
                        [
                          "How I Gained 1 Million Followers in 30 Days",
                          "The Future of Content Creation in Africa",
                          "Behind the Scenes: A Day in My Life",
                          "Tech Tips Every Creator Should Know",
                          "How to Monetize Your Social Media Presence",
                          "My Journey from Student to Influencer",
                        ][index]
                      }
                    </h3>
                    <div className="flex items-center mt-2 text-xs text-muted-foreground">
                      <span>
                        {Math.floor(Math.random() * 10) + 1}.{Math.floor(Math.random() * 9) + 1}M views
                      </span>
                      <span className="mx-1">•</span>
                      <span>{Math.floor(Math.random() * 11) + 1} months ago</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button asChild>
                <a href="https://youtube.com/abisfulani" target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2 h-4 w-4" />
                  Subscribe on YouTube
                </a>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="instagram">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="relative aspect-square rounded-md overflow-hidden group">
                  <Image
                    src={`/placeholder.svg?height=800&width=800&text=IG+${index + 1}`}
                    alt={`Instagram post ${index + 1}`}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex items-center space-x-4 text-white">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-1"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                        <span>{Math.floor(Math.random() * 900) + 100}K</span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-1"
                        >
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                        <span>{Math.floor(Math.random() * 90) + 10}K</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button asChild>
                <a href="https://instagram.com/abisfulani" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-4 w-4" />
                  Follow on Instagram
                </a>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Trending Content */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Trending Now</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-background rounded-xl overflow-hidden shadow-md">
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=720&width=1280&text=Trending+Video"
                  alt="Trending video"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
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
                <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                  TRENDING #1
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">15:42</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">The Future of AI in Content Creation</h3>
                <p className="text-muted-foreground mb-4">
                  In this in-depth video, I explore how artificial intelligence is revolutionizing the way we create and
                  consume digital content, and what this means for creators in 2024 and beyond.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Youtube className="h-4 w-4 mr-1" />
                    <span>8.3M views</span>
                    <span className="mx-1">•</span>
                    <span>2 weeks ago</span>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Watch Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-background rounded-xl overflow-hidden shadow-sm flex flex-col sm:flex-row"
                >
                  <div className="relative sm:w-40 md:w-48 aspect-video sm:aspect-square shrink-0">
                    <Image
                      src={`/placeholder.svg?height=400&width=400&text=Trending+${item + 1}`}
                      alt={`Trending content ${item + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
                      {Math.floor(Math.random() * 10) + 1}:{Math.floor(Math.random() * 50) + 10}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 line-clamp-2">
                      {
                        [
                          "5 Tips for Growing Your Social Media Following",
                          "How to Make Money as a Content Creator in 2024",
                          "Behind the Scenes: My Content Creation Process",
                        ][item - 1]
                      }
                    </h3>
                    <div className="flex items-center mt-2 text-xs text-muted-foreground">
                      <span>
                        {Math.floor(Math.random() * 10) + 1}.{Math.floor(Math.random() * 9) + 1}M views
                      </span>
                      <span className="mx-1">•</span>
                      <span>{Math.floor(Math.random() * 4) + 1} weeks ago</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Playlists/Series */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Popular Series</h2>
          <Button variant="outline">View All Series</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {["Tech Tips for Creators", "Nigerian Culture Explained", "Behind the Scenes"].map((series, index) => (
            <div key={index} className="bg-background rounded-xl overflow-hidden shadow-md group">
              <div className="relative aspect-video">
                <Image
                  src={`/placeholder.svg?height=720&width=1280&text=${series}`}
                  alt={series}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white mb-1">{series}</h3>
                  <p className="text-white/80 text-sm">{Math.floor(Math.random() * 15) + 5} videos</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex -space-x-4 mb-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="relative w-16 h-9 rounded-md overflow-hidden border-2 border-background">
                      <Image
                        src={`/placeholder.svg?height=180&width=320&text=${item}`}
                        alt={`Video thumbnail ${item}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <Button className="w-full" asChild>
                  <Link href="#">Watch Series</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Never Miss a Video</h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
            Subscribe to my channels and turn on notifications to stay updated with my latest content across all
            platforms.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <a href="https://youtube.com/abisfulani" target="_blank" rel="noopener noreferrer">
                <Youtube className="mr-2 h-5 w-5" />
                Subscribe on YouTube
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="https://tiktok.com/@abisfulani" target="_blank" rel="noopener noreferrer">
                <TikTok className="mr-2 h-5 w-5" />
                Follow on TikTok
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="https://instagram.com/abisfulani" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-5 w-5" />
                Follow on Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

