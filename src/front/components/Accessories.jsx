import React from 'react'

const Accessories = () => {
  const products = [
    {
      title: "LUUCCO Melo-S1",
      subtitle: "Large-Diophragma",
      price: "$199.95",
      paymentPlan: "Or $18.00/mo. for 12 mo.*",
      hasButton: true,
      isNew: true,
      image: "/images/melo-s1.jpg"
    },
    {
      title: "Bluco Woven Aramid",
      subtitle: "Fiber Magnetic Case...",
      price: "$39.00",
      paymentPlan: "",
      hasButton: true,
      isNew: true,
      image: "/images/aramid-case.jpg"
    },
    {
      title: "LUUCCO StreamPro-S1",
      subtitle: "Studio USB...",
      price: "$149.95",
      paymentPlan: "Or $13.00/mo. for 12 mo.*",
      hasButton: true,
      isNew: true,
      image: "/images/streampro-s1.jpg"
    },
    {
      title: "LUUCCO ARM1 Studio",
      subtitle: "Arm",
      price: "$99.95",
      paymentPlan: "Or $8.00/mo. for 12 mo.*",
      hasButton: true,
      isNew: true,
      image: "/images/studio-arm.jpg"
    },
    {
      title: "BUJCO Air Aramid Fiber",
      subtitle: "Magnetic Case Phon...",
      price: "$29.00",
      paymentPlan: "",
      hasButton: true,
      isNew: true,
      image: "/images/air-case.jpg"
    },
    {
      title: "Mutual Protective Folio",
      subtitle: "Case for iPad TL...",
      price: "$22.00",
      paymentPlan: "",
      hasButton: true,
      isNew: true,
      image: "/images/folio-case.jpg"
    },
    {
      title: "Wireless Charging Pad",
      subtitle: "Fast Charging Station",
      price: "$49.95",
      paymentPlan: "Or $5.00/mo. for 12 mo.*",
      hasButton: true,
      isNew: true,
      image: "/images/charging-pad.jpg"
    },
    {
      title: "Premium Headphone Stand",
      subtitle: "Aluminum Design",
      price: "$79.00",
      paymentPlan: "",
      hasButton: true,
      isNew: true,
      image: "/images/headphone-stand.jpg"
    }
  ]

  return (
    <div className="w-full min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ACCESSORIES</h1>
          <p className="text-gray-600 text-lg">Discover our latest collection of premium accessories</p>
        </div>
        
        {/* Products Grid - 4 columns on large screens, 2 on medium, 1 on small */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden group">
              {/* Product Image Container */}
              <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IiM5YzljOWMiPlByb2R1Y3QgSW1hZ2U8L3RleHQ+PC9zdmc+"
                  }}
                />
                
                {/* NEW Badge */}
                {product.isNew && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg">
                      NEW
                    </span>
                  </div>
                )}
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-1 line-clamp-1">{product.title}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-1">{product.subtitle}</p>
                
                {/* Price Section */}
                <div className="mb-4">
                  <p className="text-2xl font-bold text-gray-900">{product.price}</p>
                  {product.paymentPlan && (
                    <p className="text-sm text-gray-500 mt-1">{product.paymentPlan}</p>
                  )}
                </div>
                
                {/* Add to Cart Button - Only for first product */}
                {product.hasButton && (
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 bg-white text-blue-600 hover:text-blue-800 font-semibold text-lg transition-all duration-200 border-2 border-blue-600 hover:border-blue-800 px-8 py-4 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5">
            View all
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Accessories