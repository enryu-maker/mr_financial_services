import SectionHeading from "./SectionHeading";

export default function Partners() {
    const partners = [
        { name: "J&K", label: "J & K Bank" },
        { name: "SBI", label: "State Bank of India" },
        { name: "BOB", label: "Bank of Baroda" },
        { name: "INDIAN", label: "Indian Bank" },
        { name: "CENTRAL", label: "Central Bank of India" },
        { name: "HDFC", label: "HDFC Bank" },
        { name: "AXIS", label: "Axis Bank" },
        { name: "MAHA", label: "Bank of Maharashtra" }
    ];

    return (
        <section id="partners" className="py-20 bg-white scroll-mt-20">
            <div className="container mx-auto px-6 text-center">
                <h3 className="text-secondary font-bold tracking-widest uppercase text-sm mb-12">
                    Our Authorized Banking Partners
                </h3>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    {partners.map((partner, index) => (
                        <div key={index} className="flex flex-col items-center gap-3 group cursor-pointer">
                            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 group-hover:border-primary/30 group-hover:bg-blue-50 transition-colors">
                                <span className="font-serif font-bold text-gray-400 group-hover:text-primary text-xl">
                                    {partner.name}
                                </span>
                            </div>
                            <span className="text-xs font-medium text-gray-400 group-hover:text-primary">
                                {partner.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
