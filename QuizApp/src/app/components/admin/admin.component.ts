import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {



  iLogin: ILogin = new ILogin();
  constructor(private router: Router, private quizService: QuizService) { }

  deleteQuestion(id: number){
    this.quizService.deleteQuestion(id)
    .subscribe((res: any) => {
      console.log(res);
    });
  }

  ngOnInit(): void {
  }
  onLogin(){
    if (this.iLogin.AdminName === 'admin' && this.iLogin.Password === 'admin'){
      // this.router.navigateByUrl('ngFor');
      this.router.navigate(["/addquestion"]);
      console.log('admin works');
     

    } else{
      alert('Wrong details');
    }
  }
}

export class ILogin{
  AdminName: string | undefined;
  Password: string | undefined;
}