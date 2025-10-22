"use client";

import { useEffect, useState } from "react";
import type { CartItem } from "@/lib/cartUtils";
import { useRouter } from "next/navigation";

interface UserInfo {
    name: string;
    phone: string;
    address: string;
    city: string;
}

export default function CheckoutPage() {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [userInfo, setUserInfo] = useState<UserInfo>({
        name: "",
        phone: "",
        address: "",
        city: "",
    });

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]") as CartItem[];
        setCart(storedCart);
    }, []);

    const totalPrice = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUserInfo((prev) => ({ ...prev, [name]: value }));
    };
    // use router
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!userInfo.name || !userInfo.phone || !userInfo.address || !userInfo.city) {
            alert("Please fill in all the required fields.");
            return;
        }
        console.log("Order Details:", {
            userInfo,
            cart,
            totalPrice,
        });
        // Simulate order confirmation
        alert("✅ Order placed successfully! You’ll pay by Cash on Delivery.");

        // Clear cart after order placed
        localStorage.removeItem("cart");
        window.dispatchEvent(new Event("cartUpdated"));

        // Optionally redirect to a Thank You page 
        router.push("/thank-you");
    };

    if (cart.length === 0)
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
                <h2 className="text-2xl font-semibold mb-2">Your Cart is Empty 🛍️</h2>
                <p className="text-gray-500">Please add items before checkout.</p>
            </div>
        );

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

            <div className="grid md:grid-cols-2 gap-8">
                {/* User Info Form */}
                <form onSubmit={handleSubmit} className="bg-white shadow rounded-2xl p-6 space-y-4">
                    <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>

                    <div>
                        <label className="block text-sm font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={userInfo.name}
                            onChange={handleInputChange}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Phone Number</label>
                        <input
                            type="text"
                            name="phone"
                            value={userInfo.phone}
                            onChange={handleInputChange}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="e.g. 017XXXXXXXX"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Address</label>
                        <textarea
                            name="address"
                            value={userInfo.address}
                            onChange={handleInputChange}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="House, Road, Area"
                            rows={3}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">City</label>
                        <input
                            type="text"
                            name="city"
                            value={userInfo.city}
                            onChange={handleInputChange}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="e.g. Dhaka"
                            required
                        />
                    </div>

                    {/* Payment Option */}
                    <div className="mt-6 border-t pt-4">
                        <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
                        <label className="flex items-center gap-3">
                            <input type="radio" checked readOnly className="w-5 h-5 accent-black" />
                            <span>Cash on Delivery</span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-6 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
                    >
                        Place Order
                    </button>
                </form>

                {/* Order Summary */}
                <div className="bg-white shadow rounded-2xl p-6 h-fit">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    <ul className="divide-y">
                        {cart.map((item) => (
                            <li key={item.id} className="flex justify-between py-3">
                                <span>
                                    {item.name} × {item.quantity}
                                </span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-4 border-t pt-4">
                        <div className="flex justify-between text-gray-700 mb-1">
                            <span>Total Items</span>
                            <span>{totalItems}</span>
                        </div>
                        <div className="flex justify-between font-semibold text-lg">
                            <span>Total Price</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                    </div>

                    <p className="mt-6 text-sm text-gray-500">
                        💵 Payment Method: <strong>Cash on Delivery</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}
