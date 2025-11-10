function PopularCategories() {
  const categories = [
    {
      id: 1,
      name: 'Mobile Phone',
      icon: '📱',
      link: '#mobile'
    },
    {
      id: 2,
      name: 'Tablet',
      icon: '💻',
      link: '#tablet'
    },
    {
      id: 3,
      name: 'Smart Watch',
      icon: '⌚',
      link: '#watch'
    },
    {
      id: 4,
      name: 'Laptop',
      icon: '💻',
      link: '#laptop'
    },
    {
      id: 5,
      name: 'Accessories',
      icon: '🎧',
      link: '#accessories'
    }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 md:px-4 sm:px-3 py-12 md:py-8">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mb-8 md:mb-10 tracking-wide">
        POPULAR CATEGORIES
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex items-center gap-5 bg-white border border-gray-200 rounded-lg p-6 md:p-5 sm:p-4 transition-all duration-300 hover:shadow-md hover:border-gray-300 cursor-pointer hover:-translate-y-1"
          >
            <div className="flex-shrink-0 w-16 h-16 md:w-14 md:h-14 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-50 rounded-md text-4xl md:text-3xl sm:text-2xl">
              {category.icon}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg md:text-base sm:text-sm font-medium text-slate-900">
                {category.name}
              </h3>
              <a
                href={category.link}
                className="inline-flex items-center gap-1.5 text-sm md:text-xs sm:text-xs text-gray-500 no-underline hover:text-blue-500 transition-colors duration-300"
              >
                view more
                <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">
                  ≫
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularCategories;
