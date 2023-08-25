import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-credentials',
  templateUrl: './carousel-credentials.component.html',
  styleUrls: ['./carousel-credentials.component.sass']
})
export class CarouselCredentialsComponent {

  // slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  // constructor() { }

  // ngOnInit(): void {
  //   this.slides[0] = {
  //     src: './assets/img/img_bkp-1024w.jpg',
  //   };
  //   this.slides[1] = {
  //     src: './assets/img/img2_bkp-1024w.jpg',
  //   }
  //   this.slides[2] = {
  //     src: './assets/img/img3_bkp-1024w.jpg',
  //   }
  // }

  image: string = 'holi'
}
