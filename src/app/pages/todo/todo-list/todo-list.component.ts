import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  toDo: Array<Todo> = []
 
 

  constructor() { }

  ngOnInit(): void {
    let items: any = localStorage.getItem('toDo')
    let toDo: any = JSON.parse(items)

    if(!toDo){
      this.toDo = []
    }else{
      this.toDo = toDo
    }
  }

  addTodo(title: string){
    let id = this.toDo.length + 1
    this.toDo.push(new Todo(id,title,false))
    localStorage.setItem('toDo', JSON.stringify(this.toDo))
  }
 
}
