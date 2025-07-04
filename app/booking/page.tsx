"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function BookingPage() {
  const programs = [
    { id: "jumping", name: "Jumping Fitness", icon: "🦘", color: "from-orange-500 to-red-600" },
    { id: "bungee", name: "Bungee Fitness", icon: "🎪", color: "from-purple-500 to-pink-600" },
    { id: "pilates", name: "Pilates & Yoga", icon: "🧘", color: "from-green-500 to-teal-600" },
    { id: "dance", name: "Contemporary Dance", icon: "💃", color: "from-blue-500 to-purple-600" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold">Book Your Class</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Reserve your spot in our transformative fitness programs through our easy online booking system
              </p>
            </div>
          </div>
        </section>

        {/* Momence Booking Integration */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold">Book Online with Momence</h2>
                <p className="text-xl text-gray-600">
                  Easy, secure, and instant class booking - view real-time availability and reserve your spot
                </p>
              </div>

              {/* Momence Embed Container */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto">
                    <Calendar className="w-10 h-10 text-white" />
                  </div>

                  {/* Momence Widget Placeholder - Replace with actual Momence embed code */}
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 bg-gray-50">
                    <p className="text-gray-600 mb-4">Momence Booking Widget will be embedded here</p>
                    <p className="text-sm text-gray-500 mb-6">
                      Replace this section with your Momence embed code or iframe
                    </p>

                    {/* Temporary direct link to Momence - Replace with your actual Momence URL */}
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700"
                      asChild
                    >
                      <a
                        href="https://momence.com/s/revibex"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        Book Classes on Momence
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Program Quick Links */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
                {programs.map((program) => (
                  <Card key={program.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center space-y-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center mx-auto`}
                      >
                        <span className="text-2xl">{program.icon}</span>
                      </div>
                      <h3 className="font-semibold text-lg">{program.name}</h3>
                      <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                        <a
                          href={`https://momence.com/s/revibex?program=${program.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Book Now
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Simple Schedule Overview */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">Class Schedule</h2>
                <p className="text-xl text-gray-600">We offer classes 7 days a week from morning to evening</p>
              </div>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold">Morning Classes</h3>
                      <p className="text-sm text-gray-600">7:30 AM - 12:00 PM</p>
                    </div>

                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold">Afternoon Classes</h3>
                      <p className="text-sm text-gray-600">2:00 PM - 4:20 PM</p>
                    </div>

                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold">Evening Classes</h3>
                      <p className="text-sm text-gray-600">5:15 PM - 7:35 PM</p>
                    </div>

                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold">All Levels</h3>
                      <p className="text-sm text-gray-600">LITE to ULTIMATE</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button size="lg" variant="outline" className="bg-white border-orange-300 hover:bg-orange-50" asChild>
                <Link href="/schedule" className="inline-flex items-center gap-2">
                  View Full Schedule
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Booking Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold">Why Book with Momence?</h2>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <Card className="border-0 shadow-sm text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">Real-Time Availability</h3>
                    <p className="text-gray-600">
                      See live class availability and book instantly without waiting for confirmation
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">Easy Management</h3>
                    <p className="text-gray-600">
                      Manage your bookings, view your class history, and track your fitness journey
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">Flexible Cancellation</h3>
                    <p className="text-gray-600">
                      Cancel or reschedule classes easily through the app with our flexible policies
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold">Before You Book</h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">What to Bring</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Comfortable workout clothes</li>
                      <li>• Water bottle</li>
                      <li>• Towel</li>
                      <li>• Non-slip socks (for bungee classes)</li>
                      <li>• Yoga mat (if you have one)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">Cancellation Policy</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Cancel up to 12 hours before class</li>
                      <li>• Late cancellations may be charged</li>
                      <li>• First-time visitors get one free cancellation</li>
                      <li>• Manage cancellations through Momence app</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
