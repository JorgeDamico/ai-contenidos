import { Component } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  constructor(
    private seoService: SeoService
  ) {}

  ngOnInit(): void {

    this.seoService.updateSeo(
      'Servicios SEO | IA Contenidos',
      'Conoce nuestros servicios de SEO, optimización web y contenidos.',
      'https://jorgedamico.github.io/ai-contenidos/services'
    );

  }

}