import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import noticias_blog from "../../../assets/data/noticias_blog.json";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  imageCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  contentNews: string = '';
  contentCategory: string = '';
  contentAutor: string = '';
  contentData: string = '';
  contentTag: string = '';

  private id: string | null = '0';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get('id'))
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null){
    const result = noticias_blog.news.filter(article => article.id.toString() == id)[0];

    this.contentTitle = result.title;
    this.contentDescription = result.subtitle;
    this.imageCover = result.imageCover;
    this.contentNews = result.content;
    this.contentCategory = result.category;
    this.contentAutor = result.autor;
    this.contentData = result.data;
    this.contentTag = result.categoryUrl;
  }

}
