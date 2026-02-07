import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { profile } from '../data/profile';

const Experience = () => {
    return (
        <section id="experience" className="py-20">
            <div className="section-container">
                <h2 className="heading-secondary">Experiencia y Formación</h2>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Experience Column */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                            <Briefcase className="text-accent" /> Experiencia Laboral
                        </h3>
                        <div className="space-y-8 border-l-2 border-slate-800 ml-3 pl-8">
                            {profile.experience.map((exp, index) => (
                                <div key={index} className="relative">
                                    <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-dark bg-accent"></span>
                                    <div className="mb-1 text-sm text-accent font-mono flex items-center gap-2">
                                        <Calendar size={14} />
                                        {exp.period}
                                    </div>
                                    <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                                    <h5 className="text-slate-300 font-medium mb-3">{exp.company}</h5>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
                            <GraduationCap className="text-accent" /> Educación
                        </h3>
                        <div className="space-y-8 border-l-2 border-slate-800 ml-3 pl-8">
                            {profile.education.map((edu, index) => (
                                <div key={index} className="relative">
                                    <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-dark bg-accent"></span>
                                    <div className="mb-1 text-sm text-accent font-mono flex items-center gap-2">
                                        <Calendar size={14} />
                                        {edu.period}
                                    </div>
                                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                                    <h5 className="text-slate-300 font-medium mb-3">{edu.institution}</h5>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {edu.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Complementary Education */}
                        {profile.complementaryEducation && profile.complementaryEducation.length > 0 && (
                            <>
                                <h3 className="text-xl font-bold text-white flex items-center gap-3 mb-4 mt-10">
                                    <GraduationCap className="text-emerald-400" size={20} /> Educación Complementaria
                                </h3>
                                <div className="space-y-6 border-l-2 border-emerald-800/50 ml-3 pl-8">
                                    {profile.complementaryEducation.map((edu, index) => (
                                        <div key={index} className="relative">
                                            <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-dark bg-emerald-500"></span>
                                            <div className="mb-1 text-sm text-emerald-400 font-mono flex items-center gap-2">
                                                <Calendar size={14} />
                                                {edu.period}
                                            </div>
                                            <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                                            <h5 className="text-slate-300 font-medium mb-2">{edu.institution}</h5>
                                            <p className="text-slate-400 text-sm leading-relaxed">
                                                {edu.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
