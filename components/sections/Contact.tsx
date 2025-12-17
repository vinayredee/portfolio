'use client';

import { personalInfo } from '@/lib/data';
import { Mail, MapPin, ArrowUpRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function Contact({ id }: { id?: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText(personalInfo.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id={id} className="py-16 md:py-24 px-6 scroll-mt-20 relative overflow-hidden">


            <div className="max-w-4xl mx-auto text-center relative z-10">

                <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Available for New Opportunities
                    </div>

                    <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-2">
                        Let's create something <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">legendary.</span>
                    </h2>
                    <p className="text-gray-500 text-xs md:text-base max-w-xl mx-auto">
                        I'm always open to discussing product design work or partnership opportunities.
                    </p>
                </div>

                {/* Email Card - Single & Centered */}
                <div className="group relative bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-xl hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500 overflow-hidden max-w-xl mx-auto text-left">
                    <div className="absolute top-0 right-0 p-6 opacity-[0.05] group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500 pointer-events-none">
                        <Mail size={100} />
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform shrink-0">
                                <Mail size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-0.5">Send me an email</h3>
                                <p className="text-gray-500 text-xs">Fastest way to reach me.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 w-full md:w-auto">
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="flex-1 md:flex-none justify-center px-5 py-2.5 rounded-xl bg-gray-900 text-white font-bold text-xs tracking-wide hover:bg-black transition-colors flex items-center gap-2 shadow-lg shadow-gray-900/20"
                            >
                                Email Me <ArrowUpRight size={14} />
                            </a>
                            <button
                                onClick={handleCopy}
                                className="px-3.5 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-xs hover:border-gray-900 hover:text-gray-900 transition-colors flex items-center gap-2 bg-white"
                            >
                                {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                                {copied ? 'Copied' : 'Copy'}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex items-center justify-center gap-2 text-gray-400 font-medium text-xs">
                    <MapPin size={14} /> Based in India • Available Worldwide
                </div>

            </div>
        </section>
    );
}
