import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

    private apiUrl = 'http://localhost:5000/tasks'

    constructor(
        private http: HttpClient,
    ) { }
  
  getTask(): Observable<Task[]>{
      return this.http.get<Task[]>(this.apiUrl)
      // return of(TASKS)
  }
}
