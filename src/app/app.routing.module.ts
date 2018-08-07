import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { QuestionsComponent } from 'src/app/questions/questions.component';
import { QuizComponent } from 'src/app/quiz/quiz.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'App', pathMatch: 'full'},
  {path: 'questions', component: QuestionsComponent},
  {path: 'quiz', component: QuizComponent},
  // AppComponent is the main view use other components instead
  {path: 'App', component: HomeComponent},
  {path: '**', redirectTo: 'App', pathMatch: 'full'}
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
