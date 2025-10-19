import Image from "next/image";
import Link from "next/link";

export default function TopCategories() {
    return (
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
    );
}