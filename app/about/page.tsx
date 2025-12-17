'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import GlassCard from '@/components/ui/GlassCard';
import { Mail, Phone, MapPin, Check, Code, Database, Brain, Terminal } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#fafafa] pt-32 pb-20 px-6">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">About Me</span>
                    <h1 className="text-5xl font-bold text-gray-900 mt-2 mb-6">
                        Driven by curiosity,<br />defined by code.
                    </h1>
                    <div className="flex flex-wrap gap-6 text-gray-600">
                        <div className="flex items-center gap-2">
                            <MapPin size={18} /> {personalInfo.location}
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            Open to Work
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Main Bio */}
                    <div className="md:col-span-2 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h2>
                            <p className="text-lg text-gray-600 leading-relaxed text-balance">
                                {personalInfo.bio}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h2>
                            <div className="space-y-4">
                                <GlassCard className="p-6 bg-white border-gray-200" hoverEffect={false}>
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                                            <Code size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 text-lg">Languages & Frameworks</h3>
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                {[...personalInfo.skills.programming, ...personalInfo.skills.frameworks].map(s => (
                                                    <span key={s} className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-700">{s}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </GlassCard>

                                <GlassCard className="p-6 bg-white border-gray-200" hoverEffect={false}>
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                                            <Brain size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 text-lg">AI & Data Engineering</h3>
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                {[...personalInfo.skills.aiml, ...personalInfo.skills.core].map(s => (
                                                    <span key={s} className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-700">{s}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </GlassCard>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Info */}
                    <div className="space-y-6">
                        <GlassCard className="bg-gray-900 text-white border-gray-800">
                            <h3 className="text-xl font-bold mb-4">Education</h3>
                            <div className="space-y-1">
                                <p className="font-semibold">{personalInfo.education.degree}</p>
                                <p className="text-gray-400 text-sm">{personalInfo.education.institution}</p>
                                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-800 text-sm">
                                    <span className="text-gray-400">{personalInfo.education.period}</span>
                                    <span className="font-bold text-emerald-400">GPA {personalInfo.education.cgpa}</span>
                                </div>
                            </div>
                        </GlassCard>

                        <div>
                            <h3 className="font-bold text-gray-900 mb-4 px-2">Certifications</h3>
                            <div className="space-y-3">
                                {personalInfo.certifications.map((cert, i) => (
                                    <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                        <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                                        <span className="text-sm font-medium text-gray-700">{cert}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
