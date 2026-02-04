"use client";

import { useState } from "react";
import Header from "@/components/layout/header/Header";

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // ✅ EMAIL (MAILTO) SUBMIT — NO BACKEND
    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = "New Enquiry - Auroterra Energy";
        const body = `
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}

Message:
${form.message}
    `;

        window.location.href = `mailto:rajfactsps@gmail.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
    };

    return (
        <>
            <Header />

            <section className="bg-gray-50">

                {/* HERO */}
                <div className="bg-gray-900 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            Contact Auroterra Energy
                        </h1>
                        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
                            Get in touch with our team for product inquiries, technical support,
                            or business collaborations.
                        </p>
                    </div>
                </div>

                {/* CONTACT INFO */}
                <div className="py-20">
                    <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div className="bg-white p-8 rounded-xl shadow text-center">
                            <h3 className="text-lg font-semibold text-gray-800">📍 Address</h3>
                            <p className="mt-3 text-gray-600">
                                Auroterra Energy Pvt Ltd<br />
                                New Delhi, India
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow text-center">
                            <h3 className="text-lg font-semibold text-gray-800">📧 Email</h3>
                            <p className="mt-3 text-gray-600">
                                sales@auroterraenergy.com<br />
                                support@auroterraenergy.com
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow text-center">
                            <h3 className="text-lg font-semibold text-gray-800">📞 Phone</h3>
                            <p className="mt-3 text-gray-600">
                                +91 7042997771<br />
                                Mon – Sun| 7:00 AM – 9:00 PM
                            </p>
                        </div>

                    </div>
                </div>

                {/* MAP + FORM */}
                <div className="pb-20">
                    <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">

                        {/* MAP */}
                        <div className="w-full h-[420px] rounded-xl overflow-hidden shadow">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13219.92209835935!2d-118.4011701!3d34.0700135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bbe4659bc7ed%3A0xf08801746af568dc!2sRodeo%20Dr%2C%20California%2C%20USA!5e0!3m2!1sen!2sin!4v1770198347227!5m2!1sen!2sin"
                                className="w-full h-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* FORM */}
                        <div className="bg-white p-10 rounded-xl shadow">
                            <h2 className="text-2xl font-bold text-gray-800">
                                Send Us a Message
                            </h2>
                            <p className="mt-3 text-gray-600">
                                Our team will get back to you within 24 hours.
                            </p>

                            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                />

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                />

                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Your Message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                ></textarea>

                                <button
                                    type="submit"
                                    className="
    w-full 
    bg-gray-900 
    text-white 
    font-semibold 
    py-3 
    rounded-md 
    transition-all 
    duration-300 
    hover:bg-black 
    hover:shadow-lg 
    hover:-translate-y-[1px]
    active:translate-y-0
  "
                                >
                                    Send Message
                                </button>


                            </form>
                        </div>

                    </div>
                </div>

                {/* TRUST CTA */}
                <div className="bg-gray-900 text-white py-14 text-center">
                    <h3 className="text-2xl font-bold">
                        Trusted by Industrial & OEM Clients
                    </h3>
                    <p className="mt-3 text-green-100">
                        Reliable materials • Technical expertise • On-time delivery
                    </p>
                </div>

            </section>
        </>
    );
}
