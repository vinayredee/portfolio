'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/lib/data';
import GlassCard from '@/components/ui/GlassCard';
import { X, Github, ExternalLink, ArrowRight, Bot, Landmark, BrainCircuit, Sparkles, Building2, Scale } from 'lucide-react';

const projectVisuals: Record<string, { icon: any, gradient: string, color: string }> = {
    "ai-legal-assistant": {
        icon: Scale,
        gradient: "from-rose-500 to-orange-600",
        color: "text-rose-600"
    },
    "digital-public-seva": {
        icon: Landmark,
        gradient: "from-emerald-500 to-teal-600",
        color: "text-emerald-600"
    },
    "smart-ai-hub": {
        icon: BrainCircuit,
        gradient: "from-blue-500 to-cyan-600",
        color: "text-blue-600"
    }
};

export default function Projects({ id }: { id?: string }) {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const selectedProject = projects.find(p => p.id === selectedId);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedId) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedId]);

    return (
        <section id={id} className="py-24 px-6 relative overflow-hidden">

            {/* Added Colorful Blob Background */}
            <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl pointer-events-none -ml-40"></div>
            <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -mr-40"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <span className="text-accent font-bold tracking-widest uppercase text-xs">Featured Works</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Selected Projects.</h2>
                    </div>
                    <p className="text-gray-500 max-w-xl text-sm md:text-base leading-relaxed">
                        Building digital experiences that matter requires more than just code—it demands vision.
                        Here is how I turn complex problems into <span className="text-gray-900 font-semibold">elegant, production-ready solutions</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => {
                        const Visual = projectVisuals[project.id] || { icon: Sparkles, gradient: "from-gray-500 to-gray-700", color: "text-gray-600" };
                        const Icon = Visual.icon;

                        return (
                            <motion.div
                                key={project.id}
                                className="group relative h-full"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ y: -5 }}
                            >
                                <motion.div
                                    layoutId={`card-container-${project.id}`}
                                    onClick={() => setSelectedId(project.id)}
                                    // Compact Card Styling
                                    className="h-full flex flex-col bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 overflow-hidden cursor-pointer"
                                >
                                    {/* 1. COMPACT VISUAL HEADER */}
                                    <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${Visual.gradient}`}>
                                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/40 to-transparent"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <motion.div
                                                animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
                                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                                className="relative z-10 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg"
                                            >
                                                <Icon size={40} className="text-white drop-shadow-md" />
                                            </motion.div>
                                        </div>
                                        <div className="absolute top-4 left-4 z-20">
                                            <span className="px-2.5 py-1 bg-black/20 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-widest rounded-full border border-white/10">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* 2. MINIMAL BODY */}
                                    <div className="p-6 flex flex-col flex-grow text-center items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                                                {project.title}
                                            </h3>
                                        </div>

                                        {/* "View Details" Button */}
                                        <div className={`mt-4 px-4 py-2 bg-gray-50 group-hover:bg-${Visual.color.split('-')[1]}-50 text-gray-600 group-hover:${Visual.color} rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300`}>
                                            View Details <ArrowRight size={14} />
                                        </div>
                                    </div>

                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>


                {/* Modal */}
                <AnimatePresence>
                    {selectedId && selectedProject && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="absolute inset-0 bg-white/80 backdrop-blur-md"
                            />
                            <motion.div
                                layoutId={`card-container-${selectedId}`}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.4, ease: "circOut" }}
                                className="w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl relative z-10 max-h-[85vh] flex flex-col ring-1 ring-black/5"
                            >
                                {/* Modal Header */}
                                <div className="relative h-48 bg-gray-900 flex items-end p-8 md:p-10 shrink-0">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${projectVisuals[selectedId]?.gradient || "from-gray-800 to-black"} opacity-100`}></div>
                                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]"></div>

                                    <div className="relative z-10 w-full flex items-end justify-between">
                                        <div>
                                            <motion.span layoutId={`card-category-${selectedId}`} className="text-white/80 font-bold uppercase tracking-wider text-xs mb-2 block">
                                                {selectedProject.category}
                                            </motion.span>
                                            <motion.h3 layoutId={`card-title-${selectedId}`} className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                                {selectedProject.title}
                                            </motion.h3>
                                        </div>
                                        {/* Icon in Modal Header */}
                                        <div className="flex flex-col items-end gap-3 z-20">
                                            <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hidden md:block">
                                                {(() => {
                                                    const Icon = projectVisuals[selectedId]?.icon || Sparkles;
                                                    return <Icon size={40} className="text-white" />;
                                                })()}
                                            </div>

                                            {/* Top Live Demo Button */}
                                            {selectedProject.liveUrl && (
                                                <a
                                                    href={selectedProject.liveUrl}
                                                    target="_blank"
                                                    className="flex items-center gap-2 px-5 py-2 bg-white text-gray-900 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-indigo-50 transition-all shadow-lg transform hover:scale-105"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <ExternalLink size={14} /> Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <button
                                        onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                        className="absolute top-4 right-4 p-2 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all z-50 shadow-lg hover:scale-110"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                {/* Modal Content - Scrollable */}
                                <div className="p-8 md:p-10 overflow-y-auto bg-white custom-scrollbar">
                                    <div className="space-y-8">

                                        {/* Description */}
                                        <div>
                                            <h4 className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                                                <span className="w-6 h-[2px] bg-indigo-600 rounded-full"></span>
                                                Overview
                                            </h4>
                                            <p className="text-gray-600 text-base leading-relaxed">
                                                {selectedProject.longDescription}
                                            </p>
                                        </div>

                                        {/* Tech Stack */}
                                        <div>
                                            <h4 className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                                                <span className="w-6 h-[2px] bg-indigo-600 rounded-full"></span>
                                                Technologies
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.tech.map(t => (
                                                    <span key={t} className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-xs font-bold border border-gray-100 shadow-sm">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Links */}
                                        <div className="space-y-3 pt-6 border-t border-gray-100">
                                            {/* Live Demo moved to top header */}

                                            {selectedProject.githubUrl && (
                                                <a href={selectedProject.githubUrl} target="_blank" className="flex-1 flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 text-gray-900 rounded-xl font-bold text-sm hover:bg-gray-50 hover:border-gray-300 transition-all">
                                                    <Github size={16} /> Source Code
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
