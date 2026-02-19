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
        const whatsappUrl = `https://wa.me/xxxx?text=${text}`;

        // Simulate a small delay for UX then redirect
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            setIsSubmitting(false);
            setFormData({ name: "", phone: "", service: "Home Loan", message: "" });
            alert("Thank you! We'll redirect you to WhatsApp to send your details.");
        }, 1000);
    };

    return (
        <section id="contact" className="py-20 bg-surface-cool relative">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Left - Form */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                            Request a <span className="text-primary italic">Consultation</span>
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Fill out the form below and our experts will reach out to you directly.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Phone Number</label>
                                    <input
                                        name="phone"
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 00000 00000"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Service Required</label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
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
                                <label className="text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How can we help you?"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
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
                        <div className="relative h-[300px] lg:h-[300px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119981.39107472458!2d73.72107892285584!3d19.990944013098268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddd290b09914b3%3A0xcb07845d9d28215c!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1771500641613!5m2!1sen!2sin"
                                className="w-full h-full"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        {/* Contact Actions */}
                        <div className="grid grid-cols-1 gap-4">
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
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-xl border border-amber-100">
                            <MapPin className="w-5 h-5 text-secondary mt-1 shrink-0" />
                            <div>
                                <p className="text-sm text-gray-800 leading-relaxed">
                                    <strong>Head Office:</strong> Chandreshwari Society Shop No. 1, Opp. Maruti Mandir, Near Dr. Fargade, Sanjiv Nagar, Ambad, Satpur, Nashik - 422010
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
