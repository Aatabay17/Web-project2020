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

  /** GET heroes from the server */
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl)
      .pipe(
        catchError(this.handleError<Category[]>('getCategories', []))
      );
  }
  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  /** GET hero by id. Will 404 if id not found */
  getCategory(id: number): Observable<Category> {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.get<Category>(url).pipe(
      catchError(this.handleError<Category>(`getCategory id=${id}`))
    );
  }

  getProductsByCategoryIdFromAllProducts(categoryId: number): Observable<Product[]> {
    const tempProducts = this.http.get<Product[]>(this.productsUrl)
      .pipe(
        map(products => products.filter(p => p.category_id === categoryId)),
        catchError(this.handleError<Product[]>('getProducts', []))
      );
    return tempProducts;
  }


  /** POST: add a new hero to the server */
  addProduct (product: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, product, this.httpOptions).pipe(
      catchError(this.handleError<Product>('addProduct'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteProduct (product: Product | number): Observable<Product> {
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.productsUrl}/${id}`;
  
    return this.http.delete<Product>(url, this.httpOptions).pipe(
      catchError(this.handleError<Product>('deleteProduct'))
    );
  }

  deleteCategory (category: Category | number): Observable<Category> {
    const id = typeof category === 'number' ? category : category.id;
    const url = `${this.categoriesUrl}/${id}`;

    return this.http.delete<Category>(url, this.httpOptions).pipe(
      catchError(this.handleError<Category>('deleteCategory'))
    );
  }

  /** PUT: update the hero on the server */
  updateProduct (product: Product): Observable<any> {
    return this.http.put(this.productsUrl, product, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateProduct'))
    );
  }

 
   /* Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result*/
   
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  } 
  /**
    getCategoryList(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URL}/api/companies/`);
  }
  getCategory(id): Observable<Category> {
    return this.http.get<Category>(`${this.BASE_URL}/api/companies${id}/`);
  }
  getProducts(id): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/companies/${id}/vacancies`);
  }
  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    });
  }
   */
  
}