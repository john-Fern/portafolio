import { Github, Linkedin, Mail, Code2, Database, Layout, Server, Terminal, Cpu } from 'lucide-react';

export const profile = {
    personal: {
        name: "Jonathan Fernández", // Placeholder name
        role: "Full Stack Developer",
        tagline: "Construyendo soluciones web escalables con tecnologías modernas.",
        bio: "Soy desarrollador full stack con foco en backend, automatización y análisis de datos. Trabajo principalmente con Python, Java, JavaScript y C.",
        email: "jonatha.fernandezf@gmail.com",
        github: "https://github.com/john-Fern",
        linkedin: "https://www.linkedin.com/in/jonathan-fern%C3%A1ndez-b6a936223/",
    },
    skills: [
        {
            category: "Frontend",
            icon: Layout,
            items: ["React", "Next.js", "Vite", "Tailwind CSS", "JavaScript (ES6+)", "HTML5/CSS3"]
        },
        {
            category: "Backend",
            icon: Server,
            items: ["Java", "Spring Boot", "Node.js", "Express", "Python", "Django", "Flask"]
        },
        {
            category: "Database",
            icon: Database,
            items: ["PostgreSQL", "MySQL", "MongoDB"]
        },
        {
            category: "Tools & DevOps",
            icon: Terminal,
            items: ["Git", "GitHub", "Docker", "Linux", "VS Code", "Antigravity"]
        }
    ],
    projects: [
        {
            title: "E-Commerce Platform",
            description: "Plataforma de comercio electrónico completa con gestión de inventario, carrito de compras y pasarela de pagos. Implementada arquitectura MVC y autenticación segura.",
            technologies: ["Java", "Springbot", "PostgreSQL", "Boostrap", "Neon"],
            github: "https://github.com/Gabriel-Lillo/SA-HA1",
            demo: "https://sa-ha-1-kv1y.vercel.app/products.html",
            image: "/image.png"
        },
        {
            title: "Task Management System",
            description: "Aplicación para gestión de tareas colaborativa en tiempo real. Incluye drag-and-drop, asignación de usuarios y notificaciones automáticas.",
            technologies: ["Next.js", "Firebase", "TypeScript", "Framer Motion"],
            github: "https://github.com",
            demo: "https://demo-link.com",
            image: "task-app-mockup"
        },
        {
            title: "Academic Portfolio API",
            description: "API RESTful documentada con Swagger para gestión de portafolios académicos. Incluye pruebas unitarias y de integración.",
            technologies: ["Java", "Spring Boot", "JUnit", "MySQL"],
            github: "https://github.com",
            demo: null,
            image: "api-mockup"
        }
    ],
    experience: [
        {
            title: "Ingeniero AtCliente",
            company: "Atentus",
            period: "Oct 2023 - Sep 2025",
            description: "Implementé scripts en Python y JavaScript para monitoreo y validación de aplicaciones, apoyando la detección temprana de fallas."
        },
        {
            title: "Ingeniero de Soporte",
            company: "Serban Group",
            period: "Dic 2022 - Jun 2023",
            description: "Gestioné y resolví incidencias de acceso y operación en plataformas corporativas basadas en Citrix, priorizando continuidad del servicio."
        },
        {
            title: "Desarrollador (Práctica)",
            company: "MBO Latam",
            period: "Ago 2021 - Dic 2021",
            description: "Desarrollé módulos en C# y JavaScript sobre Microsoft Dynamics CRM, implementando lógica de negocio y personalizaciones."
        }
    ],
    education: [
        {
            degree: "Ingeniería de Ejecución en Computación e Informática",
            institution: "USACH",
            period: "2024 - Actualidad (5to Semestre)",
            description: "Especialización en Ingeniería de Software y Sistemas Distribuidos. Promedio destacado."
        },
        {
            degree: "Analista Programador Computacional",
            institution: "DuocUC",
            period: "2022 - Titulado",
            description: "Especialización en creación de software, dominio de bases de datos y artquitecturas escalables."
        }
    ],
    complementaryEducation: [
        {
            degree: "Full Stack JAVA Bootcamp",
            institution: "Generation",
            period: "2025",
            description: "Programa intensivo de 436 horas enfocado en tecnologías JAVA y arquitectura web."
        }
    ]
};
