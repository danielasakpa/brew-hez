"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-custom text-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FontAwesomeIcon icon={faCoffee} className="h-6 w-6" />
              <span className="text-lg font-bold">Brew Hez.</span>
            </div>
            <p className="text-sm leading-relaxed">
              Serving handcrafted coffee with passion. Every cup is made to brighten your day.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faPhone} className="h-4 w-4" />
                <span>+234 902 243 4392</span>
              </div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
                <span>hello@brewhez.ng</span>
              </div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="h-4 w-4" />
                <span>12 Aroma Lane, Surulere, Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/brewhez"
                className="hover:text-secondary"
              >
                <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/brewhez"
                className="hover:text-secondary"
              >
                <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/brewhez"
                className="hover:text-secondary"
              >
                <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 Brew Hez. Made with love in Lagos.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
