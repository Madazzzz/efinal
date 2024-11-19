import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navabr',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navabr.component.html',
  styleUrl: './navabr.component.css',
})
export class NavabrComponent {}
