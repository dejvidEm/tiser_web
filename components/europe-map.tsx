"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

// Krajiny, kde spoločnosť pôsobí
const activeCountries = [
  { id: "AT", name: "Rakúsko", x: 52, y: 33, projects: 42 },
  { id: "DE", name: "Nemecko", x: 50, y: 29, projects: 38 },
  { id: "FR", name: "Francúzsko", x: 45, y: 33, projects: 27 },
  { id: "IT", name: "Taliansko", x: 52, y: 38, projects: 31 },
  { id: "ES", name: "Španielsko", x: 40, y: 40, projects: 19 },
  { id: "PL", name: "Poľsko", x: 56, y: 29, projects: 15 },
  { id: "CZ", name: "Česká republika", x: 54, y: 31, projects: 12 },
  { id: "NL", name: "Holandsko", x: 48, y: 28, projects: 8 },
  { id: "BE", name: "Belgicko", x: 47, y: 30, projects: 7 },
  { id: "CH", name: "Švajčiarsko", x: 49, y: 34, projects: 14 },
]

export default function EuropeMap() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

  const handleCountryClick = (countryId: string) => {
    setSelectedCountry(selectedCountry === countryId ? null : countryId)
  }

  const getCountryInfo = (countryId: string) => {
    return activeCountries.find((country) => country.id === countryId)
  }

  return (
    <div className="relative w-full h-full bg-gray-100 overflow-hidden p-4">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Jednoduchá reprezentácia mapy Európy */}
        <div className="relative w-full max-w-2xl mx-auto">
          {/* Pozadie mapy */}
          <div className="w-full aspect-[4/3] bg-blue-50 rounded-lg relative overflow-hidden">
            {/* Obrázok mapy Európy */}
            <div className="absolute inset-0 w-full h-full">
              <Image src="/map.jpg" alt="Mapa Európy" fill className="object-contain" priority />
            </div>

            {/* Značky krajín */}
            {activeCountries.map((country) => (
              <button
                key={country.id}
                onClick={() => handleCountryClick(country.id)}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 z-10 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-full transition-all duration-300 ${
                  selectedCountry === country.id ? "scale-125" : ""
                }`}
                style={{
                  left: `${country.x}%`,
                  top: `${country.y}%`,
                }}
                aria-label={`${country.name} - ${country.projects} projektov`}
              >
                <div
                  className={`
                  w-4 h-4 md:w-5 md:h-5 rounded-full 
                  ${selectedCountry === country.id ? "bg-orange-600" : "bg-orange-400"} 
                  shadow-md map-pin
                `}
                ></div>
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <span className="text-xs font-semibold bg-white px-1 py-0.5 rounded shadow-sm">{country.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Informačné okno o krajine */}
        <AnimatePresence>
          {selectedCountry && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg"
            >
              {getCountryInfo(selectedCountry) && (
                <div>
                  <h3 className="text-lg font-bold mb-2">{getCountryInfo(selectedCountry)?.name}</h3>
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Dokončené projekty:</span>{" "}
                    {getCountryInfo(selectedCountry)?.projects}
                  </p>
                  <p className="text-gray-600">
                    Poskytujem kompletné služby v oblasti výstavby, demolácie, murárskych a výkopových prác v{" "}
                    {getCountryInfo(selectedCountry)?.name}.
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
