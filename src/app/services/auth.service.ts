import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import{ BehaviorSubject } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLogedInSource= new BehaviorSubject<boolean>(false)
  public isUserLogedIn = this.isUserLogedInSource.asObservable()

  constructor(private http:HttpClient){ }

  updateAuth(input:boolean){
    this.isUserLogedInSource.next(input)
  }
}
