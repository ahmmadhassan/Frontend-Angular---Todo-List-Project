import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL, TODO_JPA_API_URL } from 'src/app/app.constant';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllTodos(username:any){
    return this.http.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}}/todos`);

  }

  retriveTodo(username: any, id: any){
    return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}}/todos/${id}`);

  }

  deleteTodoService(username: any, id: any){
    return this.http.delete(`${API_URL}/users/${username}}/todos/${id}`)
  }

  updateTodoService(username: any, id: any, todo: Todo){
    return this.http.put(`${API_URL}/users/${username}}/todos/${id}`, todo);
  }

  createTodoService(username: any, todo: Todo){
    return this.http.post(`${API_URL}/users/${username}}/todos`, todo);
  }
}
