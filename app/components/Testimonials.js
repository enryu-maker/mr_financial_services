import { Play } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Anand Deshmukh",
            quote: "Your team made my home loan process incredibly smooth and stress-free.",
            role: "Homeowner"
        },
        {
            name: "Priya Kulkarni",
            quote: "Their expertise in tax compliance has saved our business significant time and resources.",
            role: "Business Owner"
        },
        {
            name: "Rajesh Mehta",
            quote: "Strategic advice ensured that my return on the invested property doubled.",
            role: "Investor"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="Voices of"
                    highlight="Trust"
                    subtitle="Hear directly from our satisfied clients about their journey with us."
                />

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div key={index} className="group">
                            {/* Video Placeholder */}
                            <div className="relative aspect-video bg-gray-200 rounded-2xl overflow-hidden mb-6 shadow-md transition-all duration-300 group-hover:shadow-xl">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 cursor-pointer">
                                        <Play className="w-6 h-6 text-primary ml-1" fill="currentColor" />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="px-2">
                                <h4 className="text-xl font-serif font-bold text-gray-900 mb-2">
                                    {item.name}
                                </h4>
                                <p className="text-gray-600 italic leading-relaxed text-sm">
                                    "{item.quote}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
