"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCoffee,
  faLeaf,
  faGlobe,
  faHeart,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons"

const HomePage = () => {
  const features = [
    {
      icon: faLeaf,
      title: "Sustainably Sourced",
      description:
        "We partner directly with farmers to ensure fair trade and eco-friendly practices.",
    },
    {
      icon: faGlobe,
      title: "Global Origins",
      description:
        "Hand-picked beans from renowned coffee-growing regions worldwide.",
    },
    {
      icon: faHeart,
      title: "Expertly Roasted",
      description:
        "Every batch is roasted with precision to bring out bold flavors and aromas.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-custom to-amber-900 text-tertiary py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Welcome to <span className="text-secondary">Brew Hez</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 leading-relaxed">
                Discover the world’s finest beans, roasted fresh and delivered
                straight to your door. Taste perfection in every cup.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="bg-primary hover:bg-red-600 text-tertiary font-semibold py-3 px-8 rounded-md transition-colors flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <span>Shop Coffee</span>
                  <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-tertiary text-tertiary hover:bg-tertiary hover:text-custom font-semibold py-3 px-8 rounded-md transition-colors text-center focus:outline-none focus:ring-2 focus:ring-tertiary focus:ring-offset-2"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/Brew Hez.png"
                  alt="Coffee beans roasting in our artisan roastery"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-custom mb-4">
              Why Choose Brew Hez?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We’re dedicated to quality, sustainability, and the craftsmanship
              behind every roast.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-tertiary rounded-lg shadow-lg border border-gray-200"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-tertiary rounded-full mb-6">
                  <FontAwesomeIcon
                    icon={feature.icon}
                    className="h-8 w-8"
                    aria-label={`${feature.title} icon`}
                  />
                </div>
                <h3 className="text-xl font-bold text-custom mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-custom text-tertiary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FontAwesomeIcon
              icon={faCoffee}
              className="h-16 w-16 text-secondary mb-6 mx-auto"
              aria-label="Coffee cup icon"
            />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready for Your Next Brew?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Join coffee lovers around the world who choose Brew Hez for their
              daily dose of excellence.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center space-x-2 bg-primary hover:bg-red-600 text-tertiary font-semibold py-4 px-8 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <span>Browse Our Coffee</span>
              <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
