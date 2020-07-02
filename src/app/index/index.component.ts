import { Component, OnInit } from '@angular/core';
import { GithubUser, TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  users: GithubUser[];

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
    this.users = this.teamService.getTeamInfo();
  }

}
