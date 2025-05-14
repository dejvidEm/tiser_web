"use client"
import { useEffect, useRef, useState } from "react"

const countries = [
  {
    name: "Nemecko",
    projects: 38,
    description: "Komerčné budovy a priemyselné objekty",
  },
  {
    name: "Rakúsko",
    projects: 42,
    description: "Luxusné rezidenčné a komerčné stavby",
  },
  {
    name: "Francúzsko",
    projects: 27,
    description: "Rekonštrukcie historických budov a moderné stavby",
  },
  {
    name: "Taliansko",
    projects: 31,
    description: "Hotely, reštaurácie a turistické zariadenia",
  },
  {
    name: "Španielsko",
    projects: 19,
    description: "Obchodné centrá a rezidenčné komplexy",
  },
  {
    name: "Česká republika",
    projects: 12,
    description: "Kancelárske budovy a priemyselné objekty",
  },
]

export default function MobileSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = () => {
    const slider = sliderRef.current
    if (!slider) return
    const { scrollLeft, offsetWidth } = slider
    const index = Math.round(scrollLeft / offsetWidth)
    setActiveIndex(index)
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return
    slider.addEventListener("scroll", handleScroll)
    return () => slider.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="lg:hidden absolute inset-0 flex items-center justify-center scrollbar-none">
      <div className="w-full max-w-sm px-4">
        <div className="relative overflow-hidden">
          <div
            className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide"
            ref={sliderRef}
          >
            {countries.map((country, idx) => (
              <div key={idx} className="snap-center shrink-0 w-full px-2">
                <div className="bg-white rounded-lg shadow-lg p-4 mx-auto transition-all duration-300 hover:shadow-2xl">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{country.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">Dokončených projektov: {country.projects}</p>
                  <p className="text-sm text-gray-600">{country.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {countries.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeIndex === idx ? "bg-orange-600" : "bg-white"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}