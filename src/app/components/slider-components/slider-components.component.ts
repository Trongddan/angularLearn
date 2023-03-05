import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-components',
  templateUrl: './slider-components.component.html',
  styleUrls: ['./slider-components.component.css']
})
export class SliderComponentsComponent {
  customIndicatorClass = 'my-custom-indicators';
     listSlider :string[]=[
      "assets/slide1.jpg",
      "assets/slide2.jpg",
      "assets/slide3.jpg",
    ]
    responsiveOptions: any[] = [
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
}
