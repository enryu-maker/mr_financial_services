import Image from "next/image";
import Button from "./Button";
import { ShieldCheck, MessageCircle } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-34 lg:pb-28 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
                {/* Placeholder for Building Image - Using a concrete gray for now */}
                <div className="absolute inset-0 bg-gray-100 opacity-50 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
            </div>

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-20">

                {/* Left Content */}
                <div className="max-w-2xl space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-xs font-bold tracking-wider uppercase">
                        <span>★</span> All Types Financial Solution
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl lg:text-7xl font-serif font-bold text-gray-900 leading-[1.1]">
                        Empowering Your <br />
                        <span className="text-primary italic">Financial Future</span> <br />
                        in Nashik
                    </h1>

                    {/* Subtext */}
                    <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                        Expert consultancy for Home, Business, Mortgage, and Education loans. Your trusted partner for Real Estate and Tax Compliance.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4">
                        <Button href="#contact" variant="primary" className="shadow-lg shadow-primary/20">
                            Get a Loan
                        </Button>
                        <Button
                            href="https://wa.me/xxx"
                            variant="white"
                            className="border border-green-500 text-green-600 hover:bg-green-50"
                        >
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Chat on WhatsApp
                        </Button>
                    </div>
                </div>

                {/* Right Content - Floating Shield */}
                <div className="hidden lg:flex justify-center items-center relative">
                    {/* Decorative Circles */}
                    <div className="absolute w-[500px] h-[500px] border border-gray-200 rounded-full animate-[spin_60s_linear_infinite]" />
                    <div className="absolute w-[350px] h-[350px] border border-gray-200 rounded-full animate-[spin_40s_linear_infinite_reverse]" />

                    {/* Shield Card */}
                    <div className="relative bg-white/30 backdrop-blur-xl border border-white/50 p-8 rounded-full shadow-2xl">
                        <div className="bg-gradient-to-br from-secondary to-accent p-6 rounded-full shadow-lg">
                            <ShieldCheck className="w-16 h-16 text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
