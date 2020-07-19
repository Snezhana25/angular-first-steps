import {Component, OnInit, ViewChild} from '@angular/core';
import { SwiperComponent, SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.scss']
})
export class MyHomeComponent implements OnInit {
  @ViewChild(SwiperComponent) componentRef?: SwiperComponent;

  slides = [];

  show = true;
  type = 'component';
  disabled = false;

  config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  constructor(
  ) { }

  ngOnInit() {

    fetch('https://jsonplaceholder.typicode.com/photos?_limit=5')
        .then(res => res.json())
        .then(data => this.slides = data)
        .catch(err => console.log(err));
  }

  onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
  }

  onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }

}
