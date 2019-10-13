import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  public customerList = ["a.jpg","b.jpg","c.jpg","d.jpg"];
  public count = 0;
  constructor(private user:UserService) { }

  ngOnInit() {
    
  }
  delete(id){
    this.customerList.splice(id,1);
    
  }

  prev(count){
    this.count--;
    // this.customerList.indexOf(count);
    this.customerList.push('sdfsdfsdf.jpg');
    //console.log(count);
  }
  next(count){
    this.count++;
    this.customerList.indexOf(count);
    console.log(count);
  }
}
