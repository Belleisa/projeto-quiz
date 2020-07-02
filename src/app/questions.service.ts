import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export type Question = {
  question: string;
  answer: string;
  alternativa1: string;
  alternativa2: string;
  alternativa3: string;
  alternativa4: string;
};

export type Answer = {
  usuario: string;
  time: number;
  correct_answer: number;
  points: number;
};

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor(private db: AngularFireDatabase) {}

  addAnswer(resposta: Answer) {
    this.db.list('answers').push(resposta);
  }

  addQuestion(question: Question) {
    this.db.list('questions').push(question);
  }

  delete(key: string) {
    this.db.list('questions').remove(key);
  }

  getQuestions() {
    return this.db
      .list<Question>('questions')
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            key: c.payload.key,
            ...(c.payload.val() as {}),
          }))
        )
      );
  }

  getAnswers() {
    return this.db
      .list<Answer>('answers')
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            key: c.payload.key,
            ...(c.payload.val() as {}),
          }))
        )
      );
  }
}
