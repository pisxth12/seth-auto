function ProductShowcase() {
  const products = [
    {
      id: 1,
      name: 'Huawei Watch GT 6 Pro 46mm',
      price: 299.00,
      monthlyPrice: 27.00,
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
      isNew: true,
      hasRating: true
    },
    {
      id: 2,
      name: 'Huawei Watch GT 6 46mm',
      price: 219.00,
      monthlyPrice: 20.00,
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
      isNew: true,
      hasRating: true
    },
    {
      id: 3,
      name: 'Huawei Watch GT 6 41mm',
      price: 219.00,
      monthlyPrice: 20.00,
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
      isNew: true,
      hasRating: true
    },
    {
      id: 4,
      name: '(Used) Huawei Watch GT 6 Pro 46mm',
      price: 280.00,
      monthlyPrice:  20.00,
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
      isNew: false,
      hasRating: false
    },
    {
      id: 5,
      name: 'Galaxy Watch Ultra 2025',
      price: 599.00,
      monthlyPrice: 53.00,
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
      isNew: true,
      hasRating: true
    },
    {
      id: 6,
      name: 'COROS NOMAD',
      price: 399.00,
      monthlyPrice: 36.00,
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400',
      isNew: true,
      hasRating: true
    }
  ];

  return (
    <section className="w-full bg-gray-50 px-6 md:px-4 sm:px-3 py-12 md:py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-2xl sm:text-xl font-semibold text-slate-900 tracking-wide">
            SMART WATCH
          </h2>
          <a href="#" className="text-slate-700 hover:text-blue-600 transition-colors text-sm font-medium flex items-center gap-2">
            View all
            <span className="text-xs">≫</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-md group cursor-pointer"
            >
              <div className="relative bg-gray-100 h-56 md:h-48 sm:h-40 overflow-hidden flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {product.isNew && (
                  <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
                    NEW
                  </div>
                )}

                {product.hasRating && (
                  <div className="absolute top-3 right-3 bg-yellow-400 text-slate-900 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                    ★
                  </div>
                )}
              </div>

              <div className="p-4 md:p-3">
                <h3 className="text-sm font-medium text-slate-900 line-clamp-2 mb-3 min-h-10">
                  {product.name}
                </h3>

                <div className="mb-2">
                  <p className="text-lg md:text-base font-semibold text-red-600">
                    ${product.price.toFixed(2)}
                  </p>
                </div>

                {product.monthlyPrice && (
                  <p className="text-xs text-gray-600">
                    Or <span className="text-blue-600 font-medium">${product.monthlyPrice.toFixed(2)}</span>/mo. for 12 mo.*
                  </p>
                )}

                <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition-colors duration-300 text-sm">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;
