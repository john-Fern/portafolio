import React from 'react';
import { profile } from '../data/profile';

const About = () => {
    const { personal } = profile;

    return (
        <section id="about" className="py-20 bg-primary/50">
            <div className="section-container">
                <h2 className="heading-secondary text-4xl">Sobre Mí</h2>

                <div className="grid md:grid-cols-3 gap-12 items-start">
                    <div className="md:col-span-2 space-y-6">
                        <p className="text-slate-300 leading-relaxed text-2xl">
                            {personal.bio}
                        </p>
                        <p className="text-slate-300 leading-relaxed text-2xl">
                            Me enfoco en el desarrollo continuo y en mantenerme actualizado con las últimas tecnologías
                            del ecosistema web. Disfruto resolviendo problemas complejos y creando interfaces
                            intuitivas que brinden una gran experiencia al usuario.
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div>
                                <h4 className="text-accent font-semibold mb-2 text-xl">Educación</h4>
                                <p className="text-slate-300 text-lg">Ingeniería Informática</p>
                                <p className="text-slate-400 text-ls">En curso</p>
                            </div>
                            <div>
                                <h4 className="text-accent font-semibold mb-2 text-xl">Ubicación</h4>
                                <p className="text-slate-300 text-lg">Santiago, Chile</p>
                                <p className="text-slate-400 text-ls">Disponible remoto</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-secondary rounded-lg p-1">
                            <img
                                src="/foto-peril.png"
                                alt={personal.name}
                                className="h-96 w-full object-cover object-top rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
