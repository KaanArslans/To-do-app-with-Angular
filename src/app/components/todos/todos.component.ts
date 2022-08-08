import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  input:string='';
  empty:string="";
  constructor() {}

  ngOnInit(): void {

  }

  toggleDone(index:number){
     for(let i=0;i<this.todos.length;i++){
        if(i==index){
            this.todos[i].completed=!this.todos[i].completed;
            return this.todos[i];

        }

     }
    return null;
  }
  DeleteTodo(index:number){
      this.todos=this.todos.filter((v,i)=>i!==index);

  }

  AddTodo(){

      const todo=new Todo(this.input,false);
      this.todos.push(todo);
  }
   checkempty(){
    if(this.todos.length===0){
      return "list is empty";
    }
    return "";
   }


}
