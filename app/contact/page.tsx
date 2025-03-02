import { Header } from "../../components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-[#1a365d] text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">Get in touch with Sultan General Trading</p>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={4}
                    />
                  </div>
                  <Button type="submit">Send Message</Button>
                </form>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                    <p>
                      Najip tower,3rd Floor, Room 302, Bole wollo Sefer,Addis
                      Ababa,Ethiopia
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    {[
                      { number: "+251915042639", link: "tel:+251915042639" },
                      { number: "+905523414384", link: "tel:+905523414384" },
                      { number: "+905528791800", link: "tel:+905528791800" },
                     ].map(({ number, link }, index) => (
                   <div key={index} className="flex items-center gap-2">
                        <Link href={link}>
                          <Phone className="h-6 w-6 text-blue-600" />
                        </Link>
                        <p>{number}</p>
                      </div>
                    ))}
                  </div>

                 
                  <div className="flex items-center">
                    <Link
                      href="mailto:mukhtarmahamud1@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex items-center">
                        <Mail className="h-6 w-6 text-blue-600 mr-2" />
                        <p>mukhtarmahamud1@gmail.com</p>
                      </div>
                    </Link>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">
                      Business Hours
                    </h3>
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
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
  );
}
