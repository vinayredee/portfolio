'use client';

import { Code, Server, Cpu, Wrench, Globe, Database, Coffee, Terminal, Cloud, Layers, Box, GitBranch, Github, Code2, Zap, Palette, FileCode, Workflow, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

// Manual Categorization with Standard Lucide Icons (Guaranteed Visibility)
const skillCategories = [
    {
        title: "Frontend",
        icon: Code,
        color: "text-blue-600",
        bg: "bg-blue-50",
        skills: [
            { name: "React.js", icon: Code2 },
            { name: "Next.js", icon: Globe },
            { name: "Tailwind", icon: Palette },
            { name: "Streamlit", icon: Layers },
            { name: "HTML5", icon: FileCode }
        ]
    },
    {
        title: "Backend",
        icon: Server,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        skills: [
            { name: "Spring Boot", icon: Zap },
            { name: "Java", icon: Coffee },
            { name: "Python", icon: Terminal },
            { name: "PostgreSQL", icon: Database },
            { name: "REST APIs", icon: Cloud }
        ]
    },
    {
        title: "DevOps & Tools",
        icon: Wrench,
        color: "text-orange-600",
        bg: "bg-orange-50",
        skills: [
            { name: "Docker", icon: Box },
            { name: "Git", icon: GitBranch },
            { name: "GitHub", icon: Github },
            { name: "VS Code", icon: Terminal },
            { name: "Postman", icon: Workflow }
        ]
    },
    {
        title: "AI & Core",
        icon: Cpu,
        color: "text-purple-600",
        bg: "bg-purple-50",
        skills: [
            { name: "Gen AI", icon: Sparkles },
            { name: "LLMs", icon: Cpu },
            { name: "DSA", icon: Code2 },
            { name: "System Design", icon: Layers }
        ]
    }
];

export default function Skills({ id }: { id?: string }) {
    return (
        <section id={id} className="py-12 md:py-16 px-6 relative overflow-hidden scroll-mt-24">

            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/40 rounded-full blur-[100px] pointer-events-none -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-[100px] pointer-events-none -ml-20 -mb-20"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="flex flex-col md:flex-row justify-between items-end mb-4 gap-4 px-4">
                    <div>
                        <span className="text-accent font-bold tracking-widest uppercase text-[10px] flex items-center gap-2 mb-1.5">
                            <span className="w-6 h-[2px] bg-indigo-500 rounded-full"></span>
                            Expertise
                        </span>
                        <h2 className="text-base md:text-lg font-bold text-gray-900 tracking-tight mb-0.5">
                            Technical <span className="text-indigo-600">Artillery</span>.
                        </h2>
                        <p className="text-gray-500 text-[10px] md:text-xs max-w-lg leading-relaxed">
                            A versatile tech stack built for scalability, performance, and innovation.
                        </p>
                    </div>

                    {/* Impressive Tech Stat / Element */}
                    <div className="flex items-center gap-2">
                        <div className="px-3 py-1 bg-gray-900 text-white rounded-full flex items-center gap-2 shadow-lg shadow-indigo-500/20">
                            <Sparkles size={12} className="text-yellow-400" />
                            <span className="text-[10px] font-bold uppercase tracking-wider">Engineering Excellence</span>
                        </div>
                    </div>
                </div>

                {/* Central Connected Hub Layout - UNIFIED MOBILE & DESKTOP */}
                <div className="relative w-full max-w-5xl mx-auto py-1 flex items-center justify-center">

                    {/* Connection Lines Layer (SVG) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-50 md:opacity-100">
                        <line x1="50%" y1="50%" x2="20%" y2="25%" className="stroke-indigo-200 stroke-1" strokeDasharray="4 4" />
                        <line x1="50%" y1="50%" x2="80%" y2="25%" className="stroke-indigo-200 stroke-1" strokeDasharray="4 4" />
                        <line x1="50%" y1="50%" x2="20%" y2="75%" className="stroke-indigo-200 stroke-1" strokeDasharray="4 4" />
                        <line x1="50%" y1="50%" x2="80%" y2="75%" className="stroke-indigo-200 stroke-1" strokeDasharray="4 4" />
                        <circle cx="50%" cy="50%" r="40" className="fill-indigo-50/40 blur-xl" />
                    </svg>

                    {/* Central Hub Node - Visible on ALL Screens */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center">
                        <div className="relative w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-xl border-4 border-white flex items-center justify-center z-20 ring-2 ring-indigo-50">
                            <div className="text-center">
                                <span className="block text-sm md:text-base mb-0.5">🚀</span>
                                <span className="text-[5px] md:text-[6px] font-black uppercase tracking-widest text-indigo-900 block leading-tight">Core</span>
                            </div>
                            {/* Orbiting Particles Section - Enhanced Motion */}
                            <div className="absolute inset-0 rounded-full border border-indigo-100 animate-[spin_4s_linear_infinite]">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-500 rounded-full shadow-md"></div>
                            </div>
                            <div className="absolute inset-0 rounded-full border border-dashed border-indigo-200 animate-[spin_8s_linear_infinite_reverse] opacity-50"></div>
                        </div>
                    </div>

                    {/* 2x2 Grid - Consistently Applied */}
                    <div className="grid grid-cols-2 gap-x-2 gap-y-2 md:gap-x-12 md:gap-y-4 w-full relative z-10 px-2 md:px-0">
                        {skillCategories.map((cat, idx) => (
                            <motion.div
                                key={cat.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`flex ${idx % 2 === 0 ? 'justify-end' : 'justify-start'}`}
                            >
                                <motion.div
                                    whileHover={{ y: -2 }}
                                    className="relative w-full max-w-[340px] bg-white rounded-xl p-2.5 md:p-3 shadow-md shadow-indigo-100/50 border border-white overflow-hidden group hover:shadow-xl transition-all duration-300"
                                >
                                    {/* Watermark */}
                                    <div className={`absolute -right-6 -bottom-6 ${cat.color} opacity-[0.08] group-hover:opacity-[0.12] transition-opacity rotate-12`}>
                                        <cat.icon size={80} className="md:w-[140px] md:h-[140px]" />
                                    </div>

                                    {/* Header Row */}
                                    <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2 border-b border-gray-50 pb-1.5">
                                        <div className={`w-5 h-5 md:w-7 md:h-7 ${cat.bg} ${cat.color} rounded-lg flex items-center justify-center shadow-sm`}>
                                            <cat.icon size={10} className="md:w-3.5 md:h-3.5" />
                                        </div>
                                        <div>
                                            <h3 className="text-[9px] md:text-[11px] font-bold uppercase tracking-wider text-gray-800">{cat.title}</h3>
                                            <div className={`h-0.5 w-6 md:w-8 bg-${cat.color.replace('text-', '').replace('-600', '-400')} rounded-full mt-0.5`}></div>
                                        </div>
                                    </div>

                                    {/* Skills Grid - Filling Width */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 md:gap-2 relative z-10">
                                        {cat.skills.map((skill) => (
                                            <div key={skill.name} className="flex items-center gap-1.5 p-1 md:p-1.5 rounded hover:bg-gray-50 transition-colors cursor-default border border-transparent hover:border-gray-100">
                                                <skill.icon size={10} className={`${cat.color} opacity-80 md:w-3 md:h-3`} />
                                                <span className="text-[8px] md:text-[10px] font-medium text-gray-600 truncate">{skill.name}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Left decorative bar */}
                                    <div className={`absolute left-0 top-4 bottom-4 w-0.5 md:w-1 rounded-r-full bg-${cat.color.replace('text-', '').replace('-600', '-500')} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
