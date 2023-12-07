import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


import { Priority } from 'src/app/model/priority';

@Injectable({
  providedIn: 'root'
})
export class PriorityService {

  constructor(
    private http: HttpClient,
  ) { }

  private url: string = environment.HOST;

  getAll(){
    return this.http.get<Priority[]>(`${this.url}/priority`)
  }
}
