import { Header } from '../../components/header'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Products() {
  const products = [
    {
      name: "Premium Ethiopian Coffee",
      description: "Aromatic and rich, sourced from Ethiopia's finest coffee regions. Available in various roasts and grinds.",
      image: "/placeholder.svg?height=300&width=400",
      categories: ["Beverages", "Gourmet"]
    },
    {
      name: "Organic Honey",
      description: "Pure, natural honey from the pristine highlands of Ethiopia. Known for its unique flavor and health benefits.",
      image: "/placeholder.svg?height=300&width=400",
      categories: ["Natural Products", "Health Foods"]
    },
    {
      name: "Handwoven Textiles",
      description: "Exquisite, traditionally crafted fabrics showcasing Ethiopian artistry. Perfect for home decor and fashion.",
      image: "/placeholder.svg?height=300&width=400",
      categories: ["Handicrafts", "Home Decor"]
    },
    {
      name: "Teff Flour",
      description: "Gluten-free, nutrient-rich flour made from Ethiopia's ancient grain. Ideal for health-conscious consumers.",
      image: "/placeholder.svg?height=300&width=400",
      categories: ["Grains", "Health Foods"]
    },
    {
      name: "Ethiopian Spice Blends",
      description: "Authentic spice mixes including Berbere and Mitmita, adding unique flavors to various cuisines.",
      image: "/placeholder.svg?height=300&width=400",
      categories: ["Spices", "Gourmet"]
    },
    {
      name: "Leather Goods",
      description: "High-quality leather products, including bags and accessories, showcasing Ethiopian craftsmanship.",
      image: "/placeholder.svg?height=300&width=400",
      categories: ["Fashion", "Accessories"]
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-[#1a365d] text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Our Premium Export Products</h1>
            <p className="text-xl">Discover the finest goods Ethiopia has to offer</p>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="overflow-hidden">
                  <Image src={product.image} alt={product.name} width={400} height={300} className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {product.categories.map((category, i) => (
                        <Badge key={i} variant="secondary">{category}</Badge>
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
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose Our Products?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Authentic Quality</h3>
                <p>Each product is carefully selected to represent the best of Ethiopian craftsmanship and natural resources.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Sustainable Sourcing</h3>
                <p>We prioritize environmentally friendly and socially responsible sourcing practices.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Global Standards</h3>
                <p>Our products meet international quality standards, ensuring satisfaction for global consumers.</p>
              </div>
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

