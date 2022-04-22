import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string[] = "Hi, I'm Web Developer".split('');
  constructor() { }


  ngOnInit(): void {


  }

  changeStyle(event, element?: HTMLElement) {
    if (event.type == 'mouseover')
      element.className = 'animated';

    if (event.type != 'mouseover')
      setTimeout(() => { element.className = ''; }, 1000);
  }
}
