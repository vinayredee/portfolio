'use client';

import { personalInfo } from '@/lib/data';
import { Trophy, GraduationCap, Award, MoveRight, Sparkles, FileText, ArrowDownRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About({ id }: { id?: string }) {
    return (
        <section id={id} className="py-24 px-6 relative overflow-hidden bg-slate-50/30">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-grid-slate-200/[0.04] [mask-image:linear-gradient(0deg,white,transparent)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left Column: Bio & Identity - Engineered Look */}
                    <div className="relative">
                        {/* Decorative Axis Line */}
                        <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-indigo-200 to-transparent"></div>

                        <div className="pl-8 md:pl-10">
                            {/* Label */}
                            <span className="inline-flex items-center gap-2 text-indigo-600 font-bold tracking-[0.2em] uppercase text-xs mb-6">
                                <Sparkles size={14} className="text-indigo-500" />
                                About Me
                            </span>

                            {/* Headline */}
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-8">
                                Engineering with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">purpose</span>.
                            </h2>

                            {/* Bio Text - Refactored into Card */}
                            <div className="bg-white/60 backdrop-blur-md border border-indigo-100/50 rounded-2xl p-6 shadow-sm mb-10 hover:shadow-md transition-shadow duration-300">
                                <div className="space-y-4 text-slate-600 text-sm leading-relaxed font-medium text-balance">
                                    <p>{personalInfo.bio}</p>
                                    <p>
                                        My approach combines deep technical understanding with a product-focused mindset, ensuring every line of code serves a purpose.
                                    </p>
                                </div>
                            </div>

                            {/* CTA Buttons - Horizontal Layout: Explore → Arrow → Resume */}
                            <div className="relative inline-flex flex-row items-center gap-6 flex-wrap">
                                {/* Explore Button */}
                                <motion.a
                                    href="#projects"
                                    whileHover={{ scale: 1.02 }}
                                    className="group inline-flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wider"
                                >
                                    <span className="border-b-2 border-slate-900 pb-0.5 group-hover:border-indigo-600 group-hover:text-indigo-600 transition-colors">
                                        Explore My Work
                                    </span>
                                </motion.a>

                                {/* L-Shaped Arrow (Right then Down) */}
                                <svg width="60" height="48" viewBox="0 0 60 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500">
                                    <path d="M2 2H52V44M52 44L46 38M52 44L58 38" />
                                </svg>

                                {/* Resume Button */}
                                <motion.a
                                    href="https://drive.google.com/file/d/YOUR_RESUME_LINK_HERE/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02 }}
                                    className="group inline-flex items-center gap-2 text-sm font-bold text-slate-500 uppercase tracking-wider hover:text-slate-800 transition-colors"
                                >
                                    <span className="border-b border-transparent group-hover:border-slate-400 pb-0.5 transition-colors">
                                        View Resume
                                    </span>
                                    <FileText size={16} className="text-slate-400 group-hover:text-slate-600 transition-colors" />
                                </motion.a>
                            </div>
                        </div>
                    </div>


                    {/* Right Column: Education & Achievements */}
                    <div className="space-y-8 relative">
                        {/* Blob Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-50/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>

                        {/* Education Card - Premium Glass (Compact) */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="relative p-6 bg-white/80 backdrop-blur-xl rounded-[1.5rem] shadow-xl shadow-indigo-100/40 border border-white/60 overflow-hidden group"
                        >
                            {/* Accent Gradient */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500 opacity-80"></div>

                            <div className="flex gap-4 items-start">
                                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl group-hover:scale-110 transition-transform duration-500 shadow-sm">
                                    <GraduationCap size={24} strokeWidth={1.5} />
                                </div>
                                <div className="flex-1 space-y-1.5">
                                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">Education</span>
                                    <h3 className="font-bold text-lg text-slate-900 leading-tight">
                                        {personalInfo.education.degree}
                                    </h3>
                                    <p className="text-slate-500 text-sm font-medium">{personalInfo.education.institution}</p>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        <span className="inline-flex items-center px-2.5 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-full">
                                            CGPA: {personalInfo.education.cgpa}
                                        </span>
                                        <span className="inline-flex items-center px-2.5 py-0.5 bg-white border border-slate-200 text-slate-400 text-[10px] font-bold rounded-full">
                                            2021 - 2025
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Achievements - Clean Stack (Compact) */}
                        <div className="space-y-4 pl-1">
                            <div className="flex items-center gap-2 mb-2">
                                <Trophy size={16} className="text-amber-500" />
                                <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Key Achievements</h3>
                            </div>

                            <div className="grid gap-3">
                                {personalInfo.certifications.map((cert, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        whileHover={{ x: 5 }}
                                        className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all group"
                                    >
                                        <div className="mt-0.5 p-1 bg-amber-50 text-amber-500 rounded-full group-hover:bg-indigo-50 group-hover:text-indigo-500 transition-colors">
                                            <Award size={14} />
                                        </div>
                                        <span className="font-semibold text-slate-600 text-xs leading-relaxed group-hover:text-slate-900 transition-colors">
                                            {cert}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
