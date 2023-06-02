import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { HomeComponent } from './pages/home/home.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { TodoListComponent } from './pages/todo/todo-list/todo-list.component';
import { TodoItemComponent } from './pages/todo/todo-item/todo-item.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersListComponent,
    HomeComponent,
    UserFormComponent,
    TodoListComponent,
    TodoItemComponent
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, /* Novo */
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
