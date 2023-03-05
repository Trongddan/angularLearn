import { Component,HostListener,ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularPractce';
  isactiveHeader:boolean = false

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const positionOfScroll = window.pageYOffset;
    if(positionOfScroll>=600){
      this.isactiveHeader=true
    }

  //   const aEl = this.elementRef.nativeElement.querySelector('app-header');

  //   const aOffset = aEl.offsetTop;
  //   const scrollPosition = window.pageYOffset;

  //   if (scrollPosition >= aOffset && scrollPosition ) {
  //     console.log('Showing component A');
  //   } else if (scrollPosition >= aOffset + 90) {
  //     console.log('Showing component B');

  // }else{};
  }
  constructor(private elementRef: ElementRef) { }
}
