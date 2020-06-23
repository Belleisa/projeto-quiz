import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { QuizComponent } from './quiz/quiz.component';
import { RankingComponent } from './ranking/ranking.component';
import { QuestionsComponent } from './questions/questions.component';



const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'ranking', component: RankingComponent},
  {path: 'questions', component: QuestionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
