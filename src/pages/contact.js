"use client"

import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope, faMapMarkerAlt, faClock, faComments } from "@fortawesome/free-solid-svg-icons"
import ContactForm from "../components/ContactForm"

const ContactPage = () => {
  const contactInfo = [
    {
      icon: faPhone,
      title: "Phone",
      details: ["+234 902 243 4392", "Mon-Fri: 8AM-6PM"],
      link: "tel:+15551234567",
    },
    {
      icon: faEnvelope,
      title: "Email",
      details: ["hello@brewhez.ng", "We reply within 24 hours"],
      link: "mailto:info@artisancoffee.com",
    },
    {
      icon: faMapMarkerAlt,
      title: "Address",
      details: ["12 Aroma Lane, Surulere, Lagos, Nigeria"],
      link: "https://maps.google.com/?q=123+Coffee+Street+Bean+City",
    },
  ]

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-custom to-amber-900 text-tertiary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <FontAwesomeIcon
              icon={faComments}
              className="h-16 w-16 text-secondary mb-6 mx-auto"
              aria-label="Chat icon"
            />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Get in Touch</h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-pretty">
              Have questions about our coffee or need help with an order? We&#39;d love to hear from you and help you find
              your perfect cup.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Methods */}
              <div>
                <h2 className="text-2xl font-bold text-custom mb-6 text-balance">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-primary text-tertiary rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={info.icon} className="h-5 w-5" aria-label={`${info.title} icon`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-custom mb-1">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">
                            {idx === 0 && info.link ? (
                              <a
                                href={info.link}
                                className="text-primary hover:text-red-600 transition-colors duration-200"
                                target={info.link.startsWith("http") ? "_blank" : undefined}
                                rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-tertiary rounded-lg shadow-lg p-6 border border-gray-200"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <FontAwesomeIcon icon={faClock} className="h-5 w-5 text-primary" aria-label="Clock icon" />
                  <h3 className="text-lg font-semibold text-custom">Business Hours</h3>
                </div>
                <div className="space-y-2">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-600">{schedule.day}</span>
                      <span className="font-medium text-custom">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-gradient-to-br from-primary to-red-600 text-tertiary rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-3">Need Immediate Help?</h3>
                <p className="text-sm leading-relaxed mb-4 text-pretty">
                  For urgent inquiries or same-day orders, please call us directly. Our coffee experts are standing by
                  to help you find the perfect blend.
                </p>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center space-x-2 bg-tertiary text-primary font-semibold py-2 px-4 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-tertiary focus:ring-offset-2"
                >
                  <FontAwesomeIcon icon={faPhone} className="h-4 w-4" />
                  <span>Call Now</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
