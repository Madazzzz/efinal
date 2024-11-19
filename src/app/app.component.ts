import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavabrComponent } from './layout/navabr/navabr.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavabrComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'final_project';
}
