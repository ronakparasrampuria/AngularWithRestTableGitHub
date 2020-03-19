import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Users } from './Users';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  url = "http://localhost:3000/Users/";

  constructor(private http: HttpClient) { 

    
  }

  getUsers()
    {
        return this.http.get<Users[]>(this.url);
    }
}
