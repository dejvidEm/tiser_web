"use client"

import { useEffect } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  // This effect will run when the component mounts and scroll to the top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Contact Hero */}
      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-rquiros-2219024.jpg-q49Va0rZa5Lcma7PtFFxUpiXZ6QkGb.jpeg"
            alt="Stavebné práce - betónovanie základov"
            fill
            className="object-cover"
            priority
          />
          {/* Dark gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Kontaktujte ma</h1>
          <p className="text-white/80 text-lg max-w-xl">
            Máte v pláne nejaký projekt? Spojíme sa ešte dnes!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Pošlite mi správu</h2>
              <ContactForm />
            </div>

            <div>
              <div className="bg-gray-50 p-8 shadow-lg rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-6">Kontaktné informácie</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-orange-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-lg">Adresa kde ma zastihnete</h3>
                      <p className="text-gray-600">Hlavná, Košice</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-orange-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-lg">Telefón</h3>
                      <p className="text-gray-600">0911 622 051</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-orange-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-gray-600">info@jozeftiser.sk</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-orange-600 mt-1 mr-4" />
                    <div>
                      <h3 className="font-semibold text-lg">Pracovná doba</h3>
                      <p className="text-gray-600">Pondelok - Piatok: 8:00 - 18:00</p>
                      <p className="text-gray-600">Sobota: 9:00 - 13:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
