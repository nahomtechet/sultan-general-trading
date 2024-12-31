import { Header } from "../../components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Globe, BarChartIcon as ChartBar, Handshake, TrendingUp, Truck } from "lucide-react"

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl">Comprehensive Solutions for International Trade</p>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-6 w-6" />
                    Import/Export Facilitation
                  </CardTitle>
                  <CardDescription>Streamlining international trade processes</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Customs clearance assistance</li>
                    <li>Documentation and compliance management</li>
                    <li>Logistics coordination</li>
                    <li>Trade finance solutions</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ChartBar className="h-6 w-6" />
                    Market Research and Analysis
                  </CardTitle>
                  <CardDescription>In-depth insights for informed decisions</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Consumer behavior studies</li>
                    <li>Competitor analysis</li>
                    <li>Market entry strategies</li>
                    <li>Trend forecasting</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Handshake className="h-6 w-6" />
                    Business Development
                  </CardTitle>
                  <CardDescription>Expanding your business globally</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Partner identification and vetting</li>
                    <li>Negotiation support</li>
                    <li>Joint venture facilitation</li>
                    <li>Local representation services</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6" />
                    Strategic Consulting
                  </CardTitle>
                  <CardDescription>Expert guidance for international success</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Risk assessment and mitigation</li>
                    <li>Growth strategy development</li>
                    <li>Cultural adaptation consulting</li>
                    <li>Regulatory compliance advisory</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Our Expertise</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="text-lg py-2 px-4">Ethiopian Markets</Badge>
              <Badge className="text-lg py-2 px-4">European Trade</Badge>
              <Badge className="text-lg py-2 px-4">African Economic Community</Badge>
              <Badge className="text-lg py-2 px-4">Cross-Cultural Business</Badge>
              <Badge className="text-lg py-2 px-4">Emerging Markets</Badge>
              <Badge className="text-lg py-2 px-4">Supply Chain Optimization</Badge>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Sultan General Trading. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

