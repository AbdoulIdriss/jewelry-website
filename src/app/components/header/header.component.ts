import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  
  menuItems = [
    'CHARMS & BRACELETS',
    'RINGS',
    'NECKLACES',
    'EARRINGS',
    'NEW',
    'COLLECTION',
    'ENGRAVABLE JEWELRY',
    'GIFTS',
    'DISCOVER'
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
