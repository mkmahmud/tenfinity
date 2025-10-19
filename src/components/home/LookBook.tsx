import Image from "next/image";
import Link from "next/link";

export default function LookBook() {    
    return (
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
    )
}