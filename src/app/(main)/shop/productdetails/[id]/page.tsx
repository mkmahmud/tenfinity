'use client';
import Testimonial from '@/components/home/Testimonial';
import Image from 'next/image';
import React, { useState } from 'react';



type Product = {
    id: string;
    name: string;
    brand: string;
    price: number;
    oldPrice?: number;
    rating: number;
    reviewsCount: number;
    images: string[];
    colors: { name: string; hex: string }[];
    sizes: { label: string; available: boolean }[];
    description: string;
    features: string[];
    materials: string[];
    care: string[];
    shipping: string;
    returns: string;
};

const product: Product = {
    id: 'cloth-001',
    brand: 'HAVEe',
    name: 'Aurora Lightweight Jacket',
    price: 129,
    oldPrice: 189,
    rating: 4.6,
    reviewsCount: 214,
    images: [
        '/images/1.jpg',
        '/images/2.jpg',
        '/images/3.jpg',
        '/images/4.jpg',
    ],
    colors: [
        { name: 'Black', hex: '#0f172a' },
        { name: 'Olive', hex: '#556b2f' },
        { name: 'Sand', hex: '#d6c7a1' },
    ],
    sizes: [
        { label: 'XS', available: true },
        { label: 'S', available: true },
        { label: 'M', available: true },
        { label: 'L', available: true },
        { label: 'XL', available: false },
    ],
    description:
        'A modern, lightweight jacket made for everyday wear: breathable, water-resistant, and refined tailoring for easy layering.',
    features: [
        'Water-resistant finish',
        'Breathable mesh lining',
        'Hidden zip chest pocket',
        'Packable into inner pouch',
    ],
    materials: ['Shell: 100% recycled nylon', 'Lining: 100% polyester'],
    care: ['Machine wash cold', 'Do not bleach', 'Tumble dry low'],
    shipping:
        'Free shipping over $75. Standard shipping 3–7 business days. Express available at checkout.',
    returns: '30-day easy returns from the delivery date.',
};

