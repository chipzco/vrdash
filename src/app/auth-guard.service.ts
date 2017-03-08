import { Injectable }     from '@angular/core';
import { CanActivate,  ActivatedRouteSnapshot,  RouterStateSnapshot,Router }    from '@angular/router';
import { AuthService }      from './auth.service';
@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router)	 {}
  
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      let url: string = state.url;	          
    return this.checkLogin(url);
  }
   checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    console.log("redirecting to login redirect url: " + url);
    this.authService.isInLoginPage = true;
    this.router.navigate(['/login'], { skipLocationChange: true });    
    return false;
  }		
  
}