import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponentComponent } from './view-component/view-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { SecondModule } from './second/second.module';
// import { ComponentComponent } from './second/component/component.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewComponentComponent,
    SecondComponentComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,SecondModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
