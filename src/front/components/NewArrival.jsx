
import { useState } from "react"

const categories = ["All", "Mobile Phone", "Tablet", "Smart Watch", "Laptop", "Accessories"]

const products = [
  {
    id: 1,
    name: "40W USB-C Dynamic Power Adapter",
    price: 69.0,
    image: "/power-adapter.jpg",
    category: "Accessories",
    isNew: true,
    hasAward: false,
  },
  {
    id: 2,
    name: "Xiaomi 15T Pro",
    price: 639.0,
    image: "/xiaomi-15t.jpg",
    category: "Mobile Phone",
    isNew: true,
    hasAward: true,
    monthlyPrice: 57,
  },
  {
    id: 3,
    name: "Apple Watch Ultra 3 New 49mm Milanese Loop",
    price: 989.0,
    image: "/apple-watch-ultra-1.jpg",
    category: "Smart Watch",
    isNew: true,
    hasAward: true,
    monthlyPrice: 88,
  },
  {
    id: 4,
    name: "Apple Watch Ultra 3 New 49mm Trail Loop",
    price: 869.0,
    image: "/apple-watch-ultra-2.jpg",
    category: "Smart Watch",
    isNew: true,
    hasAward: true,
    monthlyPrice: 78,
  },
  {
    id: 5,
    name: "Apple Watch Series 9 Green",
    price: 429.0,
    image: "/apple-watch-green.jpg",
    category: "Smart Watch",
    isNew: true,
    hasAward: true,
  },
  {
    id: 6,
    name: "Apple Watch Series 9 Blue",
    price: 429.0,
    image: "/apple-watch-blue.jpg",
    category: "Smart Watch",
    isNew: true,
    hasAward: true,
  },
  {
    id: 6,
    name: "Apple Watch Series 9 Blue",
    price: 429.0,
    image: "/apple-watch-blue.jpg",
    category: "Smart Watch",
    isNew: true,
    hasAward: true,
  },
  {
    id: 6,
    name: "Apple Watch Series 9 Blue",
    price: 429.0,
    image: "/apple-watch-blue.jpg",
    category: "Smart Watch",
    isNew: true,
    hasAward: true,
  },
]

export default function NewArrival() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [scrollPosition, setScrollPosition] = useState(0)

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <section className="w-full bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header and Category Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">NEW ARRIVAL</h2>

          {/* Category Navigation */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 whitespace-nowrap rounded-lg transition-all duration-300 text-sm font-medium ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-foreground/60 hover:text-foreground hover:bg-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 bg-secondary/50 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* NEW Badge */}
                {product.isNew && (
                  <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded transform -rotate-12">
                    NEW
                  </div>
                )}

                {/* Award Badge */}
                {product.hasAward && (
                  <div className="absolute top-3 right-3 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-yellow-500 shadow-lg animate-bounce">
                    <span className="text-lg">🏅</span>
                  </div>
                )}
              </div>

              {/* Content Container */}
              <div className="p-4 sm:p-5">
                <h3 className="text-sm sm:text-base font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>

                <div className="space-y-2">
                  <div className="text-lg sm:text-xl font-bold text-red-500">${product.price.toFixed(2)}</div>

                  {product.monthlyPrice && (
                    <div className="text-xs sm:text-sm text-foreground/60">
                      Or ${product.monthlyPrice.toFixed(2)}/mo. for 12 mo.*
                    </div>
                  )}
                </div>

                {/* Hover CTA */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-semibold transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
