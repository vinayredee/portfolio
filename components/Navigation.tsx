'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Mail, Menu, X, Code2, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
    { name: 'Home', href: 'home', icon: Home },
    { name: 'About', href: 'about', icon: User },
    { name: 'Skills', href: 'skills', icon: Zap },
    { name: 'Projects', href: 'projects', icon: Briefcase },
    { name: 'Profiles', href: 'profiles', icon: Code2 },
    { name: 'Contact', href: 'contact', icon: Mail },
];

export default function Navigation() {
    const [activeSection, setActiveSection] = useState('home');
    const [isOpen, setIsOpen] = useState(false);

    // Scroll Spy Logic
    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => document.getElementById(link.href));
            const scrollPosition = window.scrollY + 200; // Offset

            for (const section of sections) {
                if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                    setActiveSection(section.id);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <>
            {/* Universal Floating Dock (Visible on All Screens) */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
                className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-1 p-1.5 bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/5 rounded-full ring-1 ring-black/5"
            >
                {navLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = activeSection === link.href;

                    return (
                        <a
                            key={link.name}
                            href={`#${link.href}`}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className={cn(
                                "relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer",
                                isActive ? "text-white" : "text-gray-600 hover:text-gray-900 hover:bg-black/5"
                            )}
                        >
                            {/* Icon only on Mobile, Text on Desktop */}
                            <span className="relative z-10 flex items-center gap-1.5">
                                <Icon size={14} strokeWidth={2.5} />
                                <span className="hidden md:inline">{link.name}</span>
                            </span>

                            {isActive && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-gray-900 rounded-full z-0"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </a>
                    );
                })}
            </motion.div>

        </>
    );
}
