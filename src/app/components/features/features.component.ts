import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  features = [
    {
      icon: 'gift',
      title: 'BEAUTIFUL PACKAGING',
      description: 'All jewelry comes in elegant Pandora packaging'
    },
    {
      icon: 'truck', 
      title: 'ENTER FOR SPECIAL OFFERS',
      description: 'Sign up to receive updates and exclusive promotions'
    },
    {
      icon: 'tag',
      title: 'GIFT CARDS',
      description: 'The perfect gift for your loved ones, available in various denominations'
    },
    {
      icon: 'mail',
      title: 'COMMUNICATE YOUR STATUS',
      description: 'Track your order and receive updates via email and text'
    },
    {
      icon: 'shield',
      title: 'FREE RETURNS',
      description: 'Hassle-free returns within 30 days of purchase'
    }
  ];
}
