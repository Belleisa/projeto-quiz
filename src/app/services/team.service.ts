import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import GITHUB_USERNAMES from '../usernames';

export type GithubUser = {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  blog: string;
  location: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  following: number;
};

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private usersInfo: GithubUser[] = [];

  /**
   * Return the address of the API of an user
   * @param username - The Github username
   */
  private getProfileURL(username: string) {
    return `https://api.github.com/users/${username}`;
  }

  /**
   * Method that request the information about the team
   */
  private async requestTeamInfo() {
    await GITHUB_USERNAMES.forEach((username) =>
      this.http
        .get<GithubUser>(this.getProfileURL(username))
        .subscribe((user) => {
          this.usersInfo.push(user);
        })
    );
  }

  /**
   * Return the info about the team
   */
  getTeamInfo() {
    return this.usersInfo;
  }

  constructor(private http: HttpClient) {
    this.requestTeamInfo();
  }
}
