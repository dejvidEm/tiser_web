"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

// Reviews data
const reviews = [
  {
    id: 1,
    name: "Martin Novák",
    position: "Generálny riaditeľ, NovaBuild s.r.o.",
    image: "/placeholder.svg?key=review1",
    rating: 5,
    text: "Spolupráca s EuroKonstrukt bola vynikajúca. Ich tím dokončil náš komerčný projekt načas a v rámci rozpočtu. Profesionalita a kvalita ich práce je bezkonkurenčná.",
    location: "Praha, Česká republika",
  },
  {
    id: 2,
    name: "Anna Müllerová",
    position: "Majiteľka, Café Zentral",
    image: "/placeholder.svg?key=review2",
    rating: 5,
    text: "Rekonštrukcia našej kaviarne bola vykonaná s maximálnou starostlivosťou a pozornosťou k detailom. Výsledok predčil naše očakávania a naši zákazníci milujú nový priestor.",
    location: "Viedeň, Rakúsko",
  },
  {
    id: 3,
    name: "Thomas Schmidt",
    position: "Projektový manažér, GermanTech GmbH",
    image: "/placeholder.svg?key=review3",
    rating: 5,
    text: "Najali sme EuroKonstrukt na výstavbu našej novej výrobnej haly. Ich odborné znalosti v priemyselných stavbách boli zrejmé od začiatku projektu až po jeho dokončenie.",
    location: "Berlín, Nemecko",
  },
  {
    id: 4,
    name: "Sophie Dubois",
    position: "Riaditeľka, Maison Élégante",
    image: "/placeholder.svg?key=review4",
    rating: 4,
    text: "Kvalita práce na našom luxusnom bytovom komplexe bola vynikajúca. Oceňujeme ich flexibilitu pri riešení neočakávaných výziev počas výstavby.",
    location: "Paríž, Francúzsko",
  },
  {
    id: 5,
    name: "Marco Rossi",
    position: "Vlastník, Ristorante Bella Vista",
    image: "/placeholder.svg?key=review5",
    rating: 5,
    text: "Rekonštrukcia našej historickej budovy bola vykonaná s rešpektom k pôvodnej architektúre. Tím EuroKonstrukt preukázal výnimočné zručnosti pri zachovaní historických prvkov.",
    location: "Miláno, Taliansko",
  },
  {
    id: 6,
    name: "Elena Kowalska",
    position: "Investorka, Modern Living Sp. z o.o.",
    image: "/placeholder.svg?key=review6",
    rating: 5,
    text: "Náš rezidenčný projekt bol dokončený v rekordnom čase bez kompromisov v kvalite. Profesionalita a komunikácia tímu EuroKonstrukt bola na najvyššej úrovni.",
    location: "Varšava, Poľsko",
  },
  {
    id: 7,
    name: "Javier Hernandez",
    position: "Architekt, Diseño Moderno",
    image: "/placeholder.svg?key=review7",
    rating: 4,
    text: "Ako architekt oceňujem precíznosť, s akou EuroKonstrukt realizoval moje návrhy. Ich technické znalosti a schopnosť riešiť komplexné konštrukčné výzvy sú pozoruhodné.",
    location: "Madrid, Španielsko",
  },
  {
    id: 8,
    name: "Lukas Janssen",
    position: "Facility manažér, Dutch Office Centers",
    image: "/placeholder.svg?key=review8",
    rating: 5,
    text: "Renovácia našej kancelárskej budovy prebehla hladko a s minimálnym narušením našej prevádzky. Výsledok je moderný, energeticky účinný priestor, ktorý naši zamestnanci milujú.",
    location: "Amsterdam, Holandsko",
  },
  {
    id: 9,
    name: "Markus Weber",
    position: "Riaditeľ, Alpine Resort & Spa",
    image: "/placeholder.svg?key=review9",
    rating: 5,
    text: "Rozšírenie nášho horského rezortu bolo náročným projektom vzhľadom na terén a klimatické podmienky. EuroKonstrukt zvládol všetky výzvy s profesionalitou a odbornosťou.",
    location: "Zürich, Švajčiarsko",
  },
  {
    id: 10,
    name: "Katarína Horváthová",
    position: "Developerka, Urban Solutions s.r.o.",
    image: "/placeholder.svg?key=review10",
    rating: 5,
    text: "Spolupráca s EuroKonstrukt na našom mixed-use projekte bola bezproblémová. Ich schopnosť koordinovať rôzne aspekty výstavby a dodržiavať termíny je obdivuhodná.",
    location: "Bratislava, Slovensko",
  },
]

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const autoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  // Function to show next review
  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  // Function to show previous review
  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
  }

  // Handle autoplay
  useEffect(() => {
    if (isAutoplay && isInView) {
      autoplayTimeoutRef.current = setTimeout(() => {
        nextReview()
      }, 5000)
    }

    return () => {
      if (autoplayTimeoutRef.current) {
        clearTimeout(autoplayTimeoutRef.current)
      }
    }
  }, [currentIndex, isAutoplay, isInView])

  // Pause autoplay on hover
  const handleMouseEnter = () => setIsAutoplay(false)
  const handleMouseLeave = () => setIsAutoplay(true)

  // Calculate visible reviews (current, previous, next)
  const visibleReviews = [
    reviews[(currentIndex - 1 + reviews.length) % reviews.length],
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-600 mb-4">
            REFERENCIE KLIENTOV
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Čo o mne hovoria naši klienti</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Prečítajte si, čo hovoria moji spokojní klienti o službách a zákazkach po celej Európe.
          </p>
        </div>

        <div
          ref={ref}
          className="relative max-w-5xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Reviews slider */}
          <div className="overflow-hidden py-8">
            <div className="relative h-[400px] md:h-[350px]">
              {visibleReviews.map((review, index) => {
                // Position: 0 = previous, 1 = current, 2 = next
                const position = index - 1

                return (
                  <motion.div
                    key={review.id}
                    className="absolute w-full md:w-[80%] left-1/2 top-0 bg-white rounded-lg shadow-lg p-6 md:p-8"
                    initial={{
                      x: position * 100 + "%",
                      opacity: position === 0 ? 1 : 0.3,
                      scale: position === 0 ? 1 : 0.9,
                    }}
                    animate={{
                      x: "-50%",
                      translateX: position * 100 + "%",
                      opacity: position === 0 ? 1 : 0.3,
                      scale: position === 0 ? 1 : 0.9,
                      zIndex: position === 0 ? 10 : 0,
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex items-start mb-6">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                          <Image
                            src={review.image || "/placeholder.svg"}
                            alt={review.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{review.name}</h3>
                          <p className="text-gray-600 text-sm">{review.position}</p>
                          <div className="flex mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <Quote className="ml-auto text-orange-100 h-10 w-10 flex-shrink-0" />
                      </div>

                      <p className="text-gray-700 flex-grow mb-4 italic">"{review.text}"</p>

                      <div className="mt-auto">
                        <p className="text-sm text-gray-500">{review.location}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={() => {
              prevReview()
              setIsAutoplay(false)
              setTimeout(() => setIsAutoplay(true), 10000)
            }}
            className="absolute left-0 top-[380px] sm:top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-20 hover:bg-gray-100 transition-colors"
            aria-label="Predchádzajúca recenzia"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={() => {
              nextReview()
              setIsAutoplay(false)
              setTimeout(() => setIsAutoplay(true), 10000)
            }}
            className="absolute right-0 top-[380px] sm:top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-20 hover:bg-gray-100 transition-colors"
            aria-label="Nasledujúca recenzia"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Dots navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoplay(false)
                  setTimeout(() => setIsAutoplay(true), 10000)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-orange-600 w-6" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Prejsť na recenziu ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
