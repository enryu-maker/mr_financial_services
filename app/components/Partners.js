import SectionHeading from "./SectionHeading";

export default function Partners() {
    const partners = [
        { name: "J&K", label: "J & K Bank", logo: "/assets/J&K.jpeg" },
        { name: "SBI", label: "State Bank of India", logo: "/assets/SBI.jpeg" },
        { name: "BOB", label: "Bank of Baroda", logo: "/assets/BOB.jpeg" },
        { name: "INDIAN", label: "Indian Bank", logo: "/assets/IB.jpeg" },
        { name: "CENTRAL", label: "Central Bank of India", logo: "/assets/CBI.jpeg" },
        { name: "HDFC", label: "HDFC Bank", logo: "/assets/HDFC.jpeg" },
        { name: "AXIS", label: "Axis Bank", logo: "/assets/Axis.jpeg" },
        { name: "MAHA", label: "Bank of Maharashtra", logo: "/assets/BOM.jpeg" }
    ];

    return (
        <section id="partners" className="py-20 bg-white scroll-mt-20">
            <div className="container mx-auto px-6 text-center">
                <h3
                    style={{ fontFamily: "var(--font-roboto)" }}
                    className="text-secondary font-bold tracking-widest uppercase text-md mb-12">
                    Our Authorized Banking Partners
                </h3>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16 transition-all duration-500">
                    {partners.map((partner, index) => (
                        <div key={index} className="flex flex-col items-center gap-3 group cursor-pointer">
                            <div
                                className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 group-hover:border-primary/30 group-hover:bg-blue-50 transition-colors"
                                style={
                                    partner.logo
                                        ? {
                                            backgroundImage: `url(${partner.logo})`,
                                            backgroundSize: "contain",
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat",
                                        }
                                        : {}
                                }
                            >
                                {!partner.logo && (
                                    <span
                                        style={{ fontFamily: "var(--font-roboto)" }}
                                        className="font-sans font-bold text-gray-400 group-hover:text-primary text-xl">
                                        {partner.name}
                                    </span>
                                )}
                            </div>
                            <span
                                style={{ fontFamily: "var(--font-roboto)" }}
                                className="text-xs font-medium text-gray-400 group-hover:text-primary">
                                {partner.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
