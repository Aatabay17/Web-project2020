import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './category';
import { Product } from "./product";
import { CATEGORIES } from "./mock-categories";
import { PRODUCTS } from "./all-products";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const categories: Category[] = CATEGORIES;
    const products: Product[] = PRODUCTS;
    return {categories, products};
  }

  genId<T extends Category | Product>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }
  
}