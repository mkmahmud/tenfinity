import Image from "next/image";

type Item = {
    id: number;
    name: string;
    title: string;
    avatar: string;
    quote: string;
    rating: number;
    tags?: string[];
};

const TESTIMONIALS: Item[] = [
    {
        id: 1,
        name: "Ava Thompson",
        title: "Frequent Buyer",
        avatar: "https://i.pravatar.cc/100?img=32",
        quote:
            "The fit is impeccable and the fabric feels premium. I get compliments every time I wear their pieces.",
        rating: 5,
        tags: ["Perfect Fit", "Premium Fabric"],
    },
    {
        id: 2,
        name: "Jordan Lee",
        title: "Style Enthusiast",
        avatar: "https://i.pravatar.cc/100?img=12",
        quote:
            "Fast shipping, beautiful packaging, and the color matched the photos exactly. My new go-to brand.",
        rating: 5,
        tags: ["Fast Shipping", "True-to-Color"],
    },
    {
        id: 3,
        name: "Sofia Martinez",
        title: "Sustainable Shopper",
        avatar: "https://i.pravatar.cc/100?img=45",
        quote:
            "Love that the pieces are sustainably made without sacrificing style. Durable and comfortable.",
        rating: 4,
        tags: ["Sustainable", "Durable"],
    },
];

function Stars({ value }: { value: number }) {
    return (
        <div className="flex items-center gap-1" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => {
                const filled = i < value;
                return (
                    <svg
                        key={i}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill={filled ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className={`text-yellow-400 ${filled ? "" : "text-gray-300"}`}
                        aria-hidden
                    >
                        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.79 1.402 8.166L12 18.897l-7.336 3.869 1.402-8.166L.132 9.21l8.2-1.192z" />
                    </svg>
                );
            })}
        </div>
    );
}

export default function Testimonial() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-12">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-extrabold">What customers say</h2>
                    <p className="text-gray-600 mt-1">
                        Real reviews from real people — see why shoppers love our collection.
                    </p>
                </div>
                <button
                    className="hidden sm:inline-block bg-black text-white px-4 py-2 rounded-md text-sm hover:opacity-90"
                    aria-label="Shop collection"
                >
                    Shop the Collection
                </button>
            </div>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {TESTIMONIALS.map((t) => (
                    <article
                        key={t.id}
                        className="bg-white border border-gray-100 shadow-sm rounded-lg p-6 flex flex-col justify-between transform transition hover:shadow-lg hover:-translate-y-1"
                        aria-label={`Testimonial from ${t.name}`}
                    >
                        <div>
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="text-gray-200 mb-3"
                                aria-hidden
                            >
                                <path
                                    d="M7.17 6A5 5 0 0 0 2 11v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6a1 1 0 0 1 1-1h2v-1a4 4 0 0 0-4-4H7.17zM19.17 6A5 5 0 0 0 14 11v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6a1 1 0 0 1 1-1h2v-1a4 4 0 0 0-4-4h-1.83z"
                                    fill="currentColor"
                                />
                            </svg>

                            <p className="text-gray-800 text-base leading-relaxed">  {t.quote}</p>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Image
                                    height={48}
                                    width={48}
                                    src={t.avatar}
                                    alt={`${t.name} avatar`}
                                    className="w-12 h-12 rounded-full object-cover border border-gray-100"
                                />
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                                    <p className="text-xs text-gray-500">{t.title}</p>
                                    <div className="mt-1 flex items-center gap-2">
                                        <Stars value={t.rating} />
                                        <span className="text-xs text-gray-500">{t.rating}.0</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-end">
                                <div className="flex flex-wrap gap-2">
                                    {(t.tags || []).map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <button
                                    className="mt-3 text-xs text-indigo-600 hover:underline"
                                    aria-label={`Read more from ${t.name}`}
                                >
                                    Read more
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}