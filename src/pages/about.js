"use client"

import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import TeamMemberCard from "../components/TeamMemberCard"
import { companyInfo, teamMembers } from "../lib/demoData"

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-custom to-amber-900 text-tertiary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">About {companyInfo.name}</h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed text-pretty">
              {companyInfo.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission and core values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mission details */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-custom mb-6 text-balance">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed text-pretty">{companyInfo.mission}</p>

              {/* Company values list */}
              <div className="space-y-4">
                {companyInfo.values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="h-6 w-6 text-primary mt-0.5 flex-shrink-0"
                      aria-label="Check mark"
                    />
                    <p className="text-gray-700 leading-relaxed">{value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="\Brew Hez.png"
                  alt="Coffee farmer working in a sustainable coffee plantation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team showcase */}
      <section className="py-20 bg-tertiary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-custom mb-4 text-balance">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Our passionate team of coffee experts is dedicated to bringing you the finest coffee experience from bean
              to cup.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company stats */}
      <section className="py-20 bg-custom text-tertiary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Our Impact</h2>
            <p className="text-xl max-w-2xl mx-auto text-pretty">
              Since 2010, we've been making a difference in the coffee industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[ 
              { number: "50+", label: "Coffee Origins" },
              { number: "10,000+", label: "Happy Customers" },
              { number: "100+", label: "Partner Farmers" },
              { number: "14", label: "Years of Excellence" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">{stat.number}</div>
                <div className="text-lg font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
