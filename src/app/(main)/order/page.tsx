"use client";
import React, { useMemo, useState } from "react";


type CartItem = {
    id: string;
    title: string;
    color?: string;
    size?: string;
    qty: number;
    price: number;
    image?: string;
};

export default function OrderConfirmPage() {
    const [items] = useState<CartItem[]>([]);

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [postal, setPostal] = useState("");
    const [shippingMethod, setShippingMethod] = useState<"standard" | "express">(
        "standard"
    );

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    const subtotal = useMemo(
        () => items.reduce((s, it) => s + it.price * it.qty, 0),
        [items]
    );
    const shippingCost =
        shippingMethod === "express" ? 12.0 : subtotal > 100 ? 0 : 6.0;
    const tax = +(subtotal * 0.08).toFixed(2);
    const total = +(subtotal + shippingCost + tax).toFixed(2);

    function canSubmit() {
        return Boolean(
            fullName.trim() && email.trim() && address.trim() && city.trim() && postal.trim()
        );
    }

    async function handleConfirm(e?: React.FormEvent) {
        e?.preventDefault();
        if (!canSubmit()) {
            alert("Please complete the shipping details.");
            return;
        }
        setIsSubmitting(true);
        // simulate submission
        await new Promise((res) => setTimeout(res, 1100));
        setIsSubmitting(false);
        setOrderConfirmed(true);
    }

    return (
        <div className="page">
            <header className="hero">
                <div className="brand">
                    <svg className="logo" viewBox="0 0 24 24" aria-hidden>
                        <path
                            d="M3 12c0-5 4-9 9-9s9 4 9 9-4 9-9 9S3 17 3 12z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        />
                        <path
                            d="M7 13.5c1.5-2 3.5-3 5-3s3.5 1 5 3"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            fill="none"
                        />
                    </svg>
                    <div>
                        <h1 className="brand-title">Tenfinity Apparel</h1>
                        <p className="brand-sub">Sustainable. Modern. Crafted.</p>
                    </div>
                </div>
            </header>

            <main className="container">
                <section className="left">
                    <div className="panel">
                        <h2>Order Summary</h2>
                        <ul className="items">
                            {items.map((it) => (
                                <li key={it.id} className="item">
                                    <div className="thumb" aria-hidden>
                                        <svg viewBox="0 0 40 40" className="thumb-svg">
                                            <rect
                                                x="2"
                                                y="6"
                                                width="36"
                                                height="26"
                                                rx="3"
                                                fill="#e9e9ee"
                                            />
                                        </svg>
                                    </div>
                                    <div className="meta">
                                        <div className="title">{it.title}</div>
                                        <div className="attrs">
                                            <span>{it.color}</span> · <span>Size {it.size}</span>
                                        </div>
                                    </div>
                                    <div className="qty">${(it.price * it.qty).toFixed(2)}</div>
                                </li>
                            ))}
                        </ul>

                        <div className="summary">
                            <div className="row">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="row">
                                <span>Shipping</span>
                                <span>
                                    {shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}
                                </span>
                            </div>
                            <div className="row">
                                <span>Estimated Tax</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>
                            <div className="row total">
                                <strong>Total</strong>
                                <strong>${total.toFixed(2)}</strong>
                            </div>

                            <div className="promo">
                                <input
                                    className="promo-input"
                                    placeholder="Gift code or promo"
                                    aria-label="Promo code"
                                />
                                <button className="apply-btn" type="button">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="right">
                    <form className="panel form" onSubmit={handleConfirm}>
                        <h2>Shipping & Payment</h2>

                        <label className="field">
                            <span>Full name</span>
                            <input
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Jane Doe"
                                required
                            />
                        </label>

                        <label className="field">
                            <span>Email</span>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@company.com"
                                required
                            />
                        </label>

                        <label className="field">
                            <span>Address</span>
                            <input
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="123 Market St"
                                required
                            />
                        </label>

                        <div className="row-grid">
                            <label className="field small">
                                <span>City</span>
                                <input value={city} onChange={(e) => setCity(e.target.value)} required />
                            </label>
                            <label className="field small">
                                <span>Postal</span>
                                <input value={postal} onChange={(e) => setPostal(e.target.value)} required />
                            </label>
                        </div>

                        <div className="shipping">
                            <span className="label">Shipping method</span>
                            <div className="shipping-options">
                                <label className={`option ${shippingMethod === "standard" ? "active" : ""}`}>
                                    <input
                                        type="radio"
                                        name="ship"
                                        checked={shippingMethod === "standard"}
                                        onChange={() => setShippingMethod("standard")}
                                    />
                                    <div>
                                        <strong>Standard</strong>
                                        <div className="muted">
                                            {subtotal > 100 ? "Free (orders over $100)" : `$${6.0.toFixed(2)} · 3–6 days`}
                                        </div>
                                    </div>
                                </label>

                                <label className={`option ${shippingMethod === "express" ? "active" : ""}`}>
                                    <input
                                        type="radio"
                                        name="ship"
                                        checked={shippingMethod === "express"}
                                        onChange={() => setShippingMethod("express")}
                                    />
                                    <div>
                                        <strong>Express</strong>
                                        <div className="muted">$12.00 · 1–2 days</div>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div className="payment-preview">
                            <span className="label">Payment</span>
                            <div className="card">
                                <div>
                                    <strong>Visa</strong>
                                    <div className="muted">Ending •••• 4242</div>
                                </div>
                                <div className="chip" aria-hidden={true}>
                                    <svg viewBox="0 0 20 14" width="40" height="28" aria-hidden={true}>
                                        <rect x="0" y="0" width="20" height="14" rx="2" fill="#222" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="actions">
                            <button
                                type="submit"
                                className="confirm"
                                disabled={isSubmitting || orderConfirmed}
                            >
                                {isSubmitting
                                    ? "Processing..."
                                    : orderConfirmed
                                        ? "Order Confirmed"
                                        : `Confirm Order • $${total.toFixed(2)}`}
                            </button>

                            <button
                                type="button"
                                className="secondary"
                                onClick={() => alert("Return to cart")}
                            >
                                Edit Cart
                            </button>
                        </div>

                        {orderConfirmed && (
                            <div className="success">
                                <h3>Thank you — your order is confirmed</h3>
                                <p>
                                    We ve emailed your receipt. A shipment confirmation will follow
                                    when your items are on the way.
                                </p>
                            </div>
                        )}
                    </form>
                </section>
            </main>

            <style jsx>{`
                :root {
                    --bg: #0f1724;
                    --panel: #ffffff;
                    --muted: #64748b;
                    --accent: linear-gradient(90deg,#ff7a7a,#7a5cff);
                }
                .page {
                    min-height: 100vh;
                    background: linear-gradient(180deg,#f8fafc 0%, #eef2ff 40%);
                    font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI",
                        Roboto, "Helvetica Neue", Arial;
                    color: #0f1724;
                }
                .hero {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    padding: 36px 24px;
                    max-width: 1100px;
                    margin: 0 auto;
                }
                .brand {
                    display: flex;
                    gap: 12px;
                    align-items: center;
                }
                .logo {
                    width: 52px;
                    height: 52px;
                    color: #111827;
                }
                .brand-title {
                    margin: 0;
                    font-size: 18px;
                    letter-spacing: -0.2px;
                }
                .brand-sub {
                    margin: 0;
                    color: var(--muted);
                    font-size: 13px;
                }

                .container {
                    max-width: 1100px;
                    margin: 18px auto 64px;
                    display: grid;
                    grid-template-columns: 1fr 420px;
                    gap: 24px;
                    padding: 0 24px;
                }

                .panel {
                    background: var(--panel);
                    border-radius: 14px;
                    padding: 20px;
                    box-shadow: 0 6px 22px rgba(12, 18, 30, 0.06);
                }

                .left .panel h2,
                .right .panel h2 {
                    margin: 0 0 12px;
                    font-size: 16px;
                }

                .items {
                    list-style: none;
                    margin: 12px 0 16px;
                    padding: 0;
                }
                .item {
                    display: flex;
                    gap: 12px;
                    align-items: center;
                    padding: 12px 0;
                    border-bottom: 1px solid #f1f5f9;
                }
                .thumb {
                    width: 64px;
                    height: 52px;
                    border-radius: 8px;
                    overflow: hidden;
                    flex: 0 0 64px;
                }
                .thumb-svg {
                    width: 100%;
                    height: 100%;
                }
                .meta {
                    flex: 1;
                }
                .title {
                    font-weight: 600;
                    font-size: 14px;
                }
                .attrs {
                    color: var(--muted);
                    font-size: 13px;
                    margin-top: 4px;
                }
                .qty {
                    font-weight: 600;
                    font-size: 14px;
                }

                .summary {
                    margin-top: 14px;
                }
                .row {
                    display: flex;
                    justify-content: space-between;
                    padding: 6px 0;
                    color: var(--muted);
                }
                .row.total {
                    border-top: 1px dashed #eef2ff;
                    margin-top: 8px;
                    padding-top: 12px;
                    color: #0f1724;
                }

                .promo {
                    display: flex;
                    gap: 8px;
                    margin-top: 12px;
                }
                .promo-input {
                    flex: 1;
                    padding: 10px 12px;
                    border-radius: 10px;
                    border: 1px solid #eef2ff;
                    background: #fbfdff;
                }
                .apply-btn {
                    padding: 10px 12px;
                    border-radius: 10px;
                    background: linear-gradient(90deg,#7a5cff,#ff7a7a);
                    color: white;
                    border: none;
                    font-weight: 600;
                }

                .form .field {
                    display: block;
                    margin-bottom: 12px;
                }
                .form label span {
                    display: block;
                    font-size: 13px;
                    color: var(--muted);
                    margin-bottom: 6px;
                }
                .form input {
                    width: 100%;
                    padding: 10px 12px;
                    border-radius: 10px;
                    border: 1px solid #eef2ff;
                    background: #fbfdff;
                    font-size: 14px;
                }

                .row-grid {
                    display: flex;
                    gap: 12px;
                }
                .field.small {
                    flex: 1;
                }

                .shipping {
                    margin: 10px 0 6px;
                }
                .shipping .label {
                    display: block;
                    margin-bottom: 8px;
                    color: var(--muted);
                    font-size: 13px;
                }
                .shipping-options {
                    display: flex;
                    gap: 10px;
                }
                .option {
                    display: flex;
                    gap: 8px;
                    align-items: center;
                    padding: 10px;
                    border-radius: 10px;
                    border: 1px solid #f1f5f9;
                    cursor: pointer;
                    flex: 1;
                }
                .option input {
                    margin-right: 8px;
                }
                .option.active {
                    box-shadow: 0 6px 18px rgba(122,92,255,0.12);
                    border: 1px solid rgba(122,92,255,0.18);
                }

                .payment-preview .card {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px;
                    border-radius: 10px;
                    border: 1px solid #f1f5f9;
                    margin-top: 8px;
                }
                .chip {
                    opacity: 0.9;
                }

                .actions {
                    display: flex;
                    gap: 12px;
                    align-items: center;
                    margin-top: 18px;
                }
                .confirm {
                    flex: 1;
                    background: var(--accent);
                    color: white;
                    border: none;
                    padding: 12px 14px;
                    border-radius: 10px;
                    font-weight: 700;
                    cursor: pointer;
                }
                .confirm[disabled] {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
                .secondary {
                    background: transparent;
                    border: 1px solid #e6eef9;
                    padding: 10px 12px;
                    border-radius: 10px;
                    cursor: pointer;
                }

                .success {
                    margin-top: 16px;
                    padding: 12px;
                    border-radius: 10px;
                    background: linear-gradient(180deg,#f0fff9,#ecfffa);
                    border: 1px solid #d7fff0;
                }
                .success h3 {
                    margin: 0 0 6px;
                }
                .muted {
                    color: var(--muted);
                    font-size: 13px;
                }

                @media (max-width: 920px) {
                    .container {
                        grid-template-columns: 1fr;
                        padding: 0 16px;
                    }
                    .left {
                        order: 2;
                    }
                    .right {
                        order: 1;
                    }
                }
            `}</style>
        </div>
    );
}