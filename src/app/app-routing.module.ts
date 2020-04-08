import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  {
    path: 'second',
    loadChildren: './second/second.module#SecondModule'
  },
  {
  path: 'first',
  loadChildren: './first/first.module#FirstModule'
  },

  {
    path: 'third',
    loadChildren: './todo/todo.module#TodoModule'
  }
,

  { path: '', redirectTo: 'third', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/notfound' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
