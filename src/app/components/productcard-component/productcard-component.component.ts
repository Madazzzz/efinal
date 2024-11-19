import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productcard-component',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './productcard-component.component.html',
  styleUrl: './productcard-component.component.css',
})
export class ProductcardComponentComponent {
  @Input() title = '';
  @Input() img = '';
  @Input() price = 0;
  @Input() description = '';
  @Input() id = 1;
}
