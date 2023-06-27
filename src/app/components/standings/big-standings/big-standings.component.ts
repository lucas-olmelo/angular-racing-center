import { Component, OnInit } from '@angular/core';
import f1_drivers_standings from "../../../../assets/data/f1_drivers_standings.json";
import f1_team_standings from "../../../../assets/data/f1_team_standings.json";

@Component({
  selector: 'app-big-standings',
  templateUrl: './big-standings.component.html',
  styleUrls: ['./big-standings.component.css', './big-standings-queries.component.css']
})
export class BigStandingsComponent implements OnInit {

  title: string = '';
  drivers: {
    "position": number,
    "number": number,
    "name": string,
    "team": string,
    "points": number
  }[] = [];
  teams: {
    "position": number,
    "name": string,
    "points": number
  }[] = [];
  driversTeams: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.getDrivers();
  }

  getDrivers(){
    if (f1_drivers_standings) {
      this.title = f1_drivers_standings.title;
      this.drivers = f1_drivers_standings.drivers.sort(function compare(a:any, b:any) {
        if (a.position < b.position) {
          return -1;
        }
        if (a.position > b.position) {
          return 1;
        }
        return 0;
      });
      this.driversTeams = 0;
    } else {
      console.error('Erro');
    }
  }

  getTeams(){
    if (f1_team_standings) {
      this.title = f1_team_standings.title;
      this.teams = f1_team_standings.teams.sort(function compare(a:any, b:any) {
        if (a.position < b.position) {
          return -1;
        }
        if (a.position > b.position) {
          return 1;
        }
        return 0;
      });;
      this.driversTeams = 1;
    } else {
      console.error('Erro');
    }
  }

}
