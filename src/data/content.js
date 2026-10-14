// Todo el contenido del portafolio vive aquí.
// Reemplaza los textos entre corchetes por los reales.

export const profile = {
  name: 'Cristina Advincola',
  role: 'Desarrolladora Frontend y Diseñadora UX/UI',
  tagline: 'diseño y construyo interfaces claras, accesibles y cuidadas para marcas y productos digitales',
  availability: 'Disponible para nuevos proyectos',
  cvUrl: null, // ruta al PDF, p. ej. '/cv.pdf'
  email: 'deliaadvincola@gmail.com',
  bio: 'Me muevo entre el diseño y el código: me gusta entender a quién va dirigida una interfaz antes de dibujarla, y cuidar cada detalle cuando la construyo. Trabajo con React, TypeScript y Tailwind CSS, y busco siempre que lo que hago sea claro, accesible y agradable de usar.',
}

export const specialties = [
  'Diseño de interfaces',
  'React y TypeScript',
  'Diseño responsive',
  'Accesibilidad web',
]

export const services = [
  {
    title: 'Diseño UX/UI',
    description:
      'Investigo qué necesitan tus usuarios y lo convierto en wireframes y prototipos, listos para validar antes de programar.',
  },
  {
    title: 'Desarrollo frontend',
    description:
      'Convierto diseños en webs y aplicaciones con React y Tailwind CSS: rápidas, adaptadas a móvil y con código fácil de mantener.',
  },
  {
    title: 'Tiendas online y landing pages',
    description:
      'Creo páginas de venta y catálogos con buscador, filtros y carrito, pensados para que tus clientes encuentren y compren sin esfuerzo.',
  },
]

export const projects = [
  {
    name: 'Trama · Tablero Kanban',
    category: 'Aplicación web',
    year: '2026',
    description:
      'Gestor de tareas con arrastrar y soltar entre columnas, búsqueda, filtros por prioridad, subtareas con progreso y modo oscuro. El tablero se guarda en el navegador.',
    tags: ['React', 'TypeScript', 'dnd-kit', 'Tailwind CSS'],
    image: '/proyectos/kanban.png',
    url: 'https://kanban-ten-gamma.vercel.app/',
    tint: 'bg-tint-mauve',
  },
  {
    name: 'Nido · Tienda online',
    category: 'E-commerce',
    year: '2026',
    description:
      'Tienda de objetos para casa con catálogo filtrable, fichas con variantes de color, carrito persistente con cupones y un checkout en tres pasos con formularios validados.',
    tags: ['React', 'TypeScript', 'Zustand', 'Zod', 'Tailwind CSS'],
    image: '/proyectos/tienda.png',
    url: 'https://tienda-online-jade-tau.vercel.app/',
    tint: 'bg-tint-sage',
  },
  {
    name: 'Pokédex',
    category: 'Aplicación web',
    year: '2026',
    description:
      'Buscador de los más de 1.300 Pokémon de la PokéAPI con filtros por tipo, paginación y fichas con estadísticas y evoluciones.',
    tags: ['React', 'TypeScript', 'Redux Toolkit', 'React Router'],
    image: '/proyectos/pokedex.png',
    url: 'https://pokedex-alpha-khaki.vercel.app/',
    tint: 'bg-tint-mist',
  },
]

export const quote = {
  text: 'Una buena interfaz no se nota: simplemente hace que todo sea fácil.',
  author: 'Mi forma de trabajar',
}

export const about = [
  { title: 'Habilidades', items: ['Diseño de interfaces', 'Maquetación responsive', 'Accesibilidad', 'Gestión de estado', 'Formularios validados', 'Consumo de APIs', 'Testing'] },
  { title: 'Herramientas', items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Redux Toolkit', 'Zustand', 'Vite', 'Vitest', 'Git y GitHub'] },
]

export const socials = [
  { label: 'GitHub', url: 'https://github.com/CristinaAT19' },
]
