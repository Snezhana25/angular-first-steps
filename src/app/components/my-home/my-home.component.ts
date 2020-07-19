import {Component, OnInit, ViewChild} from '@angular/core';
import { SwiperComponent, SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.scss']
})
export class MyHomeComponent implements OnInit {
  @ViewChild(SwiperComponent) componentRef?: SwiperComponent;

  slides = [
    'https://picsum.photos/700/250/?image=27',
    'https://picsum.photos/700/250/?image=22',
    'https://picsum.photos/700/250/?image=61',
    'https://picsum.photos/700/250/?image=23',
    'https://picsum.photos/700/250/?image=24',
    'https://picsum.photos/700/250/?image=26',
    'https://picsum.photos/700/250/?image=41',
    'https://picsum.photos/700/250/?image=28',
    'https://picsum.photos/700/250/?image=21',
    'https://picsum.photos/700/250/?image=20',
    'https://picsum.photos/400/250/?image=75'
  ];

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
  }

  onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
  }

  onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }

}
