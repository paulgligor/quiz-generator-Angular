import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionsService } from './questions/questions.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'questions', component: QuestionsComponent},
      {path: 'quiz', component: QuizComponent},
      {path: 'App', component: AppComponent},
      {path: '', redirectTo: 'App', pathMatch: 'full'},
      {path: '**', redirectTo: 'App', pathMatch: 'full'}
    ]),
    FormsModule
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
