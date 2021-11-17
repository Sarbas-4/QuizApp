import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizService } from './service/quiz.service';
import { AdminComponent } from './components/admin/admin.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    AddQuestionComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule
    
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
