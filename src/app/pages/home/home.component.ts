import { Component, OnInit } from '@angular/core';
import noticias_blog from "../../../assets/data/noticias_blog.json";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home-queries.component.css']
})
export class HomeComponent implements OnInit {

  news: {
    id: number,
    category: string,
    title: string,
    autor: string,
    data: string,
    subtitle: string,
    imageCover: string,
    content: string;
  }[] = [];

  constructor() { }

  ngOnInit(): void {
    if (noticias_blog) {
      this.news = noticias_blog.news;

      this.news.sort((a: { data: string | number | Date; }, b: { data: string | number | Date; }) => {
        let da: any = new Date(a.data),
            db: any = new Date(b.data);
        return db - da;
      });

    } else {
      console.log('Erro');
    }
  }

}
