import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemsComponent } from './items/items.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemService } from '../services/item.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';


@NgModule({
  declarations: [TodoComponent,
  NavbarComponent,
ItemsComponent,
AddItemComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,ReactiveFormsModule
  ],

  providers:[ItemService,AngularFirestore]
})
export class TodoModule { }
