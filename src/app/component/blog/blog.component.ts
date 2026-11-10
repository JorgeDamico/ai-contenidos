import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
})
export class BlogComponent {

  noteSelected: string = 'a';

  selectNote(selected: string) { this.noteSelected = selected }

}
