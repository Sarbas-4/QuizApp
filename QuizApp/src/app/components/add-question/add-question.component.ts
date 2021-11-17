import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  quizes: Array<any> = [];
  viewQuestions:boolean = false;
  QuestionAdd:boolean = false;
  QuestionDelete:boolean = false;

   


  viewQuestion(){
    this.viewQuestions = true; 
    this.QuestionAdd = false;
    this.QuestionDelete = false;

  }
  AddQuestion(){
    this.QuestionAdd = true;
    this.viewQuestions = false; 
    this.QuestionDelete = false;

  }

  deleteQuestion(){
    this.QuestionAdd = false;
    this.viewQuestions = false;
    this.QuestionDelete = true;
  }

  OnDelete(){

  }

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.fetchAllQuizes()
    
    .subscribe((res: any) => {
      console.log('fetch started');
      console.log(res);
      this.quizes = res;

    });
  }

}
