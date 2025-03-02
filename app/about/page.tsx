import { Header } from "../../components/header";
import Image from "next/image";
import { CheckCircle, Lightbulb, Users } from "lucide-react";
import Head from "next/head";

export default function About() {
  const currentYear = new Date().getFullYear();
  return (
    <> 
    <Head>
        <title>About Us | Sultan General Trading</title>
        <meta
          name="description"
          content="Learn more about Sultan General Trading, your trusted partner for quality trading solutions."
        />
        <link rel="canonical" href="https://sultangeneraltrading.com/about" />
      </Head>
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-[#1a365d] text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">
              About Sultan General Trading
            </h1>
            <p className="text-xl">Your Gateway to International Trade</p>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <Image
                  src="/2150172313.jpg"
                  alt="Sultan General Trading Office"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="mb-4">
                  Founded in Addis Ababa, Ethiopia, Sultan General Trading has
                  been at the forefront of international trade for over a
                  decade. Our mission is to bridge markets, cultures, and
                  opportunities across continents.
                </p>
                <p className="mb-4">
                  Led by our visionary CEO, Muktar Mohammed Sultan, we&apos;ve
                  expanded our reach from local Ethiopian markets to global
                  trade networks, with a special focus on emerging markets in
                  Europe and Africa.
                </p>
                <p>
                  Our team of experts brings diverse skills in logistics, market
                  research, business development, and cultural liaison to ensure
                  smooth and successful international partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-12 w-12 text-[#1a365d] mr-4" />{" "}
                 
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                    <p>
                      We conduct our business with the highest ethical
                      standards, ensuring trust and reliability in all our
                      partnerships.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-12 w-12 text-[#1a365d] mr-4" />{" "}
                
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                    <p>
                      We constantly seek new ways to improve our services and
                      create value for our clients and partners.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <Users className="h-12 w-12 text-[#1a365d] mr-4" />{" "}
                  {/* Cultural Sensitivity Icon */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Cultural Sensitivity
                    </h3>
                    <p>
                      We respect and celebrate cultural differences, fostering
                      understanding and cooperation across borders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {currentYear} Sultan General Trading. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  );
}
