import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template-ng-for',
  templateUrl: './ng-template-ng-for.component.html',
  styleUrls: ['./ng-template-ng-for.component.css']
})
export class NgTemplateNgForComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  allPersons = [
    {name: 'Mahesh', age: '25'},
    {name: 'Shakti', age: '23'},
    {name: 'Krishna', age: '23'},
    {name: 'Radha', age: '21'},	 
  ];

}
