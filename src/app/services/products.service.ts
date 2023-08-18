import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly JsonUrl = "api/products.json"

  constructor(private http: HttpClient) { }

  public getAllProducts() : Observable<Product[]>  {
    return this.http.get<Product[]>(this.JsonUrl)
  }
}
