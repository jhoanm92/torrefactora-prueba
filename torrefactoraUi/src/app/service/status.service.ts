import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Status } from 'src/app/model/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(
    private http: HttpClient,
  ) { }

  private url: string = environment.HOST;

  getAll(){
    return this.http.get<Status[]>(`${this.url}/status`)
  }
}
