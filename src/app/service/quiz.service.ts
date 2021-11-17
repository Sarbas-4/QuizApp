import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { environment } from 'src/environments/environment';
import { User } from '../User';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }
  fetchAllQuizes(){
    return this.http.get("http://localhost:8081/quizes/");
  }
  fetchAllUsers(){
    return this.http.get("http://localhost:8081/users/");
  }

  addUser(user: any){
    return this.http.post("http://localhost:8081/users/", user)
  }

  deleteQuestion(id: number){
    return this.http.delete("http://localhost:8081/quizes/" + id)
  }
  
  loginAuth(user:User){
    return this.http.post<any>("http://localhost:8081/users/login", user);

  }

  // fetchAllSEquestions(){
  //   return this.http.get(environment.sebaseUrl);
  // }
}
