"use client";

import Image from "next/image";

export default function AboutUsPage() {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gray-100">
                <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col-reverse md:flex-row items-center gap-10">
                    <div className="md:w-1/2">
                        <h1 className="text-5xl font-bold text-gray-900 mb-4">
                            Welcome to <span className="text-black">Tenfinity </span>
                        </h1>
                        <p className="text-gray-700 mb-6">
                            Timeless Bengali elegance meets modern minimalism. Our curated clothing collections are crafted with love, culture, and authenticity in mind.
                        </p>
                    </div>
                    <div className="md:w-1/2 relative h-64 md:h-96">
                        <Image
                            src="/about.jpg"
                            alt="Tenfinity  Hero"
                            fill
                            className="object-cover rounded-3xl"
                        />
                    </div>
                </div>
            </section>

            {/* Brand Story Section */}
            <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 relative h-64 md:h-96">
                    <Image
                        src="/about.jpg"
                        alt="Our Story"
                        fill
                        className="object-cover rounded-3xl"
                    />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Founded in 2023, Tenfinity  began as a small online brand passionate about redefining traditional Bengali attire.
                        Our collections feature handpicked sarees, elegant three-pieces, and modern two-pieces — crafted with attention to detail and timeless style.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Every piece tells a story of tradition, elegance, and modern lifestyle. We strive to bring grace and charm to every wardrobe.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-white py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Mission & Vision</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                🎯
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                            <p className="text-gray-600">
                                To craft high-quality, elegant clothing that celebrates Bengali tradition while keeping modern style in mind.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                👁️
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                            <p className="text-gray-600">
                                To become a leading brand recognized for quality, authenticity, and empowering women to feel confident in their style.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us / Values */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Tenfinity ?</h2>
                <div className="grid md:grid-cols-3 gap-10 text-center">
                    <div className="bg-white shadow-lg rounded-2xl p-8">
                        <div className="text-4xl mb-4">💎</div>
                        <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                        <p className="text-gray-600">
                            We handpick fabrics and ensure every piece meets our high standards.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-2xl p-8">
                        <div className="text-4xl mb-4">❤️</div>
                        <h3 className="text-xl font-semibold mb-2">Passion & Love</h3>
                        <p className="text-gray-600">
                            Every garment is designed with care, inspired by tradition and modern fashion.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-2xl p-8">
                        <div className="text-4xl mb-4">🌿</div>
                        <h3 className="text-xl font-semibold mb-2">Sustainable Practices</h3>
                        <p className="text-gray-600">
                            We aim for eco-friendly methods wherever possible, respecting both nature and culture.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team / Signature Section */}
            <section className="bg-gray-100 py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">From Our Team</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        “Thank you for being part of our journey. We hope Tenfinity  adds a touch of elegance and confidence to your wardrobe. Every order we send carries a piece of our heart.”
                    </p>
                    <p className="text-gray-900 font-semibold">— The Tenfinity  Team</p>
                </div>
            </section>
        </div>
    );
}
