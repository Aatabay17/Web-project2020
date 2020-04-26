import { Component, OnInit } from '@angular/core';
import { Category } from "../category";
import { CategoriesService } from "../categories.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  
  categories:Category[];

  constructor(private categoriesService:CategoriesService,
    private location: Location) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe(categories => {this.categories = categories; });
  }

  logout(){
    this.location.go('login')
  }

}

