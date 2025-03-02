import { Header } from '../../components/header'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import { Truck, Globe, BarChartIcon as ChartBar, Package, Clock, ShieldCheck } from 'lucide-react'

export default function Logistics() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-[#1a365d] text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Logistics Services</h1>
            <p className="text-xl">Efficient and Reliable Global Logistics Solutions</p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Truck className="h-12 w-12 text-[#1a365d] mb-4" />
                <h3 className="text-xl font-semibold mb-2">International Shipping</h3>
                <p>Expert handling of sea, air, and land freight for timely deliveries worldwide.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Globe className="h-12 w-12 text-[#1a365d] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Customs Clearance</h3>
                <p>Streamlined customs processes to ensure smooth border crossings for your goods.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ChartBar className="h-12 w-12 text-[#1a365d] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
                <p>Advanced tracking systems providing up-to-the-minute information on your shipments.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Package className="h-12 w-12 text-[#1a365d] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Warehousing</h3>
                <p>Secure storage facilities strategically located for efficient distribution.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Clock className="h-12 w-12 text-[#1a365d] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Just-in-Time Delivery</h3>
                <p>Optimized supply chain management to meet your precise scheduling needs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ShieldCheck className="h-12 w-12 text-[#1a365d] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cargo Insurance</h3>
                <p>Comprehensive coverage options to protect your valuable shipments.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Logistics Network</h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <Image 
                  src="/GlobalLogisticsMap.jpg" 
                  alt="Global Logistics Map" 
                  width={600} 
                  height={400} 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">Global Reach, Local Expertise</h3>
                <p className="mb-6">
                  Our extensive network spans across key global trade routes, with strategic partnerships in major ports and transportation hubs. This allows us to offer:
                </p>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li>Efficient routing and reduced transit times</li>
                  <li>Local knowledge in diverse markets</li>
                  <li>Seamless multi-modal transportation</li>
                  <li>Flexibility to adapt to changing trade conditions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Optimize Your Supply Chain?</h2>
            <p className="text-xl mb-8">Let our logistics experts create a tailored solution for your business needs</p>
            <Button asChild size="lg">
              <Link href="/contact">Get a Custom Logistics Quote</Link>
            </Button>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {currentYear} Sultan General Trading. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

