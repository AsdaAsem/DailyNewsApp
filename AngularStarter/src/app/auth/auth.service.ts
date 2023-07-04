import { Login } from './model/login';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';

import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from '../core/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl + 'account/';
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();
  storageName = 'user';
  userRoles: string[] = [];

  jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) { }

  loadCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem(this.storageName));

    if (!this.loggedIn()){
      localStorage.removeItem(this.storageName);
      this.currentUserSource.next(null);
      return;
    }
    this.currentUserSource.next(user);
    this.userRoles = user.roles;
  }

  loggedIn() {
    const user: User = JSON.parse(localStorage.getItem(this.storageName));
    if(user !== null){
      return !this.jwtHelper.isTokenExpired(user.token);
    }
    return false;
  }

  login(values: Login){
    return this.http.post(this.baseUrl + 'login', values).pipe(
      map((user: User) => {
        if (user){
          localStorage.setItem(this.storageName, JSON.stringify(user));
          this.currentUserSource.next(user);
          this.userRoles = user.roles;
        }
      })
    );
  }

  register(values: any){
    return this.http.post(this.baseUrl + 'register', values).pipe(
      map((user: User) => {
        if (user){
          localStorage.setItem(this.storageName, JSON.stringify(user));
          this.currentUserSource.next(user);
          this.userRoles = user.roles;
        }
      })
    );
  }

  logout(){
    localStorage.removeItem(this.storageName);
    this.currentUserSource.next(null);
    this.userRoles = [];
    this.router.navigateByUrl('/auth/login');
  }

  //For Checking Roles
  roleMatch(allowedRoles): boolean {
    let isMatch = false;
    if(this.userRoles){
      allowedRoles.forEach(element => {
        if (this.userRoles.includes(element)) {
          isMatch = true;
          return;
        }
      });
    }
    return isMatch;
  }
  
}
