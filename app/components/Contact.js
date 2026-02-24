"use client";

import { useState } from "react";
import Button from "./Button";
import { MapPin, Phone, Mail, Loader2 } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        service: "Home Loan",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Format the message for WhatsApp
        const text = `*New Consultation Request*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message}`;

        // WhatsApp URL (Targeting Rafique's number)
        const whatsappUrl = `https://wa.me/93264 47847?text=${text}`;

        // Simulate a small delay for UX then redirect
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            setIsSubmitting(false);
            setFormData({ name: "", phone: "", service: "Home Loan", message: "" });
            alert("Thank you! We'll redirect you to WhatsApp to send your details.");
        }, 1000);
    };

    return (
        <section id="contact" className="py-20 bg-surface-cool relative scroll-mt-20">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Left - Form */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
                        <h2
                            style={{ fontFamily: "var(--font-roboto)" }}
                            className="text-3xl font-sans font-bold text-gray-900 mb-2">
                            Request a <span className="text-primary italic">Consultation</span>
                        </h2>
                        <p
                            style={{ fontFamily: "var(--font-roboto)" }}
                            className="text-gray-600 mb-8">
                            Fill out the form below and our experts will reach out to you directly.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label
                                        style={{ fontFamily: "var(--font-roboto)" }}
                                        className="text-sm font-medium text-gray-700">Full Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        style={{ fontFamily: "var(--font-roboto)" }}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder-gray-400 text-gray-900"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        style={{ fontFamily: "var(--font-roboto)" }}
                                        className="text-sm font-medium text-gray-700">Phone Number</label>
                                    <input
                                        name="phone"
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 00000 00000"
                                        style={{ fontFamily: "var(--font-roboto)" }}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder-gray-400 text-gray-900"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label
                                    style={{ fontFamily: "var(--font-roboto)" }}
                                    className="text-sm font-medium text-gray-700">Service Required</label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    style={{ fontFamily: "var(--font-roboto)" }}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white placeholder-gray-400 text-gray-400"
                                >
                                    <option>Home Loan</option>
                                    <option>Business Loan</option>
                                    <option>Mortgage Loan</option>
                                    <option>Education Loan</option>
                                    <option>Car Loan</option>
                                    <option>Property Purchase/Sale</option>
                                    <option>Tax Compliance</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label
                                    style={{ fontFamily: "var(--font-roboto)" }}
                                    className="text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How can we help you?"
                                    style={{ fontFamily: "var(--font-roboto)" }}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none placeholder-gray-400 text-gray-900"
                                ></textarea>
                            </div>

                            <Button type="submit" disabled={isSubmitting} className="w-full justify-center">
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    "Submit Request"
                                )}
                            </Button>
                        </form>
                    </div>

                    {/* Right - Map Information */}
                    <div className="space-y-8">
                        {/* Map Card */}
                        <div className="relative h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3749.9374769852016!2d73.72515487522817!3d19.969131481428168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDU4JzA4LjkiTiA3M8KwNDMnMzkuOCJF!5e0!3m2!1sen!2sin!4v1771828808725!5m2!1sen!2sin"
                                title="M.R. Financial Services Nashik Location"
                                className="w-full h-full"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        {/* Contact Actions */}
                        {/* <div className="grid grid-cols-1 gap-4">
                            <a href="tel:+919326447847" className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-primary/30 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium uppercase">Rafique Shaikh</p>
                                    <p className="font-bold text-gray-900">+91 93264 47847</p>
                                </div>
                            </a>

                            <a href="tel:+917387924783" className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-primary/30 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium uppercase">Malik Kureshi</p>
                                    <p className="font-bold text-gray-900">+91 73879 24783</p>
                                </div>
                            </a>
                        </div> */}

                        <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-xl border border-amber-100">
                            <MapPin className="w-5 h-5 text-secondary mt-1 shrink-0" />
                            <div>
                                <p
                                    style={{ fontFamily: "var(--font-roboto)" }}
                                    className="text-sm text-gray-800 leading-relaxed">
                                    <strong style={{ fontFamily: "var(--font-roboto)" }}>Head Office:</strong> Chandreshwari Society Shop No. 1, Opp. Maruti Mandir, Near Dr. Fargade, Sanjiv Nagar, Ambad, Satpur, Nashik - 422010
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
