import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import noticias_blog from "../../../assets/data/noticias_blog.json";

@Component({
  selector: 'app-smallest-card',
  templateUrl: './smallest-card.component.html',
  styleUrls: ['./smallest-card.component.css']
})
export class SmallestCardComponent implements OnInit {

  imageCover: string = '';
  title: string = '';
  subtitle: string = '';
  @Input()
  id: string = '';

  constructor() { }

  ngOnInit(): void {
    if (noticias_blog) {
      const result = noticias_blog.news.filter(article => article.id.toString() == this.id)[0]

      this.title = result.title;
      this.subtitle = result.subtitle;
      this.imageCover = result.imageCover;
    } else {
      console.log('erro');
    }
  }

}
