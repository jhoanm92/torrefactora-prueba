import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient,
  ) { }

  private url: string = environment.HOST;

  getAll(){
    return this.http.get<Task[]>(`${this.url}/task`);
  }

  register(task: Task){
    return this.http.post<Task>(`${this.url}/task`, task);
  }

  update(task: Task){
    return this.http.put<Task>(`${this.url}/task`, task);
  }
}

