"use client";

import Header from "@/components/layout/header/Header";
import { motion } from "framer-motion";

export default function AboutPage() {
  // 🔹 Reusable animations
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardAnim = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Header />

      <section className="bg-white">
        {/* HERO */}
        <div className="bg-gray-900 text-white py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto px-4 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold">
              About Auroterra Energy Pvt Ltd
            </h1>
            <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
              Powering industries through advanced polymer and chemical solutions.
            </p>
          </motion.div>
        </div>

        {/* WHO WE ARE */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-gray-800">
                Who We Are
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Auroterra Energy Pvt Ltd is a New Delhi-based industrial powerhouse
                dedicated to the polymer and chemical sectors. We specialize in
                sourcing, manufacturing, and compounding advanced materials that
                drive the modern world.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Our materials are used across critical industries—from automotive
                components to life-saving pharmaceutical and medical applications—
                where performance, reliability, and consistency are essential.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-gray-50 p-10 rounded-2xl shadow"
            >
              <ul className="space-y-4 text-gray-700">
                <li>✔ Polymer & Engineering Plastics</li>
                <li>✔ Chemical & Specialty Materials</li>
                <li>✔ Custom Compounding Solutions</li>
                <li>✔ Industrial & OEM Supply</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* WHAT WE DO */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-800 text-center"
            >
              What We Do
            </motion.h2>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                "Material Sourcing",
                "Polymer Manufacturing",
                "Custom Compounding",
                "Application-Specific Solutions",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={cardAnim}
                  whileHover={{ y: -6 }}
                  className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center"
                >
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {item}
                  </h3>
                  <p className="mt-3 text-gray-600 text-sm">
                    Engineered to meet technical, mechanical, and performance
                    requirements across industries.
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* MISSION */}
        <div className="py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto px-4 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800">
              Our Mission
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              To provide sustainable, high-quality polymer solutions that enhance
              the durability, appearance, and functionality of our clients’ end
              products—while contributing to a more responsible industrial future.
            </p>
          </motion.div>
        </div>

        {/* WHY TRUST US */}
        <div className="bg-gray-900 text-white py-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-4 text-center"
          >
            <h2 className="text-3xl font-bold">
              Why Industries Trust Auroterra
            </h2>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-300"
            >
              {[
                "Industry-Focused Expertise",
                "Quality-Driven Processes",
                "Sustainable Material Solutions",
                "Strong OEM & Industrial Understanding",
              ].map((item, i) => (
                <motion.div key={i} variants={cardAnim}>
                  ✔ {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
