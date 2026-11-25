/* import { Component } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  standalone: true,
  imports: [RouterLink],
})
export class ServicesComponent {

  constructor(
    private seoService: SeoService
  ) {}

  ngOnInit(): void {

    this.seoService.updateSeo(
      'Servicios de Redacción SEO y Posicionamiento | AI Contenidos',
      'Conoce nuestros servicios de SEO, optimización web y contenidos.',
      'https://jorgedamico.github.io/ai-contenidos/services/'
    );

  }

} */

import { Component, ElementRef, viewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SERVICIOS_DATA } from '../../models/servicios.data';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServiciosComponent {
  servicios = SERVICIOS_DATA;
  detalleSection = viewChild<ElementRef>('detalleSection');

  scrollToDetalle() {
    setTimeout(() => {
      this.detalleSection()?.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 50);
  }
}
