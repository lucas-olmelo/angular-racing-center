import { Component, Input, OnInit } from '@angular/core';
import noticias_blog from "../../../assets/data/noticias_blog.json";


@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  id: string = '';
  title: string = '';
  imageCover: string = '';
  category: string = '';
  subtitle: string = '';
  categoryTag: string = '';

  // @Input()
  // imageCover: string = '';
  // @Input()
  // cardTitle: string = '';
  // @Input()
  // Id: string = '';

  constructor() { }

  ngOnInit(): void {
    if (noticias_blog) {
      const result = noticias_blog.news.filter(article => article.id.toString() == this.id)[0]

      this.title = result.title;
      this.subtitle = result.subtitle;
      this.category = result.category;
      this.imageCover = result.imageCover;
      this.categoryTag = result.category;
    } else {
      console.log('erro');
    }
  }

}
