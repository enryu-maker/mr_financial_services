import { Home, Building2, TrendingUp } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function PropertySection() {
    const items = [
        {
            title: "Residential Buy/Sell",
            description: "From premium apartments to luxury villas, we bridge the gap between dream homes and proud owners in Nashik.",
            icon: <Home className="w-8 h-8 text-primary" />,
            bg: "bg-blue-50"
        },
        {
            title: "Commercial Property",
            description: "Strategic office spaces and retail showrooms that position your business for maximum growth and visibility.",
            icon: <Building2 className="w-8 h-8 text-secondary" />,
            bg: "bg-amber-50"
        },
        {
            title: "Investment Consulting",
            description: "Data-driven real estate investment strategies to help you build a robust and high-yield property portfolio.",
            icon: <TrendingUp className="w-8 h-8 text-green-600" />,
            bg: "bg-green-50"
        }
    ];

    return (
        <section className="py-20 bg-surface-warm">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="Property Sales &"
                    highlight="Acquisitions"
                    subtitle="Expert guidance for residential and commercial property transactions in Nashik's most sought-after localities."
                />

                <div className="grid md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-6`}>
                                {item.icon}
                            </div>

                            <h3
                                style={{ fontFamily: "var(--font-roboto)" }}
                                className="text-xl font-sans font-bold text-gray-900 mb-3">
                                {item.title}
                            </h3>

                            <p
                                style={{ fontFamily: "var(--font-roboto)" }}
                                className="text-gray-600 leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
