import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { ComponentComponent } from './component/component.component';



@NgModule({
  declarations: [ComponentComponent],
  exports:[
    ComponentComponent
  ],
  imports: [
    CommonModule,
    SecondRoutingModule
  ]
})
export class SecondModule { }
