export interface Servicio {
  slug: string;
  titulo: string;
  tituloHtml?: string;
  resumen: string;
  icono: string;
  colorTema: 'primary' | 'info';
  bgLight: boolean;
  // Datos para la vista detallada (ruta hija)
  descripcionLarga: string;
  beneficios: string[];
  blogSlug?: string;
  blogTitulo?: string;
}

export const SERVICIOS_DATA: Servicio[] = [
  {
    slug: 'desarrollo-web-y-sistemas',
    titulo: 'Desarrollo web y sistemas',
    resumen: 'Diseño, rediseño web y sistemas informáticos a medida para potenciar tu negocio.',
    icono: 'bi-code-slash',
    colorTema: 'primary',
    bgLight: false,
    descripcionLarga: 'Creamos plataformas web rápidas, modernas y escalables, así como sistemas de gestión internos adaptados a los procesos reales de tu empresa.',
    beneficios: ['Diseño responsivo y centrado en conversión', 'Arquitectura moderna y carga ultrarrápida', 'Integración con APIs y bases de datos a medida'],
    blogSlug: 'importancia-velocidad-web',
    blogTitulo: 'Cómo la arquitectura web impacta en tus ventas'
  },
  {
    slug: 'auditoria-de-contenido',
    titulo: 'Auditoría de contenido',
    resumen: 'Analizamos el estado actual de su sitio y detectamos oportunidades reales de mejora.',
    icono: 'bi-check2-square',
    colorTema: 'primary',
    bgLight: true,
    descripcionLarga: 'Evaluamos cada página de tu sitio web para identificar contenido desactualizado, canibalización de palabras clave y brechas frente a tu competencia.',
    beneficios: ['Inventario completo de URLs y rendimiento', 'Detección de páginas con caída de tráfico', 'Plan de acción priorizado por impacto'],
    blogSlug: 'guia-auditoria-contenidos',
    blogTitulo: 'Pasos clave para auditar el contenido de tu web'
  },
  {
    slug: 'investigacion-palabras-clave',
    titulo: 'Investigación de palabras clave',
    resumen: 'Identificamos los términos más relevantes para atraer tráfico cualificado a su web.',
    icono: 'bi-search',
    colorTema: 'info',
    bgLight: false,
    descripcionLarga: 'Descubrimos exactamente qué buscan tus clientes potenciales, analizando intención de búsqueda, volumen y dificultad para posicionar.',
    beneficios: ['Mapeo de intención de búsqueda (informativa y transaccional)', 'Análisis de brechas frente a competidores directos', 'Clusters temáticos listos para redactar'],
    blogSlug: 'como-hacer-keyword-research',
    blogTitulo: 'Cómo elegir palabras clave que realmente convierten'
  },
  {
    slug: 'revision-y-publicacion',
    titulo: 'Revisión y publicación',
    resumen: 'Ajustamos el contenido, optimizamos sus etiquetas y lo integramos de forma efectiva en su proyecto.',
    icono: 'bi-megaphone',
    colorTema: 'info',
    bgLight: true,
    descripcionLarga: 'Nos encargamos del formateo editorial, jerarquía de encabezados, enlazado interno y optimización de metadatos antes de salir a producción.',
    beneficios: ['Optimización de Title, Meta Description y etiquetas Alt', 'Estructura semántica HTML limpia', 'Estrategia de enlazado interno (interlinking)'],
    blogSlug: 'checklist-antes-de-publicar',
    blogTitulo: 'Checklist SEO antes de publicar un artículo'
  },
  {
    slug: 'redaccion-optimizada',
    titulo: 'Redacción optimizada',
    resumen: 'Creamos textos claros, persuasivos y alineados con criterios SEO para Google y sus usuarios.',
    icono: 'bi-vector-pen',
    colorTema: 'primary',
    bgLight: false,
    descripcionLarga: 'Escribimos artículos, páginas de venta y guías técnicas que responden a las dudas del usuario mientras cumplen con los estándares de calidad de Google.',
    beneficios: ['Copywriting persuasivo enfocado en retención', 'Redacción 100% original y verificada', 'Tono adaptado a la identidad de tu marca'],
    blogSlug: 'contenido',
    blogTitulo: 'Contenido de calidad'
  },
  {
    slug: 'seo-tecnico',
    titulo: 'SEO Técnico',
    tituloHtml: '<span class="text-primary">SEO</span> Técnico',
    resumen: 'Optimizamos la arquitectura interna, la velocidad de carga y el rastreo para que Google indexe cada página sin errores.',
    icono: 'bi-gear-wide-connected',
    colorTema: 'primary',
    bgLight: true,
    descripcionLarga: 'Resolvemos cuellos de botella técnicos para asegurar que los motores de búsqueda rastreen, interpreten e indexen tu sitio sin fricciones.',
    beneficios: ['Optimización de Core Web Vitals y rendimiento', 'Configuración de Sitemaps, Robots.txt y datos estructurados', 'Corrección de errores 404, redirecciones y rastreo'],
    blogSlug: 'que-es-seo',
    blogTitulo: '¿Qué es el SEO?'
  }
];
