import Link from "next/link";
import { Landmark, Building2, Calculator, Home, Briefcase, Car, Shield, FileText, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Services() {
    const services = [
        {
            title: "Loan Services",
            description: "Comprehensive loan solutions tailored to your needs with quick processing and best interest rates.",
            icon: <Landmark className="w-6 h-6 text-primary" />,
            items: [
                { label: "Home & Mortgage Loans", icon: <Home className="w-4 h-4" /> },
                { label: "Business & Car Loans", icon: <Briefcase className="w-4 h-4" /> },
                { label: "Education Loans", icon: <Briefcase className="w-4 h-4" /> },
                { label: "Personal Loans", icon: <Shield className="w-4 h-4" /> },
            ],
            bg: "bg-blue-50/50",
            accent: "text-primary"
        },
        {
            title: "Real Estate",
            description: "Complete property solutions for buying, selling, and renting across Nashik.",
            icon: <Building2 className="w-6 h-6 text-secondary" />,
            items: [
                { label: "Buy & Sell Property", icon: <Home className="w-4 h-4" /> },
                { label: "Rental Services", icon: <Home className="w-4 h-4" /> },
                { label: "Commercial Leasing", icon: <Building2 className="w-4 h-4" /> },
            ],
            bg: "bg-amber-50/50",
            accent: "text-secondary"
        },
        {
            title: "Taxation & Compliance",
            description: "Expert assistance for all your tax filing and financial compliance requirements.",
            icon: <Calculator className="w-6 h-6 text-gray-700" />,
            items: [
                { label: "GST Registration & Filing", icon: <FileText className="w-4 h-4" /> },
                { label: "ITR Returns", icon: <CheckCircle2 className="w-4 h-4" /> },
                { label: "Audits & Compliance", icon: <CheckCircle2 className="w-4 h-4" /> },
            ],
            bg: "bg-gray-50/50",
            accent: "text-gray-700"
        }
    ];

    return (
        <section id="services" className="py-20 bg-surface-cool scroll-mt-20">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="Our Comprehensive"
                    highlight="Expertise"
                    subtitle="Tailored financial solutions designed to meet the unique challenges of the modern marketplace."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white border border-gray-100/50`}
                        >
                            {/* Icon Box */}
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${service.bg}`}>
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed mb-8 min-h-[60px]">
                                {service.description}
                            </p>

                            <div className="space-y-3">
                                {service.items.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 group-hover:bg-gray-100/80 transition-colors">
                                        <span className={`${service.accent}`}>{item.icon}</span>
                                        <span className="text-sm font-medium text-gray-700">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
