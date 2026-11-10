import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '', 
        loadComponent: () => import('./component/home/home.component').then(m => m.HomeComponent) 
    },
    { 
        path: 'services', 
        loadComponent: () => import('./component/services/services.component').then(m => m.ServicesComponent) 
    },
    { 
        path: 'contact', 
        loadComponent: () => import('./component/contact/contact.component').then(m => m.ContactComponent) 
    },
    {
        path: 'blog',
        loadComponent: () => import('./component/blog/blog.component').then(m => m.BlogComponent),
        children: [
            {
                path: ':slug',
                loadComponent: () => import('./component/post/post.component').then(m => m.PostComponent)
            },
            {
                path: '',
                redirectTo: 'que-es-seo',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        loadComponent: () => import('./component/not-found/not-found.component').then(m => m.NotFoundComponent)
    }
];
