import { Component, OnInit } from '@angular/core';
import { IPerson } from './person/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'stackBltz';
  person!: IPerson;

  ngOnInit(): void {}

  getPrint(event: IPerson) {
    this.person = event;
  }
}
