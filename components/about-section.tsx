"use client"

import { useRef } from "react"
import Image from "next/image"
import { useInView } from "framer-motion"
import { CheckCircle } from "lucide-react"
import CountUp from "react-countup"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    { value: 100, label: "Dokončených projektov", suffix: "+" },
    { value: 10, label: "Rokov skúseností", suffix: "+" },
    { value: 12, label: "Krajín pôsobenia", suffix: "" },
    { value: 98, label: "Spokojnosť klientov", suffix: "%" },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-600 mb-4">O MNE</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pomôžem so všetkým, čo potrebujete</h2>
            <p className="text-gray-600 mb-6">
              S viac ako 10-ročnými skúsenosťami poskytujem výnimočné a kvalitné služby v oblasti
              výstavby, demolácie, výkopových prác a murárskych prác po celej Európe. Som hrdý na kvalitu mojej práce,
              pozornosť k detailom a záväzok k spokojnosti klientov.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-orange-600 mt-1 mr-2" />
                <p className="text-gray-700">Profesionálny a skúsený tím</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-orange-600 mt-1 mr-2" />
                <p className="text-gray-700">Kvalitné materiály a vybavenie</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-orange-600 mt-1 mr-2" />
                <p className="text-gray-700">Včasné dokončenie projektov</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-orange-600 mt-1 mr-2" />
                <p className="text-gray-700">Konkurencieschopné a transparentné ceny</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-orange-600 mt-1 mr-2" />
                <p className="text-gray-700">Bezpečnosť na prvom mieste</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-orange-600 mt-1 mr-2" />
                <p className="text-gray-700">Celoeurópske pôsobenie</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Image
                src="/handwritten-signature2.png"
                alt="Podpis generálneho riaditeľa"
                width={140}
                height={60}
                className="object-contain"
              />
              <div>
                <p className="font-semibold">Jozef Tišer</p>
                <p className="text-sm text-gray-500">Zodpovedný vedúci</p>
              </div>
            </div>
          </div>

          <div className="relative" ref={ref}>
            <div
              className={`relative z-10 transition-all duration-700 delay-300 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <Image
                src="/vsetko.jpg"
                alt="Stavebný tím"
                width={600}
                height={700}
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div
              className={`absolute top-0 right-0 bg-orange-600 w-full h-full rounded-lg transform translate-x-4 translate-y-4 -z-10 transition-all duration-700 delay-500 ${isInView ? "opacity-20" : "opacity-0"}`}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-6 bg-gray-50 rounded-lg shadow-sm transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100 + 700}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                {isInView ? <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} /> : "0"}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
