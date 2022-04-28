import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { Profile } from 'src/app/models/data';
import { MenuEnum } from 'src/app/models/enums';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() onMenu = new EventEmitter();

  title: string[];
  presentation: string[];
  skills: string[];
  links: any;

  menu = MenuEnum;
  constructor(private helperService: HelperService) { }


  ngOnInit(): void {
    this.title = Profile.home.title.split('');
    this.presentation = Profile.home.presentation.split('');
    this.skills = Profile.home.skills;
    this.links = Profile.home.links;
  }

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
