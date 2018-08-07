import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// app
import { AppComponent } from './app.component';
import { AppRoutingModule } from 'src/app/app.routing.module';

// components
import { QuizComponent } from './quiz/quiz.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionsService } from './questions/questions.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuestionsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    // importing app routing
    AppRoutingModule,
    FormsModule
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
