import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent} from './carousel/carousel.component';
import { GosSigninComponent } from './gos-signin/gos-signin.component';



const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'sign-in',
    component: GosSigninComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]

})

export class AppRoutingModule {}
