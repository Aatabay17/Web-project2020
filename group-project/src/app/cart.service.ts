import { Injectable } from '@angular/core';
import { CategoriesService } from "./categories.service";
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor(private categoriesService: CategoriesService) { }
  addToCart(product) {
    this.items.push(product);
    // this.categoriesService.deleteProduct(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
