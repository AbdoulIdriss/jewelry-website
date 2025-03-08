import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  shopLinks = ['Rings', 'Earrings', 'Necklaces', 'Bracelets', 'Charms', 'Collections'];
  customerServiceLinks = ['Contact Us', 'FAQ', 'Returns', 'Shipping', 'Store Locator', 'Size Guide'];
  helpLinks = ['About Us', 'Careers', 'Privacy Policy', 'Terms', 'Accessibility'];
  socialLinks = ['Facebook', 'Instagram', 'Twitter', 'Pinterest'];
}
