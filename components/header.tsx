 "use client"
import { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/Logo.jpeg';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-[#1a365d]">
            <Image
              src={Logo}
              height={70}
              width={70}
              alt="logo of company"
              className="bg-transparent"
            />
          </Link>

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-[#1a365d]">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-800 hover:text-[#1a365d]">Home</Link>
            <Link href="/about" className="text-gray-800 hover:text-[#1a365d]">About</Link>
            <Link href="/products" className="text-gray-800 hover:text-[#1a365d]">Products</Link>
            <Link href="/services" className="text-gray-800 hover:text-[#1a365d]">Services</Link>
            <Link href="/contact" className="text-gray-800 hover:text-[#1a365d]">Contact</Link>
          </div>

          {/* Social Media Icons */}
          <div className=" space-x-4 hidden md:flex">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-5 w-5 text-[#1a365d] hover:text-gray-800" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5 text-[#1a365d] hover:text-gray-800" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5 text-[#1a365d] hover:text-gray-800" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-[#1a365d] hover:text-gray-800" />
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center mt-4">
            <Link href="/" className="text-gray-800 hover:text-[#1a365d] py-2">Home</Link>
            <Link href="/about" className="text-gray-800 hover:text-[#1a365d] py-2">About</Link>
            <Link href="/products" className="text-gray-800 hover:text-[#1a365d] py-2">Products</Link>
            <Link href="/services" className="text-gray-800 hover:text-[#1a365d] py-2">Services</Link>
            <Link href="/contact" className="text-gray-800 hover:text-[#1a365d] py-2">Contact</Link>

            <div className="flex space-x-4 mt-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 text-[#1a365d] hover:text-gray-800" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 text-[#1a365d] hover:text-gray-800" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-[#1a365d] hover:text-gray-800" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-[#1a365d] hover:text-gray-800" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
