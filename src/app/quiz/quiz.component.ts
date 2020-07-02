import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FirebaseService, Question } from '../services/firebase.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  user = '';
  questions = [];
  answers: { [key in string]: string } = {};

  points = 0;
  answered = false;
  corrects = 0;

  constructor(private firebaseService: FirebaseService) { }

  shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  saveQuestionAwnser(question, answered) {
    this.answers[question] = answered;
  }

  sendAnswers() {

    let points = 0;
    let correctAnswer = 0;

    this.questions.forEach((question: Question, index: number) => {
      if (this.answers[index] && this.answers?.[index] === question.answer) {
        points += 10;
        correctAnswer += 1;
      }
    });

    this.points = points;
    this.corrects = correctAnswer;
    this.answered = true;

    this.firebaseService.addAnswer({
      usuario: this.user,
      points,
      correct_answer: correctAnswer,
    });
  }

  setUser(user: string) {
    this.user = user;
  }

  ngOnInit(): void {
    this.firebaseService.getQuestions().subscribe((questions) => {
      this.questions = this.shuffle(questions);
    });
  }
}
