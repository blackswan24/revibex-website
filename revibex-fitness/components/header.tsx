"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path: string) => pathname === path
  const isAboutActive = () => pathname === "/about" || pathname === "/instructors"

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-pink-400/20 to-purple-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110"></div>
            <Image
              src="/images/revibex-logo.png"
              alt="RevibeX Studio"
              width={160}
              height={55}
              className="h-14 w-auto relative z-10 drop-shadow-lg group-hover:scale-105 transition-transform duration-300 filter brightness-110 contrast-110"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              isActive("/") ? "text-orange-600" : "hover:text-orange-600"
            }`}
          >
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger
              className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                isAboutActive() ? "text-orange-600" : "hover:text-orange-600"
              }`}
            >
              About
              <ChevronDown className="w-3 h-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/about" className="w-full cursor-pointer">
                  About the Studio
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/instructors" className="w-full cursor-pointer">
                  Our Instructors
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/programs"
            className={`text-sm font-medium transition-colors ${
              isActive("/programs") ? "text-orange-600" : "hover:text-orange-600"
            }`}
          >
            Programs
          </Link>
          <Link
            href="/pricing"
            className={`text-sm font-medium transition-colors ${
              isActive("/pricing") ? "text-orange-600" : "hover:text-orange-600"
            }`}
          >
            Packages
          </Link>
          <Link
            href="/booking"
            className={`text-sm font-medium transition-colors ${
              isActive("/booking") ? "text-orange-600" : "hover:text-orange-600"
            }`}
          >
            Book Class
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors ${
              isActive("/contact") ? "text-orange-600" : "hover:text-orange-600"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Get Started Button */}
        <Button className="hidden md:flex bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700">
          <Link href="/booking">Get Started</Link>
        </Button>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b shadow-lg md:hidden">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className={`block text-sm font-medium transition-colors ${
                isActive("/") ? "text-orange-600" : "hover:text-orange-600"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div className="space-y-2">
              <div className={`text-sm font-medium ${isAboutActive() ? "text-orange-600" : "text-gray-900"}`}>
                About
              </div>
              <div className="pl-4 space-y-2">
                <Link
                  href="/about"
                  className="block text-sm text-gray-600 hover:text-orange-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About the Studio
                </Link>
                <Link
                  href="/instructors"
                  className="block text-sm text-gray-600 hover:text-orange-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our Instructors
                </Link>
              </div>
            </div>

            <Link
              href="/programs"
              className={`block text-sm font-medium transition-colors ${
                isActive("/programs") ? "text-orange-600" : "hover:text-orange-600"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="/pricing"
              className={`block text-sm font-medium transition-colors ${
                isActive("/pricing") ? "text-orange-600" : "hover:text-orange-600"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Packages
            </Link>
            <Link
              href="/booking"
              className={`block text-sm font-medium transition-colors ${
                isActive("/booking") ? "text-orange-600" : "hover:text-orange-600"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Class
            </Link>
            <Link
              href="/contact"
              className={`block text-sm font-medium transition-colors ${
                isActive("/contact") ? "text-orange-600" : "hover:text-orange-600"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-4 border-t">
              <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700">
                <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
