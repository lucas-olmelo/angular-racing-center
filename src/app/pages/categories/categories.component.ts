import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import noticias_blog from "../../../assets/data/noticias_blog.json";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, DoCheck {

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

  categoryUrl: string | null = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategory();
    this.searchNews()
  }

  ngDoCheck(): void {
    this.getCategory();
    this.searchNews()
  }

  getCategory(){
    this.route.paramMap.subscribe( value =>
      this.categoryUrl = value.get('category'));
  }

  searchNews(){
    if (noticias_blog) {
      this.news = noticias_blog.news.filter(article => article.category.toLowerCase().replace(/\s/g, '') === this.categoryUrl);

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
