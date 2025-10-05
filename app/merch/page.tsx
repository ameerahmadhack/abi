import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

export default function MerchPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=Abis+Fulani+Merch"
          alt="Abis Fulani Merch"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Official Merchandise</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Wear your support with the official Abis Fulani merchandise collection. Quality products with unique
            designs.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <a href="#products">Shop Now</a>
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Classic Logo T-Shirt",
              price: "₦12,500",
              image: "Tshirt",
            },
            {
              name: "Premium Hoodie",
              price: "₦25,000",
              image: "Hoodie",
            },
            {
              name: "Snapback Cap",
              price: "₦8,500",
              image: "Cap",
            },
            {
              name: "Phone Case",
              price: "₦7,000",
              image: "PhoneCase",
            },
          ].map((product, index) => (
            <div key={index} className="group">
              <div className="bg-muted rounded-xl overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src={`/placeholder.svg?height=600&width=600&text=${product.image}`}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold text-lg">{product.price}</span>
                    <Button size="sm" className="group-hover:bg-primary">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Shop by Category</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Apparel",
                description: "T-shirts, hoodies, and more featuring exclusive Abis Fulani designs.",
                image: "Apparel",
              },
              {
                name: "Accessories",
                description: "Caps, phone cases, and other accessories to showcase your support.",
                image: "Accessories",
              },
              {
                name: "Limited Edition",
                description: "Special collections and limited-time releases you won't want to miss.",
                image: "Limited",
              },
            ].map((category, index) => (
              <Link href={`/merch/${category.name.toLowerCase()}`} key={index} className="group">
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=800&width=600&text=${category.image}`}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-xl mb-2">{category.name}</h3>
                    <p className="text-white/80 mb-4">{category.description}</p>
                    <Button
                      variant="outline"
                      className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 w-full"
                    >
                      Shop {category.name}
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Best Sellers</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Signature Hoodie - Black",
              price: "₦28,000",
              originalPrice: "₦35,000",
              image: "BlackHoodie",
              badge: "20% OFF",
            },
            {
              name: "Creator T-Shirt - White",
              price: "₦15,000",
              image: "WhiteTshirt",
              badge: "Best Seller",
            },
            {
              name: "Abis Fulani Tote Bag",
              price: "₦9,500",
              image: "ToteBag",
            },
          ].map((product, index) => (
            <div key={index} className="group">
              <div className="bg-background rounded-xl overflow-hidden border">
                <div className="relative aspect-square">
                  <Image
                    src={`/placeholder.svg?height=600&width=600&text=${product.image}`}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  {product.badge && (
                    <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                      {product.badge}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-muted-foreground line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button className="flex-1">Buy Now</Button>
                    <Button variant="outline" className="px-3">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/merch/all">View All Products</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Customer Reviews</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-background p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-yellow-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  {
                    [
                      "The quality of the hoodie is amazing! Super comfortable and the design looks even better in person. Fast shipping too!",
                      "I've bought merch from other creators before, but Abis Fulani's stuff is on another level. Great quality and unique designs.",
                      "Love my new tote bag! It's sturdy, spacious, and I get compliments on it all the time. Will definitely buy more items.",
                    ][item - 1]
                  }
                </p>
                <div className="flex items-center">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src={`/placeholder.svg?height=100&width=100&text=User${item}`}
                      alt={`Customer ${item}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{["Sarah K.", "Michael O.", "Amina T."][item - 1]}</div>
                    <div className="text-xs text-muted-foreground">Verified Buyer</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-muted p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">How long does shipping take?</h3>
            <p className="text-muted-foreground">
              For orders within Nigeria, shipping typically takes 3-5 business days. International shipping may take
              10-15 business days depending on the destination.
            </p>
          </div>

          <div className="bg-muted p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">What is your return policy?</h3>
            <p className="text-muted-foreground">
              We accept returns within 14 days of delivery if the item is unused and in its original packaging. Please
              contact our support team to initiate a return.
            </p>
          </div>

          <div className="bg-muted p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Do you ship internationally?</h3>
            <p className="text-muted-foreground">
              Yes, we ship to most countries worldwide. International shipping costs and delivery times vary by
              location.
            </p>
          </div>

          <div className="bg-muted p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">What sizes are available?</h3>
            <p className="text-muted-foreground">
              Our apparel comes in sizes S through 2XL. Please refer to the size guide on each product page for specific
              measurements.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="/merch/faq">View All FAQs</Link>
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Abis Fulani Community</h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
            Get exclusive access to limited-edition merch drops, special discounts, and behind-the-scenes content.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="#products">Shop the Collection</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

