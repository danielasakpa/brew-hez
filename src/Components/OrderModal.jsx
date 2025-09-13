"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faShoppingCart,
  faUser,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import {
  showSuccessAlert,
  showErrorAlert,
  showLoadingAlert,
  closeAlert,
} from "./SweetAlert";

const OrderModal = ({ product, isOpen, onClose }) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "09022434392",
    address: "Surulere, Lagos, Nigeria",
    quantity: 1,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleInputChange = (e) =>
    setCustomerInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleQuantityChange = (e) =>
    setCustomerInfo((prev) => ({
      ...prev,
      quantity: Math.max(1, Number.parseInt(e.target.value) || 1),
    }));

  const calculateTotal = () =>
    (product.price * customerInfo.quantity).toLocaleString("en-NG", {
      style: "currency",
      currency: "NGN",
    });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    showLoadingAlert("Processing your order...");
    try {
      const templateParams = {
        email: "omocodes@example.com",
        customer_name: customerInfo.name,
        customer_phone: customerInfo.phone,
        customer_address: customerInfo.address,
        product_name: product.name,
        product_description: product.description,
        quantity: customerInfo.quantity,
        unit_price: product.price.toLocaleString("en-NG", {
          style: "currency",
          currency: "NGN",
        }),
        total_price: calculateTotal(),
        order_date: new Date().toLocaleDateString(),
      };

      console.log({
        parameters: templateParams,
        serviceID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        templateID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      });

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      closeAlert();
      setIsSubmitting(false);
      await showSuccessAlert(
        "Order Placed Successfully!",
        `Thank you ${customerInfo.name}! Your order for ${customerInfo.quantity}x ${product.name} has been received.`
      );

      setCustomerInfo({
        name: "",
        phone: "09022434392",
        address: "Surulere, Lagos, Nigeria",
        quantity: 1,
      });
      onClose();
    } catch (error) {
      closeAlert();
      console.error(error);
      await showErrorAlert(
        "Order Failed",
        "There was a problem processing your order. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-tertiary rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            role="dialog"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-custom">
                Order {product.name}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary rounded-md p-1"
              >
                <FontAwesomeIcon icon={faTimes} className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 border-b border-gray-200 flex items-center space-x-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-custom">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="text-lg font-bold text-primary">
                  {product.price.toLocaleString("en-NG", {
                    style: "currency",
                    currency: "NGN",
                  })}
                </p>
              </div>
            </div>

            <form onSubmit={onSubmitForm} className="p-6">
              <div className="mb-4">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-custom mb-2"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  value={customerInfo.quantity}
                  onChange={handleQuantityChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="customer-name"
                  className="block text-sm font-medium text-custom mb-2"
                >
                  <FontAwesomeIcon icon={faUser} className="h-4 w-4 mr-2" />{" "}
                  Full Name *
                </label>
                <input
                  type="text"
                  id="customer-name"
                  name="name"
                  value={customerInfo.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="customer-phone"
                  className="block text-sm font-medium text-custom mb-2"
                >
                  <FontAwesomeIcon icon={faPhone} className="h-4 w-4 mr-2" />{" "}
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="customer-phone"
                  name="phone"
                  value={customerInfo.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="09022434392"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="customer-address"
                  className="block text-sm font-medium text-custom mb-2"
                >
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="h-4 w-4 mr-2"
                  />{" "}
                  Delivery Address *
                </label>
                <textarea
                  id="customer-address"
                  name="address"
                  value={customerInfo.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary resize-vertical"
                  placeholder="Surulere, Lagos, Nigeria"
                  required
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-md mb-6 flex justify-between items-center text-lg font-semibold">
                <span className="text-custom">Total:</span>
                <span className="text-primary">{calculateTotal()}</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-red-600 disabled:bg-gray-400 text-tertiary font-semibold py-3 px-6 rounded-md transition-colors duration-200 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <FontAwesomeIcon icon={faShoppingCart} className="h-4 w-4" />
                <span>{isSubmitting ? "Processing..." : "Place Order"}</span>
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default OrderModal;
