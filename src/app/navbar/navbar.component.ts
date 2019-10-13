import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { NavbarService } from '../Services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public navBarList = [];
  constructor(private users:  UserService, private navBars: NavbarService) { }

  ngOnInit() {
    this.users.setUserLoggedIn();
    this.navBars.getNavList()
      .subscribe(data => this.navBarList = data);
  }
}