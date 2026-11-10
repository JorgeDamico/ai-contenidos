import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'services',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'contact',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'blog',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Prerender,

    async getPrerenderParams() {
      return [
        { slug: 'que-es-seo' },
        { slug: 'contenido' }
      ];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];