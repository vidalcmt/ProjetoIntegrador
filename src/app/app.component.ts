import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollbarComponent } from "./components/scrollbar/scrollbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScrollbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ProjetoIntegrador';
}
