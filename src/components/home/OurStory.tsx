"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const colors = [
    { name: "Black", hex: "#111827" },
    { name: "Olive", hex: "#6B8E23" },
    { name: "Sand", hex: "#E6C9A8" },
    { name: "Stone", hex: "#B7C0C7" },
];
export default function OurStory() {
    const [selectedColor, setSelectedColor] = useState(colors[0].hex);


    function generateRandomIndex(max: number) {
        return Math.floor(Math.random() * max);
    }



    setTimeout(() => {
        setSelectedColor(colors[generateRandomIndex(colors.length)].hex);
    }, 2000);


    return (
        <section id="brand" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-3 bg-black text-white px-3 py-1 rounded-full text-sm font-medium w-max">
                            OUR STORY
                            <span className="bg-white/10 px-2 py-0.5 rounded text-xs">Since 2021</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                            TENFINITY — Crafted for the everyday
                        </h2>

                        <p className="text-gray-600 max-w-xl">
                            We make elevated essentials with a focus on fit, fabric and longevity. Thoughtful design, honest
                            materials, and refined details — staples that stay in rotation season after season.
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                            <Link
                                href="#"
                                className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full font-semibold shadow hover:scale-[1.02] transform transition"
                                aria-label="Shop TENFINITY"
                            >
                                Shop Now
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>

                            <Link
                                href="#brand-story"
                                className="text-sm text-gray-700 hover:underline underline-offset-4 decoration-2 decoration-transparent hover:decoration-black transition"
                            >
                                Read our story
                            </Link>
                        </div>

                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-700">1</div>
                                <div>
                                    <div className="text-xs text-gray-500">Design</div>
                                    <div className="font-medium text-gray-900">Timeless silhouettes</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-700">2</div>
                                <div>
                                    <div className="text-xs text-gray-500">Materials</div>
                                    <div className="font-medium text-gray-900">Premium & durable</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-700">3</div>
                                <div>
                                    <div className="text-xs text-gray-500">Ethics</div>
                                    <div className="font-medium text-gray-900">Responsible production</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
                        <div className="relative h-72 sm:h-[360px]">
                            <Image src="/images/1.jpg" alt="TENFINITY clothing" fill className="object-cover w-full h-full" />
                            <div
                                className="absolute inset-0 mix-blend-multiply opacity-10 pointer-events-none transition-colors duration-300"
                                style={{ backgroundColor: selectedColor }}
                                aria-hidden
                            />
                        </div>

                        <div className="p-5 sm:p-6 flex items-center justify-between border-t border-gray-100 bg-white">
                            <div>
                                <div className="text-xs text-gray-500">Featured Product</div>
                                <div className="font-semibold text-gray-900">The Core Tee — $48</div>
                            </div>

                            <div className="flex items-center gap-3">
                                <button className="px-3 py-2 bg-white border rounded-md text-sm hover:scale-[1.02] transition" aria-label="View product">
                                    View
                                </button>
                                <button className="px-4 py-2 bg-black text-white text-sm rounded-full hover:opacity-95 transition" aria-label="Add featured to cart">
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="brand-story" className="mt-12 prose prose-sm text-gray-700 max-w-none">
                    <p>
                        TENFINITY started from a simple belief: the clothes you wear every day should be uncomplicated,
                        comfortable, and made to last. We partner with mills and workshops who share our commitment to
                        craft and transparency.
                    </p>
                </div>
            </div>
        </section>
    )
}