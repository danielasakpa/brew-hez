"use client"

import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

const ProductCard = ({ product, onOrderClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-tertiary rounded-lg shadow-lg overflow-hidden border border-gray-200"
    >
      {/* Product Image */}
      <div className="relative h-48 bg-gray-100">
        <img
          src={product.image}
          alt={`${product.name} coffee beans`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-primary text-tertiary px-2 py-1 rounded-md text-sm font-semibold">
          {product.price.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-custom mb-2 text-balance">{product.name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 text-pretty">{product.description}</p>

        {/* Order Button */}
        <button
          onClick={() => onOrderClick(product)}
          className="w-full bg-primary hover:bg-red-600 text-tertiary font-semibold py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label={`Order ${product.name}`}
        >
          <FontAwesomeIcon icon={faShoppingCart} className="h-4 w-4" />
          <span>Order Now</span>
        </button>
      </div>
    </motion.div>
  )
}

export default ProductCard
