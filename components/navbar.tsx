"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-36">
              {isScrolled ? (
                <div className="font-bold text-xl text-gray-800">Jozef Tišer</div>
              ) : (
                <div className="font-bold text-xl text-white">Jozef Tišer</div>
              )}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={cn(
                "font-medium transition-colors hover:text-orange-500",
                isScrolled ? "text-gray-800" : "text-white",
              )}
            >
              DOMOV
            </Link>
            <Link
              href="/#about"
              className={cn(
                "font-medium transition-colors hover:text-orange-500",
                isScrolled ? "text-gray-800" : "text-white",
              )}
            >
              O MNE
            </Link>
            <Link
              href="/#services"
              className={cn(
                "font-medium transition-colors hover:text-orange-500",
                isScrolled ? "text-gray-800" : "text-white",
              )}
            >
              SLUŽBY
            </Link>
            <Link
              href="/#projects"
              className={cn(
                "font-medium transition-colors hover:text-orange-500",
                isScrolled ? "text-gray-800" : "text-white",
              )}
            >
              PROJEKTY
            </Link>
            <Link
              href="/contact"
              className={cn(
                "font-medium transition-colors hover:text-orange-500",
                isScrolled ? "text-gray-800" : "text-white",
              )}
            >
              KONTAKT
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center">
              <div className={cn("rounded-full p-2 mr-3", isScrolled ? "bg-orange-100" : "bg-white/20")}>
                <Phone className={cn("h-5 w-5", isScrolled ? "text-orange-600" : "text-white")} />
              </div>
              <div>
                <p className={cn("text-xs", isScrolled ? "text-gray-600" : "text-white/80")}>ZAVOLAJTE MI</p>
                <p className={cn("font-bold", isScrolled ? "text-gray-800" : "text-white")}>+421 911 622 051</p>
              </div>
            </div>

            <Link href="/contact">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-none">KONTAKTUJTE MA</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Prepnúť menu">
            {isOpen ? (
              <X className={isScrolled ? "text-gray-800" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-gray-800" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="font-medium text-gray-800 hover:text-orange-500 py-2"
                onClick={() => setIsOpen(false)}
              >
                DOMOV
              </Link>
              <Link
                href="/#about"
                className="font-medium text-gray-800 hover:text-orange-500 py-2"
                onClick={() => setIsOpen(false)}
              >
                O NÁS
              </Link>
              <Link
                href="/#services"
                className="font-medium text-gray-800 hover:text-orange-500 py-2"
                onClick={() => setIsOpen(false)}
              >
                SLUŽBY
              </Link>
              <Link
                href="/#projects"
                className="font-medium text-gray-800 hover:text-orange-500 py-2"
                onClick={() => setIsOpen(false)}
              >
                PROJEKTY
              </Link>
              <Link
                href="/contact"
                className="font-medium text-gray-800 hover:text-orange-500 py-2"
                onClick={() => setIsOpen(false)}
              >
                KONTAKT
              </Link>
            </nav>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 rounded-full p-2 mr-3">
                  <Phone className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-600">ZAVOLAJTE NÁM</p>
                  <p className="font-bold text-gray-800">+43 123 456 7890</p>
                </div>
              </div>

              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-none">
                  KONTAKTUJTE NÁS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
