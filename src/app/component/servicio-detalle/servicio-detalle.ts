import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { SERVICIOS_DATA } from '../../models/servicios.data';

@Component({
  selector: 'app-servicio-detalle',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (servicio(); as s) {
      <div class="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-light bg-opacity-50">
        <div class="row align-items-center g-4">
          
          <div class="col-12 col-lg-8">
            <span class="badge bg-primary bg-opacity-10 text-primary mb-2 px-3 py-2 rounded-pill">
              Detalle del servicio
            </span>
            <h2 class="h2 fw-bold text-dark mb-3">{{ s.titulo }}</h2>
            <p class="lead text-secondary mb-4">{{ s.descripcionLarga }}</p>
            
            <h3 class="h6 fw-bold text-uppercase text-muted mb-3">¿Qué incluye?</h3>
            <ul class="list-unstyled mb-0">
              @for (beneficio of s.beneficios; track beneficio) {
                <li class="d-flex align-items-center mb-2 text-dark">
                  <i class="bi bi-check-circle-fill text-primary me-2"></i>
                  <span>{{ beneficio }}</span>
                </li>
              }
            </ul>
          </div>

          <div class="col-12 col-lg-4">
            <div class="bg-white p-4 rounded-4 border shadow-sm">
              <h4 class="h5 fw-bold text-dark mb-2">¿Empezamos con este proyecto?</h4>
              <p class="small text-secondary mb-4">
                Cuéntanos sobre tu sitio y armamos una propuesta a medida.
              </p>
              
              <!-- Enlace a Contacto preseleccionando el servicio -->
              <a [routerLink]="['/contact/']" 
                 [queryParams]="{ servicio: s.slug }"
                 class="btn btn-primary w-100 fw-semibold py-2 mb-3">
                Solicitar presupuesto <i class="bi bi-arrow-right ms-1"></i>
              </a>

              <!-- Enlace relacionado al Blog -->
              @if (s.blogSlug) {
                <div class="border-top pt-3 mt-2">
                  <span class="d-block small text-muted mb-1">Lectura recomendada en el blog:</span>
                  <a [routerLink]="['/blog', s.blogSlug]" class="small fw-semibold text-decoration-none text-info">
                    <i class="bi bi-journal-text me-1"></i> {{ s.blogTitulo }}
                  </a>
                </div>
              }
            </div>
          </div>

        </div>
      </div>
    }
  `
})
export class ServicioDetalleComponent {
  slug = input.required<string>();
  
  private title = inject(Title);
  private meta = inject(Meta);

  servicio = computed(() => {
    const found = SERVICIOS_DATA.find(item => item.slug === this.slug());
    if (found) {
      this.title.setTitle(`${found.titulo} | Nuestros Servicios`);
      this.meta.updateTag({ name: 'description', content: found.resumen });
    }
    return found;
  });
}
