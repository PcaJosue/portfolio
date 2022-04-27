import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  skills: { name: string, level: number }[] = [
    { name: 'CSS', level: 75 },
    { name: 'HTML', level: 90 },
    { name: 'Javascript', level: 80 },
    { name: 'Angular', level: 75 },
    { name: 'NodeJs', level: 70 },
    { name: 'SQL', level: 70 },
    { name: 'no SQL', level: 60 },
    { name: 'Java', level: 60 },
    { name: 'React', level: 50 }]

  constructor() { }

  ngOnInit(): void {
    this.skills.sort((a, b) => b.level - a.level)
  }

}
