import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold">Our Programs</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover our exciting range of fitness programs designed specifically for active aging
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Jumping Fitness */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
                    <div className="w-8 h-8 text-white font-bold text-lg">🦘</div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold">Jumping Fitness</h3>
                    <p className="text-gray-600 text-lg">
                      High-energy, low-impact cardio workouts that boost heart health while being gentle on joints.
                      Experience the joy of bouncing your way to fitness with our specialized trampoline classes.
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">Benefits:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          Improves cardiovascular health
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          Low-impact on joints
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          Burns calories effectively
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          Enhances balance and coordination
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          Boosts mood and energy
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          Strengthens core muscles
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                        Cardio
                      </span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                        Low Impact
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        All Levels
                      </span>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
                      asChild
                    >
                      <Link href="/programs/jumping-fitness" className="flex items-center justify-center gap-2">
                        Explore Jumping Programs
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Bungee Fitness */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                    <div className="w-8 h-8 text-white font-bold text-lg">🎪</div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold">Bungee Fitness</h3>
                    <p className="text-gray-600 text-lg">
                      Experience the joy of defying gravity! Our bungee classes combine strength, cardio, and fun while
                      reducing impact on joints. Feel like you're flying while getting an amazing workout.
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">Benefits:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          Full-body strength training
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          Reduces joint stress
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          Improves balance and coordination
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          Boosts confidence and mood
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        Strength
                      </span>
                      <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">Fun</span>
                    </div>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <a href="https://momence.com/s/revibex?program=bungee" target="_blank" rel="noopener noreferrer">
                        Book Bungee Class
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Pilates & Yoga */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center">
                    <div className="w-8 h-8 text-white font-bold text-lg">🧘</div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold">Pilates & Yoga</h3>
                    <p className="text-gray-600 text-lg">
                      Build core strength, improve flexibility, and find inner peace through our mindful movement
                      practices designed specifically for mature bodies and varying fitness levels.
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">Benefits:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          Strengthens core muscles
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          Increases flexibility
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          Reduces stress and anxiety
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          Improves posture and balance
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        Flexibility
                      </span>
                      <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                        Mindful
                      </span>
                    </div>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <a href="https://momence.com/s/revibex?program=pilates" target="_blank" rel="noopener noreferrer">
                        Book Pilates/Yoga Class
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contemporary Dance */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <div className="w-8 h-8 text-white font-bold text-lg">💃</div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold">Contemporary Dance</h3>
                    <p className="text-gray-600 text-lg">
                      Express yourself through graceful movement that enhances coordination, balance, and emotional
                      wellbeing while celebrating the art of dance in a supportive, non-judgmental environment.
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">Benefits:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          Enhances coordination
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          Improves balance and grace
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          Boosts emotional wellbeing
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          Encourages creative expression
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        Balance
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        Expression
                      </span>
                    </div>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <a href="https://momence.com/s/revibex?program=dance" target="_blank" rel="noopener noreferrer">
                        Book Dance Class
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Program Benefits */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center space-y-6">
                <h3 className="text-3xl font-bold">Why Our Programs Work</h3>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold">Age-Appropriate</h4>
                    <p className="text-sm text-gray-600">Designed specifically for mature bodies and fitness levels</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold">Community Focused</h4>
                    <p className="text-sm text-gray-600">Build lasting friendships while staying active together</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold">Proven Results</h4>
                    <p className="text-sm text-gray-600">Evidence-based approaches for lasting health benefits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-pink-600">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8 text-white">
              <h2 className="text-3xl lg:text-4xl font-bold">Ready to Start Your Fitness Journey?</h2>
              <p className="text-xl opacity-90">
                Choose the program that speaks to you and begin your transformation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
                  <Link href="/booking">Book Your First Class</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                  asChild
                >
                  <Link href="/contact">Ask Questions</Link>
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
