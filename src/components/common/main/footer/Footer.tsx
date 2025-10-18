"use client"

import Image from "next/image"
import Link from "next/link"



export default function Footer() {
    return (
        <footer className="bg-background text-foreground border-t border-muted">
            <div className="container mx-auto py-12 px-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
                    <div className="flex-1">
                        <div className="flex items-center gap-4">
                            <Image src="/logo.jpg" height={50} width={70} alt="Logo Of This Website" />
                            <div>
                                <div className="font-semibold text-lg">Tenfinity</div>
                                <div className="text-sm text-muted-foreground">Effortless style. Lasting quality.</div>
                            </div>
                        </div>

                        <p className="mt-4 text-sm text-muted-foreground max-w-sm">
                            Premium wardrobe essentials made with sustainable fabrics. Clean lines, modern fits — designed to move with you.
                        </p>

                        <div className="flex items-center gap-3 mt-4">
                            <a aria-label="Instagram" href="#" className="p-2 rounded-md hover:bg-muted">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </a>
                            <a aria-label="Twitter" href="#" className="p-2 rounded-md hover:bg-muted">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43 1s-2 .9-3.17 1.3A4.48 4.48 0 0 0 16 1c-2.5 0-4.5 2.4-3.9 4.8A12.8 12.8 0 0 1 3 2s-4 9 5 13a13 13 0 0 1-8 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </a>
                            <a aria-label="Facebook" href="#" className="p-2 rounded-md hover:bg-muted">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
                        <div>
                            <h4 className="text-sm font-medium mb-3">Shop</h4>
                            <ul className="text-sm text-muted-foreground space-y-2">
                                <li><Link href="/new-arrivals" className="hover:underline">New Arrivals</Link></li>
                                <li><Link href="/best-sellers" className="hover:underline">Best Sellers</Link></li>
                                <li><Link href="/collections" className="hover:underline">Collections</Link></li>
                                <li><Link href="/sale" className="hover:underline">Sale</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium mb-3">Company</h4>
                            <ul className="text-sm text-muted-foreground space-y-2">
                                <li><Link href="/about" className="hover:underline">About Us</Link></li>
                                <li><Link href="/sustainability" className="hover:underline">Sustainability</Link></li>
                                <li><Link href="/careers" className="hover:underline">Careers</Link></li>
                                <li><Link href="/press" className="hover:underline">Press</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium mb-3">Support</h4>
                            <ul className="text-sm text-muted-foreground space-y-2">
                                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                                <li><Link href="/shipping" className="hover:underline">Shipping</Link></li>
                                <li><Link href="/returns" className="hover:underline">Returns</Link></li>
                                <li><Link href="/size-guide" className="hover:underline">Size Guide</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full md:w-80">
                        <h4 className="text-sm font-medium mb-3">Join the Tenfinity Club</h4>
                        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input id="email" type="email" placeholder="Email address" required className="flex-1 rounded-md border border-muted px-3 py-2 bg-transparent text-sm" />
                            <button type="submit" className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:opacity-95">
                                Subscribe
                            </button>
                        </form>
                        <p className="mt-2 text-xs text-muted-foreground">Get exclusive offers and early access to drops. Unsubscribe anytime.</p>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-muted flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Tenfinity. All rights reserved.</p>

                    <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground">We accept</span>
                        <div className="flex items-center gap-2">
                            <span className="px-2 py-1 border border-muted rounded text-xs">Visa</span>
                            <span className="px-2 py-1 border border-muted rounded text-xs">Mastercard</span>
                            <span className="px-2 py-1 border border-muted rounded text-xs">Apple Pay</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
