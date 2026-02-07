# Guía del Proyecto: Portafolio Profesional

Este proyecto fue generado automáticamente para servir como un portafolio de alto impacto para desarrolladores Full Stack.

## 🚀 Inicio Rápido

1.  **Instalar dependencias** (si no lo has hecho):
    ```bash
    npm install
    ```
2.  **Correr servidor de desarrollo**:
    ```bash
    npm run dev
    ```
3.  **Construir para producción**:
    ```bash
    npm run build
    ```

## 📂 Estructura del Proyecto

```text
src/
├── components/       # Componentes de React (Hero, Projects, Navbar, etc.)
├── data/
│   └── profile.js    # <--- ¡EDITA ESTO! Toda tu información está aquí.
├── index.css         # Estilos globales y configuración de Tailwind
├── App.jsx           # Componente principal que ensambla las secciones
└── main.jsx          # Punto de entrada de React
```

## 🎨 Personalización

### 1. Cambiar Información Personal
Abre `src/data/profile.js`. Encontrarás un objeto JSON con tu perfil. Simplemente cambia los valores:

```javascript
export const profile = {
  personal: {
    name: "Tu Nombre",
    role: "Tu Rol",
    // ...
  },
  // ...
};
```

### 2. Cambiar Colores (Tailwind)
La paleta de colores está definida en `tailwind.config.js`. Puedes cambiar los colores principales aquí:

```javascript
theme: {
  extend: {
    colors: {
      primary: "#0f172a", // Fondo principal (Slate 900)
      accent: "#38bdf8",  // Color de énfasis (Sky 400)
    }
  }
}
```

### 3. Iconos
El proyecto usa `lucide-react`. Si necesitas nuevos iconos, impórtalos en el componente correspondiente:
`import { NuevoIcono } from 'lucide-react';`

## 🛠 Tecnologías

*   **React 18+**: Biblioteca UI.
*   **Vite**: Build tool ultrarrápido.
*   **Tailwind CSS 3**: Framework de estilos utility-first.
*   **Framer Motion** (listo para usar): Para animaciones complejas si deseas agregarlas.
*   **Lucide React**: Set de iconos limpio y consistente.
