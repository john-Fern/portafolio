import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile';

const Hero = () => {
    const { personal } = profile;

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />

            <div className="section-container relative z-10 w-full">
                <div className="max-w-3xl">
                    <p className="text-2xl text-accent font-medium mb-2 animate-fade-in">Hola, mi nombre es</p>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
                        {personal.name}.
                        <span className="block text-slate-400 mt-2 text-3xl md:text-6xl">{personal.role}</span>
                    </h1>
                    <p className="text-2xl text-slate-400 mb-8 max-w-xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        {personal.tagline} {personal.bio.substring(0, 150)}...
                    </p>

                    <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <a
                            href="#projects"
                            className="group bg-accent text-dark px-6 text-xl py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-accent/90 transition-all"
                        >
                            Ver Proyectos
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <div className="flex gap-4 items-center px-4">
                            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                <Github size={24} />
                            </a>
                            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                <Linkedin size={24} />
                            </a>
                            <a href={`mailto:${personal.email}`} className="text-slate-400 hover:text-white transition-colors">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
