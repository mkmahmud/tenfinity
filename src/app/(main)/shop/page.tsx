"use client";
import { addToCartLocalStorage } from "@/lib/cartUtils";
import { useCartCount } from "@/utills/totalCartItems";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";

type Product = {
    id: string;
    title: string;
    description: string;
    price: number;
    oldPrice?: number;
    rating?: number;
    colors?: { name: string; className: string }[];
    image: string;
};

const PRODUCTS: Product[] = [
    {
        id: "aurora",
        title: "Aurora Lounge Chair",
        description: "Sculpted comfort with premium upholstery — perfect for modern interiors.",
        price: 249,
        oldPrice: 299,
        rating: 4.8,
        colors: [
            { name: "Black", className: "bg-gray-900" },
            { name: "Sand", className: "bg-amber-200" },
            { name: "Teal", className: "bg-teal-500" },
        ],
        image:
            "/images/1.jpg",
    },
    {
        id: "nimbus",
        title: "Nimbus Wireless",
        description: "Noise-cancelling bluetooth headphones with crystal-clear audio.",
        price: 149,
        oldPrice: 179,
        rating: 4.6,
        colors: [
            { name: "Black", className: "bg-black" },
            { name: "White", className: "bg-white border" },
        ],
        image:
            "/images/2.jpg",
    },
    {
        id: "nimbus",
        title: "Nimbus Wireless",
        description: "Noise-cancelling bluetooth headphones with crystal-clear audio.",
        price: 149,
        oldPrice: 179,
        rating: 4.6,
        colors: [
            { name: "Black", className: "bg-black" },
            { name: "White", className: "bg-white border" },
        ],
        image:
            "/images/3.jpg",
    },
    {
        id: "nimbus",
        title: "Nimbus Wireless",
        description: "Noise-cancelling bluetooth headphones with crystal-clear audio.",
        price: 149,
        oldPrice: 179,
        rating: 4.6,
        colors: [
            { name: "Black", className: "bg-black" },
            { name: "White", className: "bg-white border" },
        ],
        image:
            "/images/4.jpg",
    },
    {
        id: "lumen",
        title: "Lumen Desk Lamp",
        description: "Adjustable brightness with a slim, modern silhouette.",
        price: 79,
        rating: 4.7,
        colors: [
            { name: "Black", className: "bg-gray-900" },
            { name: "White", className: "bg-white border" },
        ],
        image:
            "/images/5.jpg",
    }

];

