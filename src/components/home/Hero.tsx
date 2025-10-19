import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const colors = [
    { name: "Black", hex: "#111827" },
    { name: "Olive", hex: "#6B8E23" },
    { name: "Sand", hex: "#E6C9A8" },
    { name: "Stone", hex: "#B7C0C7" },
];
const images = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"];

export default function Hero() {
    const [selectedImage, setSelectedImage] = useState<number>(0);


    const [selectedColor, setSelectedColor] = useState(colors[0].hex);


    function generateRandomIndex(max: number) {
        return Math.floor(Math.random() * max);
    }



    setTimeout(() => {
        setSelectedColor(colors[generateRandomIndex(colors.length)].hex);
    }, 1000);


    return (
        <section
            className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center will-change-transform"
            aria-hidden={false}
        >
            {/* Left / Copy */}
            <div className="space-y-6 animate-hero" style={{ animationDelay: "80ms" }}>
                <div className="inline-flex items-center gap-3 bg-black text-white px-3 py-1 rounded-full text-sm font-medium w-max">
                    NEW DROP
                    <span className="bg-white/10 px-2 py-0.5 rounded text-xs">Spring 25</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                    TENFINITY
                    <br />
                    Minimal. Crafted. Eternal.
                </h1>

                <p className="text-gray-600 max-w-xl">
                    Modern essentials built to last — premium materials, timeless silhouettes.
                    Explore the new collection with elevated basics designed for real life.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                    <button
                        onClick={() => {
                            const el = document.getElementById("collections");
                            el?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full font-semibold shadow hover:scale-[1.02] transform transition"
                    >
                        Shop Collection
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>

                    <Link
                        href="#lookbook"
                        className="text-sm text-gray-700 hover:underline underline-offset-4 decoration-2 decoration-transparent hover:decoration-black transition"
                    >
                        Explore Lookbook
                    </Link>
                </div>

                <div className="pt-2">
                    <div className="text-xs uppercase text-gray-500 tracking-wide mb-2">Choose color</div>
                    <div className="flex items-center gap-3">
                        {colors.map((c, i) => (
                            <button
                                key={c.hex}
                                onClick={() => setSelectedColor(c.hex)}
                                aria-label={c.name}
                                className={`w-10 h-10 rounded-full shadow-md transform transition-all ring-2 ${selectedColor === c.hex ? "ring-black scale-105" : "ring-transparent hover:scale-105"
                                    } animate-thumb`}
                                style={{ backgroundColor: c.hex, animationDelay: `${i * 80}ms` }}
                            />
                        ))}
                        <div className="ml-4 text-sm text-gray-600">Selected: <span className="font-medium">{colors.find(cc => cc.hex === selectedColor)?.name}</span></div>
                    </div>
                </div>

                <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
                    </svg>
                    <span>Free shipping over $100 • Easy returns • Ethically made</span>
                </div>
            </div>

            {/* Right / Visual (alternate UI for images) */}
            <div className="relative">
                <div
                    className="rounded-2xl overflow-hidden h-[520px] bg-gradient-to-br from-white to-gray-100 flex items-center justify-center transition-all relative perspective-1000"
                    style={{ boxShadow: "0 20px 50px rgba(15,23,42,0.12)" }}
                >
                    {/* decorative color accent (subtle floating) */}
                    <div
                        className="absolute -left-10 -top-10 w-56 h-56 rounded-full opacity-30 blur-3xl transition-colors duration-300 pointer-events-none floating-accent"
                        style={{ backgroundColor: selectedColor }}
                        aria-hidden
                    />

                    <div className="relative w-full max-w-3xl mx-auto p-6">
                        {/* Layout: vertical thumbnails (desktop) + main card */}
                        <div className="flex items-start gap-6">
                            {/* Vertical thumbnails for desktop */}
                            <div className="hidden md:flex flex-col gap-3">
                                {images.map((src, idx) => (
                                    <button
                                        key={src}
                                        type="button"
                                        onClick={() => setSelectedImage(idx)}
                                        aria-pressed={selectedImage === idx}
                                        className="w-20 h-28 rounded-lg bg-white border p-1 flex items-center justify-center text-xs text-gray-600 shadow-sm cursor-pointer transition-transform hover:scale-105 relative transform-gpu animate-thumb"
                                        style={{ animationDelay: `${120 + idx * 80}ms` }}
                                    >
                                        <div className="w-full h-full relative transform-gpu hover:translate-y-[-4px] transition-transform duration-500">
                                            <Image src={src} alt={`Thumb ${idx + 1}`} fill className="object-cover rounded-sm" />
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* Main visual card */}
                            <div className="flex-1 relative group">
                                <div className="relative w-full h-[420px] rounded-xl border border-gray-200 bg-white overflow-hidden transform-gpu transition-all duration-700 group-hover:scale-[1.01]">
                                    {/* Image layers with animated entrance + subtle parallax on hover */}
                                    {images.map((src, i) => (
                                        <div
                                            key={src}
                                            className={`absolute inset-0 transition-opacity duration-500 ${selectedImage === i ? "opacity-100" : "opacity-0"} layer-anim layer-${i + 1}`}
                                        >
                                            <div className={`w-full h-full relative ${i === 0 ? "perspective-1000" : ""} transform-gpu transition-transform duration-700 ${i === 0 ? "group-hover:translate-y-[-6px] group-hover:scale-[1.02]" : i === 1 ? "group-hover:translate-y-[-8px] group-hover:scale-[1.025]" : "group-hover:translate-y-[-10px] group-hover:scale-[1.03]"}`}>
                                                <Image
                                                    src={src}
                                                    alt={`Alternate hero ${i + 1}`}
                                                    fill
                                                    className="w-full h-full object-cover transform-gpu"
                                                />
                                            </div>
                                        </div>
                                    ))}

                                    {/* subtle multiply overlay to preview color */}
                                    <div
                                        aria-hidden
                                        className="absolute inset-0 mix-blend-multiply opacity-10 pointer-events-none transition-colors duration-300"
                                        style={{ backgroundColor: selectedColor }}
                                    />

                                    {/* Action buttons overlay */}
                                    <div className="absolute top-4 right-4 flex items-center gap-2">
                                        <button
                                            type="button"
                                            className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-md border text-sm shadow-sm hover:scale-105 transition transform-gpu"
                                            aria-label="Zoom image"
                                        >
                                            Zoom
                                        </button>
                                        <button
                                            type="button"
                                            className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-md border text-sm shadow-sm hover:scale-105 transition transform-gpu"
                                            aria-label="Add to favorites"
                                        >
                                            ♥
                                        </button>
                                    </div>

                                    {/* Floating product card at bottom-left */}
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-3 shadow-sm transform-gpu transition-all hover:translate-y-[-3px]">
                                        <div className="text-sm">
                                            <div className="text-xs text-gray-500">Classic Tee</div>
                                            <div className="font-semibold text-gray-900">$48</div>
                                        </div>
                                        <button
                                            aria-label="Add to cart"
                                            className="ml-2 inline-flex items-center px-3 py-1.5 bg-black text-white text-sm rounded-full hover:scale-[1.02] transition transform-gpu"
                                        >
                                            Add
                                        </button>
                                    </div>
                                </div>

                                {/* mobile thumbnails row */}
                                <div className="mt-4 flex md:hidden gap-3 justify-center">
                                    {images.map((src, idx) => (
                                        <button
                                            key={src}
                                            type="button"
                                            onClick={() => setSelectedImage(idx)}
                                            aria-pressed={selectedImage === idx}
                                            className="w-20 h-28 rounded-lg bg-white border p-1 flex items-center justify-center text-xs text-gray-600 shadow-sm cursor-pointer transition-transform hover:scale-105 relative animate-thumb"
                                            style={{ animationDelay: `${140 + idx * 80}ms` }}
                                        >
                                            <div className="w-full h-full relative transform-gpu hover:translate-y-[-4px] transition-transform duration-500">
                                                <Image src={src} alt={`Thumb ${idx + 1}`} fill className="object-cover rounded-sm" />
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll hint */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                    <div className="text-xs text-gray-500">Scroll to discover</div>
                    <div className="mt-2 animate-bounce">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Inline scoped animations so this component ships with subtle modern motion */}
            <style jsx>{`
            .animate-hero {
                opacity: 0;
                transform: translateY(10px);
                animation: heroIn 560ms cubic-bezier(.2,.9,.2,1) forwards;
            }
            @keyframes heroIn {
                to { opacity: 1; transform: translateY(0); }
            }

            .animate-thumb {
                opacity: 0;
                transform: translateY(8px) scale(.98);
                animation: thumbIn 480ms cubic-bezier(.2,.9,.2,1) forwards;
            }
            @keyframes thumbIn {
                to { opacity: 1; transform: translateY(0) scale(1); }
            }

            .floating-accent {
                animation: floatAccent 4.8s ease-in-out infinite;
            }
            @keyframes floatAccent {
                0% { transform: translateY(0) scale(1) rotate(0deg); opacity: .32; }
                50% { transform: translateY(-10px) scale(1.03) rotate(2deg); opacity: .36; }
                100% { transform: translateY(0) scale(1) rotate(0deg); opacity: .32; }
            }

            .layer-anim {
                opacity: 0;
                transform: translateY(6px) scale(0.995);
                animation: layerIn 600ms cubic-bezier(.22,.9,.17,1) forwards;
            }
            .layer-1 { animation-delay: 140ms; }
            .layer-2 { animation-delay: 240ms; }
            .layer-3 { animation-delay: 320ms; }
            @keyframes layerIn {
                to { opacity: 1; transform: translateY(0) scale(1); }
            }

            /* subtle hardware-accelerated perspective helpers */
            .perspective-1000 { perspective: 1000px; }
            .transform-gpu { transform: translateZ(0); will-change: transform, opacity; }

            `}</style>
        </section>
    );
}