export default function ProductDetailsPage() {
    const [imgIndex, setImgIndex] = useState(0);
    const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);
    const [wish, setWish] = useState(false);
    const [showSizeGuide, setShowSizeGuide] = useState(false);
    const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
        details: true,
        materials: false,
        care: false,
        shipping: false,
        returns: false,
    });

    function toggleAccordion(key: string) {
        setOpenAccordions((s) => ({ ...s, [key]: !s[key] }));
    }

    function addToCart() {
        if (!selectedSize) {
            // simple inline feedback
            alert('Please select a size.');
            return;
        }
        setAdded(true);
        setTimeout(() => setAdded(false), 1800);
    }

    function toggleWish() {
        setWish((w) => !w);
    }

    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 p-6 sm:p-12">
            <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                    {/* LEFT: Gallery */}
                    <section className="space-y-4">
                        <div className="relative group">
                            <Image
                                src={product.images[imgIndex]}
                                alt={`${product.name} - view ${imgIndex + 1}`}
                                className="w-full h-[480px] object-cover rounded-xl transition-transform duration-300 transform group-hover:scale-105"
                                draggable={false}
                            />
                            <div className="absolute top-3 right-3 flex gap-2">
                                <button
                                    aria-label="previous"
                                    onClick={() => setImgIndex((i) => (i - 1 + product.images.length) % product.images.length)}
                                    className="bg-white/80 hover:bg-white px-3 py-2 rounded-lg shadow-sm"
                                >
                                    ‹
                                </button>
                                <button
                                    aria-label="next"
                                    onClick={() => setImgIndex((i) => (i + 1) % product.images.length)}
                                    className="bg-white/80 hover:bg-white px-3 py-2 rounded-lg shadow-sm"
                                >
                                    ›
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            {product.images.map((img, i) => (
                                <button
                                    key={img}
                                    onClick={() => setImgIndex(i)}
                                    className={`w-20 h-20 rounded-md overflow-hidden border-2 ${i === imgIndex ? 'border-indigo-500' : 'border-transparent'
                                        } focus:outline-none`}
                                >
                                    <Image src={img} alt={`thumb-${i}`} className="w-full h-full object-cover" draggable={false} />
                                </button>
                            ))}
                        </div>

                        {/* Related / Lookbook horizontal scroll */}
                        <div className="pt-3">
                            <h4 className="text-sm text-gray-500 mb-2">Complete the look</h4>
                            <div className="flex gap-3 overflow-x-auto pb-2">
                                {[1, 2, 3, 4].map((n) => (
                                    <div
                                        key={n}
                                        className="min-w-[160px] bg-gray-100 rounded-lg p-3 flex-shrink-0"
                                        style={{ scrollSnapAlign: 'start' }}
                                    >
                                        <div className="h-28 bg-white rounded-md mb-3 overflow-hidden flex items-center justify-center">
                                            <Image src={`/images/${n}.jpg`} alt={`related-${n}`} className="object-cover h-full" />
                                        </div>
                                        <div className="text-sm font-medium">Essential Tee</div>
                                        <div className="text-xs text-gray-500">$39</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* RIGHT: Details */}
                    <section className="space-y-6">
                        <div>
                            <div className="flex items-baseline justify-between gap-4">
                                <div>
                                    <h2 className="text-2xl font-semibold">{product.name}</h2>
                                    <div className="text-sm text-gray-500">{product.brand}</div>
                                </div>

                                <div className="text-right">
                                    <div className="flex items-center gap-2 justify-end">
                                        <div className="text-lg font-bold">${product.price}</div>
                                        {product.oldPrice && <div className="text-sm line-through text-gray-400">${product.oldPrice}</div>}
                                    </div>
                                    <div className="text-xs text-gray-500">{product.rating} · {product.reviewsCount} reviews</div>
                                </div>
                            </div>
                        </div>

                        <p className="text-sm text-gray-700">{product.description}</p>

                        {/* Color */}
                        <div>
                            <h4 className="text-sm font-medium mb-2">Color</h4>
                            <div className="flex items-center gap-3">
                                {product.colors.map((c) => (
                                    <button
                                        key={c.name}
                                        onClick={() => setSelectedColor(c.name)}
                                        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${selectedColor === c.name ? 'border-indigo-600' : 'border-transparent'
                                            } focus:outline-none`}
                                        title={c.name}
                                        aria-pressed={selectedColor === c.name}
                                        style={{ background: c.hex }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Size */}
                        <div>
                            <div className="flex items-center justify-between">
                                <h4 className="text-sm font-medium mb-2">Size</h4>
                                <button
                                    onClick={() => setShowSizeGuide(true)}
                                    className="text-xs text-indigo-600 underline"
                                >
                                    Size guide
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {product.sizes.map((s) => (
                                    <button
                                        key={s.label}
                                        disabled={!s.available}
                                        onClick={() => s.available && setSelectedSize(s.label)}
                                        className={`px-3 py-2 rounded-md border ${selectedSize === s.label ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 bg-white'
                                            } ${!s.available ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
                                    >
                                        {s.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity & Actions */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center border rounded-md">
                                <button
                                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                    className="px-3 py-2"
                                    aria-label="Decrease quantity"
                                >
                                    -
                                </button>
                                <input
                                    value={quantity}
                                    onChange={(e) => {
                                        const n = Number(e.target.value || 1);
                                        setQuantity(n > 0 ? Math.floor(n) : 1);
                                    }}
                                    className="w-14 text-center py-2 border-l border-r"
                                />
                                <button
                                    onClick={() => setQuantity((q) => q + 1)}
                                    className="px-3 py-2"
                                    aria-label="Increase quantity"
                                >
                                    +
                                </button>
                            </div>

                            <button
                                onClick={addToCart}
                                className={`flex-1 bg-indigo-600 text-white py-3 rounded-md font-medium shadow hover:bg-indigo-700 transition ${added ? 'opacity-80 scale-95' : ''
                                    }`}
                            >
                                {added ? 'Added to cart' : 'Add to cart'}
                            </button>

                            <button
                                onClick={toggleWish}
                                aria-pressed={wish}
                                className={`p-3 rounded-md border ${wish ? 'bg-red-50 border-red-300' : 'bg-white'}`}
                                title="Add to wishlist"
                            >
                                {wish ? '♥' : '♡'}
                            </button>
                        </div>

                        {/* Accordions */}
                        <div className="space-y-2">
                            <div className="border rounded-md">
                                <button
                                    onClick={() => toggleAccordion('details')}
                                    className="w-full flex items-center justify-between p-3"
                                >
                                    <span className="font-medium">Product details</span>
                                    <span>{openAccordions.details ? '−' : '+'}</span>
                                </button>
                                {openAccordions.details && (
                                    <div className="p-3 text-sm text-gray-700">
                                        <ul className="list-disc pl-5 space-y-1">
                                            {product.features.map((f) => (
                                                <li key={f}>{f}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className="border rounded-md">
                                <button
                                    onClick={() => toggleAccordion('materials')}
                                    className="w-full flex items-center justify-between p-3"
                                >
                                    <span className="font-medium">Materials</span>
                                    <span>{openAccordions.materials ? '−' : '+'}</span>
                                </button>
                                {openAccordions.materials && (
                                    <div className="p-3 text-sm text-gray-700">
                                        {product.materials.map((m) => (
                                            <div key={m} className="mb-1">
                                                {m}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="border rounded-md">
                                <button
                                    onClick={() => toggleAccordion('care')}
                                    className="w-full flex items-center justify-between p-3"
                                >
                                    <span className="font-medium">Care instructions</span>
                                    <span>{openAccordions.care ? '−' : '+'}</span>
                                </button>
                                {openAccordions.care && (
                                    <div className="p-3 text-sm text-gray-700">
                                        {product.care.map((c) => (
                                            <div key={c} className="mb-1">
                                                {c}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                <div className="border rounded-md">
                                    <button
                                        onClick={() => toggleAccordion('shipping')}
                                        className="w-full flex items-center justify-between p-3"
                                    >
                                        <span className="font-medium">Shipping</span>
                                        <span>{openAccordions.shipping ? '−' : '+'}</span>
                                    </button>
                                    {openAccordions.shipping && (
                                        <div className="p-3 text-sm text-gray-700">{product.shipping}</div>
                                    )}
                                </div>

                                <div className="border rounded-md">
                                    <button
                                        onClick={() => toggleAccordion('returns')}
                                        className="w-full flex items-center justify-between p-3"
                                    >
                                        <span className="font-medium">Returns</span>
                                        <span>{openAccordions.returns ? '−' : '+'}</span>
                                    </button>
                                    {openAccordions.returns && (
                                        <div className="p-3 text-sm text-gray-700">{product.returns}</div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Reviews preview */}
                        <div>
                            <h4 className="text-sm font-medium mb-2">Customer reviews</h4>
                            <div className="flex items-center gap-3">
                                <div className="text-xl font-semibold">{product.rating}</div>
                                <div className="text-sm text-gray-500">{product.reviewsCount} reviews</div>
                            </div>
                            <div className="mt-3 text-sm text-gray-700">
                                “Fantastic jacket — lightweight but warm and very stylish.”
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Size guide modal */}
            {showSizeGuide && (
                <div
                    className="fixed inset-0 bg-black/40 flex items-center justify-center p-4"
                    onClick={() => setShowSizeGuide(false)}
                >
                    <div
                        className="bg-white rounded-xl max-w-xl w-full p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">Size guide</h3>
                            <button onClick={() => setShowSizeGuide(false)} className="text-gray-500">Close</button>
                        </div>
                        <table className="w-full text-sm">
                            <thead className="text-left text-gray-600">
                                <tr>
                                    <th className="pb-2">Size</th>
                                    <th className="pb-2">Chest (cm)</th>
                                    <th className="pb-2">Waist (cm)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t">
                                    <td className="py-2">XS</td>
                                    <td className="py-2">80–86</td>
                                    <td className="py-2">66–72</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="py-2">S</td>
                                    <td className="py-2">86–92</td>
                                    <td className="py-2">72–78</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="py-2">M</td>
                                    <td className="py-2">92–98</td>
                                    <td className="py-2">78–84</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="py-2">L</td>
                                    <td className="py-2">98–104</td>
                                    <td className="py-2">84–90</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="mt-4 text-sm text-gray-500">Tip: Measure a similar fitting garment flat and compare.</div>
                    </div>
                </div>
            )}

            <Testimonial />
        </main>
    );
}