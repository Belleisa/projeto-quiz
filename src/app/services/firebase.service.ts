import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export type Question = {
  question: string;
  answer: string;
  alternative1: string;
  alternative2: string;
  alternative3: string;
  alternative4: string;
};

export type Answer = {
  usuario: string;
  correct_answer: number;
  points: number;
};

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private db: AngularFireDatabase) {}

  addAnswer(resposta: Answer) {
    this.db.list('answers').push(resposta);
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