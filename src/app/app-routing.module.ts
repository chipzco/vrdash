import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard }   from './auth-guard.service';
import { AuthService }      from './auth.service';
import { LoginComponent } from './login.component';
import { VrComponent } from './vr/vr.component';
const routes: Routes = [    
    { canActivate: [AuthGuard], path: 'dash', component: DashComponent },
	{ path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { canActivate: [AuthGuard], path: 'vr', component: VrComponent },
    { path: '**', redirectTo: '/', pathMatch: 'full' }	
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
	providers: [AuthGuard,AuthService],
})
export class AppRoutingModule { } 