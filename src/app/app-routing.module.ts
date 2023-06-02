import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { HomeComponent } from './pages/home/home.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { TodoListComponent } from './pages/todo/todo-list/todo-list.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent,pathMatch:'full'
  },
  {
     path:'listUsers', component:UsersListComponent,pathMatch:'prefix' 
  },
  {
    path:'editUsers/:id',component:UserFormComponent,pathMatch:'prefix'
  },
  {
    path:'todo', component:TodoListComponent,pathMatch:'prefix' 
 },
 {
  path:'**', redirectTo:'/', pathMatch:'full'
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
