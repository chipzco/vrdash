import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent }          from './login.component';
import { VrComponent } from './vr/vr.component';
import { VrPlayerComponent } from './vr/vr-player.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { SpotifyService } from './spotify/spotify.service';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    HomeComponent,
	LoginComponent,
    VrComponent,
    VrPlayerComponent,
    SpotifyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
	AppRoutingModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
