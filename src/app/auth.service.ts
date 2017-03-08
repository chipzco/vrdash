import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;
    isInLoginPage: boolean = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  username: string; //username if logged in;

  constructor(private http: Http) {}


  login(username: string,pass: string): Observable<boolean> {
      //return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
      return this.load().switchMap(users => this.checkUser(username, pass, users.json())).catch(this.handleError);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
  checkUser(username: string, pass: string, users: Array<any>): Observable<boolean> {
      let userFound = false;
      if (users.findIndex(a => a.username == username && a.pass == pass) >= 0) {
          userFound = true;
          this.isLoggedIn = true;
          this.username = username;
      }
      return Observable.of(userFound);
  }

  private load(): Observable<any> {
      return this.http.get('src/app/users.json'); 
  }

  private handleError(error: any): Observable<any> {
      let defErrorText: string = "Backend server error";
      if (error && error.statusText)
          defErrorText = error.statusText;
      else if (error)
          defErrorText = error.toString();
      return Observable.throw(defErrorText);
  }

}



