import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import categories from "../../../assets/data/categories.json";

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css', './category-menu-queries.component.css']
})
export class CategoryMenuComponent implements OnInit, DoCheck {

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
