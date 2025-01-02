import { Header } from "../../components/header";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Leaf, Globe } from "lucide-react";
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Our Products',
  description: 'Explore our range of premium Ethiopian exports including coffee, honey, textiles, and livestock.',
  openGraph: {
    title: 'Premium Ethiopian Products - Sultan General Trading',
    description: 'Discover our high-quality Ethiopian exports for international markets.',
  },
}
export default function Products() {
  const currentYear = new Date().getFullYear();
  const products = [
    {
      name: "Premium Ethiopian Frankincense",
      description: "Pure, aromatic Frankincense resin sourced from the finest Boswellia trees in Ethiopia. Known for its distinct fragrance and traditional uses.",
      image: "/frankincense.jpeg",
      categories: ["Natural Products", "Aromatics", "Traditional"]
    },
    {
      name: "Premium Ethiopian Coffee",
      description:
        "Aromatic and rich, sourced from Ethiopia's finest coffee regions. Available in various roasts and grinds.",
      image: "/coffee.png",
      categories: ["Beverages", "Gourmet"],
    },
    {
      name: "Organic Honey",
      description:
        "Pure, natural honey from the pristine highlands of Ethiopia. Known for its unique flavor and health benefits.",
      image: "/rb_9045.png",
      categories: ["Natural Products", "Health Foods"],
    },
    {
      name: "Handwoven Textiles",
      description:
        "Exquisite, traditionally crafted fabrics showcasing Ethiopian artistry. Perfect for home decor and fashion.",
      image: "/carpets-market-morocco.jpg",
      categories: ["Handicrafts", "Home Decor"],
    },
    {
      name: "Teff Flour",
      description:
        "Gluten-free, nutrient-rich flour made from Ethiopia's ancient grain. Ideal for health-conscious consumers.",
      image: "/stack-rice-cakes-bowl-flour-wooden-board.jpg",
      categories: ["Grains", "Health Foods"],
    },
    {
      name: "Ethiopian Spice Blends",
      description:
        "Authentic spice mixes including Berbere and Mitmita, adding unique flavors to various cuisines.",
      image: "/spices-around-spilled-powder.jpg",
      categories: ["Spices", "Gourmet"],
    },
    {
      name: "Leather Goods",
      description:
        "High-quality leather products, including bags and accessories, showcasing Ethiopian craftsmanship.",
      image: "/2148739385.jpg",
      categories: ["Fashion", "Accessories"],
    },
    {
      name: "Ox Export",
      description: "High-quality, ethically raised ox for international markets, known for their superior meat quality.",
      image: "/ox.jpeg?height=300&width=400",
      categories: ["Livestock", "Agriculture"]
    },
    {
      name: "Goat Export",
      description: "Premium Ethiopian goats, raised in natural environments, perfect for various culinary applications.",
      image: "/image.png",
      categories: ["Livestock", "Agriculture"]
    },
    {
      name: "Sheep Export",
      description: "Ethically raised sheep from Ethiopia's highlands, known for their tender and flavorful meat.",
      image: "/sheep.jpeg?height=300&width=400",
      categories: ["Livestock", "Agriculture"]
    },
    {
      name: "Camel Export",
      description: "Robust and healthy camels from Ethiopia's arid regions, suitable for various purposes including meat and milk production.",
      image: "/camel2.jpeg",
      categories: ["Livestock", "Agriculture"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-[#1a365d] text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">
              Our Premium Export Products
            </h1>
            <p className="text-xl">
              Discover the finest goods Ethiopia has to offer
            </p>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {product.categories.map((category, i) => (
                        <Badge key={i} variant="secondary">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{product.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
<section className="bg-white py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">
              Watch Our Process
            </h2>
            <p className="text-center text-xl mb-6">
              Explore how we ensure quality in exporting premium animal products like meat, milk, and livestock.
            </p>
            <div className="flex justify-center">
              <video
                className="w-full md:w-2/3 rounded-lg shadow-lg"
                controls
                poster="/IMG-20241231-WA0027.jpg" // Replace with your video thumbnail
              >
                <source src="/VID-20241231-WA0076.mp4" type="video/mp4" />
                <p>
                  Your browser does not support the video tag. You can{" "}
                  <a href="/your-video-file.mp4" className="text-blue-500">
                    download the video here
                  </a>.
                </p>
              </video>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Why Choose Our Products?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Award className="h-12 w-12 text-[#1a365d] mb-4" />{" "}
                {/* Authentic Quality Icon */}
                <h3 className="text-xl font-semibold mb-4">
                  Authentic Quality
                </h3>
                <p>
                  Each product is carefully selected to represent the best of
                  Ethiopian craftsmanship and natural resources.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Leaf className="h-12 w-12 text-[#1a365d] mb-4" />{" "}
                {/* Sustainable Sourcing Icon */}
                <h3 className="text-xl font-semibold mb-4">
                  Sustainable Sourcing
                </h3>
                <p>
                  We prioritize environmentally friendly and socially
                  responsible sourcing practices.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Globe className="h-12 w-12 text-[#1a365d] mb-4" />{" "}
                {/* Global Standards Icon */}
                <h3 className="text-xl font-semibold mb-4">Global Standards</h3>
                <p>
                  Our products meet international quality standards, ensuring
                  satisfaction for global consumers.
                </p>
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
