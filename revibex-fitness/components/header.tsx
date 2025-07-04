"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function Header() {
  const pathname = usePathname()

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
        <Button className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700">
          <Link href="/booking">Get Started</Link>
        </Button>
      </div>
    </header>
  )
}
