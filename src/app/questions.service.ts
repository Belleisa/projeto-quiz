import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { QuestionsComponent } from './questions/questions.component';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(public questions: QuestionsComponent){
    
  }

  getQuestions(){
    return this.questions.add;
  }
}
