import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponentComponent } from './view-component/view-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ComponentComponent } from './second/component/component.component';


const routes: Routes = [
  {path: '',component:ViewComponentComponent},
  {path:'secondcomp',component:SecondComponentComponent},
  {path: 'comp',component:ComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
