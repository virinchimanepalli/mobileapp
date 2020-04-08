import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{TodoComponent} from './todo.component'
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [ 
  {path: '',
  component: TodoComponent ,
  // children: [  
  //   {
  //     path: 'nav',
  //     component:NavbarComponent,
  //   }
  // ]
}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
