import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { DefaultComponent } from './default/default.component';
import { TodoComponent } from './todo/todo.component';
import { SecondComponent } from './second.component';
import { VirinchiComponent } from './virinchi/virinchi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [DefaultComponent, TodoComponent, SecondComponent, VirinchiComponent],
  exports:[
    
  ],
  imports: [
    CommonModule,
    SecondRoutingModule,
    FormsModule,ReactiveFormsModule
    
  ]
})
export class SecondModule { }
