'use client';

import { Github, Linkedin, ExternalLink, Code2, Terminal, Trophy, Users, GitCommit, LineChart } from 'lucide-react';
import { personalInfo } from '@/lib/data';

const profiles = [
    {
        name: 'LeetCode',
        url: 'https://leetcode.com/u/Vinay_reddy_71/',
        icon: Code2,
        color: 'text-yellow-500',
        gradient: 'from-yellow-400 to-orange-500',
        bg: 'bg-yellow-50',
        stats: '400+ Problems Solved',
        subStats: 'Top 15% Global Rank',
        action: 'View Solutions'
    },
    {
        name: 'takeuforward',
        url: 'https://takeuforward.org/profile/vinay_reddy',
        icon: LineChart,
        color: 'text-rose-600',
        gradient: 'from-rose-500 to-red-600',
        bg: 'bg-rose-50',
        stats: 'DSA Proficiency',
        subStats: 'Structured Learning',
        action: 'View Profile'
    },
    {
        name: 'GitHub',
        url: personalInfo.github,
        icon: Github,
        color: 'text-gray-900',
        gradient: 'from-gray-700 to-black',
        bg: 'bg-gray-50',
        stats: 'Open Source Contributor',
        subStats: 'Active Repositories',
        action: 'Follow Code'
    },
    {
        name: 'LinkedIn',
        url: personalInfo.linkedin,
        icon: Linkedin,
        color: 'text-blue-600',
        gradient: 'from-blue-500 to-indigo-600',
        bg: 'bg-blue-50',
        stats: 'Professional Network',
        subStats: 'Let\'s Connect',
        action: 'Connect Now'
    },
];

export default function Profiles({ id }: { id?: string }) {
    return (
        <section id={id} className="py-20 px-6 scroll-mt-20 relative overflow-hidden flex flex-col">

            {/* Background Decoration */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" style={{ stopColor: 'rgb(99, 102, 241)', stopOpacity: 0.1 }} />
                    <stop offset="100%" style={{ stopColor: 'rgb(255, 255, 255)', stopOpacity: 0 }} />
                </radialGradient>
                <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -ml-32 -mb-32"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full my-auto">

                <div className="text-center mb-12">
                    <span className="text-xs font-bold tracking-[0.2em] text-indigo-600 uppercase mb-3 block">
                        Connect & Code
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                        Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Footprint</span>.
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
                        My code lives on <span className="text-gray-900 font-semibold">GitHub</span>, my challenges are solved on <span className="text-yellow-600 font-semibold">LeetCode</span>, my DSA skills are sharpened on <span className="text-rose-600 font-semibold">takeuforward</span>, and my professional journey unfolds on <span className="text-blue-600 font-semibold">LinkedIn</span>.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                    {profiles.map((profile, idx) => (
                        <a
                            key={profile.name}
                            href={profile.url}
                            target="_blank"
                            className="group relative bg-white rounded-xl md:rounded-2xl p-0.5 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-100/50 border border-gray-100 flex flex-col h-full"
                        >
                            {/* Gradient Border Line (Top) */}
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${profile.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                            <div className="relative flex-grow flex flex-col p-3 md:p-4 z-10 bg-gradient-to-b from-white to-gray-50/30 group-hover:to-white transition-colors rounded-lg md:rounded-xl">

                                {/* Watermark Icon - Brightened & Compact */}
                                <div className={`absolute -right-4 -bottom-4 md:-right-6 md:-bottom-6 ${profile.color} opacity-10 group-hover:opacity-15 transition-opacity rotate-12 pointer-events-none`}>
                                    <profile.icon className="w-20 h-20 md:w-28 md:h-28" />
                                </div>

                                {/* Header: Icon + Name */}
                                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3 md:mb-5">
                                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg ${profile.bg} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                        <profile.icon className={`w-4 h-4 md:w-5 md:h-5 ${profile.color}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-xs md:text-sm font-bold text-gray-900 leading-tight mb-0.5">{profile.name}</h3>
                                        <span className="text-[9px] md:text-[10px] uppercase font-bold text-gray-400 tracking-wider hidden md:block">Profile</span>
                                    </div>
                                </div>

                                {/* Stats Block */}
                                <div className="mb-4 md:mb-6 flex-grow">
                                    <div className="text-xs md:text-sm font-black text-gray-900 leading-tight mb-1 md:mb-2">
                                        {profile.stats.split(' ')[0]}
                                        <span className="block text-[10px] md:text-xs text-gray-500 font-normal mt-0.5 md:mt-1 leading-tight">
                                            {profile.stats.split(' ').slice(1).join(' ')}
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-[9px] md:text-[11px] font-bold uppercase tracking-wider text-gray-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                                        <Trophy size={10} className="md:w-3 md:h-3" /> {profile.subStats}
                                    </div>
                                </div>

                                {/* Action Button */}
                                <div className={`w-full py-1.5 md:py-2.5 flex items-center justify-center gap-1.5 text-[9px] md:text-[11px] font-bold uppercase tracking-wider rounded-lg border border-dashed border-gray-300 group-hover:border-${profile.color.split('-')[1]}-400 group-hover:bg-${profile.color.split('-')[1]}-50 transition-all ${profile.color} mt-auto`}>
                                    <span className="hidden md:inline">{profile.action}</span>
                                    <span className="md:hidden">View</span> <ExternalLink size={10} className="md:w-3 md:h-3" />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
