import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MenuEnum } from './models/menu';
import { HelperService } from './services/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('about') about: ElementRef;
  @ViewChild('home') home: ElementRef;

  constructor(public helperService: HelperService) { }

  ngAfterViewInit(): void {
    const observer = new window.IntersectionObserver(this.viewElement, {
      root: null,
      threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
    })

    observer.observe(this.about.nativeElement);
    observer.observe(this.home.nativeElement);
  }

  viewElement = ([entry]) => {
    if (entry.isIntersecting && this.helperService) {
      this.helperService.menu = entry.target.id;
      return
    }
  }



  changeMenu(menu) {
    switch (menu) {
      case MenuEnum.About:
        this.about.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
        break;
      case 'Home':
        this.home.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' });
        break;
    }
  }
}
