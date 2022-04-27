import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuEnum } from 'src/app/models/menu';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() onMenu = new EventEmitter();

  title: string[] = "Hi, I'm Web Developer".split('');
  presentation: string[] = "My name is Josué Pacheco".split('');
  skills: string[] = ['Javascript', 'NodeJS', 'Angular2+', 'SQL', 'SCSS', 'Java'];
  links = { linkedin: 'https://www.linkedin.com/in/alexander-josue-pacheco/', github: 'https://github.com/PcaJosue', email: 'pca.josue@gmail.com' }

  menu = MenuEnum;
  constructor(private helperService: HelperService) { }


  ngOnInit(): void { }

  public selectMenu(title: string) {
    this.helperService.menu = title;
    this.onMenu.emit(title);
  }


  changeStyle(event, element?: HTMLElement) {
    if (event.type == 'mouseover')
      element.className = 'animated';

    if (event.type != 'mouseover')
      setTimeout(() => { element.className = ''; }, 1000);
  }
}
