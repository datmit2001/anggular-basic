import { Injectable } from '@angular/core';
import { TypeProduct } from './product/product';
import { dataFake } from './data-fake';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // products : TypeProduct[] = dataFake;
  API: string = 'https://60f76bf89cdca00017454e25.mockapi.io/product-main';
  constructor(private http: HttpClient) { }
  getProducts(): Observable<TypeProduct[]> {
    return this.http.get<TypeProduct[]>(this.API);
  }
  get(id: Number): Observable<TypeProduct> {
    return this.http.get<TypeProduct>(`${this.API}/${id}`);
  }
  addProducts(item: TypeProduct): Observable<TypeProduct> {
    return this.http.post<TypeProduct>(this.API, item);
  }
  remoteProducts(id: number): Observable<TypeProduct> {
    return this.http.delete<TypeProduct>(`${this.API}/${id}`)
  }
  updateProducts(item: TypeProduct): Observable<TypeProduct> {
    return this.http.put<TypeProduct>(`${this.API}/${item.id}`, item);
  }
  getCategory() {

  }
}