export default function Shop() {
    const [query, setQuery] = useState("");
    const [favorites, setFavorites] = useState<Record<string, boolean>>({});
     const [qtys, setQtys] = useState<Record<string, number>>(
        PRODUCTS.reduce((acc, p) => {
            acc[p.id] = 1;
            return acc;
        }, {} as Record<string, number>)
    );
    const [selectedColor, setSelectedColor] = useState<Record<string, string>>({});
    const [justAdded] = useState<string | null>(null);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return PRODUCTS;
        return PRODUCTS.filter(
            (p) => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
        );
    }, [query]);
 

    function toggleFavorite(id: string) {
        setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
    }

    function setQty(id: string, value: number) {
        setQtys((prev) => ({ ...prev, [id]: Math.max(1, value) }));
    }

    function addToCart(product: Product) {

        addToCartLocalStorage({ id: product.id, name: product.title, price: product.price, image: product.image })
    }

    function selectColor(id: string, colorName: string) {
        setSelectedColor((prev) => ({ ...prev, [id]: colorName }));
    }

    // Total Cart Items
    const count = useCartCount();

    return (
        <section className="min-h-screen bg-gray-50 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <header className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold text-gray-900">Shop Collection</h1>
                        <p className="mt-1 text-sm text-gray-600">Curated products with modern, interactive UI</p>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <label htmlFor="search" className="sr-only">Search products</label>
                        <input
                            id="search"
                            aria-label="Search products"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="flex-1 sm:flex-none w-full sm:w-64 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            placeholder="Search products..."
                        />
                        <Link href="/cart"
                            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
                            title="View cart"
                            type="button"
                        >
                            View Cart
                            <span className="inline-flex items-center justify-center bg-white text-indigo-600 rounded-full w-6 h-6 text-xs font-semibold">
                                {count}
                            </span>
                        </Link>
                    </div>
                </header>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((p, index) => {
                        const fav = !!favorites[p.id];
                        const qty = qtys[p.id] ?? 1;
                        const color = selectedColor[p.id] ?? p.colors?.[0]?.name ?? "";
                        return (
                            <article
                                key={index}
                                className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
                            >
                                <div className="relative">
                                    <Image
                                        className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
                                        src={p?.image}
                                        alt={p.title}
                                        height={50}
                                        width={50}
                                        loading="lazy"
                                    />
                                    <button
                                        onClick={() => toggleFavorite(p.id)}
                                        aria-pressed={fav}
                                        aria-label={fav ? "Remove from favorites" : "Add to favorites"}
                                        className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center cursor-pointer shadow-sm hover:scale-105 transition"
                                        type="button"
                                    >
                                        {!fav ? (
                                            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 3.99 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 18.01 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>

                                <div className="p-5">
                                    <Link href="/shop/productdetails/123">             <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3></Link>
                                    <p className="mt-1 text-sm text-gray-500">{p.description}</p>

                                    <div className="mt-4 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="text-2xl font-bold text-gray-900">${p.price}</div>
                                            {p.oldPrice && <div className="text-sm text-gray-500 line-through">${p.oldPrice}</div>}
                                        </div>

                                        {typeof p.rating === "number" && (
                                            <div className="flex items-center gap-1 text-sm text-yellow-500" aria-hidden={true}>
                                                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.287 3.95c.3.922-.755 1.688-1.54 1.118L10 15.347l-3.37 2.45c-.784.57-1.838-.196-1.539-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.642 9.377c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.95z" />
                                                </svg>
                                                <span className="text-gray-700 ml-1">{p.rating}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-4 flex items-center justify-between gap-3">
                                        <div className="flex items-center gap-3">
                                            {p.colors && (
                                                <div className="flex items-center gap-2">
                                                    <div className="text-sm text-gray-500 hidden sm:block">Color</div>
                                                    <div className="flex -space-x-2">
                                                        {p.colors.map((c) => (
                                                            <button
                                                                key={c.name}
                                                                onClick={() => selectColor(p.id, c.name)}
                                                                title={c.name}
                                                                aria-pressed={selectedColor[p.id] === c.name}
                                                                className={`w-6 h-6 rounded-full ring-1 ring-white ${c.className} ${selectedColor[p.id] === c.name ? "ring-2 ring-indigo-500 scale-110" : ""}`}
                                                                type="button"
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            <div className="flex items-center border rounded-md overflow-hidden">
                                                <button
                                                    onClick={() => setQty(p.id, qty - 1)}
                                                    aria-label="Decrease quantity"
                                                    className="px-2 text-sm text-gray-700 hover:bg-gray-100"
                                                    type="button"
                                                >
                                                    −
                                                </button>
                                                <input
                                                    aria-label="Quantity"
                                                    value={qty}
                                                    onChange={(e) => setQty(p.id, Number(e.target.value || 1))}
                                                    className="w-12 text-center text-sm px-2 py-1 outline-none"
                                                />
                                                <button
                                                    onClick={() => setQty(p.id, qty + 1)}
                                                    aria-label="Increase quantity"
                                                    className="px-2 text-sm text-gray-700 hover:bg-gray-100"
                                                    type="button"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        {/* note: Add to cart moved to card footer below */}
                                    </div>
                                </div>

                                {/* Card footer: Add to cart moved here */}
                                <div className="border-t px-5 py-3 bg-white flex items-center justify-between">
                                    <div className="text-sm text-gray-600">
                                        {color && <span className="mr-3">Selected: <span className="font-medium">{color}</span></span>}
                                        <span>Qty: <span className="font-medium">{qty}</span></span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => addToCart(p)}
                                            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
                                            type="button"
                                        >
                                            {justAdded === p.id ? "Added" : "Add to cart"}
                                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 6h14" />
                                            </svg>
                                        </button>

                                        <button
                                            onClick={() => toggleFavorite(p.id)}
                                            aria-label="Quick favorite"
                                            className={`p-2 rounded-md hover:bg-gray-100 transition ${fav ? "text-red-500" : "text-gray-400"}`}
                                            type="button"
                                        >
                                            {fav ? (
                                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 3.99 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 18.01 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                                </svg>
                                            ) : (
                                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>


            </div>
        </section>
    );
}