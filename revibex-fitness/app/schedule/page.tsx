import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, User, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SchedulePage() {
  const scheduleData = {
    Monday: [
      { time: "7:30 AM", class: "YOGA", instructor: "", type: "yoga" },
      { time: "5:15 PM", class: "JUMPING LITE", instructor: "Rebecca", type: "lite" },
      { time: "6:30 PM", class: "JUMPING INSANE BURN", instructor: "Yanni/Jane", type: "burn" },
      { time: "7:35 PM", class: "JUMPING REGULAR®", instructor: "Fang Ting", type: "regular" },
    ],
    Tuesday: [
      { time: "8:35 AM", class: "JUMPING REGULAR®", instructor: "Pamela Chong", type: "regular" },
      { time: "9:40 AM", class: "JUMPING LITE", instructor: "Erina", type: "lite" },
      { time: "6:30 PM", class: "JUMPING REGULAR®", instructor: "Raymond/Jeannie", type: "regular" },
      { time: "7:35 PM", class: "JUMPING REGULAR®", instructor: "Lorraine", type: "regular" },
    ],
    Wednesday: [
      { time: "9:40 AM", class: "JUMPING LITE", instructor: "Pamela Chong", type: "lite" },
      { time: "12:00 PM", class: "KPOP DANCE", instructor: "James", type: "dance" },
      { time: "5:15 PM", class: "PILATES", instructor: "Faiz", type: "pilates" },
      { time: "6:30 PM", class: "JUMPING ULTIMATE", instructor: "Yanni/Jane", type: "ultimate" },
      { time: "7:35 PM", class: "JUMPING REGULAR®", instructor: "Pamela Chong", type: "regular" },
    ],
    Thursday: [
      { time: "8:35 AM", class: "YOGA", instructor: "", type: "yoga" },
      { time: "5:15 PM", class: "JUMPING REGULAR®", instructor: "Rebecca", type: "regular" },
      { time: "6:30 PM", class: "JUMPING FUSION", instructor: "Vanessa", type: "fusion" },
      { time: "7:35 PM", class: "JUMPING LITE", instructor: "Vanessa", type: "lite" },
    ],
    Friday: [
      { time: "7:30 AM", class: "JUMPING LITE", instructor: "Erina", type: "lite" },
      { time: "8:35 AM", class: "JUMPING REGULAR®", instructor: "Erina", type: "regular" },
      { time: "5:15 PM", class: "JUMPING REGULAR®", instructor: "Yanni/Anecia", type: "regular" },
      { time: "6:30 PM", class: "JUMPING REGULAR®", instructor: "Ying", type: "regular" },
      { time: "7:35 PM", class: "CONTEMPORARY DANCE", instructor: "Fiona", type: "dance" },
    ],
    Saturday: [
      { time: "9:20 AM", class: "ZUMBA", instructor: "Faiz", type: "zumba" },
      { time: "10:30 AM", class: "JUMPING FUSION", instructor: "Vanessa", type: "fusion" },
      { time: "11:35 AM", class: "JUMPING REGULAR®", instructor: "Lorraine", type: "regular" },
      { time: "12:40 PM", class: "JUMPING LITE", instructor: "Vanessa", type: "lite" },
      { time: "2:00 PM", class: "JUMPING REGULAR®", instructor: "Chris", type: "regular" },
      { time: "3:10 PM", class: "YOGA RECOVERY THERAPY", instructor: "", type: "yoga" },
      { time: "4:20 PM", class: "YOGA RECOVERY THERAPY", instructor: "", type: "yoga" },
    ],
    Sunday: [
      { time: "9:20 AM", class: "YOGA", instructor: "", type: "yoga" },
      { time: "10:30 AM", class: "JUMPING REGULAR®", instructor: "Vanessa", type: "regular" },
      { time: "11:35 AM", class: "JUMPING LITE", instructor: "Yin Xuan", type: "lite" },
      { time: "2:00 PM", class: "JUMPING REGULAR®", instructor: "Janice", type: "regular" },
      { time: "3:10 PM", class: "DYNAMIC FUNCTIONAL MOVEMENT & STRETCH", instructor: "Ivan", type: "stretch" },
      { time: "4:20 PM", class: "YOGA", instructor: "Li Leng", type: "yoga" },
      { time: "5:30 PM", class: "JUMPING REGULAR®", instructor: "Gabriela", type: "regular" },
    ],
  }

  const getClassColor = (type: string) => {
    const colors = {
      yoga: "bg-green-50 border-green-200",
      lite: "bg-yellow-50 border-yellow-200",
      regular: "bg-orange-50 border-orange-200",
      fusion: "bg-purple-50 border-purple-200",
      burn: "bg-red-50 border-red-200",
      ultimate: "bg-indigo-50 border-indigo-200",
      dance: "bg-pink-50 border-pink-200",
      pilates: "bg-teal-50 border-teal-200",
      zumba: "bg-blue-50 border-blue-200",
      stretch: "bg-gray-50 border-gray-200",
    }
    return colors[type as keyof typeof colors] || "bg-gray-50 border-gray-200"
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/booking" className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Booking
                  </Link>
                </Button>
              </div>

              <div className="text-center space-y-8">
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto">
                    <Clock className="w-10 h-10 text-white" />
                  </div>
                  <h1 className="text-4xl lg:text-6xl font-bold">Weekly Schedule</h1>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    Complete timetable for all our classes throughout the week. Find the perfect time and instructor for
                    your fitness journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Schedule */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold">Daily Schedule Breakdown</h2>
                <p className="text-xl text-gray-600">Detailed view of each day's classes</p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                {Object.entries(scheduleData).map(([day, classes]) => (
                  <Card key={day} className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <Clock className="w-5 h-5" />
                        {day}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {classes.map((classItem, index) => (
                        <div
                          key={index}
                          className={`p-4 rounded-lg border ${getClassColor(classItem.type)} transition-all hover:shadow-sm`}
                        >
                          <div className="flex justify-between items-start">
                            <div className="space-y-1">
                              <div className="font-semibold text-gray-900">{classItem.time}</div>
                              <div className="font-medium text-gray-800">{classItem.class}</div>
                              {classItem.instructor && (
                                <div className="flex items-center gap-1 text-sm text-gray-600">
                                  <User className="w-3 h-3" />
                                  {classItem.instructor}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Class Types Legend */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold">Class Types</h2>
                <p className="text-xl text-gray-600">Understanding our different program levels</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">JUMPING LITE</h3>
                  <p className="text-sm text-gray-600">Beginner-friendly, foundational classes</p>
                </div>
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">JUMPING REGULAR ®</h3>
                  <p className="text-sm text-gray-600">Our signature jumping fitness program</p>
                </div>
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">JUMPING FUSION</h3>
                  <p className="text-sm text-gray-600">High-energy blend with HIIT principles</p>
                </div>
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">JUMPING INSANE BURN</h3>
                  <p className="text-sm text-gray-600">Advanced class for maximum calorie burn</p>
                </div>
                <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">JUMPING ULTIMATE</h3>
                  <p className="text-sm text-gray-600">Most intense jumping fitness challenge</p>
                </div>
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">YOGA</h3>
                  <p className="text-sm text-gray-600">Mindful movement and flexibility</p>
                </div>
                <div className="p-4 bg-pink-50 border border-pink-200 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">DANCE</h3>
                  <p className="text-sm text-gray-600">Contemporary and KPOP dance classes</p>
                </div>
                <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">PILATES</h3>
                  <p className="text-sm text-gray-600">Core strength and flexibility</p>
                </div>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">ZUMBA</h3>
                  <p className="text-sm text-gray-600">Fun dance fitness workout</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-pink-600">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8 text-white">
              <h2 className="text-3xl lg:text-4xl font-bold">Ready to Join a Class?</h2>
              <p className="text-xl opacity-90">
                Now that you've seen our full schedule, book your spot in your favorite classes!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
                  <a
                    href="https://momence.com/s/revibex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Book Classes Now
                    <ExternalLink className="w-4 h-4" />
                  </a>
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
