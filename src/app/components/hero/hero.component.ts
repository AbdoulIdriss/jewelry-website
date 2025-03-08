import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  isMobile = false;
  isTablet = false;
  isLargeScreen = false;

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 640;
    this.isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
    this.isLargeScreen = window.innerWidth >= 1024;
  }

  navigatePrevious() {
    // Handle previous slide navigation
    console.log('Navigate to previous slide');
  }

  navigateNext() {
    // Handle next slide navigation
    console.log('Navigate to next slide');
  }

  signup() {
    // Handle signup logic
    console.log('Signup clicked');
  }
}
