import { Component } from '@angular/core';

@Component({
  selector: 'app-materials',
  imports: [],
  templateUrl: './materials.component.html',
  styleUrl: './materials.component.css'
})
export class MaterialsComponent {
  features = [
    'PREMIUM MATERIALS',
    'ECO FRIENDLY',
    'FREE CLEANING',
    'EASY TO CLEAN'
  ];
}
