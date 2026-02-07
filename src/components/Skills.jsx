import React from 'react';
import { profile } from '../data/profile';

const Skills = () => {
    return (
        <section id="skills" className="py-20">
            <div className="section-container">
                <h2 className="heading-secondary">Habilidades Técnicas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {profile.skills.map((skillGroup, index) => {
                        const Icon = skillGroup.icon;
                        return (
                            <div key={index} className="bg-secondary/30 p-6 rounded-xl border border-white/5 hover:border-accent/30 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-accent/10 rounded-lg text-accent">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">{skillGroup.category}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-primary/50 text-slate-300 text-sm rounded-full border border-white/5 hover:bg-accent/10 hover:text-accent transition-colors cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
