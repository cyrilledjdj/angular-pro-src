import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Item, Product } from '../models/product';

const STOCK_API = 'http://localhost:3000';

@Injectable()
export class StockInventoryService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${STOCK_API}/products`, { responseType: 'json' })
      .pipe(catchError(error => throwError(error)));
  }

  getCartItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${STOCK_API}/cart`, { responseType: 'json' })
      .pipe(catchError(error => throwError(error)));
  }
}
