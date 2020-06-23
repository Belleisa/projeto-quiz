import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  listRef: AngularFireList<any>;
  list: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { 

    this.listRef = db.list('questions');
    this.list = this.listRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val()}))
      )
    );
 
  }
 
  add(q: string, a: string, a1: string, a2: string, a3: string, a4: string) {
    this.listRef.push(
      {
        question: q,
        answer: a,
        alternativa1: a1,
        alternativa2: a2,
        alternativa3: a3,
        alternativa4: a4,
      }
    ); 
  }

  delete(key: string) {
    this.listRef.remove(key);
  }

  

  ngOnInit(): void {
  }

}
