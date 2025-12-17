'use client';

import { personalInfo } from '@/lib/data';
import { Trophy, GraduationCap, Award, MoveRight, Sparkles, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About({ id }: { id?: string }) {
    return (
        <section id={id} className="py-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Bio Column */}
                    <div>
                        <span className="text-accent font-bold tracking-widest uppercase text-xs flex items-center gap-2">
                            <Sparkles size={14} className="text-amber-400" />
                            About Me
                        </span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-6">
                            Engineering with purpose.
                        </h2>
                        <div className="prose text-gray-500 leading-relaxed text-balance mb-8">
                            <p>{personalInfo.bio}</p>
                            <p className="mt-4">
                                My approach combines deep technical understanding with a product-focused mindset, ensuring every line of code serves a purpose.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="relative inline-flex flex-col items-start gap-6">

                            {/* Explore Button */}
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all"
                            >
                                Explore My Work
                                <MoveRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </motion.a>

                            {/* Resume Button */}
                            <motion.a
                                href="https://drive.google.com/file/d/YOUR_RESUME_LINK_HERE/view?usp=sharing" // Placeholder
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-700 border border-gray-200 text-sm font-semibold rounded-full shadow-sm hover:shadow-md hover:text-gray-900 hover:border-gray-300 transition-all"
                            >
                                View Resume
                                <FileText size={16} />
                            </motion.a>

                            {/* Premium 3D Gradient Arrow */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="absolute top-2 left-full ml-8 hidden xl:block"
                            >
                                <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
                                    <defs>
                                        <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#cbd5e1" /> {/* Silver/Slate-300 */}
                                            <stop offset="50%" stopColor="#94a3b8" /> {/* Slate-400 */}
                                            <stop offset="100%" stopColor="#cbd5e1" /> {/* Silver/Slate-300 */}
                                        </linearGradient>
                                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                            <feMerge>
                                                <feMergeNode in="coloredBlur" />
                                                <feMergeNode in="SourceGraphic" />
                                            </feMerge>
                                        </filter>
                                    </defs>
                                    <path
                                        d="M10 30 C 40 10, 80 10, 100 30"
                                        stroke="url(#arrow-gradient)"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        className="drop-shadow-sm opacity-80"
                                    />
                                    <path
                                        d="M90 20 L 100 30 L 85 40"
                                        stroke="url(#arrow-gradient)"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <motion.span
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                    className="absolute -top-4 left-10 text-xs font-bold text-gray-400 tracking-wide uppercase"
                                >
                                    My Work
                                </motion.span>
                            </motion.div>
                        </div>
                    </div>



                    {/* Education & Achievements Column - Premium Redesign */}
                    <div className="space-y-8">

                        {/* Education Card - Premium Glass/Gradient */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="relative p-6 bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-white/20 ring-1 ring-gray-100 overflow-hidden group"
                        >
                            {/* Decorative Blur */}
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Left Accent Line */}
                            <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-r-full"></div>

                            <div className="flex gap-5 items-start pl-4"> {/* Added pl-4 for accent line */}
                                <div className="p-3.5 bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-600 rounded-xl shadow-inner ring-1 ring-emerald-100 group-hover:scale-110 transition-transform duration-300">
                                    <GraduationCap size={28} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-emerald-700 transition-colors">
                                        Education
                                    </h3>
                                    <p className="font-semibold text-gray-800 text-base mt-2">{personalInfo.education.degree}</p>
                                    <p className="text-sm text-gray-500 font-medium">{personalInfo.education.institution}</p>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        <span className="inline-flex items-center px-3 py-1 bg-emerald-100/50 border border-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
                                            CGPA: {personalInfo.education.cgpa}
                                        </span>
                                        <span className="inline-flex items-center px-3 py-1 bg-gray-50 text-gray-600 text-xs font-bold rounded-full border border-gray-200">
                                            2021 - 2025
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Achievements - Premium Widget Stack */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-gradient-to-br from-amber-50 to-orange-50 text-amber-600 rounded-lg ring-1 ring-amber-100 shadow-sm">
                                    <Trophy size={20} />
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg tracking-tight">Achievements</h3>
                            </div>

                            <div className="grid gap-3">
                                {personalInfo.certifications.map((cert, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 1)" }}
                                        className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/60 shadow-sm hover:shadow-md hover:border-amber-200/50 transition-all cursor-default group"
                                    >
                                        <div className="p-2 bg-gray-50 text-gray-400 rounded-full group-hover:bg-amber-50 group-hover:text-amber-500 transition-colors">
                                            <Award size={18} />
                                        </div>
                                        <span className="font-semibold text-gray-700 text-sm group-hover:text-gray-900 transition-colors">
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
