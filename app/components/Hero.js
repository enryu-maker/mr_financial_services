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
                    <div
                        style={{ fontFamily: "var(--font-roboto)" }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary text-xs font-bold tracking-wider uppercase animate-fade-up">
                        <span>★</span> All Types Financial Solution
                    </div>

                    {/* Headline */}
                    <h1
                        style={{ fontFamily: "var(--font-roboto)" }}
                        className="text-5xl lg:text-7xl leading-[1.1] animate-fade-up animation-delay-200"
                    >
                        <span
                            className="font-medium text-gray-800">
                            Empowering Your
                        </span>
                        <br />
                        <span
                            className="font-bold text-primary">
                            Financial Future
                        </span>
                        <br />
                        <span className="font-medium text-gray-800">
                            in Nashik
                        </span>
                    </h1>

                    {/* Subtext */}
                    <p
                        style={{ fontFamily: "var(--font-roboto)" }}
                        className="text-xl text-gray-600 leading-relaxed max-w-lg animate-fade-up animation-delay-400">
                        Expert consultancy for Home loans, Business loans, Mortgage loans, and Education loans. Your trusted partner for Real Estate and Tax Compliance.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 animate-fade-up animation-delay-600">
                        <Button href="#contact" variant="primary" className="shadow-lg shadow-primary/20">
                            Get a Loan
                        </Button>
                    </div>
                </div>

                {/* Right Content - Floating Shield */}
                <div className="hidden lg:flex justify-center items-center relative animate-fade-up animation-delay-400">
                    {/* Decorative Circles */}
                    <div className="absolute w-[500px] h-[500px] border border-gray-200 rounded-full animate-orbit-pulse" />
                    <div className="absolute w-[350px] h-[350px] border border-gray-100 rounded-full animate-orbit-pulse animation-delay-400" />

                    {/* Shield Card */}
                    <div className="relative bg-white/30 backdrop-blur-xl border border-white/50 p-8 rounded-full shadow-2xl animate-float group">
                        <div className="bg-gradient-to-br from-secondary to-accent p-6 rounded-full shadow-lg animate-inner-glow">
                            <ShieldCheck className="w-16 h-16 text-white" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating CTA Button */}
            <div className="fixed bottom-6 right-6  z-50 animate-pulse-soft rounded-full">
                <Button
                    href="https://wa.me/93264 47847"
                    variant="white"
                    className="rounded-4xl border border-green-500 text-green-600 hover:bg-green-50"
                >
                    <img src="/assets/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
                </Button>
            </div>
        </section>
    );
}
