import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Heart, ArrowLeft, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function InstructorsPage() {
  const jumpingInstructors = [
    {
      id: 1,
      name: "Rebecca Chen",
      image: "/placeholder.svg?height=300&width=300",
      specialties: ["Jumping LITE", "Jumping REGULAR®"],
      certifications: ["Jumping Fitness Certified", "CPR/AED Certified", "Personal Training Certification"],
      bio: "Rebecca is passionate about making fitness accessible to everyone. She specializes in beginner-friendly jumping classes and helps students build confidence on the trampoline.",
      interestingFact: "Former competitive gymnast who discovered jumping fitness during her recovery from injury",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Yanni Rodriguez",
      image: "/placeholder.svg?height=300&width=300",
      specialties: ["Jumping INSANE BURN", "Jumping ULTIMATE"],
      certifications: ["Advanced Jumping Fitness Instructor", "HIIT Specialist", "Sports Nutrition Certified"],
      bio: "Yanni brings high-energy and motivation to every class. Known for pushing students to their limits while ensuring proper form and safety.",
      interestingFact: "Completed over 50 marathons and uses jumping fitness for cross-training",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Pamela Chong",
      image: "/placeholder.svg?height=300&width=300",
      specialties: ["Jumping REGULAR®", "Jumping LITE"],
      certifications: ["Jumping Fitness Master Trainer", "Senior Fitness Specialist", "Rehabilitation Exercise"],
      bio: "Pamela focuses on active aging and helps mature adults discover the joy of movement. Her classes emphasize proper technique and gradual progression.",
      interestingFact: "Started jumping fitness at age 55 and became an instructor to inspire others",
      rating: 5.0,
    },
    {
      id: 4,
      name: "Vanessa Lim",
      image: "/placeholder.svg?height=300&width=300",
      specialties: ["Jumping FUSION", "Jumping ULTIMATE"],
      certifications: ["Jumping Fitness Elite Instructor", "TRX Certified", "Functional Movement Screen"],
      bio: "Vanessa combines jumping fitness with functional training elements. Her fusion classes are perfect for those seeking variety and challenge.",
      interestingFact: "Former dance instructor who incorporates rhythmic elements into jumping routines",
      rating: 4.9,
    },
  ]

  const nonJumpingInstructors = [
    {
      id: 5,
      name: "Faiz Ahmad",
      image: "/placeholder.svg?height=300&width=300",
      specialties: ["Pilates", "Zumba", "Core Strengthening"],
      certifications: ["Pilates Method Alliance Certified", "Zumba Instructor", "Core Conditioning Specialist"],
      bio: "Faiz brings mindful movement and core strength focus to his classes. His pilates sessions help improve posture, flexibility, and overall body awareness.",
      interestingFact: "Studied traditional Pilates in Germany and speaks 4 languages",
      rating: 4.8,
    },
    {
      id: 6,
      name: "Li Leng",
      image: "/placeholder.svg?height=300&width=300",
      specialties: ["Yoga", "Meditation", "Breathwork"],
      certifications: ["500-Hour Yoga Teacher Training", "Meditation Teacher Certified", "Yin Yoga Specialist"],
      bio: "Li Leng creates a peaceful sanctuary in her yoga classes. She specializes in gentle yoga practices perfect for mature bodies and stress relief.",
      interestingFact: "Spent 2 years studying yoga and meditation in India",
      rating: 5.0,
    },
    {
      id: 7,
      name: "Fiona Tan",
      image: "/placeholder.svg?height=300&width=300",
      specialties: ["Contemporary Dance", "Movement Therapy"],
      certifications: ["Contemporary Dance Certified", "Movement Therapy Practitioner", "Creative Arts Therapy"],
      bio: "Fiona helps students express themselves through graceful movement. Her contemporary dance classes focus on emotional release and artistic expression.",
      interestingFact: "Professional dancer who performed with Singapore Dance Theatre",
      rating: 4.9,
    },
    {
      id: 8,
      name: "Ivan Wong",
      image: "/placeholder.svg?height=300&width=300",
      specialties: ["Functional Movement", "Stretch Therapy", "Mobility"],
      certifications: ["Functional Movement Screen Certified", "Stretch Therapy Practitioner", "Corrective Exercise"],
      bio: "Ivan focuses on improving daily movement patterns and reducing pain through targeted stretching and mobility work.",
      interestingFact: "Former physiotherapist who transitioned to preventive movement education",
      rating: 4.8,
    },
  ]

  const InstructorCard = ({ instructor, category }: { instructor: any; category: string }) => (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative">
        <Image
          src={instructor.image || "/placeholder.svg"}
          alt={instructor.name}
          width={300}
          height={300}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4">
          <Badge className={category === "jumping" ? "bg-orange-500 text-white" : "bg-purple-500 text-white"}>
            {category === "jumping" ? "Jumping Fitness" : "Wellness"}
          </Badge>
        </div>
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="font-semibold text-sm">{instructor.rating}</span>
          </div>
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">{instructor.name}</h3>
          <div className="flex flex-wrap gap-2">
            {instructor.specialties.map((specialty: string, index: number) => (
              <Badge key={index} variant="outline" className="text-xs">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed">{instructor.bio}</p>

        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Certifications:</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            {instructor.certifications.map((cert: string, index: number) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                {cert}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg p-3">
          <div className="flex items-start gap-2">
            <Heart className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-medium text-gray-800">Fun Fact:</p>
              <p className="text-xs text-gray-600">{instructor.interestingFact}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

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
                  <Link href="/about" className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back to About
                  </Link>
                </Button>
              </div>

              <div className="text-center space-y-8">
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h1 className="text-4xl lg:text-6xl font-bold">Meet Our Instructors</h1>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    Our certified instructors are passionate about helping you achieve your fitness goals through expert
                    guidance, personalized attention, and unwavering support on your active aging journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Jumping Fitness Instructors */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Jumping Fitness Specialists
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold">Jumping Fitness Instructors</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Expert instructors specializing in trampoline-based fitness programs
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                {jumpingInstructors.map((instructor) => (
                  <InstructorCard key={instructor.id} instructor={instructor} category="jumping" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Non-Jumping Instructors */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Wellness Specialists
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold">Wellness & Movement Instructors</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Certified instructors for yoga, pilates, dance, and holistic wellness programs
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                {nonJumpingInstructors.map((instructor) => (
                  <InstructorCard key={instructor.id} instructor={instructor} category="wellness" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-pink-600">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8 text-white">
              <h2 className="text-3xl lg:text-4xl font-bold">Ready to Train with Our Experts?</h2>
              <p className="text-xl opacity-90">
                Book a class with any of our certified instructors and start your transformation journey today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
                  <a href="https://momence.com/s/revibex" target="_blank" rel="noopener noreferrer">
                    Book Your First Class
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
