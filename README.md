# 🍽️ La Buena Mesa

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

Aplicación web de menú gastronómico desarrollada con **React + TypeScript + Vite**. El proyecto presenta distintos platos, bebidas y postres de forma visual, además de incluir formularios para **catering y sugerencias de usuarios**.

Diseñado como una experiencia simple y moderna para explorar un **menú digital de restaurante**.

------------------------------------------------------------------------

# 📦 Stack tecnológico

-   React
-   TypeScript
-   Vite
-   CSS3
-   Vercel (deploy)

------------------------------------------------------------------------

# 📁 Estructura del proyecto

    La-Buena-Mesa
    │
    ├── public/
    │   ├── assets/           # Imágenes de platos y bebidas
    │   ├── favicon.ico
    │   └── logo.png
    │
    ├── src/
    │   ├── components/
    │   │   ├── Menu.tsx
    │   │   ├── CateringForm.tsx
    │   │   └── SuggestionForm.tsx
    │   │
    │   ├── styles/
    │   │   └── responsive.css
    │   │
    │   ├── App.tsx
    │   └── main.tsx
    │
    ├── index.html
    ├── package.json
    ├── tsconfig.json
    ├── vite.config.ts
    └── vercel.json

------------------------------------------------------------------------

# 🚀 Instalación

Clonar el repositorio:

``` bash
git clone https://github.com/usuario/la-buena-mesa.git
```

Entrar en la carpeta del proyecto:

``` bash
cd la-buena-mesa
```

Instalar dependencias:

``` bash
npm install
```

------------------------------------------------------------------------

# ▶️ Ejecutar el proyecto

Modo desarrollo:

``` bash
npm run dev
```

La aplicación se ejecutará en:

    http://localhost:5173

------------------------------------------------------------------------

# 🏗️ Build de Producción

Generar versión optimizada:

``` bash
npm run build
```

Preview del build:

``` bash
npm run preview
```

------------------------------------------------------------------------

# 🧩 Componentes Principales

### Menu.tsx

Renderiza el menú gastronómico mostrando:

-   platos principales
-   bebidas
-   postres

Las imágenes se cargan desde:

    /public/assets

------------------------------------------------------------------------

### CateringForm.tsx

Formulario para solicitar servicios de catering.

Permite ingresar:

-   nombre
-   datos de contacto
-   detalles del evento

------------------------------------------------------------------------

### SuggestionForm.tsx

Formulario para que los usuarios envíen sugerencias al restaurante.

------------------------------------------------------------------------

# 🎨 Estilos

Los estilos principales se encuentran en:

    src/styles/responsive.css

Incluyen:

-   layout adaptable
-   comportamiento responsive
-   optimización para dispositivos móviles

------------------------------------------------------------------------

# 🌐 Deploy

El proyecto está preparado para deploy en **Vercel**.

Archivo de configuración:

    vercel.json

Deploy rápido:

``` bash
vercel
```

O conectando el repositorio directamente desde el panel de Vercel.

------------------------------------------------------------------------

# 📷 Assets

Las imágenes del menú gastronómico se encuentran en:

    public/assets

Ejemplos de platos incluidos:

-   pizza artesanal
-   hamburguesa gourmet
-   bife a la parrilla
-   risotto de hongos
-   cheesecake
-   tiramisú
-   vinos y bebidas

------------------------------------------------------------------------
