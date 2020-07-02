import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {


  constructor(public question: QuestionsService) { 

 
  }
 
  addQuestion(q: string, a: string, a1: string, a2: string, a3: string, a4: string) {
    this.question.addQuestion(
      {
        question: q,
        answer: a,
        alternativa1: a1,
        alternativa2: a2,
        alternativa3: a3,
        alternativa4: a4,
      
    }); 
  }

  getQuestions(){
    return this.question.getQuestions();
  }

  delete() {
    this.question.delete('questions');
  }

  ngOnInit(): void {
  }

}
