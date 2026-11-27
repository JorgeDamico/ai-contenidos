import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PostService } from '../../services/post.service';
import { PostHead } from '../../models/post-head';

@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  imports: [RouterOutlet, RouterLink],
})
export class BlogComponent implements OnInit {

  noteSelected: string = 'a';
  postHead: PostHead[] = [];
  mobileMenuOpen = signal(false);

  constructor(
    private postService: PostService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  selectNote(selected: string) { this.noteSelected = selected }

  getAllPosts(): void {
    this.postService.getAllPosts().subscribe({
      next: (posts: PostHead[]) => {
        this.postHead = posts;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error al cargar los posts:', err);
      }
    });
  }

}
