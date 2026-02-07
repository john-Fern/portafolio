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
            title: "Desarrollador Full Stack Jr",
            company: "Tech Solutions Inc.",
            period: "2024 - Presente",
            description: "Desarrollo y mantenimiento de aplicaciones web corporativas. Migración de interfaces legacy a React. Implementación de CI/CD pipelines."
        },
        {
            title: "Freelance Developer",
            company: "Autónomo",
            period: "2023 - 2024",
            description: "Creación de sitios web y sistemas de gestión para pequeños negocios. Gestión completa del ciclo de vida del software, desde toma de requerimientos hasta despliegue."
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
