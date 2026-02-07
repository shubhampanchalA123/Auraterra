"use client";


import Image from "next/image";
import Header from "@/components/layout/header/Header";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import HomeProductSlider from "@/components/products/HomeProductSlider";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);


  const features = [
    {
      title: "ISO Certified Manufacturing",
      desc: "We follow strict quality standards to ensure consistent and reliable plastic granules.",
    },
    {
      title: "Consistent Product Quality",
      desc: "Uniform size, strength and color maintained across every batch.",
    },
    {
      title: "Bulk Supply Capability",
      desc: "Large-scale production capacity to fulfill bulk and recurring orders.",
    },
    {
      title: "On-Time Delivery",
      desc: "Strong logistics network ensuring timely delivery across regions.",
    },
  ];


  const products = [
    {
      name: "HDPE Granules",
      desc: "High strength granules suitable for pipes, containers and industrial applications.",
      uses: ["Pipes", "Containers", "Crates"],
    },
    {
      name: "LDPE Granules",
      desc: "Flexible and durable granules used in films, packaging and plastic bags.",
      uses: ["Packaging Films", "Bags", "Sheets"],
    },
    {
      name: "PP Granules",
      desc: "Lightweight and rigid granules ideal for automotive and household products.",
      uses: ["Automotive", "Household Items", "Injection Molding"],
    },
    {
      name: "Recycled Granules",
      desc: "Eco-friendly recycled granules for sustainable manufacturing solutions.",
      uses: ["Industrial Products", "Molding", "Eco Packaging"],
    },
  ];

  const reviews = [
    {
      name: "Jerremy M.",
      role: "Regular Customer",
      rating: 4.7,
      image: "/images/customer1.jpg",
      description:
        "Donec at pharetra erat. Suspendisse vitae varius ipsum. Nam elementum lectus eu enim rutrum, id ultrices mauris viverra. Vivamus sodales condimentum eros, in tempus magna facilisis sit amet.",
    },
    {
      name: "Alex T.",
      role: "Regular Customer",
      rating: 5,
      image: "/images/customer2.jpg",
      description:
        "Phasellus nec volutpat eros. Morbi dignissim nulla eget ipsum porta, a pellentesque odio sodales. Integer at lacinia dolor. Donec varius, sem id molestie feugiat.",
    },
    {
      name: "Miriam G.",
      role: "Regular Customer",
      rating: 5,
      image: "/images/customer3.jpg",
      description:
        "Suspendisse vitae varius ipsum. Nam elementum lectus eu enim rutrum, id ultrices mauris viverra. Vivamus sodales condimentum eros, in tempus magna facilisis sit amet.",
    },
  ];


  const Counter = ({ value }: { value: number }) => {
    const motionValue = useMotionValue(0);

    const rounded = useTransform(motionValue, latest =>
      Math.round(latest)
    );

    useEffect(() => {
      const controls = animate(motionValue, value, {
        duration: 2.2,
        ease: "easeOut",
      });

      return controls.stop;
    }, [value]);

    return <motion.span>{rounded}</motion.span>;
  };


  // ⭐ STAR COMPONENT
  const Stars = ({ rating = 0 }) => {
    const fullStars = Math.floor(rating);
    return (
      <div className="flex justify-center gap-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-lg ${i < fullStars ? "text-yellow-400" : "text-gray-300"
              }`}
          >
            ★
          </span>
        ))}
        <span className="ml-2 text-sm text-gray-600">{rating}</span>
      </div>
    );
  };


  return (
    <>

      <Header />

      {/* hero section start */}
      <section className="relative h-[85vh] w-full">

        {/* BACKGROUND IMAGE */}
        <Image
          src="/images/herobackground.png" // granules / factory image
          alt="Plastic Granules Manufacturing"
          fill
          priority
          className="object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4">
          <div className="max-w-2xl text-white">

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Empowering Industries with <br />
              <span className="text-blue-400">High Quality Plastic Granules</span>
            </h1>

            <p className="mt-6 text-lg text-gray-200">
              Trusted manufacturer & supplier of HDPE, LDPE, PP and recycled
              plastic granules for industrial applications worldwide.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/products"
                className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-md font-semibold"
              >
                View Products
              </a>

              <a
                href="https://wa.me/917042997771?text=Hello%20Auroterra%20Energy,%20I%20want%20to%20get%20a%20quote%20for%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white hover:bg-white hover:text-black transition px-6 py-3 rounded-md font-semibold"
              >
                Get Quote
              </a>

            </div>

          </div>
        </div>
      </section>



      <section className="bg-gray-50 pt-14">
        <div className="max-w-7xl mx-auto px-4">

          {/* HEADING */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Why Choose Us
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Trusted manufacturer & supplier delivering high-quality plastic
              granules with consistency, reliability and excellence.
            </p>
          </div>

          {/* CARDS */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition duration-300 text-center"
              >
                {/* ICON */}
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl font-bold">
                  ✓
                </div>

                {/* TITLE */}
                <h3 className="mt-6 text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>







      {/* ================= ADVANCED STATS SECTION ================= */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">

        {/* Animated background blur */}
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full"
        />

        <motion.div
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4">

          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Auroterra in Numbers
            </h2>
            <p className="mt-4 text-gray-300 text-lg">
              Our growth, capability and trust — reflected in numbers
            </p>
          </motion.div>

          {/* STATS GRID */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {[
              { number: 10, suffix: "+", label: "Years of Industry Experience" },
              { number: 50, suffix: "+", label: "Polymer Grades Available" },
              { number: 300, suffix: "+", label: "Industrial Clients Served" },
              { number: 6, suffix: "+", label: "Industries We Supply" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                whileHover={{ y: -12, scale: 1.05 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 text-center shadow-xl"
              >
                {/* NUMBER */}
                <div className="text-5xl font-bold text-blue-400">
                  <Counter value={item.number} />
                  {item.suffix}
                </div>

                {/* LABEL */}
                <p className="mt-4 text-gray-300 text-sm tracking-wide uppercase">
                  {item.label}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>
      {/* ================= END STATS SECTION ================= */}



      {/* customer ratings */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">

          {/* HEADING */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-gray-600">
              Trusted by long-term industrial and commercial clients
            </p>
          </div>




          {/* SLIDER */}
          <div className="mt-14 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg p-10 max-w-4xl mx-auto text-center"
              >
                {/* IMAGE */}
                <div className="flex justify-center">
                  <Image
                    src={reviews[index].image}
                    alt={reviews[index].name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                </div>

                {/* STARS */}
                <div className="mt-4">
                  <Stars rating={reviews[index].rating} />
                </div>

                {/* DESCRIPTION */}
                <p className="mt-6 text-gray-700 text-lg leading-relaxed">
                  “{reviews[index].description}”
                </p>

                {/* NAME */}
                <div className="mt-8">
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {reviews[index].name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {reviews[index].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>



      {/* ================= MANUFACTURING PROCESS ================= */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">

          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Manufacturing Process
            </h2>
            <p className="mt-4 text-gray-300 text-lg">
              Every stage is carefully monitored to deliver consistent,
              high-performance plastic granules
            </p>
          </motion.div>

          {/* PROCESS GRID */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

            {[
              {
                step: "01",
                title: "Raw Material Selection",
                desc: "Premium-grade polymers sourced from trusted suppliers.",
                img: "/images/process-1.png",
              },
              {
                step: "02",
                title: "Compounding & Processing",
                desc: "Advanced machines ensure precise melting and blending.",
                img: "/images/process-2.png",
              },
              {
                step: "03",
                title: "Quality Testing",
                desc: "Strict checks for strength, color and performance.",
                img: "/images/process-3.png",
              },
              {
                step: "04",
                title: "Packaging",
                desc: "Secure packaging to protect material quality.",
                img: "/images/process-4.png",
              },
              {
                step: "05",
                title: "Dispatch & Logistics",
                desc: "Efficient logistics ensure on-time delivery.",
                img: "/images/process-5.png",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                whileHover={{ y: -12, scale: 1.05 }}
                className="group bg-gray-800 border border-white/10 rounded-2xl shadow-xl overflow-hidden"
              >
                {/* IMAGE – SQUARE */}
                <div className="relative w-full aspect-square overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 relative text-white">

                  {/* STEP BADGE */}
                  <div className="absolute -top-6 left-6 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-lg">
                    {item.step}
                  </div>

                  <h3 className="mt-6 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>
      {/* ================= END MANUFACTURING PROCESS ================= */}







      <section className="bg-gray-50 py-6">
        <div className="max-w-7xl mx-auto px-4">



          <HomeProductSlider />


          {/* FINAL CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center bg-gray-800 text-white py-14 rounded-2xl"
          >
            <h2 className="text-3xl font-bold">
              Looking for Bulk Orders or Custom Grades?
            </h2>
            <p className="mt-4 text-blue-100">
              Contact our team today for customized solutions and best pricing.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-6 bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>
          </motion.div>

        </div>
      </section>
    </>
  );
}
