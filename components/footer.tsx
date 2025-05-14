import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-white text-2xl font-bold mb-6">Jozef Tišer</div>
            <p className="text-gray-400 mb-6">
              Profesionálne služby v oblasti výstavby, demolácie, výkopových a murárskych prác po celej Európe.
              Garantujem kvalitné remeselné práce a spokojnosť zákazníkov.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-600 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-600 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Moje služby</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Výstavba
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Demolácia
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Výkopové práce
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Murárske práce
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Pomocné práce
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Stavebné práce
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Rýchle odkazy</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Domov
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-orange-500 transition-colors">
                  O mne
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Projekty
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Ochrana osobných údajov
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Obchodné podmienky
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Kontaktné informácie</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 mt-1 mr-3" />
                <span className="text-gray-400">Hlavná, Košice</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-orange-500 mt-1 mr-3" />
                <span className="text-gray-400">+421 911 622 051</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-orange-500 mt-1 mr-3" />
                <span className="text-gray-400">info@jozeftiser.sk</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Jozef Tiser. Všetky práva vyhradené.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link href="#" className="text-gray-400 text-sm hover:text-orange-500 transition-colors">
                    Ochrana osobných údajov
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 text-sm hover:text-orange-500 transition-colors">
                    Podmienky služby
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 text-sm hover:text-orange-500 transition-colors">
                    Zásady cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
