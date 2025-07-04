import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Heart, Zap, Target, Flame, Trophy } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function JumpingFitnessPage() {
  const jumpingPrograms = [
    {
      id: "lite",
      name: "JUMPING LITE",
      level: "Beginner",
      intensity: 1,
      icon: Heart,
      color: "from-green-500 to-teal-600",
      badgeColor: "bg-green-100 text-green-700",
      description:
        "A foundational class that focuses on proper Jumping Fitness techniques to ensure safe and effective workouts. Perfect for beginners or those seeking a lower-intensity or recovery session. Learn the basics, improve your form, and build confidence on the trampoline.",
      benefits: [
        "Learn proper jumping techniques",
        "Build confidence on the trampoline",
        "Low-impact recovery session",
        "Perfect for beginners",
      ],
    },
    {
      id: "regular",
      name: "JUMPING REGULAR®",
      level: "Intermediate",
      intensity: 3,
      icon: Target,
      color: "from-orange-500 to-red-600",
      badgeColor: "bg-orange-100 text-orange-700",
      description:
        "The signature Jumping Fitness programme. A high-intensity cardio workout that builds stamina, boosts endurance, and supports heart health. Perfect for regular participants seeking a well-balanced, energizing session.",
      benefits: [
        "Signature Jumping Fitness experience",
        "Builds stamina and endurance",
        "Supports heart health",
        "Well-balanced workout",
      ],
    },
    {
      id: "fusion",
      name: "JUMPING FUSION",
      level: "Intermediate-Advanced",
      intensity: 4,
      icon: Zap,
      color: "from-purple-500 to-pink-600",
      badgeColor: "bg-purple-100 text-purple-700",
      description:
        "A high-energy blend of Jumping Fitness and HIIT principles such as Tabata, EMOM, and AMRAP. This class is designed to efficiently tone muscles, burn fat, and improve cardiovascular endurance. Ideal for individuals in good physical health looking for variety, challenge, and intensity.",
      benefits: [
        "HIIT principles (Tabata, EMOM, AMRAP)",
        "Efficiently tones muscles",
        "Burns fat effectively",
        "Improves cardiovascular endurance",
      ],
    },
    {
      id: "insane-burn",
      name: "JUMPING INSANE BURN",
      level: "Advanced",
      intensity: 4,
      icon: Flame,
      color: "from-red-500 to-orange-600",
      badgeColor: "bg-red-100 text-red-700",
      description:
        "An advanced class engineered for maximum calorie burn. Combines high-intensity endurance drills with powerful, fat-blasting stomping exercises. Strengthens core muscles and pushes stamina to the next level. Best suited for experienced jumpers.",
      benefits: [
        "Maximum calorie burn",
        "High-intensity endurance drills",
        "Powerful stomping exercises",
        "Strengthens core muscles",
      ],
    },
    {
      id: "ultimate",
      name: "JUMPING ULTIMATE - JUMP AND TONE",
      level: "Expert",
      intensity: 5,
      icon: Trophy,
      color: "from-indigo-500 to-purple-600",
      badgeColor: "bg-indigo-100 text-indigo-700",
      description:
        "The most intense Jumping Fitness challenge. Features extended high-intensity intervals, advanced strength training, plyometrics, and core work. Demands both physical and mental grit — ideal for seasoned jumpers seeking the ultimate burn.",
      benefits: [
        "Extended high-intensity intervals",
        "Advanced strength training",
        "Plyometrics and core work",
        "Ultimate fitness challenge",
      ],
    },
  ]

  const getIntensityDots = (intensity: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <div key={i} className={`w-2 h-2 rounded-full ${i < intensity ? "bg-orange-500" : "bg-gray-300"}`} />
    ))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/programs" className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Programs
                  </Link>
                </Button>
              </div>

              <div className="text-center space-y-8">
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto">
                    <div className="text-3xl">🦘</div>
                  </div>
                  <h1 className="text-4xl lg:text-6xl font-bold">Jumping Fitness Programs</h1>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    From beginner-friendly foundations to ultimate challenges - find the perfect jumping fitness class
                    for your fitness level and goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {jumpingPrograms.map((program, index) => {
                const IconComponent = program.icon
                return (
                  <Card key={program.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="p-8">
                      <div className="space-y-6">
                        <div className="flex items-start justify-between">
                          <div className="space-y-4">
                            <div className="flex items-center gap-4">
                              <div
                                className={`w-12 h-12 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center`}
                              >
                                <IconComponent className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h2 className="text-2xl lg:text-3xl font-bold">{program.name}</h2>
                                <Badge className={program.badgeColor}>{program.level}</Badge>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-gray-600">Intensity:</span>
                              <div className="flex gap-1">{getIntensityDots(program.intensity)}</div>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed">{program.description}</p>

                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Key Benefits:</h3>
                          <div className="grid gap-2 md:grid-cols-2">
                            {program.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                <span className="text-gray-600">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Progression Guide */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold">Your Jumping Fitness Journey</h2>
                <p className="text-xl text-gray-600">Progress through our programs at your own pace</p>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="grid gap-6 md:grid-cols-3">
                      <div className="text-center space-y-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto">
                          <span className="text-white font-bold">1</span>
                        </div>
                        <h3 className="font-semibold">Start with LITE</h3>
                        <p className="text-sm text-gray-600">Build foundation and confidence</p>
                      </div>

                      <div className="text-center space-y-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto">
                          <span className="text-white font-bold">2</span>
                        </div>
                        <h3 className="font-semibold">Progress to REGULAR®</h3>
                        <p className="text-sm text-gray-600">Experience our signature program</p>
                      </div>

                      <div className="text-center space-y-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto">
                          <span className="text-white font-bold">3</span>
                        </div>
                        <h3 className="font-semibold">Challenge Yourself</h3>
                        <p className="text-sm text-gray-600">Try FUSION, INSANE BURN, or ULTIMATE</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8 text-white">
              <h2 className="text-3xl lg:text-4xl font-bold">Ready to Start Jumping?</h2>
              <p className="text-xl opacity-90">Choose your level and book your first Jumping Fitness class today!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
                  <a
                    href="https://momence.com/s/revibex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Book Your First Class
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
