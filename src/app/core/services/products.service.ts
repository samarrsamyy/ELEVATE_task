import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _HttpClient: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/products`);
  }

  getSpecificProduct(id: any): Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/products/${id}`);
  }
}
