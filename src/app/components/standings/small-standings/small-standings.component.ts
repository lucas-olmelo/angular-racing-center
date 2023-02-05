import { Component, Input, OnInit } from '@angular/core';
import f1_drivers_standings from "../../../../assets/data/f1_drivers_standings.json";
import f1_teams_standings from "../../../../assets/data/f1_team_standings.json";


@Component({
  selector: 'app-small-standings',
  templateUrl: './small-standings.component.html',
  styleUrls: ['./small-standings.component.css']
})
export class SmallStandingsComponent implements OnInit {

  @Input()
  id: string = '';
  title: string = '';
  photo: string | undefined = '';

  constructor() { }

  ngOnInit(): void {
    if (this.id === '1') {
      this.title = f1_drivers_standings.title;
      this.photo = f1_drivers_standings.drivers.filter(driver => driver.position === 1)[0].photo;
    } else if (this.id === '2'){
      this.title = f1_teams_standings.title;
      this.photo = f1_teams_standings.teams.filter(team => team.position === 1)[0].photo;

    }
  }

}
