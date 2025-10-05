import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CharityPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=Abis+Fulani+Charity+Foundation"
          alt="Abis Fulani Charity Foundation"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Abis Fulani Charity Foundation</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Empowering Nigerian youth through education, technology, and community development.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="#donate">Donate Now</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              asChild
            >
              <Link href="#volunteer">Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About the Foundation */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground text-lg">
              The Abis Fulani Charity Foundation was established in 2021 with a clear mission: to empower young
              Nigerians through education, technology training, and community development initiatives.
            </p>
            <p className="text-muted-foreground text-lg">
              We believe that every child deserves access to quality education and the tools needed to thrive in the
              digital age. Our foundation works to bridge the digital divide by providing resources, training, and
              opportunities to underserved communities across Nigeria.
            </p>
            <p className="text-muted-foreground text-lg">
              Through partnerships with schools, local organizations, and corporate sponsors, we've been able to impact
              the lives of thousands of young Nigerians, helping them build the skills and confidence needed to succeed
              in today's rapidly evolving world.
            </p>
          </div>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=720&width=1280&text=Our+Mission"
              alt="Our Mission"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section id="impact" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Students supported with scholarships</p>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-primary mb-2">10</div>
              <p className="text-muted-foreground">Computer labs built in rural schools</p>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-primary mb-2">2,000+</div>
              <p className="text-muted-foreground">Youth trained in digital skills</p>
            </div>

            <div className="bg-background p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-primary mb-2">15</div>
              <p className="text-muted-foreground">Communities reached across Nigeria</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects */}
      <section id="projects" className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-background rounded-xl overflow-hidden shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Digital+Literacy+Program"
                alt="Digital Literacy Program"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Digital Literacy Program</h3>
              <p className="text-muted-foreground mb-4">
                Providing basic computer skills training to students in underserved communities, equipping them with
                essential digital literacy for the modern world.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="#digital-literacy">Learn More</Link>
              </Button>
            </div>
          </div>

          <div className="bg-background rounded-xl overflow-hidden shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src="/placeholder.svg?height=600&width=800&text=School+Infrastructure"
                alt="School Infrastructure"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">School Infrastructure</h3>
              <p className="text-muted-foreground mb-4">
                Building and renovating classrooms, computer labs, and libraries in rural schools to create conducive
                learning environments.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="#infrastructure">Learn More</Link>
              </Button>
            </div>
          </div>

          <div className="bg-background rounded-xl overflow-hidden shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Scholarship+Program"
                alt="Scholarship Program"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Scholarship Program</h3>
              <p className="text-muted-foreground mb-4">
                Providing financial support to talented students from low-income families to pursue education in
                technology and digital media.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="#scholarship">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Support Our Cause</h2>
              <p className="text-primary-foreground/90 text-lg">
                Your donation, no matter how small, can make a significant difference in the lives of young Nigerians.
                By supporting the Abis Fulani Charity Foundation, you're investing in the future of Nigeria's youth.
              </p>
              <p className="text-primary-foreground/90 text-lg">
                All donations go directly toward our educational programs, technology resources, and community
                development initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg">
                  Donate Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Become a Monthly Donor
                </Button>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-4">How Your Donation Helps</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
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
                    className="mr-2 h-5 w-5 shrink-0"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>₦10,000 provides a student with textbooks and school supplies for a term</span>
                </li>
                <li className="flex items-start">
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
                    className="mr-2 h-5 w-5 shrink-0"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>₦50,000 sponsors a student's tuition for a semester</span>
                </li>
                <li className="flex items-start">
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
                    className="mr-2 h-5 w-5 shrink-0"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>₦100,000 helps equip a classroom with basic technology</span>
                </li>
                <li className="flex items-start">
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
                    className="mr-2 h-5 w-5 shrink-0"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>₦500,000 funds a computer lab for a rural school</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=720&width=1280&text=Volunteer+With+Us"
              alt="Volunteer With Us"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Volunteer With Us</h2>
            <p className="text-muted-foreground text-lg">
              We're always looking for passionate individuals to join our team of volunteers. Whether you're a teacher,
              technology professional, or simply someone who wants to make a difference, there's a place for you at the
              Abis Fulani Charity Foundation.
            </p>
            <p className="text-muted-foreground text-lg">
              Volunteers can contribute in various ways, from teaching classes and mentoring students to helping with
              event organization and administrative tasks.
            </p>
            <Button asChild>
              <Link href="/contact#volunteer">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Partners</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="bg-background p-6 rounded-xl flex items-center justify-center">
                <Image
                  src={`/placeholder.svg?height=100&width=200&text=Partner+${item}`}
                  alt={`Partner ${item}`}
                  width={200}
                  height={100}
                  className="max-h-16 w-auto"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="/contact#partnership">Become a Partner</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

