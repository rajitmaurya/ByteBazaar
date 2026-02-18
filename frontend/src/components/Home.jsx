import React, { useState, useEffect } from "react";
import Card from "./Card";
import products from "../product-api/product";
import { Filter, Grid3x3, LayoutGrid, ChevronLeft, ChevronRight } from "lucide-react";
import { useSearch } from "../context/SearchContext";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [gridColumns, setGridColumns] = useState(3);
  const { search } = useSearch();

  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = [
    "https://images.unsplash.com/photo-1498049860654-af1a5c5668ba?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  // Get unique categories
  const categories = [
    "all",
    ...new Set(products.map((products) => products.category)),
  ];

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((products) => products.category === selectedCategory);

  // Filter products based on search query
  const filteredProductsBySearch = filteredProducts.filter((products) =>
    products.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Auto Slider */}
      <div className="relative h-[600px] overflow-hidden bg-gray-900 border-b border-gray-800">
        {/* Background Images */}
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <img
              src={img}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
          </div>
        ))}

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center space-y-6 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-white to-fuchsia-400 bg-clip-text text-transparent tracking-tight drop-shadow-sm animate-fade-in-up">
              Premium Collection
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light drop-shadow-md animate-fade-in-up delay-100">
              Discover our curated selection of high-quality products defined by
              elegance and innovation.
            </p>

            <div className="flex items-center justify-center space-x-3 pt-6 animate-fade-in-up delay-200">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-400"></div>
              <span className="text-sm font-semibold text-cyan-300 bg-cyan-900/30 px-4 py-1.5 rounded-full border border-cyan-500/30 backdrop-blur-sm">
                {filteredProductsBySearch.length} Current Products
              </span>
              <div className="h-px w-16 bg-gradient-to-r from-fuchsia-400 to-transparent"></div>
            </div>

            {/* Slider Controls */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                      ? "bg-white w-8"
                      : "bg-white/50 hover:bg-white/80"
                    }`}
                />
              ))}
            </div>

            {/* Arrow Navigation (Optional but good for UX) */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white/70 hover:bg-black/50 hover:text-white transition-all hidden md:block"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white/70 hover:bg-black/50 hover:text-white transition-all hidden md:block"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Filter & Grid Controls */}
      <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Category Filter */}
            <div className="flex items-center space-x-3 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
              <Filter className="h-5 w-5 text-gray-400 shrink-0" />
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-1.5 rounded-full font-medium text-sm transition-all duration-300 whitespace-nowrap border ${selectedCategory === category
                        ? "bg-gray-900 text-white border-gray-900 shadow-md"
                        : "bg-white text-gray-600 border-gray-200 hover:border-cyan-400 hover:text-cyan-600"
                      }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid Layout Controls */}
            <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1 border border-gray-200">
              <button
                onClick={() => setGridColumns(2)}
                className={`p-1.5 rounded-md transition-all duration-300 ${gridColumns === 2
                    ? "bg-white text-cyan-600 shadow-sm"
                    : "text-gray-400 hover:text-gray-600"
                  }`}
                title="2 Columns"
              >
                <LayoutGrid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setGridColumns(3)}
                className={`p-1.5 rounded-md transition-all duration-300 ${gridColumns === 3
                    ? "bg-white text-cyan-600 shadow-sm"
                    : "text-gray-400 hover:text-gray-600"
                  }`}
                title="3 Columns"
              >
                <Grid3x3 className="h-5 w-5" />
              </button>
              <button
                onClick={() => setGridColumns(4)}
                className={`p-1.5 rounded-md transition-all duration-300 ${gridColumns === 4
                    ? "bg-white text-cyan-600 shadow-sm"
                    : "text-gray-400 hover:text-gray-600"
                  }`}
                title="4 Columns"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredProductsBySearch.length > 0 ? (
          <div
            className={`grid gap-8 ${gridColumns === 2
                ? "grid-cols-1 md:grid-cols-2"
                : gridColumns === 3
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              }`}
          >
            {filteredProductsBySearch.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="text-gray-400 text-xl font-light">
              No products found in this category
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;