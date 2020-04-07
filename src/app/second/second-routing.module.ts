import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
  {path: '',
  component:DefaultComponent ,
  children: [  
  {
      path: 'todo',
      component:TodoComponent,
    },

  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondRoutingModule { }
