    import { Component }   from '@angular/core';
    import { Router }      from '@angular/router';
    import { AuthService } from './auth.service';
    @Component({
        templateUrl: 'login.component.html'             
    })
    export class LoginComponent {
      message: string;
      username: string;
      pass: string;
      constructor(public authService: AuthService, public router: Router) {
        this.setMessage();
      }
      setMessage() {
        this.message = 'You are currently logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
      }
      login() {          
          this.message = 'Trying to log in ...';
          this.authService.login(this.username, this.pass).subscribe(() => {
              
              if (this.authService.isLoggedIn) {
                  // Get the redirect URL from our auth service
                  // If no redirect has been set, use the default
                  let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
                  // Redirect the user
                  this.router.navigate([redirect]);
              }
              else {
                  this.message = "Incorrect Login";
              }
          }, e => console.log(e));
      }
      logout() {
        this.authService.logout();
        this.setMessage();
      }
    }