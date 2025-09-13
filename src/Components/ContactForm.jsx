"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { showSuccessAlert, showErrorAlert, showLoadingAlert, closeAlert } from "./SweetAlert"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      showLoadingAlert("Sending your message...")

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      closeAlert()

      if (response.ok) {
        await showSuccessAlert("Message Sent!", "Thank you for contacting us. We'll get back to you soon!")
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      closeAlert()
      await showErrorAlert("Error", "There was a problem sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="bg-tertiary rounded-lg shadow-lg p-8 border border-gray-200"
    >
      <h2 className="text-2xl font-bold text-custom mb-6 text-balance">Send us a Message</h2>

      {/* Name Field */}
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium text-custom mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-base placeholder:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Your full name"
        />
      </div>  

      {/* Email Field */}
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-custom mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="your.email@example.com"
        />
      </div>

      {/* Message Field */}
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-custom mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
          placeholder="Tell us how we can help you..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-red-600 disabled:bg-gray-400 text-tertiary font-semibold py-3 px-6 rounded-md transition-colors duration-200 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <FontAwesomeIcon icon={faPaperPlane} className="h-4 w-4" />
        <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
      </button>
    </motion.form>
  )
}

export default ContactForm
