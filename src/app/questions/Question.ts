export interface IQuestion{
    questionId: number;
    question: string;
    answer: string;
}

export class Question implements IQuestion {

   constructor( public questionId: number,
                public question: string,
                public answer: string){
    }
}