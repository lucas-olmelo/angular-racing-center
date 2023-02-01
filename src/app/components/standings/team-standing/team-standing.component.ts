import { Component, Input, OnInit } from '@angular/core';
import f1_teams_standings from "../../../../assets/data/f1_team_standings.json";


@Component({
  selector: 'app-team-standing',
  templateUrl: './team-standing.component.html',
  styleUrls: ['./team-standing.component.css', '../team-colors.css']
})
export class TeamStandingComponent implements OnInit {
  @Input()
  position: string = '';
  teamName: string = '';
  teamPoints: number = 0;

  constructor() { }

  ngOnInit(): void {
    if (f1_teams_standings) {
      const result = f1_teams_standings.teams.filter(article => article.position.toString() == this.position)[0]

      this.teamName = result.name;
      this.teamPoints = result.points;
    } else {
      console.log('erro');
    }
  }

}
