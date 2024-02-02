import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.scss',
  template: ` <h1>My first Angular component</h1> `,
  styles: ['h1 { color: papayawhip; font-size: 50px; text-align: center; }'],
})
export class AppComponent {
  title = 'angular app';
}
