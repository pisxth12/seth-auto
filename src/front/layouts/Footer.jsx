import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
          {/* Quick Links Section - Takes 4 columns */}
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold mb-6">QUICKLINKS</h2>
            
            {/* Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Column 1 */}
              <div className="space-y-3">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">Mobile Phone</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">Tablet</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">Smart Watch</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">Accessories</a>
              </div>
              
              {/* Column 2 */}
              <div className="space-y-3">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">Laptop</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">Earphone</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">Power Bank</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">Adapter</a>
              </div>
              
              {/* Column 3 */}
              <div className="space-y-3">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">Play Station</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">Connector</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">Router Wireless</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">Case</a>
              </div>
              
              {/* Column 4 */}
              <div className="space-y-3">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">Bluetooth Speaker</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">Keyboard</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">News</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">Contact us</a>
              </div>
            </div>
          </div>
          
          {/* Follow Us Section - Takes 1 column */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6">FOLLOW US</h2>
            <div className="space-y-4">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200 text-lg">1. Sokly Phone Shop</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200 text-lg">2. Sokly Phone Cambodia</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200 text-lg">3. Sokly Phone</a>
            </div>
          </div>
        </div>
        
        {/* Website Link */}
        <div className="border-t border-gray-700 pt-6 mb-6">
          <a 
            href="http://www.solypbureau.com/products/solypy/article-pdf/5" 
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-lg"
          >
            http://www.solypbureau.com/products/solypy/article-pdf/5
          </a>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-center text-lg">
            Sokly Phone Shop © 2020. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer