import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/Logo.jpeg'

export function Header() {
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
              className='bg-transparent'
              />
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-800 hover:text-[#1a365d]">Home</Link>
            <Link href="/about" className="text-gray-800 hover:text-[#1a365d]">About</Link>
            <Link href="/products" className="text-gray-800 hover:text-[#1a365d]">Products</Link>
            <Link href="/services" className="text-gray-800 hover:text-[#1a365d]">Services</Link>
            <Link href="/contact" className="text-gray-800 hover:text-[#1a365d]">Contact</Link>
          </div>
            <div>
              <div>
                
              </div>
            </div>
        </div>
      </nav>
    </header>
  )
}

