import { Component } from '@angular/core';

@Component({
  selector: 'app-trending',
  imports: [],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css'
})
export class TrendingComponent {
  products = [
    { name: 'PINK HEART', price: 69, type: 'CHARM', image: 'https://stephaniegottlieb.com/cdn/shop/files/img_t_2_8cd6c1de-0217-4e4b-8f7c-20d742e3e0b6.jpg?v=1726157749&width=1500' },
    { name: 'SILVER EARRINGS', price: 99, type: 'EARRINGS', image: 'https://www.pilgrim.net/cdn/shop/files/262316063_638276714600000000.jpg?v=1713953059' },
    { name: 'BUTTERFLY NECKLACE', price: 89, type: 'NECKLACE', image: 'https://www.oliviaburton.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dwcc3ab87f/images/products/24100119_1.jpg?sw=1660&sh=1660&q=85' },
    { name: 'SILVER BRACELET', price: 79, type: 'BRACELET', image: 'https://i5.walmartimages.com/seo/NIUREDLTD-Dainty-Silver-Bracelet-Silver-Gypsophila-Bracelet-Fashion-Jewelry-Silver-Bangle_6f50c807-ff35-48c8-ad68-39ce51ae279b.65836218b030522afee8639ea141969a.jpeg' }
  ];
}
