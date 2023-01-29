import { Component, Input, OnInit } from '@angular/core';
import noticias_blog from "../../../assets/data/noticias_blog.json";

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  id: string = '';
  title: string = '';
  imageCover: string = '';
  category: string = '';
  subtitle: string = '';

  // @Input()
  // imageCover: string = '';
  // @Input()
  // cardTitle: string = '';
  // @Input()
  // cardDescription: string = '';
  // @Input()
  // Id: string = '0';

  constructor() { }

  ngOnInit(): void {
    if (noticias_blog) {
      const result = noticias_blog.news.filter(article => article.id.toString() == this.id)[0]

      this.title = result.title;
      this.subtitle = result.subtitle;
      this.category = result.category;
      this.imageCover = result.imageCover;
    } else {
      console.log('erro');
    }
  }

}
