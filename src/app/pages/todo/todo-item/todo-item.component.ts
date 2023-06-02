import { Component,Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

 
  @Input()
  lista: Array<Todo> =[]

  constructor() { }

  ngOnInit(): void {
  }

  markAsDone(id:number){
    this.lista[id-1].done = true;
    localStorage.setItem('toDo', JSON.stringify(this.lista))
   
  }
  removeToDo(id:number){
    let index = this.lista.indexOf(this.lista[id-1])
    this.lista.splice(index,1)
    localStorage.setItem('toDo', JSON.stringify(this.lista))
  }
  
}
