import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyLoginComponent } from './components/my-login/my-login.component';
import { MyHomeComponent } from './components/my-home/my-home.component';
import { MyTableComponent } from './components/my-table/my-table.component';
import { MyHeaderComponent } from './components/my-header/my-header.component';
import { Page404Component } from './components/page404/page404.component';
import {
  SwiperModule,
  SwiperConfigInterface,
  SWIPER_CONFIG
} from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true
};

@NgModule({
  declarations: [
    AppComponent,
    MyLoginComponent,
    MyHomeComponent,
    MyTableComponent,
    MyHeaderComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
