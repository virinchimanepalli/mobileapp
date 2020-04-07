import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { TodoComponent } from './todo/todo.component';
import { SecondComponent } from './second.component';


const routes: Routes = [
  {path: '',
  component: SecondComponent ,
  children: [  
    {
      path: 'todo',
      component:TodoComponent,
    },

    {
      path: 'default',
      component: DefaultComponent,
    },

  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondRoutingModule { }
