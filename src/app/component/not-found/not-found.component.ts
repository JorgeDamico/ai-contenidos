import { Component } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  imports: [RouterLink]
})
export class NotFoundComponent {

  constructor(
    private seoService: SeoService
  ) {}

  ngOnInit(): void {

    this.seoService.updateSeo(
      '404 - Página no encontrada | IA Contenidos',
      'La página que buscas no existe o ha sido movida.',
      'https://jorgedamico.github.io/ai-contenidos/404'
    );

  }

}