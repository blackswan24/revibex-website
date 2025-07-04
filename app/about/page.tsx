import { Card, CardContent } from "@/components/ui/card"
import { Heart, Dumbbell, Flower2, Music, Brain, Users, CheckCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold">About RevibeX</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                RevibeX stands for "Re-vibe" — to revive, refresh, and re-energize your inner and outer self — and "X"
                symbolizing transformation from the prime of life into the golden years.
              </p>
            </div>
          </div>
        </section>

        {/* Purpose Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-5xl font-bold">Our Purpose</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  To guide individuals through a vibrant transition into active aging, embracing meaningful longevity
                  through a holistic approach that nurtures both physical and mental wellbeing.
                </p>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-8">
                <p className="text-lg font-medium text-gray-800">
                  We believe physical and mental wellbeing are inseparable — they amplify each other for a fuller,
                  richer life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Physical Wellbeing Section */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              <div className="text-center space-y-4">
                <h2 className="text-3xl lg:text-5xl font-bold">Physical Wellbeing</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Empowering the body to age with strength, resilience, and grace through three key areas
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-3">
                {/* Cardiovascular Health */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">Cardiovascular Health</h3>
                      <p className="text-gray-600">
                        Activities like trampoline classes, fitness dances and HIIT programmes help improve heart
                        health, manage weight, and delay chronic illnesses.
                      </p>
                      <div className="space-y-2">
                        <p className="font-medium text-gray-800">Helps prevent:</p>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Diabetes
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Hypertension
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            High cholesterol
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Cardiovascular disease
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Certain cancers
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Strength & Resistance Training */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <Dumbbell className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">Strength & Resistance Training</h3>
                      <p className="text-gray-600">
                        Using tools like TRX, weights, and bodyweight resistance, we build lean muscle mass.
                      </p>
                      <div className="space-y-2">
                        <p className="font-medium text-gray-800">Benefits include:</p>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Support bone density
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Prevent osteoporosis
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Reduce fall risks
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Joint Mobility & Recovery */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center">
                      <Flower2 className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">Joint Mobility & Recovery</h3>
                      <p className="text-gray-600">
                        Through yoga, pilates, deep stretching, and targeted recovery sessions, we help maintain
                        flexibility.
                      </p>
                      <div className="space-y-2">
                        <p className="font-medium text-gray-800">Helps with:</p>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Maintain flexibility
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Relieve deep tissue tension
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Prevent or heal injuries
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mental Wellbeing Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              <div className="text-center space-y-4">
                <h2 className="text-3xl lg:text-5xl font-bold">Mental Wellbeing</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  A calm and connected mind is essential for sustainable vitality. We cultivate mental resilience
                  through:
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-3">
                {/* Sound Therapy */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                      <Music className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">Sound Therapy</h3>
                      <p className="text-gray-600">
                        Harnessing healing frequencies to reduce stress and improve sleep quality for better overall
                        wellness. Our sound therapy sessions use carefully selected frequencies and instruments to
                        promote deep relaxation and healing.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Meditation */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">Meditation</h3>
                      <p className="text-gray-600">
                        Guided practices for inner peace and mindfulness, helping you develop mental clarity and
                        emotional balance. Our meditation sessions are designed specifically for mature adults, focusing
                        on practical techniques for daily life.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Connectedness */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">Social Connectedness</h3>
                      <p className="text-gray-600">
                        Vibrant group sessions and events to foster a strong, active community of like-minded
                        individuals. We believe that social connections are vital for mental health and overall
                        wellbeing as we age.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why RevibeX Section */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl lg:text-5xl font-bold">Why RevibeX?</h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Because thriving in your later years isn't just about living longer — it's about living{" "}
                  <span className="font-bold text-orange-600">better</span>,{" "}
                  <span className="font-bold text-pink-600">stronger</span>, and{" "}
                  <span className="font-bold text-purple-600">happier</span>.
                </p>
                <p className="text-lg text-gray-600 mt-4">We're here to help you make every year your best one yet.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
