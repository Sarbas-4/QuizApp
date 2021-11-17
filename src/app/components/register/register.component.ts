import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  showMessage: boolean = false;
  showRegistration:boolean = true;

  constructor(private quizService: QuizService) { }

  addUser(username: string, password: string){
   
    this.quizService.addUser({username, password})
    .subscribe((res: any) => {
      console.log(res);
     
      // this.courses = res;
     
    });
  }

  ngOnInit(): void {
  }
  success(){
    this.showMessage = true;
    this.showRegistration = false;
  }
}
