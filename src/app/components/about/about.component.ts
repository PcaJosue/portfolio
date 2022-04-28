import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/data';
import { Skill } from 'src/app/models/interfaces';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  skills: Skill[] = Profile.about.skills;

  constructor() { }

  ngOnInit(): void {
    this.skills.sort((a, b) => b.level - a.level)
  }

}
