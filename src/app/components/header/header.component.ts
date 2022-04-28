import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuEnum } from 'src/app/models/enums';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() onMenu = new EventEmitter();


  public open: boolean = false;
  public menuEnum = MenuEnum;
  public menuList = Object.keys(MenuEnum);

  constructor(public helperService: HelperService) { }

  ngOnInit(): void {
    console.log(this.menuEnum['About']);
  }


  public selectMenu(title: string) {
    this.helperService.menu = title;
    this.onMenu.emit(title);
  }

}
