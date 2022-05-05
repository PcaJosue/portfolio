import { Profile } from 'src/app/models/data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public email: string = Profile.contact.email;
  constructor() { }

  ngOnInit(): void {
  }

}
