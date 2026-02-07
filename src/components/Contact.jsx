import React from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { profile } from '../data/profile';

const Contact = () => {
    const { personal } = profile;

    return (
        <section id="contact" className="py-20 bg-primary/50">
            <div className="section-container max-w-4xl">
                <h2 className="heading-secondary text-center mx-auto block w-max mb-12">Contacto</h2>

                <div className="text-center mb-12">
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
                        Estoy interesado en nuevas oportunidades laborales. Si tienes alguna pregunta o simplemente quieres saludar,
                        ¡envíame un correo y te responderé lo antes posible!
                    </p>
                    <a
                        href={`mailto:${personal.email}`}
                        className="inline-flex items-center gap-2 bg-transparent border-2 border-accent text-accent hover:bg-accent/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                    >
                        <Mail size={20} />
                        Escríbeme un correo
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-center mt-16">
                    <div className="p-6 bg-dark rounded-xl border border-white/5 hover:border-accent/30 transition-colors">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                            <MapPin size={24} />
                        </div>
                        <h3 className="text-white font-semibold mb-2">Ubicación</h3>
                        <p className="text-slate-400">Santiago, Chile</p>
                    </div>

                    <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="p-6 bg-dark rounded-xl border border-white/5 hover:border-accent/30 transition-colors group">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-accent group-hover:bg-accent group-hover:text-dark transition-colors">
                            <Linkedin size={24} />
                        </div>
                        <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
                        <p className="text-slate-400">Conectemos profesionalmente</p>
                    </a>

                    <a href={personal.github} target="_blank" rel="noopener noreferrer" className="p-6 bg-dark rounded-xl border border-white/5 hover:border-accent/30 transition-colors group">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-accent group-hover:bg-accent group-hover:text-dark transition-colors">
                            <Github size={24} />
                        </div>
                        <h3 className="text-white font-semibold mb-2">GitHub</h3>
                        <p className="text-slate-400">Revisa mi código</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
