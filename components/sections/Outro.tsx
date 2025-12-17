'use client';
import { motion } from 'framer-motion';

export default function Outro() {
    return (
        <section className="py-10 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[300px]">

                    {/* Tile 1: "Yes, This Is Me" - Personal Statement */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="md:col-span-7 bg-gradient-to-br from-violet-100 via-indigo-50 to-purple-100 rounded-[2rem] p-6 md:p-10 flex flex-col justify-between relative overflow-hidden group shadow-lg border border-white/60"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-white/40 rounded-full blur-[60px] -mr-12 -mt-12 transition-colors duration-700"></div>

                        <div>
                            <p className="text-indigo-600 font-bold tracking-widest text-[10px] uppercase mb-2">The Creator</p>
                            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-none text-indigo-950">
                                YES, <br /> THIS IS ME.
                            </h2>
                        </div>

                        <div className="mt-4 md:mt-0">
                            <p className="text-indigo-900/70 text-xs md:text-sm font-medium leading-relaxed max-w-md">
                                "Architecting the invisible. Engineering the impossible. Leaving a legacy in every line of code."
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column Stack */}
                    <div className="md:col-span-5 flex flex-col gap-4">

                        {/* Tile 2: Thank You */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex-1 bg-gradient-to-br from-sky-50 via-blue-50 to-white rounded-[2rem] p-4 flex items-center justify-center text-center border border-white/60 relative overflow-hidden group hover:border-blue-200 transition-colors shadow-lg"
                        >
                            <div className="absolute inset-0 bg-grid-slate-500/[0.05] [mask-image:linear-gradient(0deg,white,transparent)]"></div>
                            <div className="relative z-10 cancel-drag"> {/* added cancel-drag just in case, typical for framer motion if draggable, but here it's fine */}
                                <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-0.5">Thank You.</h3>
                                <p className="text-slate-500 text-[10px] md:text-xs">For visiting my portfolio.</p>
                            </div>
                        </motion.div>

                        {/* Tile 3: The End */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="flex-1 bg-gradient-to-br from-rose-100 via-pink-100 to-fuchsia-100 rounded-[2rem] p-4 flex items-center justify-center text-center relative overflow-hidden group shadow-lg border border-white/60"
                        >
                            <div className="absolute inset-0 opacity-20 pointer-events-none">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-50 blur-xl group-hover:scale-150 transition-transform duration-1000"></div>
                            </div>

                            <h3 className="relative z-10 text-3xl md:text-5xl font-black text-rose-950 tracking-widest uppercase italic drop-shadow-sm">
                                THE END
                            </h3>
                        </motion.div>

                    </div>

                </div>

            </div>
        </section>
    );
}
