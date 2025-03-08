import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { CollectionComponent } from './components/collection/collection.component';
import { GiftComponent } from './components/gift/gift.component';
import { TrendingComponent } from './components/trending/trending.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { PromoComponent } from './components/promo/promo.component';
import { MaterialsComponent } from './components/materials/materials.component';
import { FeaturesComponent } from './components/features/features.component';
import { JoinComponent } from './components/join/join.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    FontAwesomeModule,
    HeaderComponent,
    HeroComponent,
    CollectionComponent,
    GiftComponent,
    TrendingComponent,
    DiscoverComponent,
    PromoComponent,
    MaterialsComponent,
    FeaturesComponent,
    JoinComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
