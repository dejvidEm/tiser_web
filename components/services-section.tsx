"use client"

import { useRef } from "react"
import Image from "next/image"
import { useInView } from "framer-motion"
import { Hammer, Building2, Shovel, ToyBrickIcon as Bricks, Wind, Truck, Wrench, PaintBucket, ToyBrickIcon } from "lucide-react"

const services = [
  {
    title: "Demolácia",
    description: "Rýchle a bezpečné demolačné služby pre obytné, komerčné a priemyselné objekty.",
    icon: Hammer,
    color: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    title: "Výstavba",
    description: "Stavebné slžby pre vaše projekty, poctivo a s dôrazom na detaily.",
    icon: Building2,
    color: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    title: "Výkopové práce",
    description: "Presné výkopové práce pre základy, inžinierske siete a prípravu staveniska po celej Európe.",
    icon: Shovel,
    color: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    title: "Murárske práce",
    description: "Odborné murárske služby vrátane tehlových, kamenných a betónových prác s tradičnými technikami.",
    icon: Bricks,
    color: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    title: "Pomocné práce",
    description: "Rôzne pomocné práce na stavenisku, vrátane údržby a podpory pri výstavbe.",
    icon: ToyBrickIcon,
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Preprava materiálu",
    description: "Efektívna preprava stavebných materiálov na a z vášho staveniska.",
    icon: Truck,
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Inštalatérske práce",
    description: "Pomocné inštalatérske práce vrátane inštalácie a údržby vodovodných a kanalizačných systémov.",
    icon: Wrench,
    color: "bg-cyan-100",
    iconColor: "text-cyan-600",
  },
  {
    title: "Maľovanie a dokončovanie",
    description: "Maliarske a dokončovacie služby na dokončenie vášho stavebného projektu.",
    icon: PaintBucket,
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-600 mb-4">
            NAŠE SLUŽBY
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Komplexné stavebné riešenia</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ponúkam širokú škálu stavebných a súvisiacich služieb po celej Európe, poskytujem excelenciu v každom
            projekte, ktorý realizujem.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-card bg-white p-6 shadow-lg rounded-lg transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`${service.color} p-3 rounded-lg inline-block mb-4`}>
                <service.icon className={`h-6 w-6 ${service.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-600 rounded-lg z-0"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/about2.jpg"
                alt="Ukážka stavebných služieb"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-200 rounded-lg z-0"></div>
          </div>

          <div>
            <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-600 mb-4">
              PREČO SI VYBRAŤ PRÁVE MŇA
            </div>
            <h2 className="text-3xl font-bold mb-6">Pomocné práce po celej Európe</h2>
            <p className="text-gray-600 mb-6">
              S viac ako 10-ročnými skúsenosťami v mnohých európskych krajinách prinášam do každého projektu
              neprekonateľné odborné znalosti. Zabezpešujem, že každá práca je dokončená
              podľa najvyšších štandardov kvality a bezpečnosti.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Dlhoročné skúsenosti</h3>
                  <p className="text-gray-600">Viac ako 10-ročné skúsenosti v odbore</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Kvalitné materiály</h3>
                  <p className="text-gray-600">Používam len najkvalitnejšie materiály pre dlhú životnosť</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Včasné dodanie</h3>
                  <p className="text-gray-600">Dokončujem projekty podľa harmonogramu a v rámci rozpočtu</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Celoeurópske služby</h3>
                  <p className="text-gray-600">Pôsobím vo viacerých európskych krajinách</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
