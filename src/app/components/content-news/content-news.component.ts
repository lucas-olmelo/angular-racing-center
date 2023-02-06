import { Component, Input, OnInit } from '@angular/core';
import noticias_blog from "../../../assets/data/noticias_blog.json";


@Component({
  selector: 'app-content-news',
  templateUrl: './content-news.component.html',
  styleUrls: ['./content-news.component.css']
})
export class ContentNewsComponent implements OnInit {

  @Input()
  id: string = '';
  title: string = '';
  imageCover: string = '';
  category: string = '';
  subtitle: string = '';
  categoryTag: string = '';

  constructor() { }

  ngOnInit(): void {
    if (noticias_blog) {
      const result = noticias_blog.news.filter(article => article.id.toString() == this.id)[0]

      this.title = result.title;
      this.subtitle = result.subtitle;
      this.category = result.category;
      this.imageCover = result.imageCover;
      this.categoryTag = result.category.toLowerCase().replace(/\s/g, '');
    } else {
      console.log('erro');
    }
  }
}
