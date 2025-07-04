import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, ArrowRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50"></div>
          <div className="container mx-auto px-4 relative">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    <Star className="w-4 h-4 text-orange-500" />
                    <span>Transform Your Golden Years</span>
                  </div>
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                      Re-vibe
                    </span>{" "}
                    Your Life,{" "}
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Transform
                    </span>{" "}
                    Your Future
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Guiding you through vibrant active aging with holistic wellness programs designed for your golden
                    years.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700"
                    asChild
                  >
                    <Link href="/booking">
                      Start Your Journey
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-orange-200 hover:bg-orange-50 bg-transparent"
                    asChild
                  >
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-3xl blur-3xl"></div>
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Active seniors exercising"
                  width={500}
                  height={600}
                  className="relative rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold">What We Offer</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A holistic approach to active aging through physical and mental wellbeing
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 space-y-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Book Classes</h3>
                    <p className="text-gray-600">
                      Reserve your spot in our transformative fitness programs including jumping fitness, bungee
                      fitness, pilates, yoga, and contemporary dance.
                    </p>
                    <Button variant="outline" asChild>
                      <Link href="/booking">Book Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 space-y-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Buy Packages</h3>
                    <p className="text-gray-600">
                      Choose from our flexible membership options and class packages designed for your active aging
                      journey and fitness goals.
                    </p>
                    <Button variant="outline" asChild>
                      <Link href="/pricing">View Packages</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-pink-600">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8 text-white">
              <h2 className="text-3xl lg:text-5xl font-bold">Ready to Transform Your Life?</h2>
              <p className="text-xl opacity-90">
                Because thriving in your later years isn't just about living longer — it's about living better,
                stronger, and happier.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
                  <Link href="/booking">Start Your Free Trial</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                  asChild
                >
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
