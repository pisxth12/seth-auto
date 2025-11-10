
import { useState } from "react"

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <div
      className="relative group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-500 ease-out"
        style={{
          transform: isHovered ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)",
          boxShadow: isHovered ? "0 20px 40px rgba(0,0,0,0.12)" : "0 8px 16px rgba(0,0,0,0.08)",
        }}
      >
        {/* Badge Container */}
        <div className="absolute top-3 left-3 z-20 flex gap-2">
          {product.isNew && (
            <div className="bg-red-600 text-white px-3 py-1.5 rounded-md text-xs font-bold tracking-wide">NEW</div>
          )}
        </div>

        {/* Award Badge */}
        {product.award && (
          <div className="absolute top-3 right-3 z-20 w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
            <span className="text-lg">🏆</span>
          </div>
        )}

        {/* Discount Badge */}
        {product.discount && (
          <div
            className="absolute bottom-20 right-3 bg-white border-2 border-blue-600 text-blue-600 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-300"
            style={{
              opacity: isHovered ? 1 : 0.7,
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          >
            {product.discount}
          </div>
        )}

        {/* Image Container */}
        <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-3/4 h-3/4 object-contain transition-all duration-500"
            style={{
              transform: isHovered ? "scale(1.1) rotate(2deg)" : "scale(1) rotate(0deg)",
            }}
          />
        </div>

        {/* Content Container */}
        <div className="p-5 space-y-3">
          {/* Product Name */}
          <h3
            className="text-sm font-semibold text-gray-900 line-clamp-2 transition-colors duration-300"
            style={{
              color: isHovered ? "#2563eb" : "#111827",
            }}
          >
            {product.name}
          </h3>

          {/* Price Section */}
          <div className="space-y-1.5">
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-red-500">${product.price}</span>
              <span className="text-xs text-gray-500 line-through">${product.originalPrice}</span>
            </div>

            {/* Monthly Payment */}
            <p className="text-xs text-gray-600">
              Or <span className="font-semibold text-gray-900">${(product.price / 12).toFixed(0)}</span>/mo.
              <br />
              for 12 mo.
            </p>
          </div>

          {/* Deal Timer */}
          <div className="flex items-center gap-1.5 text-xs text-gray-600 pt-2 border-t border-gray-200">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
            <span>Deal ends in {product.dealEndsIn}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
