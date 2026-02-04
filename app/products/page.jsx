"use client";

import Header from "@/components/layout/header/Header";
import AllProducts from "@/components/products/AllProduct";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <div className="bg-gray-900 text-white py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our Product Range
        </h1>
        <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
          High-performance polymer solutions for industrial, automotive,
          electrical, and commercial applications.
        </p>
      </div>

      {/* PRODUCTS */}
      {products.map((product, index) => (
        <AllProducts
          key={product.id}
          product={product}
          reverse={index % 2 !== 0}
        />
      ))}
    </>
  );
}
