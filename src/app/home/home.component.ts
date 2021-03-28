import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: any = [];

  constructor( private productService:ProductService) 
  { }

  ngOnInit(): void {
    debugger
    this.productService.getProducts().subscribe(response => {
      debugger
      for(var i = 0; i < response['data'].length;i++){
        console.log(response)
        this.products.push(response['data'])
      }
     
    }, error => {
       return ('Error!')})
  }

}
