"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  AlertCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";


const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." })
    .optional(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage() {
  const currentYear = new Date().getFullYear();
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  
  useEffect(() => {
    if (formStatus.type) {
      const timer = setTimeout(() => {
        setFormStatus({ type: null, message: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [formStatus.type]);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setLoading(true);
    setFormStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await res.json();

      if (res.ok) {
        setFormStatus({
          type: "success",
          message:
            responseData.message ||
            "Message sent successfully! We'll get back to you soon.",
        });
        form.reset();
      } else {
        setFormStatus({
          type: "error",
          message:
            responseData.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again later.",
      });
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-24">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                Get in Touch
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Have questions about our products or services? We&apos;re here to
                help you.
              </p>
              <div className="flex justify-center space-x-4">
                <Button
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 border-white/20 text-white"
                  onClick={() => {
                    const contactForm = document.getElementById("contact-form");
                    contactForm?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Send a Message
                </Button>
                <Button
                  variant="default"
                  onClick={() => {
                    const contactInfo = document.getElementById("contact-info");
                    contactInfo?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Contact Information
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div
                id="contact-form"
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
              >
                <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">
                  Send us a message
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-8">
                  Fill out the form below and our team will get back to you as
                  soon as possible.
                </p>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="john@example.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject (Optional)</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="How can we help you?"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please provide details about your inquiry..."
                              className="min-h-[150px] resize-y"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {formStatus.type && (
                      <Alert
                        variant={
                          formStatus.type === "success"
                            ? "default"
                            : "destructive"
                        }
                      >
                        {formStatus.type === "success" ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <AlertCircle className="h-4 w-4" />
                        )}
                        <AlertTitle>
                          {formStatus.type === "success" ? "Success" : "Error"}
                        </AlertTitle>
                        <AlertDescription>
                          {formStatus.message}
                        </AlertDescription>
                      </Alert>
                    )}

                    <Button
                      type="submit"
                      className="w-full md:w-auto"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending Message...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                </Form>
              </div>

              {/* Contact Information */}
              <div id="contact-info">
                <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
                  Contact Information
                </h2>

                <Tabs defaultValue="addis" className="mb-10">
                  <TabsList className="mb-6">
                    <TabsTrigger value="addis">Head Office</TabsTrigger>
                    <TabsTrigger value="turkey">Turkey Branch</TabsTrigger>
                  </TabsList>

                  <TabsContent value="addis" className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <MapPin className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                          <div>
                            <h3 className="font-semibold text-lg mb-2">
                              Addis Ababa Head Office
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300">
                              Najip tower, 3rd Floor, Room 302, Bole wollo
                              Sefer, Addis Ababa, Ethiopia
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Phone className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                          <div>
                            <h3 className="font-semibold text-lg mb-2">
                              Phone
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300">
                              <Link
                                href="tel:+251915042639"
                                className="hover:text-blue-600 transition-colors"
                              >
                                +251 915 042 639
                              </Link>
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Mail className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                          <div>
                            <h3 className="font-semibold text-lg mb-2">
                              Email
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300">
                              <Link
                                href="mailto:mukhtarmahamud1@gmail.com"
                                className="hover:text-blue-600 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                mukhtarmahamud1@gmail.com
                              </Link>
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="turkey" className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <MapPin className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                          <div>
                            <h3 className="font-semibold text-lg mb-2">
                              Turkey Branch
                            </h3>
                            <Link href="https://maps.app.goo.gl/c12UCQ8VDG9qN6Vm8" target="_blank" rel="noopener noreferrer" className="hover:text-blue transition-colors block"> 
                              <p className="text-slate-600 dark:text-slate-300">
                                Atapark mahallesi 1368 sokak no 4/2 Ankara keçiören
                              </p>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Phone className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                          <div>
                            <h3 className="font-semibold text-lg mb-2">
                              Phone
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300">
                              <Link
                                href="tel:+905523414384"
                                className="hover:text-blue-600 transition-colors block"
                              >
                                +90 552 341 43 84
                              </Link>
                              <Link
                                href="tel:+905528791800"
                                className="hover:text-blue-600 transition-colors block mt-1"
                              >
                                +90 552 879 18 00
                              </Link>
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Mail className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                          <div>
                            <h3 className="font-semibold text-lg mb-2">
                              Email
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300">
                              <Link
                                href="mailto:mukhtarmahamud1@gmail.com"
                                className="hover:text-blue-600 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                mukhtarmahamud1@gmail.com
                              </Link>
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>

               
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                    Connect With Us
                  </h3>
                  <div className="flex space-x-4">
                    <Link
                      href="#"
                      className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      <Facebook className="h-6 w-6" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link
                      href="#"
                      className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      <Twitter className="h-6 w-6" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link
                      href="#"
                      className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      <Instagram className="h-6 w-6" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link
                      href="#"
                      className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-slate-100 dark:bg-slate-800/50">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Find answers to common questions about Sultan General Trading
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "What products does Sultan General Trading offer?",
                  answer:
                    "Sultan General Trading offers a wide range of products including Premium Ethiopian Coffee, Premium Ethiopian Honey, Premium Ethiopian Textiles, and Premium Ethiopian Livestock. Our inventory is constantly updated to meet market demands and customer needs.",
                },
                {
                  question: "Do you offer international shipping?",
                  answer:
                    "Yes, we offer international shipping to select countries. Shipping rates and delivery times vary depending on the destination. Please contact our customer service for more information.",
                },
                {
                  question: "What are your payment methods?",
                  answer:
                    "We accept various payment methods including bank transfers, credit cards, and mobile payment solutions. All transactions are secure and protected.",
                },
                {
                  question: "How can I track my order?",
                  answer:
                    "Once your order is processed, you will receive a tracking number via email. You can use this number to track your order on our website or contact our customer service for assistance.",
                },
              ].map((faq, index) => (
                <Card
                  key={index}
                  className="transition-all duration-300 hover:shadow-md"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">
                      {faq.question}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {currentYear} Sultan General Trading. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
