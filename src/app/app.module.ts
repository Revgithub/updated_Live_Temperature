import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { WeatherService } from './weather.service';
import { WeatherComponent } from './weather/weather.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    ImageCarouselComponent,WeatherComponent, WelcomeComponent, NavbarComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpModule,NgbModule.forRoot(), RouterModule.forRoot([
      { path:'', component:WelcomeComponent},
      { path:'image', component:ImageCarouselComponent},
      { path:'weather', component:WeatherComponent}
    ])
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
