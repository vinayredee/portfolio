'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { useEffect, useState } from 'react';
import { ArrowDown, FileText } from 'lucide-react';

// Capsules - Adjusted Positions & Colors
const roles = [
    { text: "Full Stack Developer", top: "12%", left: "5%", delay: 0, color: "text-purple-600 border-purple-200 bg-purple-50/80" },
    { text: "AI Engineer", top: "22%", right: "0%", delay: 2, color: "text-emerald-600 border-emerald-200 bg-emerald-50/80" },
    { text: "System Architect", bottom: "15%", left: "-5%", delay: 4, color: "text-orange-600 border-orange-200 bg-orange-50/80" },
    { text: "Data Structures & Algorithms", bottom: "0%", right: "5%", delay: 3, color: "text-rose-600 border-rose-200 bg-rose-50/80" },
    { text: "• Actively Upskilling", top: "60%", right: "-5%", delay: 1, color: "text-gray-900 border-gray-300 bg-white/90" }, // Added dot, made Black
];

export default function Hero({ id }: { id?: string }) {
    const [greeting, setGreeting] = useState('Hello');
    const [timestamp, setTimestamp] = useState<number>(0);

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting('Good Morning');
        else if (hour < 18) setGreeting('Good Afternoon');
        else setGreeting('Good Evening');

        setTimestamp(new Date().getTime());
    }, []);

    return (
        <section id={id} className="relative flex items-center min-h-[85vh] pt-10 pb-10 overflow-hidden scroll-mt-28 md:scroll-mt-40">

            <div className="max-w-6xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* LEFT: Text Content */}
                {/* LEFT: Text Content - Refactored to Grid */}
                {/* LEFT: Text Content - Refactored to Grid of Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start z-10 font-sans">

                    {/* Cell 1: Greeting Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:col-span-1 justify-self-start"
                    >
                        <span className="bg-white/80 backdrop-blur-sm border border-white/60 text-slate-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">
                            {greeting}, Welcome
                        </span>
                    </motion.div>

                    {/* Cell 2: Welcome Card - Glass Effect */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/40 backdrop-blur-md border border-white/30 p-5 rounded-2xl shadow-sm md:col-span-1"
                    >
                        <p className="text-slate-600 text-sm leading-relaxed font-medium">
                            Thanks for spending time to visit my portfolio. <br className="hidden md:block" />
                            This is where my <span className="text-slate-900 font-bold">learning, logic, and passion</span> for building meaningful software come together.
                        </p>
                    </motion.div>

                    {/* Cell 3: Identity Card - Premium Glass Block */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/70 backdrop-blur-xl border border-white/50 p-8 rounded-[2rem] shadow-xl shadow-indigo-100/30 md:col-span-2 relative overflow-hidden group hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500"
                    >
                        {/* Decorative Gradient Blob */}
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-50/50 rounded-full blur-3xl group-hover:bg-indigo-100/50 transition-colors duration-500"></div>

                        {/* Vertical Accent Line */}
                        <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-r-full"></div>

                        <div className="relative z-10 pl-6">
                            <span className="block text-indigo-600 text-xs tracking-[0.3em] font-bold uppercase mb-1">
                                I am
                            </span>
                            <h1 className="text-lg sm:text-xl md:text-2xl font-black text-orange-400 tracking-tight mb-2">
                                {personalInfo.name}
                            </h1>
                            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-lg font-medium">
                                Architecting seamless digital experiences with <span className="text-indigo-600 font-bold">AI-driven precision</span> and scalable design.
                            </p>
                        </div>
                    </motion.div>

                    {/* Cell 4: Start Exploring - Static Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-3 text-sm font-bold text-slate-900 tracking-wider uppercase md:col-span-2 ml-2 cursor-default"
                    >
                        <span className="border-b border-slate-300 pb-1">Start Exploring</span>
                        <ArrowDown size={18} />
                    </motion.div>
                </div>

                {/* RIGHT: Photo + Capsules */}
                <div className="relative flex justify-center items-center h-[400px]">

                    {/* The Photo Container - Adjusted for Big Photo + Gap */}
                    <div className="relative w-60 h-60 md:w-72 md:h-72 flex justify-center items-center">

                        {/* Rotating Text Ring - Thinner & Smaller & Slower */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 z-0 w-full h-full"
                        >
                            <svg viewBox="0 0 200 200" className="w-full h-full">
                                <defs>
                                    <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                                </defs>
                                <text fontSize="9" fontWeight="bold" letterSpacing="3.8">
                                    <textPath href="#circlePath" startOffset="0%">
                                        <tspan fill="#d97706">Software Development Engineer   •   </tspan>
                                        <tspan fill="#000000">Artificial Intelligence   •   </tspan>
                                    </textPath>
                                </text>
                            </svg>
                        </motion.div>

                        {/* The Photo - Size retained as requested */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-36 h-36 md:w-44 md:h-44 z-10 p-1 bg-white rounded-full shadow-xl"
                        >
                            <img
                                src={timestamp ? `/me.png?v=${timestamp}` : '/me.png'}
                                alt="Vinay"
                                className="w-full h-full object-cover rounded-full"
                                onError={(e) => {
                                    e.currentTarget.src = "https://ui-avatars.com/api/?name=Vinay+Kumar&background=random&size=400";
                                }}
                            />
                        </motion.div>
                    </div>

                    {/* The Capsules */}
                    {roles.map((role) => (
                        <motion.div
                            key={role.text}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                            transition={{
                                opacity: { delay: role.delay * 0.2, duration: 0.5 },
                                scale: { delay: role.delay * 0.2, duration: 0.5 },
                                y: { repeat: Infinity, duration: 1.8, ease: "easeInOut", delay: role.delay }
                            }}
                            className={`absolute px-3 py-1.5 rounded-full shadow-sm border backdrop-blur-sm text-[10px] md:text-xs font-bold whitespace-nowrap z-20 ${role.color}`}
                            style={{
                                top: role.top,
                                left: role.left,
                                right: role.right,
                                bottom: role.bottom
                            }}
                        >
                            {role.text}
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
