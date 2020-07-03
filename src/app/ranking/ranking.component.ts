import { Component, OnInit } from '@angular/core';
import { FirebaseService, Answer } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  answers = [];

  constructor(private firebaseService: FirebaseService) { }

  getAnswers() {
    this.firebaseService.getAnswers().subscribe((answers) => {
      this.updateList(answers);
    });
  }

  updateList(answers: any[]) {
    const orderedList = answers.sort((a: Answer, b: Answer) => {
      return a.points > b.points ? -1 : a.points < b.points ? 1 : 0;
    });

    this.answers = orderedList.splice(0, 10);
  }

  ngOnInit(): void {
    this.getAnswers();
  }

}
