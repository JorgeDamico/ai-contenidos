import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
   constructor(private http: HttpClient) {}

  getPost(slug: string): Observable<Post> {
    return this.http.get<Post>(`posts/${slug}.json`);
  } 
}
