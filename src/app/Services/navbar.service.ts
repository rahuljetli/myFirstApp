import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavBarList } from '../../assets/data/NavBar';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private navbar: string = './assets/data/Navbar.json';

  constructor(private http: HttpClient, private user: UserService) {}

    getNavList():Observable<NavBarList[]>{
      return this.http.get<NavBarList[]>(this.navbar);
    }
}