import { useState } from "react";

export default function Carousel() {
    const slides = [
        {
            img: "src/assets/journey/s1.jpg",
            title: "Bulk Procurement from Trusted Farmers & Aggregators",
            desc: "We partner with a strong network of responsible farmers, cooperatives, and produce aggregators across India. Through these collaborations, we procure fresh and high-demand crops at scale — ensuring supply consistency, quality, and fair pricing.",
        },
        {
            img: "src/assets/journey/s2.jpg",
            title: "Quality Check & Inspection",
            desc: "Upon arrival at our collection or processing centers, all products undergo visual and manual inspections. We focus on checking size, freshness, cleanliness, moisture levels, and any product-specific criteria as per international standards.",
        },
        {
            img: "src/assets/journey/s3.jpg",
            title: "Cleaning, Sorting & Grading",
            desc: "Our team carries out systematic cleaning, sorting, and grading operations — using both manual and mechanical methods to ensure that every product meets export-grade requirements.",
        },
        {
            img: "src/assets/journey/s4.png",
            title: "Bulk Packaging for Export",
            desc: "We ensure farm-fresh produce is carefully cleaned, graded, and packed in bulk using international-quality packaging standards. Our export-ready solutions focus on maintaining freshness, preventing damage during long transit, and meeting global compliance requirements for safe and efficient delivery.",
        },
        {
            img: "src/assets/journey/s5.jpg",
            title: "Storage & Logistics Coordination",
            desc: "We store the packed products in hygienic, well-maintained facilities with proper ventilation and safety protocols. From there, we handle all logistics — including inland transportation, port handling, and container loading.",
        },
        {
            img: "src/assets/journey/s6.png",
            title: "Export & Delivery",
            desc: "With an established shipping and documentation process, Deep Vegetables ensures timely and secure delivery to importers, wholesalers, distributors, and food manufacturers across the globe. We ship bulk quantities efficiently to meet commercial and industrial requirements.",
        },
    ];

    const [index, setIndex] = useState(0);

    const prev = () => setIndex(index === 0 ? slides.length - 1 : index - 1);
    const next = () => setIndex(index === slides.length - 1 ? 0 : index + 1);

    return (
        <div className="relative w-11/12 mx-auto overflow-hidden rounded-2xl">
            {/* Slides */}
            <div
                className="flex transition-transform duration-500 h-full"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {slides.map((s, i) => (
                    <div key={i} className="relative w-full flex-shrink-0">
                        <img src={s.img} className="w-full h-[500px] object-cover object-center" />
                        {/* Text Overlay */}
                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-blue-100 ">
                            <h2 className="text-[clamp(0.75rem,2.5vw,2rem)] font-bold mb-2">{s.title}</h2>
                            <p className="text-[clamp(0.5rem,2.5vw,1.25rem)] md:text-base w-7/8">{s.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Controls */}
            <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow"
            >
                ◀
            </button>
            <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow"
            >
                ▶
            </button>
        </div>
    );
}
