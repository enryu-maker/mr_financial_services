import { Shield, CheckCircle, Award, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function About() {
    return (
        <section id="about" className="py-20 bg-surface-warm relative overflow-hidden scroll-mt-20">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="space-y-8">
                        <SectionHeading
                            align="left"
                            title="A Legacy of Unwavering"
                            highlight="Trust"
                            className="mb-6"
                        />

                        <p
                            style={{ fontFamily: "var(--font-roboto)" }}
                            className="text-gray-600 leading-relaxed">
                            Founded on the principles of integrity and professional excellence,
                            M.R. Financial Services has been the cornerstone of financial growth
                            for hundreds of families and businesses across Nashik, Maharashtra.
                        </p>

                        <p
                            style={{ fontFamily: "var(--font-roboto)" }}
                            className="text-gray-600 leading-relaxed">
                            Our team navigates the complexities of banking regulations, estate laws,
                            and tax codes so you can focus on what matters most — building your dreams.
                            With partnerships across all major banks, we ensure you get the best rates
                            and the smoothest processing.
                        </p>

                        {/* Stats */}
                        <div className="flex gap-6 pt-4">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex-1">
                                <h3
                                    style={{ fontFamily: "var(--font-roboto)" }}
                                    className="text-4xl font-sans font-bold text-primary mb-1">15+</h3>
                                <p
                                    style={{ fontFamily: "var(--font-roboto)" }}
                                    className="text-xs text-gray-500 uppercase tracking-wider">Years Experience</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex-1">
                                <h3
                                    style={{ fontFamily: "var(--font-roboto)" }}
                                    className="text-4xl font-sans font-bold text-primary mb-1">2k+</h3>
                                <p
                                    style={{ fontFamily: "var(--font-roboto)" }}
                                    className="text-xs text-gray-500 uppercase tracking-wider">Happy Clients</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Trust Shield Card */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-secondary/10 transform rotate-3 rounded-2xl -z-10" />
                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-3 bg-secondary/10 rounded-full">
                                    <Award className="w-8 h-8 text-secondary" />
                                </div>
                                <Shield className="w-24 h-24 text-gray-50 opacity-50 absolute top-6 right-6" />
                            </div>

                            <h3
                                style={{ fontFamily: "var(--font-roboto)" }}
                                className="text-2xl font-sans font-bold text-gray-900 mb-4">
                                The Trust Shield Guarantee
                            </h3>

                            <p
                                style={{ fontFamily: "var(--font-roboto)" }}
                                className="text-gray-600 text-sm mb-8 leading-relaxed">
                                Every application we handle is treated with the highest degree of confidentiality
                                and strategic precision. We don't just process files; we build futures.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Strict Banking Compliance",
                                    "Transparent Processing Fees",
                                    "Expert Compliance Audit"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                                        <span
                                            style={{ fontFamily: "var(--font-roboto)" }}
                                            className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
