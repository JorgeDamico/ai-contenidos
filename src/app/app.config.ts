import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, UrlSerializer, DefaultUrlSerializer, UrlTree, withInMemoryScrolling, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export class TrailingSlashUrlSerializer extends DefaultUrlSerializer {
  override serialize(tree: UrlTree): string {
    const path = super.serialize(tree);
    if (path === '/' || path.includes('?') || path.includes('#')) {
      return path;
    }
    return path.endsWith('/') ? path : `${path}/`;
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withComponentInputBinding(), // <-- Habilita @Input() / input() directo desde la URL
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled', // <-- 'enabled' respeta el historial (atrás/adelante) mejor que 'top'
        anchorScrolling: 'enabled'
      })
    ),
    provideClientHydration(),
    { provide: UrlSerializer, useClass: TrailingSlashUrlSerializer }
  ]
};
