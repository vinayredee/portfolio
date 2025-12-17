import { Trophy, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export const AchievementsList = ({ certifications }: { certifications: string[] }) => (
    <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
                <Trophy size={20} />
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Key Achievements</h3>
        </div>

        <div className="grid gap-3">
            {certifications.map((cert, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 5, backgroundColor: "rgba(255, 251, 235, 0.8)" }} // Amber-50
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                >
                    <div className="p-2 bg-gray-50 text-amber-500 rounded-full group-hover:bg-amber-100 group-hover:scale-110 transition-all">
                        <Award size={18} />
                    </div>
                    <span className="font-medium text-gray-700 text-sm group-hover:text-gray-900 transition-colors">
                        {cert}
                    </span>
                </motion.div>
            ))}
        </div>
    </div>
);
