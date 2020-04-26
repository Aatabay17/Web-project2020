import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Category } from './category';
import { Product } from './product';
import { PRODUCTS } from "./all-products";
import { LoginResponse } from './models';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  BASE_URL = 'http://127.0.0.1:8000';
  updateCategory(category: Category) {
    throw new Error("Method not implemented.");
  }

  private categoriesUrl = 'api/categories';  // URL to web api
  private productsUrl = 'api/products';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    ) { }

  
  


  getProductsByCategoryIdFromAllProducts(categoryId: number): Observable<Product[]> {
    const tempProducts = this.http.get<Product[]>(this.productsUrl)
      .pipe(
        map(products => products.filter(p => p.category_id === categoryId)),
        catchError(this.handleError<Product[]>('getProducts', []))
      );
    return tempProducts;
  }
   
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  } 
  
  getProduct(id): Observable<Product> {
    return this.http.get<Product>(`${this.BASE_URL}/api/products${id}/`);
  }
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URL}/api/categories/`);
  }
  getCategory(id): Observable<Category> {
    return this.http.get<Category>(`${this.BASE_URL}/api/categories${id}/`);
  }
  getProducts(id): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/products/`);
  }
  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    });
  }
   
  
}