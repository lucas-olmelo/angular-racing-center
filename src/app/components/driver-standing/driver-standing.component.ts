import { Component, Input, OnInit } from '@angular/core';
import f1_drivers_standings from "../../../assets/data/f1_drivers_standings.json";


@Component({
  selector: 'app-driver-standing',
  templateUrl: './driver-standing.component.html',
  styleUrls: ['./driver-standing.component.css']
})
export class DriverStandingComponent implements OnInit {

  @Input()
  position: string = '';
  driverNumber: number = 0;
  driverName: string = '';
  driverTeam: string = '';
  driverPoints: number = 0;

  constructor() { }

  ngOnInit(): void {
    if (f1_drivers_standings) {
      const result = f1_drivers_standings.drivers.filter(article => article.position.toString() == this.position)[0]

      this.driverNumber = result.number;
      this.driverName = result.name;
      this.driverTeam = result.team;
      this.driverPoints = result.points;
    } else {
      console.log('erro');
    }
  }

}
