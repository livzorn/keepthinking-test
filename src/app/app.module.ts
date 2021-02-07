import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { FooterComponent } from './footer/footer.component';
import { SectionNewsComponent } from './section-news/section-news.component';
import { SectionArtistsComponent } from './section-artists/section-artists.component';
import { SectionChannelComponent } from './section-channel/section-channel.component';
import { CardNewsComponent } from './card-news/card-news.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { MenuComponent } from './menu/menu.component';
import { LegalInfoComponent } from './legal-info/legal-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideshowComponent,
    FooterComponent,
    SectionNewsComponent,
    SectionArtistsComponent,
    SectionChannelComponent,
    CardNewsComponent,
    NavbarComponent,
    SearchComponent,
    MenuComponent,
    LegalInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
