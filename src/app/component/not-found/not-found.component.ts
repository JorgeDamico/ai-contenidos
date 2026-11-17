import { Component } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { RouterLink } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  standalone: true,
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  imports: [RouterLink]
})
export class NotFoundComponent {

  constructor(
    private seoService: SeoService,
    private meta: Meta
  ) {}

  ngOnInit(): void {

    this.seoService.updateSeo(
      '404 - Página no encontrada | AI Contenidos',
      'La página que buscas no existe o ha sido movida.',
      'https://jorgedamico.github.io/ai-contenidos/404/'
    );
    this.meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });
  }

}