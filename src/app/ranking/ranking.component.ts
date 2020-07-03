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


  ngOnInit(): void {
  }

}
