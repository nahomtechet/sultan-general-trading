import { Header } from "../components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  ArrowRight,
  Globe,
  Handshake,
  Users,
  ShieldCheck,
  Star,
  TrendingUp,
  Package,
  MapPin,
  Truck,
  CheckCircle,
} from "lucide-react";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Sultan General Trading - Your gateway to premium Ethiopian exports including coffee, honey, textiles, and livestock.",
  openGraph: {
    title: "Sultan General Trading - Premium Ethiopian Exports",
    description:
      "Discover high-quality Ethiopian products and livestock for international markets.",
  },
};
export default function Home() {
  const currentYear = new Date().getFullYear();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sultan General Trading",
    url: "https://sultangeneraltrading.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://sultangeneraltrading.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData data={schemaData} />
      <meta
        name="google-site-verification"
        content="oZP28VzYXPWpCyripdH5Dxm-Jfr5cWTJAHlqIaM77JE"
      />
      <Header />
      <main className="flex-grow">
        <section className="relative h-screen flex items-center justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="/WhatsApp Video 2024-12-31 at 12.55.21 AM.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-[#1a365d] opacity-80"></div>

          <div className="relative z-10 text-center text-white px-6">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in-down">
              Welcome to Sultan General Trading
            </h1>
            <p className="text-xl mb-8 animate-fade-in-up">
              Your trusted partner in exporting high-quality Ethiopian products
            </p>
            <Button
              asChild
              className="animate-bounce bg-white text-[#1a365d] hover:bg-gray-100"
            >
              <Link href="/products">Explore Our Products</Link>
            </Button>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-xl">
                <div className="flex items-center justify-center mb-4">
                  <Package className="h-12 w-12 text-[#1a365d]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Premium Exports
                </h3>
                <p className="mb-4 text-center">
                  Delivering top-quality Ethiopian products to global markets
                </p>
                <div className="text-center">
                  <Link
                    href="/products"
                    className="text-[#1a365d] hover:underline flex items-center justify-center"
                  >
                    View Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-xl">
                <div className="flex items-center justify-center mb-4">
                  <MapPin className="h-12 w-12 text-[#1a365d]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Global Reach
                </h3>
                <p className="mb-4 text-center">
                  Connecting Ethiopian producers with international buyers
                </p>
                <div className="text-center">
                  <Link
                    href="/services"
                    className="text-[#1a365d] hover:underline flex items-center justify-center"
                  >
                    Our Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-xl">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="h-12 w-12 text-[#1a365d]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Quality Assurance
                </h3>
                <p className="mb-4 text-center">
                  Rigorous standards ensuring only the best products are
                  exported
                </p>
                <div className="text-center">
                  <Link
                    href="/about"
                    className="text-[#1a365d] hover:underline flex items-center justify-center"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-xl">
                <div className="flex items-center justify-center mb-4">
                  <Truck className="h-12 w-12 text-[#1a365d]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Efficient Logistics
                </h3>
                <p className="mb-4 text-center">
                  Streamlined transportation ensuring timely deliveries
                  worldwide
                </p>
                <div className="text-center">
                  <Link
                    href="/logistics"
                    className="text-[#1a365d] hover:underline flex items-center justify-center"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/coffee.png"
                  alt="Ethiopian Coffee"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Premium Ethiopian Coffee
                  </h3>
                  <p>
                    Aromatic and rich, sourced from Ethiopia&apos;s finest
                    coffee regions
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/rb_9045.png"
                  alt="Organic Honey"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Organic Honey</h3>
                  <p>
                    Pure, natural honey from the pristine highlands of Ethiopia
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/image.png"
                  alt="Goat Export"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Goat Export</h3>
                  <p>
                    Premium Ethiopian goats, raised in natural environments,
                    perfect for various culinary applications.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/camel2.jpeg"
                  alt="Camel Export"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Camel Export</h3>
                  <p>
                    Robust and healthy camels from Ethiopia&apos;s arid regions,
                    suitable for various purposes including meat and milk
                    production.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/ox.jpeg"
                  alt="Ox Export"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Ox Export</h3>
                  <p>
                    High-quality, ethically raised ox for international markets,
                    known for their superior meat quality.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/sheep.jpeg"
                  alt="Sheep Export"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Sheep Export</h3>
                  <p>
                    Premium Ethiopian goats, raised in natural environments,
                    perfect for various culinary applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Why Choose Sultan General Trading?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <Star className="h-12 w-12 text-[#1a365d] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p>
                  We source only the finest products that Ethiopia has to offer
                </p>
              </div>
              <div className="text-center">
                <Globe className="h-12 w-12 text-[#1a365d] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global Network</h3>
                <p>
                  Our extensive network ensures efficient distribution worldwide
                </p>
              </div>
              <div className="text-center">
                <Handshake className="h-12 w-12 text-[#1a365d] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Trusted Partnerships
                </h3>
                <p>
                  We build long-lasting relationships with producers and buyers
                </p>
              </div>
              <div className="text-center">
                <ShieldCheck className="h-12 w-12 text-[#1a365d] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Certified Excellence
                </h3>
                <p>
                  Our products meet rigorous international quality standards
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#1a365d] text-white py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Global Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <TrendingUp className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Economic Growth</h3>
                <p>
                  Supporting Ethiopian producers and contributing to the
                  country&apos;s economic development
                </p>
              </div>
              <div className="text-center">
                <Users className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">
                  Community Support
                </h3>
                <p>
                  Empowering local communities through fair trade practices and
                  sustainable sourcing
                </p>
              </div>
              <div className="text-center">
                <Globe className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">
                  Cultural Exchange
                </h3>
                <p>
                  Promoting Ethiopian culture and heritage on the global stage
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4 italic">
                  &quot;Sultan General Trading has been an excellent partner for
                  our coffee shop. Their Ethiopian coffee beans are of
                  exceptional quality, and their service is top-notch.&quot;
                </p>
                <p className="font-semibold">- John Doe, Owner of Brew Haven</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4 italic">
                  &quot;We&apos;ve been importing textiles from Sultan General
                  Trading for years. Their handwoven fabrics are truly unique
                  and always meet our high standards.&quot;
                </p>
                <p className="font-semibold">- Jane Smith, Fashion Designer</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">
              International Activities
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <Image
                  src="/20058575_6241196.jpg"
                  alt="International Business Meeting"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">
                  Expanding to Moldova
                </h3>
                <p className="text-xl mb-6">
                  Sultan General Trading is actively expanding its reach to
                  international markets, including the Republic of Moldova.
                </p>
                <p className="mb-6">
                  Our team of experts is conducting comprehensive market
                  assessments and exploring partnership opportunities in
                  tourism, trade, and cultural exchange.
                </p>
                <Button asChild>
                  <Link href="/tor">View Terms of Reference</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Ready to Experience Ethiopian Excellence?
            </h2>
            <p className="text-xl mb-8">
              Discover our premium products and take your business to new
              heights
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>
            &copy; {currentYear} Sultan General Trading. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
