"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ThankYouPage() {
    const [customerName, setCustomerName] = useState<string>("");

    useEffect(() => {
        // Get user info from localStorage (if available)
        const lastOrder = localStorage.getItem("lastOrder");
        if (lastOrder) {
            const parsedOrder = JSON.parse(lastOrder);
            setCustomerName(parsedOrder.name || "");
        }
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6">
            <div className="max-w-md bg-white shadow-lg rounded-2xl p-8">
                <h1 className="text-3xl font-bold mb-2 text-gray-800">
                    🎉 Thank You for Your Order!
                </h1>

                {customerName && (
                    <p className="text-lg text-gray-700 font-medium mb-2">
                        Dear {customerName},
                    </p>
                )}

                <p className="text-gray-600 mb-6">
                    We’ve received your order and will deliver your items very soon.
                    Our delivery team will contact you before arriving.
                    <br />
                    Please keep your phone available and payment ready for{" "}
                    <span className="font-semibold">Cash on Delivery</span>.
                </p>

                <div className="space-y-2 text-sm text-gray-500">
                    <p>📦 Estimated Delivery: 2–5 business days</p>
                    <p>💬 If you have any questions, feel free to contact our support team.</p>
                </div>

                <Link
                    href="/shop"
                    className="inline-block mt-8 text-white bg-black px-6 py-3 rounded-lg hover:bg-gray-800 transition"
                >
                    Continue Shopping
                </Link>
            </div>

            <p className="text-gray-400 text-sm mt-8">
                Thank you for choosing <span className="font-medium text-gray-600">Tenfinity</span> 💛
            </p>
        </div>
    );
}
