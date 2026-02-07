import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 bg-dark text-center border-t border-white/5">
            <p className="text-slate-500 text-x">
                Diseñado y construído por <span className="text-accent">Jonathan Fernández</span> con React & Tailwind CSS.
            </p>
            <p className="text-slate-600 text-xs mt-2">
                © {new Date().getFullYear()} Todos los derechos reservados.
            </p>
        </footer>
    );
};

export default Footer;
