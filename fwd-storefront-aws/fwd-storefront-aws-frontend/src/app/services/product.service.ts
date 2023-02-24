import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': localStorage.getItem('token') ?? ""
    })
  };

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(environment.backendUrl+"/products");
  }

  addProduct(product: Product){
    return this.http.post<Product>(environment.backendUrl+"/products", product, this.httpOptions)
  }
}
