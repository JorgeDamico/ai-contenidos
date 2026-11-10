import {
  Injectable,
  Inject,
  PLATFORM_ID
} from '@angular/core';

import {
  DOCUMENT,
  isPlatformBrowser
} from '@angular/common';

import {
  Meta,
  Title
} from '@angular/platform-browser';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object
  ) { }

  updateSeo(
    title: string,
    description: string,
    url: string,
    image?: string,
    keywords?: string
  ): void {

    this.title.setTitle(title);

    this.meta.updateTag({
      name: 'description',
      content: description
    });

    this.meta.updateTag({
      property: 'og:title',
      content: title
    });

    this.meta.updateTag({
      property: 'og:description',
      content: description
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'article'
    });

    this.meta.updateTag({
      property: 'og:url',
      content: url
    });

    if (image) {

      this.meta.updateTag({
        property: 'og:image',
        content: image
      });

      this.meta.updateTag({
        name: 'twitter:image',
        content: image
      });

    }

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: title
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content: description
    });

    this.meta.updateTag({
      name: 'robots',
      content: 'index,follow'
    });

    if (keywords) {
      this.meta.updateTag({ name: 'keywords', content: keywords });
    } else {
      this.meta.removeTag("name='keywords'");
    }

    this.updateCanonical(url);

  }

  private updateCanonical(url: string): void {
    const link = this.document.querySelector(
      '#canonical-link'
    ) as HTMLLinkElement | null;

    if (link) {
      link.setAttribute('href', url);
    }
  }


  updateArticleSchema(post: any, url: string, keywords?: string): void {

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.description,
      keywords: post.keywords,
      author: {
        '@type': 'Person',
        name: post.author
      },
      publisher: {
        '@type': 'Organization',
        name: 'IA Contenidos',
        logo: {
          '@type': 'ImageObject',
          url: `${environment.siteUrl}/logo.png`
        }
      },
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      image: `${environment.siteUrl}${post.image}`,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url
      }

    };

    if (keywords) {
      schema.keywords = keywords; 
    }

    let script = this.document.getElementById(
      'article-schema'
    ) as HTMLScriptElement | null;

    if (!script) {

      script = this.document.createElement('script');

      script.type = 'application/ld+json';

      script.id = 'article-schema';

      this.document.head.appendChild(script);

    }

    script.text = JSON.stringify(schema);

  }

}