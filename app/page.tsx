'use client';

import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('@/components/sections/Hero'), { ssr: true });
const About = dynamic(() => import('@/components/sections/About'), { ssr: true });
const Skills = dynamic(() => import('@/components/sections/Skills'), { ssr: true });
const Projects = dynamic(() => import('@/components/sections/Projects'), { ssr: true });
const CodingProfiles = dynamic(() => import('@/components/sections/CodingProfiles'), { ssr: true });
const Contact = dynamic(() => import('@/components/sections/Contact'), { ssr: true });
const Outro = dynamic(() => import('@/components/sections/Outro'), { ssr: true });

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Reduced Global Gradient Opacity/Visibility to fix "senseless gradients" complaint */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Pastel Theme Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-rose-200/30 rounded-full blur-[100px]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-violet-200/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] bg-sky-200/30 rounded-full blur-[100px]"></div>
      </div>

      {/* Dot Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-dot-grid opacity-[0.2] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>

      <main className="relative z-10 w-full overflow-hidden">
        <Hero id="home" />
        <About id="about" />
        <Skills id="skills" />
        <Projects id="projects" />
        <CodingProfiles id="profiles" />
        <Contact id="contact" />
        <Outro />
      </main>

    </div>
  );
}
