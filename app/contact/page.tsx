'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import GlassCard from '@/components/ui/GlassCard';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
    const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setFormState('loading');

        // Simulate API call
        setTimeout(() => {
            setFormState('success');
            (e.target as HTMLFormElement).reset();
        }, 1500);
    }

    return (
        <div className="min-h-screen bg-[#fafafa] pt-32 pb-20 px-6 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">Let's work together.</h1>
                        <p className="text-xl text-gray-500 mb-12">
                            I'm currently looking for full-time opportunities. If you have a project or position in mind, I'd love to hear from you.
                        </p>

                        <div className="space-y-6">
                            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-6 p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Email Me</p>
                                    <p className="text-lg font-semibold text-gray-900">{personalInfo.email}</p>
                                </div>
                            </a>

                            <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-6 p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 group-hover:scale-110 transition-transform">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Call Me</p>
                                    <p className="text-lg font-semibold text-gray-900">{personalInfo.phone}</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-6 p-6 rounded-3xl bg-white border border-gray-100 shadow-sm">
                                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Location</p>
                                    <p className="text-lg font-semibold text-gray-900">{personalInfo.location}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <GlassCard className="p-8 bg-white/80 border-white/40 shadow-xl backdrop-blur-xl">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">Name</label>
                                    <input type="text" id="name" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-gray-900 transition-all outline-none" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                                    <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-gray-900 transition-all outline-none" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                                    <textarea id="message" required rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-gray-900 transition-all outline-none resize-none" placeholder="Tell me about your project..."></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={formState === 'loading' || formState === 'success'}
                                    className="w-full py-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-black transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {formState === 'loading' ? (
                                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                    ) : formState === 'success' ? (
                                        <>Message Sent! <Send size={18} /></>
                                    ) : (
                                        <>Send Message <ArrowRight size={18} /></>
                                    )}
                                </button>
                            </form>
                        </GlassCard>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
