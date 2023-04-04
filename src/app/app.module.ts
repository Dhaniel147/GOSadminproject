import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GosSigninComponent } from './gos-signin/gos-signin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FooterComponent } from './footer/footer.component';

 
@NgModule({
  declarations: 
    [
    CarouselComponent, 
    AppComponent,
    NavBarComponent,
    GosSigninComponent, 
    HomepageComponent,
    CarouselComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}


