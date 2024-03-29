import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {
  currentUser: IUser;

  constructor(private http: HttpClient) { }

  loginUser(userName: string, password: string) {

    const loginInfo = { username: userName, password };
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

    return this.http.post('/api/login', loginInfo, options)
      .pipe(tap(data => {
        this.currentUser = <IUser> data['user'];
      }))
      .pipe(catchError(err => {
        return of(false);
      }));


    // this.currentUser = {
    //   id: 1,
    //   userName,
    //   firstName: 'John',
    //   lastName: 'Papa'
    // };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthenticationStatus() {
    this.http.get('/api/currentIdentity')
    .pipe(tap(data => {
      if (data instanceof Object) {
        this.currentUser = data as IUser;
      }
    }))
    .subscribe();

  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    // this is an observable
    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }

  logout() {
    // this logs out the user in the client (angular)
    this.currentUser = undefined;

    // this logs out the user in the server (api)
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post('/api/logout', {}, options);
  }

}
