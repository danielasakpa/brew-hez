"use client"

import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faLinkedin, faInstagram, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons"

const TeamMemberCard = ({ member }) => {
  const getSocialIcon = (platform) => {
    const icons = {
      twitter: faTwitter,
      linkedin: faLinkedin,
      instagram: faInstagram,
      facebook: faFacebook,
      youtube: faYoutube,
    }
    return icons[platform]
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-tertiary rounded-lg shadow-lg overflow-hidden border border-gray-200"
    >
      {/* Member Photo */}
      <div className="relative h-64 bg-gray-100">
        <img
          src={member.image}
          alt={`${member.name}, ${member.role}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Member Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-custom mb-1">{member.name}</h3>
        <p className="text-primary font-semibold mb-3">{member.role}</p>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 text-pretty">{member.bio}</p>

        {/* Social Media Links */}
        <div className="flex space-x-3">
          {Object.entries(member.social).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom hover:text-primary transition-colors duration-200"
              aria-label={`${member.name}'s ${platform} profile`}
            >
              <FontAwesomeIcon icon={getSocialIcon(platform)} className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default TeamMemberCard
