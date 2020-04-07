import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { DefaultComponent } from './default/default.component';




@NgModule({
  declarations: [DefaultComponent],
  exports:[
    
  ],
  imports: [
    CommonModule,
    SecondRoutingModule
  ]
})
export class SecondModule { }
