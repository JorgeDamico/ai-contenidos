# AI Contenidos

Sitio web desarrollado con Angular 22 orientado a SEO técnico, marketing de contenidos y publicación de artículos optimizados para motores de búsqueda.

## Características

- Angular 22 Standalone
- SSR / SSG (Prerender)
- Blog dinámico basado en JSON
- SEO centralizado mediante SeoService
- Meta Tags dinámicos
- Open Graph
- Twitter Cards
- Schema.org Article
- Canonical URLs
- Sitemap XML
- Robots.txt
- Página 404 personalizada
- Bootstrap 5
- Bootstrap Icons

---

## Estructura del proyecto

```text
src/
├── app/
│   ├── component/
│   │   ├── home/
│   │   ├── services/
│   │   ├── contact/
│   │   ├── blog/
│   │   ├── post/
│   │   └── not-found/
│   │
│   ├── services/
│   │   ├── post.service.ts
│   │   └── seo.service.ts
│   │
│   └── app.routes.ts
│
├── environments/
│   ├── environment.ts
│   └── environment.prod.ts
│
public/
├── posts/
│   ├── posts.json
│   ├── que-es-seo.json
│   └── contenido.json
│
├── robots.txt
└── sitemap.xml
```

---

## Blog dinámico

Cada artículo se almacena como un archivo JSON.

Ejemplo:

```json
{
  "slug": "que-es-seo",
  "title": "¿Qué es el SEO?",
  "description": "Descubre qué es el SEO y cómo atraer tráfico orgánico y clientes.",
  "author": "MSL",
  "image": "/images/que-es-seo.jpg",
  "datePublished": "2026-11-09",
  "dateModified": "2026-11-09",
  "content": "<p>Contenido...</p>"
}
```

Ruta generada:

```text
/blog/que-es-seo
```

---

## SEO Implementado

### Title

```html
<title>¿Qué es el SEO? | IA Contenidos</title>
```

### Description

```html
<meta name="description">
```

### Open Graph

```html
<meta property="og:title">
<meta property="og:description">
<meta property="og:image">
<meta property="og:url">
```

### Twitter Cards

```html
<meta name="twitter:card">
<meta name="twitter:title">
<meta name="twitter:description">
<meta name="twitter:image">
```

### Schema.org

Tipo:

```json
Article
```

Incluye:

- headline
- description
- author
- publisher
- image
- datePublished
- dateModified
-