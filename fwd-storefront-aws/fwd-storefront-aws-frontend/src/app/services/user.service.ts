import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(firstName: string, password: string){
    return this.http.post<string>(environment.backendUrl+"/users/login", 
    {firstName: firstName, password: password})
  }

  register(firstName: string, lastName: string, password: string){
    return this.http.post<string>(environment.backendUrl+"/users", 
    {firstName: firstName, lastName: lastName, password: password})
  }
}
