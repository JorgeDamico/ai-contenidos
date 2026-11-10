import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class ContactComponent {

  mensaje = '';

  constructor(
    private seoService: SeoService
  ) {}

  ngOnInit(): void {

    this.seoService.updateSeo(
      'Contacto | IA Contenidos',
      'Contacta con IA Contenidos para mejorar el posicionamiento SEO y la visibilidad de tu sitio web.',
      'https://jorgedamico.github.io/ai-contenidos/contact'
    );

  }

  abrirWhatsApp(): void {

    const numero = '5492664025478';
    const texto = encodeURIComponent(this.mensaje.trim());

    const link = `https://wa.me/${numero}?text=${texto}`;

    window.open(link, '_blank');

  }

}