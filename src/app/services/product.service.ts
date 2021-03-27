import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'
import{ BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productSource = new BehaviorSubject<boolean>(false)
  public productData = this.productSource.asObservable()

  constructor(private http:HttpClient) { }

  updateUser(productData: any){
    this.productSource.next(productData)
  }

  getProducts() {
    let url = `${environment.apiUrl}/product`
    return this.http.get(url)
}
}
