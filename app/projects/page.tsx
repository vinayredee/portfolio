'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import GlassCard from '@/components/ui/GlassCard';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-[#fafafa] pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                        Featured <span className="text-gray-400">Work</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl">
                        A selection of projects that showcase my passion for building scalable full-stack applications and AI solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <GlassCard
                            key={project.id}
                            className="flex flex-col h-full p-0 overflow-hidden group border-gray-200 bg-white"
                            hoverEffect={true}
                        >
                            {/* Visual Placeholder / Banner */}
                            <div className={`h-64 relative w-full p-8 flex flex-col justify-between overflow-hidden
                ${index === 0 ? 'bg-gradient-to-br from-gray-900 to-gray-800' :
                                    index === 1 ? 'bg-gradient-to-br from-indigo-600 to-blue-700' :
                                        'bg-gradient-to-br from-emerald-600 to-teal-700'}`}
                            >
                                <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

                                <div className="relative z-10 flex justify-between items-start">
                                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white/90 text-xs font-medium border border-white/10">
                                        {project.category}
                                    </span>
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors">
                                            <ArrowUpRight size={20} />
                                        </a>
                                    )}
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-white text-3xl font-bold leading-tight">{project.title}</h3>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-grow flex flex-col">
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-sm font-medium">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 pt-6 border-t border-gray-100">
                                        {project.liveUrl && (
                                            <a href={project.liveUrl} target="_blank" className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                                                <ExternalLink size={18} /> Live Demo
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} target="_blank" className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                                                <Github size={18} /> Source Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </div>
    );
}
