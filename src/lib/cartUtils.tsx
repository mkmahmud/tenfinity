// lib/cartUtils.ts

export interface CartItem {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

export const addToCartLocalStorage = (product: Omit<CartItem, "quantity">) => {
    if (typeof window === "undefined") return;

    const existingCart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const index = existingCart.findIndex((item) => item.id === product.id);

    if (index !== -1) {
        existingCart[index].quantity += 1;
    } else {
        existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    window.dispatchEvent(new Event("cartUpdated")); // notify all components
};
