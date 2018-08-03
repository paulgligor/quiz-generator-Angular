import { Injectable } from "@angular/core";
import { IQuestion } from "./Question";

@Injectable()
export class QuestionsService{
    questions: IQuestion[] = [];

    getQuestion(): IQuestion{
        if(this.questions.length < 1 || this.questions == undefined) {
            alert("Please add questions first")
            return 
        }
        let randomIndex: number = this.getRandomIndex(this.questions.length)
        return this.questions[randomIndex];
    }
    
    addQuestion(question: IQuestion): void{
        const quetionIdFromLength = this.questions.length + 1;
        question.questionId = quetionIdFromLength;

        this.questions.push(question)
    }
  
    resetQuestion(): IQuestion {
        return  {questionId: 0, question: '', answer:'' }
    }

    getRandomIndex(maxNumber: number): number {
      return Math.floor(Math.random() * maxNumber)
    }
}