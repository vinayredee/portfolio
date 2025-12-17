'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

type GlassCardProps = ComponentProps<typeof motion.div> & {
    hoverEffect?: boolean;
};

export default function GlassCard({
    children,
    className,
    hoverEffect = true,
    ...props
}: GlassCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className={cn(
                "bg-white border border-gray-200 rounded-xl p-6 relative overflow-hidden transition-all duration-300",
                hoverEffect && "hover:border-gray-400 hover:shadow-sm",
                className
            )}
            {...props}
        >
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
}
