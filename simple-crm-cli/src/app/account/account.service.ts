import { PlatformLocation } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { anonymousUser, UserSummaryViewModel } from './account.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private baseUrl: string | undefined;
  private cachedUser = new BehaviorSubject<UserSummaryViewModel>(
    anonymousUser()
  );
  constructor(
    private http: HttpClient, // part of Angular to make Http requests
    private router: Router, // part of Angular router, for navigating the user within the app
    private platformLocation: PlatformLocation,
    private snackBar: MatSnackBar // a.k.a. 'toast', or a temporary notice
  ) {
    this.baseUrl = environment.server + environment.apiUrl + 'auth/';
    this.cachedUser.next(anonymousUser());
    const cu = localStorage.getItem('currentUser'); // <- localStorage is really useful
    if (cu) {
      // if already logged in from before, just use that... it has a JWT in it.
      this.cachedUser.next(JSON.parse(cu)); // <- JSON is built into JavaScript and always available.
    }
  }

  get user(): BehaviorSubject<UserSummaryViewModel> {
    // components can pipe off of this to get a new value as they login/logout
    return this.cachedUser;
  }
  setUser(user: UserSummaryViewModel): void {
    // called by your components that process a login from password, Google, Microsoft
    this.cachedUser.next(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
}
