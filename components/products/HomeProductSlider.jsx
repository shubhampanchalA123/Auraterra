"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const products = [
  {
    title: "PMMA Amber",
    short:
      "Amber tinted acrylic material used for light covers, UV filtering, automotive indicators and safety applications.",
    image: "/images/product1.jpg",
    slug: "pmma-amber",
  },
  {
    title: "PBT Glass Filled 10% Black",
    short:
      "Reinforced engineering plastic offering high strength, dimensional stability and electrical insulation for precision components.",
    image: "/images/product2.jpg",
    slug: "pbt-gf-10-black",
  },
  {
    title: "PC–ABS (Natural)",
    short:
      "Tough and moldable thermoplastic blend ideal for electronic housings, automotive interiors and industrial enclosures.",
    image: "/images/product3.jpeg",
    slug: "pc-abs-natural",
  },
  {
    title: "ABS Glass Filled 20% Natural",
    short:
      "High stiffness ABS material designed for structural, industrial and automotive components requiring dimensional stability.",
    image: "/images/product4.jpeg",
    slug: "abs-gf-20-natural",
  },
];

export default function HomeProductSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const visibleProducts = [
    products[index],
    products[(index + 1) % products.length],
    products[(index + 2) % products.length],
    products[(index + 3) % products.length],
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADING */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800">
            Our Products
          </h2>
          <p className="mt-4 text-gray-600">
            Explore our premium range of industrial plastic materials
          </p>
        </div>

        {/* SLIDER */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleProducts.map((product, i) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              {/* IMAGE */}
              <div className="relative h-40 w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm">
                  {product.short}
                </p>

                <Link
                  href={`/products/${product.slug}`}
                  className="inline-block mt-5 text-blue-600 font-semibold hover:underline"
                >
                  More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
