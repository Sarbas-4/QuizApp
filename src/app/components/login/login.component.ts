import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/service/quiz.service';
import { User } from 'src/app/User';


import { AddQuestionComponent } from '../add-question/add-question.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  quizes: Array<any> = [];
  // totalQuestions =quizes[0].questions.length;

 
 
  sequestions: Array<any> = [];
  public score:number=0;
  public results!:number;

  user = new User();

  ViewResult:boolean = false;
  
  
  loginStep: boolean = true;
  instructionStep: boolean = false;
  quizStep: boolean = false;

  instruction(){
    this.instructionStep = true;
    this.loginStep = false;
  }
  showPass(){
  
}
startQuiz(){
  this.instructionStep = false;
  this.quizStep = true;
}



OnAnswer(index:number,correct:number) {

  
  if(index === correct){
  this.score++;
  console.log(this.score);
  
}
  else{
    console.log(index)
    console.log(correct)
  }
}

//Evaluating


onSubmit() {
 
  this.results = this.score;
  this.ViewResult = true;
  this.quizStep = false;

}


//private quizService: QuizService

  constructor(private quizService: QuizService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.quizService.fetchAllQuizes()
    
    .subscribe((res: any) => {
      console.log('fetch started');
      console.log(res);
      this.quizes = res;

    });
  
}


loginPage(){
  this.quizService.loginAuth(this.user).subscribe(
    data=>{
      console.log("response received");
      this.instructionStep = true;
    },
   error =>{
     console.log("exception occured");
     alert("Please enter valid credential!, New User? Please Register");
   }
    
  )
}

}
