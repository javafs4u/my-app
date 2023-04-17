import { Component, OnInit } from '@angular/core';

import {ToDoService} from '../toDo.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers:[ToDoService]
})
export class TodoComponent implements OnInit {

  myToDos: Array<{ id: number, task: string }> = [];
  inputTask = '';

  constructor(private toDoService: ToDoService, private httpClient: HttpClient) {

  }
  ngOnInit(): void {
    this.myToDos = this.toDoService.myToDos;
  }

  

  addTask() {
    this.toDoService.addTask(this.inputTask);
    this.inputTask='';

    //call some API

    this.httpClient.get('https://dummyjson.com/products11').subscribe((response)=>{
      console.log(response);
    })
  }

}
