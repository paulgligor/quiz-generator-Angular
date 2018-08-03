import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './questions.service';
import { IQuestion } from './Question';

@Component({
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {
  question: IQuestion;
  pageTitle: string = "Add Question";

  constructor(private _questionsService: QuestionsService) { }

  saveQuestion(): void{
    this._questionsService.addQuestion(this.question);
    this.question = this._questionsService.resetQuestion();
    alert("Questions successfully added")
  }

  ngOnInit() {
    this.question = this._questionsService.resetQuestion();
  }
}
