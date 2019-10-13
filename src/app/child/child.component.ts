import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  @Input() public ParentComponentData;
  // @Input('ParentComponentData') public parentData;
  @Output() public childEvent = new EventEmitter();
  
  constructor() { }
  ngOnInit() {
  }
  fire(){
    this.childEvent.emit('Hey');
  }

}
