import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold">Pricing & Packages</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Choose the perfect plan for your active aging journey
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Starter Package */}
              <Card className="border-2 border-gray-200 hover:border-orange-300 transition-colors">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">Starter</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-gray-900">$89</div>
                    <div className="text-gray-600">per month</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>8 classes per month</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Access to all programs</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Community events</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Online booking system</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Beginner-friendly classes</span>
                    </li>
                  </ul>
                  <Button
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700"
                    asChild
                  >
                    <Link href="/booking">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Premium Package */}
              <Card className="border-2 border-orange-500 relative hover:border-orange-600 transition-colors">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl font-bold">Premium</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-gray-900">$149</div>
                    <div className="text-gray-600">per month</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Unlimited classes</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Access to all programs</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Priority booking</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Monthly wellness consultation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Sound therapy sessions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Meditation classes</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Community events & workshops</span>
                    </li>
                  </ul>
                  <Button
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700"
                    asChild
                  >
                    <Link href="/booking">Choose Premium</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Elite Package */}
              <Card className="border-2 border-gray-200 hover:border-purple-300 transition-colors">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">Elite</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-gray-900">$229</div>
                    <div className="text-gray-600">per month</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Unlimited classes</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Personal training sessions (2/month)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Customized wellness plan</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Nutrition consultation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Weekly wellness check-ins</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>All Premium benefits</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>VIP community access</span>
                    </li>
                  </ul>
                  <Button
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                    asChild
                  >
                    <Link href="/booking">Go Elite</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Drop-in Classes */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold">Drop-in Classes</h2>
                <p className="text-xl text-gray-600">Not ready for a membership? Try individual classes first!</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 text-center space-y-4">
                    <h3 className="text-2xl font-bold">Single Class</h3>
                    <div className="text-3xl font-bold text-orange-600">$25</div>
                    <p className="text-gray-600">Perfect for trying out our programs</p>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <Link href="/booking">Book Single Class</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 text-center space-y-4">
                    <h3 className="text-2xl font-bold">Class Package (5)</h3>
                    <div className="text-3xl font-bold text-orange-600">$100</div>
                    <p className="text-gray-600">Save $25 with our 5-class package</p>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <Link href="/booking">Buy Package</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Can I freeze my membership?</h3>
                    <p className="text-gray-600">
                      Yes, you can freeze your membership for up to 3 months per year for medical reasons or extended
                      travel.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Is there a contract commitment?</h3>
                    <p className="text-gray-600">
                      No long-term contracts required. All memberships are month-to-month with 30 days notice for
                      cancellation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">What if I need to modify exercises?</h3>
                    <p className="text-gray-600">
                      All our instructors are trained to provide modifications for different fitness levels and physical
                      limitations.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Do you offer senior discounts?</h3>
                    <p className="text-gray-600">
                      Yes! We offer a 10% discount for members 65 and older. Contact us for details.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-pink-600">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8 text-white">
              <h2 className="text-3xl lg:text-4xl font-bold">Ready to Begin Your Journey?</h2>
              <p className="text-xl opacity-90">Start with a free consultation to find the perfect plan for you.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
                  <Link href="/contact">Free Consultation</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                  asChild
                >
                  <Link href="/booking">Book First Class</Link>
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
