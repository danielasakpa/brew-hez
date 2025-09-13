"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../components/ProductCard";
import OrderModal from "../components/OrderModal";
import { coffeeProducts } from "../lib/demoData";

const ProductsPage = () => {
  const [products] = useState(coffeeProducts);
  const [filteredProducts, setFilteredProducts] = useState(coffeeProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  // Apply search + price filters
  const filterProducts = (search, price) => {
    let filtered = products;

    // Search by name or description
    if (search) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Price ranges
    if (price !== "all") {
      switch (price) {
        case "under-25,000":
          filtered = filtered.filter((product) => product.price < 25000);
          break;
        case "25,000-50,000":
          filtered = filtered.filter(
            (product) => product.price >= 25000 && product.price <= 50000
          );
          break;
        case "over-50,000":
          filtered = filtered.filter((product) => product.price > 50000);
          break;
      }
    }

    setFilteredProducts(filtered);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterProducts(value, priceFilter);
  };

  const handlePriceFilterChange = (e) => {
    const value = e.target.value;
    setPriceFilter(value);
    filterProducts(searchTerm, value);
  };

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    setIsOrderModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsOrderModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-custom to-amber-900 text-tertiary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Premium Coffee Collection
            </h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-pretty">
              Discover our carefully curated selection of the world's finest
              coffee beans, each with its own unique flavor profile and story.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters bar */}
      <section className="py-8 bg-tertiary border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search input */}
            <div className="relative flex-1 max-w-md">
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4"
                aria-label="Search icon"
              />
              <input
                type="text"
                placeholder="Search coffee..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                aria-label="Search coffee products"
              />
            </div>

            {/* Price filter dropdown */}
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon
                icon={faFilter}
                className="text-gray-600 h-4 w-4"
                aria-label="Filter icon"
              />
              <select
                value={priceFilter}
                onChange={handlePriceFilterChange}
                className="px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                aria-label="Filter by price range"
              >
                <option value="all">All Prices</option>
                <option value="under-25,000">Under ₦25,000</option>
                <option value="25,000-50,000">₦25,000 - ₦50,000</option>
                <option value="over-50,000">Over ₦50,000</option>
              </select>
            </div>

            {/* Results counter */}
            <div className="text-gray-600 text-sm">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "product" : "products"} found
            </div>
          </div>
        </div>
      </section>

      {/* Products listing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProductCard
                    product={product}
                    onOrderClick={handleOrderClick}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <FontAwesomeIcon icon={faSearch} className="h-16 w-16" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No products found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Order modal */}
      {isOrderModalOpen && selectedProduct && (
        <OrderModal
          product={selectedProduct}
          isOpen={isOrderModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ProductsPage;
