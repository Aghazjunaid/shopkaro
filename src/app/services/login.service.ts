import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders } from '@angular/common/http'
import{ BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userSource= new BehaviorSubject<boolean>(false)
  public userData = this.userSource.asObservable()

  constructor(private http:HttpClient){ }

  updateUser(userData: any){
    this.userSource.next(userData)
  }

  login(data : any) {
    let url = `${environment.apiUrl}/login`
    return this.http.post(url, data)
  }
}
