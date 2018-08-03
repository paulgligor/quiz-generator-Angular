import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions/questions.service';
import { IQuestion } from '../questions/Question';

@Component({
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  question: IQuestion;
  isAnswerHidden: Boolean = true;

  constructor(private _questionsService: QuestionsService) { }

  pageTitle: string = "Question";

  getNextQuestion(): void{
    this.isAnswerHidden = true;
    this.question = this._questionsService.resetQuestion();
    this.question = this._questionsService.getQuestion();
  }

  ngOnInit() {
    this.question = this._questionsService.resetQuestion();
    this.question = this._questionsService.getQuestion();
  }

  revealAnswerQuestion() {
    this.isAnswerHidden = false;
  }
}
