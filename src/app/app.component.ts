import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params, UrlSegment, NavigationEnd } from "@angular/router";
import 'rxjs/add/operator/filter';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'VR DashBoard Test Application';  
    currPage = '';
    username = '';
    isLoggedIn: boolean = false;
    inLoginPage: boolean = false;
    constructor(private r: ActivatedRoute, private router: Router, private authservice: AuthService) {

    }

    ngOnInit() {
        //this.router.events.filter(event => event instanceof NavigationEnd).map(url=>url.urlAfterRedirects).subscribe(a=>this.setMyUrlState(a));  			
        let retNav: Observable<NavigationEnd> = this.router.events.filter(event => event instanceof NavigationEnd);
        retNav.map((e: any) => e.urlAfterRedirects).subscribe(a => this.setPageInfo(a));
    }  
    setPageInfo(url: string): void {
        console.log(url);
        this.authservice.isInLoginPage = url.indexOf("login") > -1 ? true : false;
        this.inLoginPage = this.authservice.isInLoginPage;
        console.log("is in login page: " + this.inLoginPage);
        this.currPage = url.replace('/', '');
        this.isLoggedIn = this.authservice.isLoggedIn;
        this.username = this.authservice.username;        
    }    
}
