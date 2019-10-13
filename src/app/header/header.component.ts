import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
// import { formatDate } from '../../../node_modules/@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  today=new Date();
  jstoday = '';
  isUserLoggedIn = true;

  constructor(private user: UserService) {
    // this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
  }
  title = 'Rahul\'s first Angular4App';
  ngOnInit() {}
}

