# 🍽️ La Buena Mesa

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

La Buena Mesa es una aplicación web de menú gastronómico desarrollada con **React 18 + TypeScript + Vite**. Actualmente funciona como una experiencia digital de restaurante con navegación por secciones, carta visual de productos, historia institucional y formularios de contacto para catering y sugerencias.

El sitio está pensado para presentar platos, bebidas y postres de forma clara, responsive y moderna, usando imágenes locales y una interfaz simple orientada a dispositivos móviles y escritorio.

---

## ✅ Estado actual del proyecto

- Aplicación frontend de una sola página (**SPA**) con React y Vite.
- Navegación interna mediante estado local entre las secciones **Menú**, **Quiénes somos** y **Contacto**.
- Header sticky con marca, logo y menú hamburguesa desplegable.
- Sección de bienvenida con slogan y carta gastronómica.
- Grilla de **20 productos** renderizados desde imágenes locales en `public/assets`.
- Sección institucional con contenido de marca e historia del restaurante.
- Sección de contacto con dos formularios:
  - solicitud de catering;
  - envío de sugerencias.
- Confirmación visual al enviar cada formulario, sin persistencia ni backend.
- Estilos responsive centralizados en `src/styles/responsive.css`.
- Configuración de build y deploy preparada para Vercel.

---

## 📦 Stack tecnológico

- **React 18**
- **TypeScript 5**
- **Vite 5**
- **CSS3**
- **Vercel**

---

## 📁 Estructura del proyecto

```text
La-Buena-Mesa
├── public/
│   ├── assets/                 # Imágenes de platos, bebidas y postres
│   ├── favicon.ico
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── CateringForm.tsx     # Formulario de solicitud de catering
│   │   ├── Menu.tsx             # Grilla visual del menú
│   │   └── SuggestionForm.tsx   # Formulario de sugerencias
│   ├── styles/
│   │   └── responsive.css       # Estilos globales y responsive
│   ├── App.tsx                  # Layout principal y navegación por secciones
│   └── main.tsx                 # Punto de entrada de React
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vercel.json
```

---

## 🚀 Instalación

Clonar el repositorio:

```bash
git clone https://github.com/usuario/la-buena-mesa.git
```

Entrar en la carpeta del proyecto:

```bash
cd la-buena-mesa
```

Instalar dependencias:

```bash
npm install
```

---

## ▶️ Ejecutar en desarrollo

```bash
npm run dev
```

Por defecto, Vite levanta la aplicación en:

```text
http://localhost:5173
```

---

## 🏗️ Build de producción

Generar una versión optimizada:

```bash
npm run build
```

El comando ejecuta TypeScript y luego genera el build de Vite en `dist/`.

Preview local del build:

```bash
npm run preview
```

---

## 🧩 Componentes principales

### `App.tsx`

Define el layout general de la aplicación:

- estado de navegación activa;
- apertura y cierre del menú hamburguesa;
- header con logo y enlaces internos;
- render condicional de las secciones **Menú**, **Quiénes somos** y **Contacto**;
- footer con año dinámico.

### `Menu.tsx`

Renderiza la carta gastronómica a partir de una lista local de imágenes. Cada tarjeta muestra:

- imagen del producto;
- nombre formateado a partir del nombre del archivo;
- carga diferida de imágenes con `loading="lazy"`.

### `CateringForm.tsx`

Formulario controlado por estado local para solicitudes de catering. Incluye campos de nombre, email, cantidad de personas y detalles del evento. Al enviarlo, muestra un mensaje de confirmación.

### `SuggestionForm.tsx`

Formulario simple para sugerencias de usuarios. Al enviarlo, muestra un mensaje de agradecimiento.

---

## 🎨 Estilos e interfaz

Los estilos se encuentran en `src/styles/responsive.css` e incluyen:

- variables CSS para colores, fondos, bordes y sombras;
- fondo animado con gradiente turquesa;
- paneles translúcidos con `backdrop-filter`;
- header sticky;
- menú hamburguesa desplegable;
- grillas responsive para menú y contacto;
- animaciones suaves de entrada;
- soporte para `prefers-reduced-motion`;
- breakpoints para desktop, tablet, mobile y pantallas pequeñas.

---

## 📷 Assets disponibles

Las imágenes del menú están en `public/assets` y cubren platos principales, bebidas y postres, entre ellos:

- bife a la parrilla;
- milanesa napolitana;
- pasta casera;
- risotto de hongos;
- ensalada césar;
- pollo al limón;
- hamburguesa gourmet;
- tacos de carne;
- pizza artesanal;
- salmón grillado;
- vinos, cerveza, limonada y agua saborizada;
- flan, tiramisú, cheesecake, helado y brownie.

---

## 🌐 Deploy

El proyecto está preparado para deploy en **Vercel** con la configuración de `vercel.json`:

- framework: `vite`;
- build command: `npm run build`;
- output directory: `dist`.

Deploy rápido desde CLI:

```bash
vercel
```

También se puede conectar el repositorio desde el panel de Vercel para deployments automáticos.

---

## 📝 Notas técnicas

- Los formularios no envían datos a un servidor: solo previenen el envío por defecto y muestran una confirmación local.
- La carta se modifica editando el arreglo `items` en `src/components/Menu.tsx` y agregando o quitando imágenes en `public/assets`.
- No hay rutas externas ni router instalado; la navegación actual se maneja dentro de `App.tsx`.
- El proyecto es privado según `package.json`.
