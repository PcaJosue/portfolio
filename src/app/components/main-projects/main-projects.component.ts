import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/data';
import { Project } from 'src/app/models/interfaces';

@Component({
  selector: 'app-main-projects',
  templateUrl: './main-projects.component.html',
  styleUrls: ['./main-projects.component.scss']
})
export class MainProjectsComponent implements OnInit {


  public projects: Project[];

  constructor() { }

  ngOnInit(): void {
    this.projects = Profile.projects;
  }

}
