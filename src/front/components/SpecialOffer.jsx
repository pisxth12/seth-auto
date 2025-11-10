"use client"

import ProductCard from "./ProductCart"

export default function SpecialOffer() {
  const products = [
    {
      id: 1,
      name: "AirPods Pro 3",
      image: "../../../public/airpods-pro-white.jpg",
      price: 329,
      originalPrice: 339,
      discount: "$10 Off",
      isNew: true,
      award: true,
      dealEndsIn: "5d 00:32:17",
    },
    {
      id: 2,
      name: "Google Pixel 10 Pro XL",
      image: "../../../public/google-pixel-phone.jpg",
      price: 1159,
      originalPrice: 1229,
      discount: "$70 Off",
      isNew: true,
      award: true,
      dealEndsIn: "5d 00:32:17",
    },
    {
      id: 3,
      name: 'MacBook Air 13" M4 2025 10C',
      image: "../../../public/macbook-air-15-laptop.jpg",
      price: 1349,
      originalPrice: 1609,
      discount: "$260 Off",
      isNew: true,
      award: true,
      dealEndsIn: "20d 00:32:17",
    },
    {
      id: 4,
      name: 'MacBook Air 15" M4 2025 10C',
      image: "../../../public/macbook-air-15-laptop.jpg",
      price: 1549,
      originalPrice: 1839,
      discount: "$290 Off",
      isNew: true,
      award: true,
      dealEndsIn: "5d 00:32:17",
    },
    {
      id: 5,
      name: 'iPad Air 13" Cellular 2025',
      image: "../../../public/ipad-air-tablet.jpg",
      price: 1069,
      originalPrice: 1099,
      discount: "$30 Off",
      isNew: true,
      award: true,
      dealEndsIn: "20d 00:32:17",
    },
    {
      id: 6,
      name: "iPhone 16e",
      image: "../../../public/iphone-16-black.jpg",
      price: 689,
      originalPrice: 739,
      discount: "$50 Off",
      isNew: true,
      award: true,
      dealEndsIn: "20d 00:32:17",
    },
  ]

  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-12 md:py-16 bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">SPECIAL OFFER</h2>
        <a
          href="#"
          className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors flex items-center gap-2"
        >
          View all
          <span className="text-lg">›</span>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-5">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  )
}
