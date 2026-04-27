export interface User {
  empId: number;
  email: string;
  password: string;
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: User[];
  private authState = new BehaviorSubject(<boolean>false);

  constructor(
    private cookieService: CookieService,
    private router: Router,
  ) {
    this.users = [
      { empId: 1001, email: 'testuser1@email.com', password: 'PassWord123' },
      { empId: 1002, email: 'testuser2@email.com', password: 'PassWord456' },
      { empId: 1003, email: 'testuser3@email.com', password: 'PassWord789' },
      { empId: 1004, email: 'testuser4@email.com', password: 'PassWord963' },
      { empId: 1005, email: 'testuser5@email.com', password: 'PassWord852' },
    ];
  }

  getAuthState() {
    return this.authState.asObservable();
  }

  signin(email: string, password: string): boolean | Observable<boolean> {
    const user = this.users.find(
      (user) => user.email === email && user.password === password,
    );

    if (user) {
      this.cookieService.set('session_user', email, 1);
      this.authState.next(true);
      return true;
    } else {
      this.authState.next(false);
      return false;
    }
  }

  signout() {
    this.cookieService.deleteAll();
    this.authState.next(false);
    this.router.navigate(['/signin']).then(() => {});
  }
}
