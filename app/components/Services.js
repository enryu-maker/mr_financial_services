import Link from "next/link";
import { Landmark, Building2, Calculator, Home, Briefcase, Car, Shield, FileText, CheckCircle2, Droplet, Cable, LandPlot, BadgePlus, CarIcon, Wallet, ArrowLeftRight, RefreshCcw, Hammer, Map } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Services() {
    const services = [
        {
            title: "Loan Services",
            description: "Comprehensive loan solutions tailored to your needs with quick processing and best interest rates.",
            icon: <Landmark className="w-6 h-6 text-primary" />,
            items: [
                { label: "Home Loan (Resale/New) ", icon: <Home className="w-4 h-4" /> },
                { label: "Tin shed property Loan", icon: <Home className="w-4 h-4" /> },
                { label: "Business Loan", icon: <Briefcase className="w-4 h-4" /> },
                { label: "Car Loan", icon: <CarIcon className="w-4 h-4" /> },
                { label: "Education Loan", icon: <Briefcase className="w-4 h-4" /> },
                { label: "Personal Loan", icon: <Shield className="w-4 h-4" /> },
                { label: "Lap Loan", icon: <Wallet className="w-4 h-4" /> },
                { label: "BT + Top Up Loan", icon: <ArrowLeftRight className="w-4 h-4" /> },
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
                { label: "Home Refinance", icon: <RefreshCcw className="w-4 h-4" /> },
                { label: "Home Construction", icon: <Hammer className="w-4 h-4" /> },
                { label: "Plot Purchase & Construction", icon: <Map className="w-4 h-4" /> }
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
        },
        {
            title: "Property & Utility Services",
            description: "Complete assistance for property tax, water bills, electricity connections, land records (7/12), and other municipal documentation services.",
            icon: <Landmark className="w-6 h-6 text-primary" />,
            items: [

                { label: "Ghar Patti", icon: <Home className="w-4 h-4" /> },
                { label: "Pani Patti", icon: <Droplet className="w-4 h-4" /> },
                { label: "New Water Connection", icon: <BadgePlus className="w-4 h-4" /> },
                { label: "New Electricity", icon: <Cable className="w-4 h-4" /> },
                { label: "7/12", icon: <LandPlot className="w-4 h-4" /> },
            ],
            bg: "bg-blue-50/50",
            accent: "text-primary"
        },
    ];

    return (
        <section id="services" className="py-20 bg-surface-cool scroll-mt-20">
            <div className="container mx-auto px-6 lg:px-24">
                <SectionHeading
                    title="Our Comprehensive"
                    highlight="Expertise"
                    subtitle="Tailored financial solutions designed to meet the unique challenges of the modern marketplace."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white border border-gray-100/50`}
                        >
                            {/* Icon Box */}
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${service.bg}`}>
                                {service.icon}
                            </div>

                            <h3
                                style={{ fontFamily: "var(--font-roboto)" }}
                                className="text-2xl font-sans font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>

                            <p
                                style={{ fontFamily: "var(--font-roboto)" }}
                                className="text-gray-600 text-sm leading-relaxed mb-8 min-h-[60px]">
                                {service.description}
                            </p>

                            <div className="space-y-3">
                                {service.items.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 group-hover:bg-gray-100/80 transition-colors">
                                        <span className={`${service.accent}`}>{item.icon}</span>
                                        <span
                                            style={{ fontFamily: "var(--font-roboto)" }}
                                            className="text-sm font-medium text-gray-700">{item.label}</span>
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
