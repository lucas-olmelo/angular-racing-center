import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import categories from "../../../assets/data/categories.json";

@Component({
  selector: 'app-f1-menu',
  templateUrl: './f1-menu.component.html',
  styleUrls: ['./f1-menu.component.css']
})
export class F1MenuComponent implements OnInit, DoCheck {

  categoryUrl: string | null = '';
  image: string = '';

  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.getCategory();

    this.image = categories.categories.filter(article => article.name.toLowerCase().replace(/\s/g, '') === this.categoryUrl)[0].image;
  }

  ngDoCheck(): void {
    this.getCategory();
    this.image = categories.categories.filter(article => article.name.toLowerCase().replace(/\s/g, '') === this.categoryUrl)[0].image;
  }

  getCategory(){
    this.route.paramMap.subscribe( value =>
      this.categoryUrl = value.get('category'));
  }

}
