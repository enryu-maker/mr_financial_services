import Link from "next/link";
import { Landmark, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Link href="/" className="flex items-center gap-2 group">
                                <img src="/assets/MR_LOGO.png" alt="M.R. Financial Services Nashik - Trusted Loan Consultant" className="w-24" />
                            </Link>
                        </div>
                        <p
                            style={{ fontFamily: "var(--font-roboto)" }}
                            className="text-gray-400 text-sm leading-relaxed">
                            Empowering your financial future with expert consultancy for loans, real estate, and tax compliance.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4
                            style={{ fontFamily: "var(--font-roboto)" }}
                            className="font-sans text-lg mb-4 text-secondary">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link href="#about" style={{ fontFamily: "var(--font-roboto)" }} className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#services" style={{ fontFamily: "var(--font-roboto)" }} className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="#partners" style={{ fontFamily: "var(--font-roboto)" }} className="hover:text-white transition-colors">Partners</Link></li>
                            <li><Link href="#contact" style={{ fontFamily: "var(--font-roboto)" }} className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4
                            style={{ fontFamily: "var(--font-roboto)" }}
                            className="font-sans text-lg mb-4 text-secondary">Contact Us</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                                <span style={{ fontFamily: "var(--font-roboto)" }}>Chandreshwari Society Shop No. 1, Opp. Maruti Mandir, Sanjiv Nagar, Ambad, Nashik - 422010</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-secondary shrink-0" />
                                <span style={{ fontFamily: "var(--font-roboto)" }}>+91 93264 47847</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-secondary shrink-0" />
                                <span style={{ fontFamily: "var(--font-roboto)" }}>02534549030</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-secondary shrink-0" />
                                <a
                                    href="mailto:mrfinancialservices095@gmail.com"
                                    style={{ fontFamily: "var(--font-roboto)" }}
                                    className="hover:text-white transition-colors">mrfinancialservices095@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal / Social */}
                    <div>
                        <h4
                            style={{ fontFamily: "var(--font-roboto)" }}
                            className="font-sans text-lg mb-4 text-secondary">Legal</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link href="#" style={{ fontFamily: "var(--font-roboto)" }} className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" style={{ fontFamily: "var(--font-roboto)" }} className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" style={{ fontFamily: "var(--font-roboto)" }} className="hover:text-white transition-colors">Disclaimer</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p style={{ fontFamily: "var(--font-roboto)" }}>© {new Date().getFullYear()} M.R. Financial Services. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <Link href="https://nerdtech.in" target="_blank" style={{ fontFamily: "var(--font-roboto)" }} className="hover:text-white cursor-pointer">Made with ❤️ by NerdTech</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
