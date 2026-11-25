import { RenderMode, ServerRoute } from '@angular/ssr';
import { SERVICIOS_DATA } from './models/servicios.data';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'services/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return SERVICIOS_DATA.map(s => ({ slug: s.slug }));
    }
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
        { slug: 'contenido' },
        { slug: 'checklist-antes-de-publicar' },
        { slug: 'como-hacer-keyword-research' },
        { slug: 'guia-auditoria-contenidos' },
        { slug: 'importancia-velocidad-web' }
      ];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];