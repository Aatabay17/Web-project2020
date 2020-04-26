import { Component, OnInit } from '@angular/core';
import { Product } from "../product";
import { CategoriesService } from "../categories.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from '../category';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[];
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProducts();
    
  }

  getProducts() {
    const id = +this.route.snapshot.paramMap.get('id');   
    this.categoriesService.getProducts(id).subscribe(products => this.products = products);
  }
  
}
