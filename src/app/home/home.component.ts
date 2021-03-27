import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: any;

  constructor( private productService:ProductService) 
  { }

  ngOnInit(): void {
    debugger
    this.productService.getProducts().subscribe(data => {
      debugger
      console.log(data)
      this.products = data
    }, error => { debugger
       return ('Its a Trap!')})

  }

}
