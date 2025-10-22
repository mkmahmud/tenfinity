"use client";
import { useEffect, useState } from "react";
import type { CartItem } from "@/lib/cartUtils";

export function useCartCount() {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const updateCount = () => {
            const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
            const total = cart.reduce((acc, item) => acc + item.quantity, 0);
            setCount(total);
        };

        updateCount();
        window.addEventListener("cartUpdated", updateCount);
        return () => window.removeEventListener("cartUpdated", updateCount);
    }, []);

    return count;
}
