import { Component, OnInit } from '@angular/core';
import noticias_blog from "../../../assets/data/noticias_blog.json";

@Component({
  selector: 'app-formulaone',
  templateUrl: './formulaone.component.html',
  styleUrls: ['./formulaone.component.css']
})
export class FormulaoneComponent implements OnInit {

  result: any;

  constructor() { }

  ngOnInit(): void {

    if (noticias_blog) {
      this.result = noticias_blog.news.filter(article => article.category === 'Formula 1');

      this.result.sort((a: { data: string | number | Date; }, b: { data: string | number | Date; }) => {
        let da: any = new Date(a.data),
            db: any = new Date(b.data);
        return db - da;
      });

    } else {
      console.log('Erro');
    }
  }

}
