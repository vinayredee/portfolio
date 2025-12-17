import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export const EducationCard = ({ education }: { education: any }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="relative p-6 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden group cursor-default"
    >
        {/* Gradient Decoration */}
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-emerald-400 to-teal-600"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="flex gap-5 items-start">
            <div className="p-4 bg-emerald-50 text-emerald-600 rounded-xl shadow-inner group-hover:scale-110 transition-transform duration-300">
                <GraduationCap size={28} />
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-emerald-700 transition-colors">
                            {education.degree}
                        </h3>
                        <p className="font-medium text-gray-600 text-sm mt-1">{education.institution}</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                    <span className="inline-flex items-center px-3 py-1 bg-emerald-100/50 border border-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
                        CGPA: {education.cgpa}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full border border-gray-200">
                        2021 - 2025
                    </span>
                </div>
            </div>
        </div>
    </motion.div>
);
