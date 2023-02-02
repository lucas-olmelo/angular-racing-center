import { Component, OnInit } from '@angular/core';
import f1_drivers_standings from "../../../../assets/data/f1_drivers_standings.json";

@Component({
  selector: 'app-big-standings',
  templateUrl: './big-standings.component.html',
  styleUrls: ['./big-standings.component.css']
})
export class BigStandingsComponent implements OnInit {

  result: any;
  constructor() { }

  ngOnInit(): void {
    if (f1_drivers_standings) {
      this.result = f1_drivers_standings.drivers
      // .sort((a, b) =>
      // {
      //   return a.position - b.position;
      // });
      console.log(this.result);

    } else {

    }
  }

}
