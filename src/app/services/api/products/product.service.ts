import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl:string='https://fakestoreapi.com/'

  constructor(private http:HttpClient) { }

getAllProductWithLimit(limit:number=5):Observable<Product[]>{
  //const productUrl:string=this.baseUrl + 'products?limit='+5;
  const productUrl2:string=`${this.baseUrl}products?limit=+${limit}`;
 return  this.http.get<Array<Product>>(productUrl2)

}

createPoduct(product:Product){
  const productUrl:string=`${this.baseUrl}products`;
  return this.http.post<Product>(productUrl, product);

}

}
