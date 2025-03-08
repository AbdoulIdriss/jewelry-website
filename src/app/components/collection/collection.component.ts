import { Component } from '@angular/core';

@Component({
  selector: 'app-collection',
  imports: [],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css'
})
export class CollectionComponent {
  categories = [
    { name: 'BRACELETS', image: 'https://media.debeers.com/i/debeers/B102126_20?fmt=auto&fmt.webp.qlt=65&fmt.jp2.qlt=40&fmt.jpeg.qlt=65&$new-plp-grid-desktop-1-1-3000-poi$' },
    { name: 'CHARMS', image: 'https://shopbaudoin.be/Files/10/264000/264476/ProductPhotos/2000/1868346642.jpg' },
    { name: 'EARRINGS', image: 'https://pilgrim.ca/cdn/shop/products/262312063_33fe1723-cc6f-4992-842b-f49006127b4e-208182.jpg?v=1689598133' },
    { name: 'NECKLACES', image: 'https://cdn.shopify.com/s/files/1/2579/7674/files/Ana-Luisa-Jewelry-Necklaces-Pendant-Necklaces-Gold-Heart-Necklace-Lev-Small-Gold.jpg?v=1704804552' },
    { name: 'RINGS', image: 'https://bestbrilliance.com/cdn/shop/products/J99920RDW04_00002_79f8be5f-f25e-4254-9bc8-c81a3ee11d9d.jpg?v=1646911898&width=2500' }
  ];
}
