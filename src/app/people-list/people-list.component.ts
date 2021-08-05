import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  showList: boolean = true;
  people = [{
    name: "James",
    age: 28,
    hairColor: "black",
  }, {
    name: "John",
    age: 30,
    hairColor: 'blonde',
  }, {
    name: "Bob",
    age: 41,
    hairColor: 'red',
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
