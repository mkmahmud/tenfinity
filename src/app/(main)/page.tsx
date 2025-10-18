"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const colors = [
    { name: "Black", hex: "#111827" },
    { name: "Olive", hex: "#6B8E23" },
    { name: "Sand", hex: "#E6C9A8" },
    { name: "Stone", hex: "#B7C0C7" },
  ];
  const [selectedColor, setSelectedColor] = useState(colors[0].hex);

  return (
    <main>
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left / Copy */}
        <div className="space-y-6">
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
              {colors.map((c) => (
                <button
                  key={c.hex}
                  onClick={() => setSelectedColor(c.hex)}
                  aria-label={c.name}
                  className={`w-10 h-10 rounded-full shadow-md transform transition-all ring-2 ${selectedColor === c.hex ? "ring-black scale-105" : "ring-transparent hover:scale-105"
                    }`}
                  style={{ backgroundColor: c.hex }}
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
            className="rounded-2xl overflow-hidden h-[520px] bg-gradient-to-br from-white to-gray-100 flex items-center justify-center transition-all relative"
            style={{ boxShadow: "0 20px 50px rgba(15,23,42,0.12)" }}
          >
            {/* decorative color accent */}
            <div
              className="absolute -left-10 -top-10 w-56 h-56 rounded-full opacity-30 blur-3xl transition-colors duration-300 pointer-events-none"
              style={{ backgroundColor: selectedColor }}
            />

            <div className="relative w-full max-w-3xl mx-auto p-6">
              {/* Layout: vertical thumbnails (desktop) + main card */}
              <div className="flex items-start gap-6">
                {/* Vertical thumbnails for desktop */}
                <div className="hidden md:flex flex-col gap-3">
                  <label
                    htmlFor="alt-1"
                    className="w-20 h-28 rounded-lg bg-white border p-1 flex items-center justify-center text-xs text-gray-600 shadow-sm cursor-pointer transition-transform hover:scale-105 relative"
                    aria-label="Select image 1"
                  >
                    <Image src="/images/1.jpg" alt="Thumb 1" fill className="object-cover rounded-sm" />
                  </label>
                  <label
                    htmlFor="alt-2"
                    className="w-20 h-28 rounded-lg bg-white border p-1 flex items-center justify-center text-xs text-gray-600 shadow-sm cursor-pointer transition-transform hover:scale-105 relative"
                    aria-label="Select image 2"
                  >
                    <Image src="/images/2.jpg" alt="Thumb 2" fill className="object-cover rounded-sm" />
                  </label>
                  <label
                    htmlFor="alt-3"
                    className="w-20 h-28 rounded-lg bg-white border p-1 flex items-center justify-center text-xs text-gray-600 shadow-sm cursor-pointer transition-transform hover:scale-105 relative"
                    aria-label="Select image 3"
                  >
                    <Image src="/images/3.jpg" alt="Thumb 3" fill className="object-cover rounded-sm" />
                  </label>
                </div>

                {/* Main visual card */}
                <div className="flex-1 relative">
                  <div className="relative w-full h-[420px] rounded-xl border border-gray-200 bg-white overflow-hidden">
                    {/* keyboard-accessible radios (CSS-only toggle) */}
                    <div className="sr-only">
                      <input className="peer/alt1" type="radio" id="alt-1" name="alt-hero" defaultChecked />
                      <input className="peer/alt2" type="radio" id="alt-2" name="alt-hero" />
                      <input className="peer/alt3" type="radio" id="alt-3" name="alt-hero" />
                    </div>

                    {/* Image layers */}
                    <div className="absolute inset-0 transition-opacity duration-500 opacity-0 peer-checked/alt1:opacity-100">
                      <Image
                        src="/images/1.jpg"
                        alt="Alternate hero 1"
                        fill
                        className="w-full h-full object-cover transition-transform duration-700 transform hover:scale-105"
                      />
                    </div>

                    <div className="absolute inset-0 transition-opacity duration-500 opacity-0 peer-checked/alt2:opacity-100">
                      <Image
                        src="/images/2.jpg"
                        alt="Alternate hero 2"
                        fill
                        className="w-full h-full object-cover transition-transform duration-700 transform hover:scale-105"
                      />
                    </div>

                    <div className="absolute inset-0 transition-opacity duration-500  peer-checked/alt3:opacity-100">
                      <Image
                        src="/images/3.jpg"
                        alt="Alternate hero 3"
                        fill
                        className="w-full h-full object-cover transition-transform duration-700 transform hover:scale-105"
                      />
                    </div>

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
                        className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-md border text-sm shadow-sm hover:scale-105 transition"
                        aria-label="Zoom image"
                      >
                        Zoom
                      </button>
                      <button
                        type="button"
                        className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-md border text-sm shadow-sm hover:scale-105 transition"
                        aria-label="Add to favorites"
                      >
                        ♥
                      </button>
                    </div>

                    {/* Floating product card at bottom-left */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-3 shadow-sm">
                      <div className="text-sm">
                        <div className="text-xs text-gray-500">Classic Tee</div>
                        <div className="font-semibold text-gray-900">$48</div>
                      </div>
                      <button
                        aria-label="Add to cart"
                        className="ml-2 inline-flex items-center px-3 py-1.5 bg-black text-white text-sm rounded-full hover:scale-[1.02] transition"
                      >
                        Add
                      </button>
                    </div>
                  </div>

                  {/* mobile thumbnails row */}
                  <div className="mt-4 flex md:hidden gap-3 justify-center">
                    <label
                      htmlFor="alt-1"
                      className="w-20 h-28 rounded-lg bg-white border p-1 flex items-center justify-center text-xs text-gray-600 shadow-sm cursor-pointer transition-transform hover:scale-105 relative"
                      aria-label="Select image 1"
                    >
                      <Image src="/images/1.jpg" alt="Thumb 1" fill className="object-cover rounded-sm" />
                    </label>
                    <label
                      htmlFor="alt-2"
                      className="w-20 h-28 rounded-lg bg-white border p-1 flex items-center justify-center text-xs text-gray-600 shadow-sm cursor-pointer transition-transform hover:scale-105 relative"
                      aria-label="Select image 2"
                    >
                      <Image src="/images/2.jpg" alt="Thumb 2" fill className="object-cover rounded-sm" />
                    </label>
                    <label
                      htmlFor="alt-3"
                      className="w-20 h-28 rounded-lg bg-white border p-1 flex items-center justify-center text-xs text-gray-600 shadow-sm cursor-pointer transition-transform hover:scale-105 relative"
                      aria-label="Select image 3"
                    >
                      <Image src="/images/3.jpg" alt="Thumb 3" fill className="object-cover rounded-sm" />
                    </label>
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
      </section>

      {/* Placeholder sections to demonstrate scrolling/links */}
      <section id="collections" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">Collections</h2>
              <p className="mt-2 text-gray-600 max-w-xl">
                Curated essentials — elevated basics in refined fabrics. Tap a product to learn more.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 bg-gray-50 border rounded-full px-3 py-1 text-sm text-gray-700">
                <span className="text-xs uppercase tracking-wide text-gray-500">Sort</span>
                <select
                  aria-label="Sort products"
                  className="bg-transparent appearance-none outline-none text-sm"
                  defaultValue="popular"
                >
                  <option value="popular">Popular</option>
                  <option value="new">New arrivals</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              <div className="overflow-x-auto sm:overflow-visible">
                <div className="flex gap-2 items-center">
                  <button className="px-3 py-1 rounded-full bg-black text-white text-sm font-medium shadow hover:opacity-95">
                    All
                  </button>
                  <button className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200">
                    Tops
                  </button>
                  <button className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200">
                    Shirts
                  </button>
                  <button className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200">
                    Pants
                  </button>
                  <button className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200">
                    Outerwear
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Product Card */}
            <article className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition overflow-hidden">
              <Link href="#" className="group block relative">
                <div className="relative aspect-[4/5] bg-gray-50 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/5.jpg"
                    alt="Classic Tee"
                    fill
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-900">Classic Tee</h3>
                  <p className="text-xs text-gray-500 mt-1">Soft cotton, relaxed fit</p>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <span className="w-4 h-4 rounded-full ring-2 ring-white inline-block" style={{ backgroundColor: "#111827" }} />
                        <span className="w-4 h-4 rounded-full ring-2 ring-white inline-block" style={{ backgroundColor: "#6B8E23" }} />
                        <span className="w-4 h-4 rounded-full ring-2 ring-white inline-block" style={{ backgroundColor: "#E6C9A8" }} />
                      </div>
                      <span className="text-sm font-medium text-gray-900">$48</span>
                    </div>

                    <button
                      aria-label="Add Classic Tee to cart"
                      className="inline-flex items-center px-3 py-1.5 bg-black text-white text-sm rounded-full hover:scale-[1.02] transition"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </Link>
            </article>

            {/* Product Card */}
            <article className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition overflow-hidden">
              <Link href="#" className="group block relative">
                <div className="relative aspect-[4/5] bg-gray-50 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/4.jpg"
                    alt="Overshirt"
                    fill
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-900">Overshirt</h3>
                  <p className="text-xs text-gray-500 mt-1">Lightweight layering piece</p>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <span className="w-4 h-4 rounded-full ring-2 ring-white inline-block" style={{ backgroundColor: "#B7C0C7" }} />
                        <span className="w-4 h-4 rounded-full ring-2 ring-white inline-block" style={{ backgroundColor: "#6B8E23" }} />
                      </div>
                      <span className="text-sm font-medium text-gray-900">$128</span>
                    </div>

                    <button
                      aria-label="Add Overshirt to cart"
                      className="inline-flex items-center px-3 py-1.5 bg-black text-white text-sm rounded-full hover:scale-[1.02] transition"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </Link>
            </article>

            {/* Product Card */}
            <article className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition overflow-hidden">
              <Link href="#" className="group block relative">
                <div className="relative aspect-[4/5] bg-gray-50 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/3.jpg"
                    alt="Wide Pant"
                    fill
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-900">Wide Pant</h3>
                  <p className="text-xs text-gray-500 mt-1">Relaxed silhouette, premium weave</p>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <span className="w-4 h-4 rounded-full ring-2 ring-white inline-block" style={{ backgroundColor: "#111827" }} />
                        <span className="w-4 h-4 rounded-full ring-2 ring-white inline-block" style={{ backgroundColor: "#B7C0C7" }} />
                      </div>
                      <span className="text-sm font-medium text-gray-900">$138</span>
                    </div>

                    <button
                      aria-label="Add Wide Pant to cart"
                      className="inline-flex items-center px-3 py-1.5 bg-black text-white text-sm rounded-full hover:scale-[1.02] transition"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </Link>
            </article>

            {/* Product Card */}
            <article className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition overflow-hidden">
              <Link href="#" className="group block relative">
                <div className="relative aspect-[4/5] bg-gray-50 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/1.jpg"
                    alt="Minimal Coat"
                    fill
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-900">Minimal Coat</h3>
                  <p className="text-xs text-gray-500 mt-1">Timeless cut, structured drape</p>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <span className="w-4 h-4 rounded-full ring-2 ring-white inline-block" style={{ backgroundColor: "#6B8E23" }} />
                        <span className="w-4 h-4 rounded-full ring-2 ring-white inline-block" style={{ backgroundColor: "#E6C9A8" }} />
                      </div>
                      <span className="text-sm font-medium text-gray-900">$248</span>
                    </div>

                    <button
                      aria-label="Add Minimal Coat to cart"
                      className="inline-flex items-center px-3 py-1.5 bg-black text-white text-sm rounded-full hover:scale-[1.02] transition"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </Link>
            </article>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-medium hover:shadow-lg transition"
            >
              Browse full collection
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      {/* Look Book */}
      <section id="lookbook" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Lookbook</h2>
              <p className="mt-2 text-gray-600 max-w-xl">
                Editorial photos & styling inspiration — curated shots to show how our pieces live in real life.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <nav aria-label="Lookbook filters" className="overflow-x-auto">
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 rounded-full bg-black text-white text-sm font-medium shadow hover:opacity-95">
                    All
                  </button>
                  <button className="px-3 py-1.5 rounded-full text-sm bg-white border text-gray-700 hover:bg-gray-100">
                    Street
                  </button>
                  <button className="px-3 py-1.5 rounded-full text-sm bg-white border text-gray-700 hover:bg-gray-100">
                    Studio
                  </button>
                  <button className="px-3 py-1.5 rounded-full text-sm bg-white border text-gray-700 hover:bg-gray-100">
                    Editorial
                  </button>
                  <button className="px-3 py-1.5 rounded-full text-sm bg-white border text-gray-700 hover:bg-gray-100">
                    Campaign
                  </button>
                </div>
              </nav>
            </div>
          </div>

          {/* Featured + Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Featured hero */}
            <article className="lg:col-span-2 rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm">
              <div className="relative h-80 sm:h-[420px]">
                <div className="absolute inset-0">
                  <Image src="/images/2.jpg" alt="Featured look" fill className="object-cover w-full h-full" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-90 flex items-end">
                  <div className="p-6">
                    <span className="inline-block bg-white/10 text-white text-xs px-3 py-1 rounded-full mb-2">Featured</span>
                    <h3 className="text-white text-2xl font-semibold">Summer Structured Tee — Styled</h3>
                    <p className="text-sm text-white/90 mt-2 max-w-lg">A versatile wardrobe staple, layered and shot on location.</p>

                    <div className="mt-4 flex items-center gap-3">
                      <Link
                        href="#"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-sm font-medium shadow hover:scale-[1.02] transition"
                      >
                        View Story
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>

                      <button
                        aria-label="Save look"
                        className="px-3 py-2 rounded-full bg-white/80 backdrop-blur-sm text-sm"
                      >
                        ♥ Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Masonry-like grid (2x stacked on mobile) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <article className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm">
                <div className="relative aspect-[4/5]">
                  <Image src="/images/1.jpg" alt="Look 1" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/20 flex items-end p-4">
                    <div>
                      <h4 className="text-white font-semibold text-sm">Overshirt Layer</h4>
                      <p className="text-white/90 text-xs mt-1">Casual layering, urban tones</p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm">
                <div className="relative aspect-[4/5]">
                  <Image src="/images/4.jpg" alt="Look 2" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 flex items-end p-4">
                    <div>
                      <h4 className="text-white font-semibold text-sm">Minimal Coat</h4>
                      <p className="text-white/90 text-xs mt-1">Tailored, everyday polish</p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm sm:col-span-2">
                <div className="relative aspect-[3/2]">
                  <Image src="/images/5.jpg" alt="Look 3" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/20 flex items-end p-4">
                    <div>
                      <h4 className="text-white font-semibold text-sm">Wide Pant Ensemble</h4>
                      <p className="text-white/90 text-xs mt-1">Relaxed silhouette, refined details</p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-medium hover:shadow-lg transition"
            >
              Browse full lookbook
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/*  */}
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
    </main>
  );
}
