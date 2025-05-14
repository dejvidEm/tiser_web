import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart2, Building, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import ServicesSection from "@/components/services-section";
import ProjectsSection from "@/components/projects-section";
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";
import MobileSlider from "@/components/slider";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/hero-background.jpg"
            alt="Stavebné práce - brúsenie s iskrami"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay - darker on the left side where text is */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-[1px] w-10 bg-orange-500"></div>
              <p className="text-orange-500 uppercase tracking-wider text-sm font-medium">
                Moja vízia
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Kvalitná výstavba <br />
              <span className="text-white/70">&amp; Poctivé služby</span>
            </h1>

            <p className="text-white/80 text-lg mb-8 max-w-xl">
              Vytváram mimoriadne priestory s viac ako 10-ročnými skúsenosťami
              po celej Európe a s pevnými štandardmi.
            </p>

            <Link href="/#about">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-none px-8 py-6 text-lg group transition-all duration-300">
                ZISTIŤ VIAC
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Floating stats card with animation */}
          <div className="hidden lg:block absolute right-10 bottom-24 bg-white rounded-lg shadow-xl p-6 w-72 transform rotate-2 z-[99999] animate-float">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Moje výsledky
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Dokončené zákazky</span>
                <span className="text-orange-600 font-bold">100+</span>
              </div>
              <div className="h-px bg-gray-200"></div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Krajiny pôsobenia</span>
                <span className="text-orange-600 font-bold">12</span>
              </div>
              <div className="h-px bg-gray-200"></div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Spokojnosť klientov</span>
                <span className="text-orange-600 font-bold">99%</span>
              </div>
            </div>

            {/* Floating icons - fewer and bigger ones on right side only */}
            <div className="absolute -top-12 right-0 bg-orange-50 p-4 rounded-full animate-float-delay-1 z-[99999]">
              <BarChart2 className="h-7 w-7 text-orange-600" />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-[-48px] bg-blue-50 p-4 rounded-full animate-float-delay-3 z-[99999]">
              <Building className="h-7 w-7 text-blue-600" />
            </div>
            <div className="absolute -bottom-10 right-2 bg-green-50 p-4 rounded-full animate-float-delay-2 z-[99999]">
              <Users className="h-7 w-7 text-green-600" />
            </div>
          </div>
        </div>

        {/* Smooth diagonal divider using SVG instead of CSS gradient */}
        <div className="absolute -bottom-[1px] left-0 right-0 w-full -z-10">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-auto"
            style={{ display: "block" }}
          >
            <path d="M0 120L1440 0V120H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* About Us Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* European Presence Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Moja európska prítomnosť
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pôsobím v mnohých krajinách po celej Európe, kde som úspešne
              dokončili stovky projektov. Pozrite sa na moje hlavné lokality.
            </p>
          </div>

          <div className="relative w-full sm:h-[600px] h-[240px] bg-blue-50 rounded-lg overflow-hidden shadow-lg">
            {/* Background image */}
            <div className="absolute inset-0">
              <Image
                src="/map.jpg"
                alt="Mapa Európy"
                fill
                className="object-cover opacity-70"
              />
            </div>

            <div className="hidden lg:block">
              {/* Country cards with better positioning and hover animations */}
              <div className="absolute top-[10%] left-[15%] w-64 bg-white rounded-lg shadow-lg p-4 rotate-[-3deg] z-10 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:rotate-0 hover:z-50 cursor-pointer">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Nemecko
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  38 dokončených projektov
                </p>
                <p className="text-sm text-gray-600">
                  Špecializácia na komerčné budovy a priemyselné objekty v
                  Berlíne, Mníchove a Hamburgu.
                </p>
              </div>

              <div className="absolute top-[15%] right-[10%] w-64 bg-white rounded-lg shadow-lg p-4 rotate-[2deg] z-20 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:rotate-0 hover:z-50 cursor-pointer">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Rakúsko
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  42 dokončených projektov
                </p>
                <p className="text-sm text-gray-600">
                  Výkopové a pomocné práce pre rezidenčné a komerčné projekty vo Viedni a
                </p>
              </div>

              <div className="absolute top-[40%] left-[25%] w-64 bg-white rounded-lg shadow-lg p-4 rotate-[1deg] z-30 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:rotate-0 hover:z-50 cursor-pointer">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Francúzsko
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  27 dokončených projektov
                </p>
                <p className="text-sm text-gray-600">
                  Stavebné a rekonštrukčné práce historických budov.
                </p>
              </div>

              <div className="absolute bottom-[15%] right-[20%] w-64 bg-white rounded-lg shadow-lg p-4 rotate-[-2deg] z-20 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:rotate-0 hover:z-50 cursor-pointer">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Taliansko
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  31 dokončených projektov
                </p>
                <p className="text-sm text-gray-600">
                  Špecializácia na reštaurácie, hotely a turistické zariadenia v okolí Ríma a Benátok.
                </p>
              </div>

              <div className="absolute bottom-[25%] left-[10%] w-64 bg-white rounded-lg shadow-lg p-4 rotate-[3deg] z-10 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:rotate-0 hover:z-50 cursor-pointer">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Španielsko
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  19 dokončených projektov
                </p>
                <p className="text-sm text-gray-600">
                  Obchodné centrá a rezidenčné komplexy v Madride, Barcelone a
                  na pobreží Costa del Sol.
                </p>
              </div>

              <div className="absolute top-[65%] right-[35%] w-64 bg-white rounded-lg shadow-lg p-4 rotate-[-1deg] z-30 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:rotate-0 hover:z-50 cursor-pointer">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Česká republika
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  12 dokončených projektov
                </p>
                <p className="text-sm text-gray-600">
                  Kancelárske budovy a priemyselné objekty v Prahe, Brne a
                  Ostrave.
                </p>
              </div>
            </div>

            {/* Mobile view - slider with animation */}
            <div className="lg:hidden absolute inset-0 flex items-center justify-center">
              <MobileSlider />
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Okrem týchto hlavných krajín pôsobíme aj v Poľsku, Holandsku,
              Belgicku, Švajčiarsku a ďalších európskych krajinách. Naše
              skúsenosti a znalosti miestnych trhov nám umožňujú poskytovať
              špičkové služby kdekoľvek v Európe.
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              Kontaktujte nás pre medzinárodný projekt
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* CTA Section */}
      <section className="bg-orange-600 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-white mb-2">
                Pripravení začať váš projekt?
              </h2>
              <p className="text-white/80">
                Kontaktujte ma ešte dnes pre bezplatnú konzultáciu a cenovú
                ponuku vašej zakázky.
              </p>
            </div>
            <Link href="/contact">
              <Button className="bg-white text-orange-600 hover:bg-gray-100 rounded-none px-8 py-6">
                KONTAKTUJTE MA
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
