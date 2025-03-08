import { Component } from '@angular/core';

@Component({
  selector: 'app-discover',
  imports: [],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.css'
})
export class DiscoverComponent {
  categories = [
    { name: 'STUDS', image: 'https://beardsdiamonds.com/wp-content/uploads/2022/03/STUD.jpg' },
    { name: 'SPECIAL OFFERS', image: 'assets/images/special.jpg' },
    { name: 'BIRTHSTONES', image: 'https://www.sylviejewelry.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/10/march-birthstones-1.jpg.webp' }
  ];
}
