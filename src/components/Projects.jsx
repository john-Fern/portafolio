import React from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { profile } from '../data/profile';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-primary/50">
            <div className="section-container">
                <h2 className="heading-secondary">Proyectos Destacados</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {profile.projects.map((project, index) => (
                        <div key={index} className="group bg-dark border border-white/5 rounded-xl overflow-hidden hover:border-accent/30 transition-all duration-300 flex flex-col h-full hover:translate-y-[-5px] hover:shadow-xl">
                            {/* Project Image */}
                            {project.demo ? (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="block h-48 bg-secondary/50 relative overflow-hidden group-hover:opacity-90 transition-opacity cursor-pointer">
                                    {project.image && project.image.startsWith('/') ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center text-slate-500 bg-slate-800">
                                            <Folder size={48} className="opacity-20" />
                                        </div>
                                    )}
                                </a>
                            ) : (
                                <div className="h-48 bg-secondary/50 relative overflow-hidden group-hover:opacity-90 transition-opacity">
                                    {project.image && project.image.startsWith('/') ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center text-slate-500 bg-slate-800">
                                            <Folder size={48} className="opacity-20" />
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    {project.demo ? (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-white group-hover:text-accent transition-colors hover:underline cursor-pointer">
                                            {project.title}
                                        </a>
                                    ) : (
                                        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                                            {project.title}
                                        </h3>
                                    )}
                                    <div className="flex gap-3">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="Ver código">
                                            <Github size={20} />
                                        </a>
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="Ver demo">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="text-xs text-accent font-medium px-2 py-1 bg-accent/10 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href={profile.personal.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors border-b border-transparent hover:border-accent pb-1"
                    >
                        Ver más proyectos en GitHub <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
