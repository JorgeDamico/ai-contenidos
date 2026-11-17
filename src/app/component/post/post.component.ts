import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { SeoService } from '../../services/seo.service';
import { environment } from '../../../environments/environment';
import { Post } from '../../models/post.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  imports: [CommonModule]
})
export class PostComponent {

  post!: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private cdr: ChangeDetectorRef,
    private seoService: SeoService,
  ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const slug = params.get('slug');

      if (!slug) {
        return;
      }

      this.postService.getPost(slug)
        .subscribe((data: any) => {

          this.post = data;

          this.cdr.detectChanges();
          const postKeywords = data.keywords || 'AI Contenidos, blog, tecnologia';

          const postUrl = `${environment.siteUrl}/blog/${data.slug}/`;

          this.seoService.updateSeo(
            `${data.title} | AI Contenidos`,
            data.description,
            postUrl,                                   
            `${environment.siteUrl}/images/${data.slug}.webp`,
            postKeywords
          );
          
          this.seoService.updateArticleSchema(
            data,
            postUrl                                        
          );

        });

    });

  }
}