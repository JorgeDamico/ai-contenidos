import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private seoService: SeoService
  ) {}

  ngOnInit() {
    this.seoService.updateSeo(
      'IA Contenidos | SEO y Marketing Digital',
      'Servicios SEO y contenidos optimizados para Google.',
      'https://jorgedamico.github.io/ai-contenidos/'
    );
  }

}
