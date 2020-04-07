import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { DefaultComponent } from './default/default.component';
import { TodoComponent } from './todo/todo.component';




@NgModule({
  declarations: [DefaultComponent, TodoComponent],
  exports:[
    
  ],
  imports: [
    CommonModule,
    SecondRoutingModule
  ]
})
export class SecondModule { }
