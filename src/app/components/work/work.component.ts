import { Profile } from 'src/app/models/data';
import { Component, OnInit } from '@angular/core';
import { Work } from 'src/app/models/interfaces';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  works: Work[] = Profile.works;
  workSelected: Work;

  constructor() { }


  ngOnInit(): void {
    this.works.sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
    this.workSelected = this.works[0];
  }

}
