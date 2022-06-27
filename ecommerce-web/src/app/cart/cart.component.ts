import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // constructor() { }

  //ngOnInit(): void {
  //}

  public products: any = [];
  public grandTotal !: number;
  constructor(private _cart: CartService, private _router: Router) { }

  ngOnInit(): void {
    this._cart.getProductts()
      .subscribe(res => {
        this.products = res;
        this.grandTotal = this._cart.getTotalPrice();
      })
  }
  removeItem(item: any) {
    this._cart.removeCartItem(item);
  }
  emptycart() {
    this._cart.removeAllCart();
  }
}
  // constructor(private _productservice:ProductService) { }

  // products:Array<Product>=new Array<Product>();
  // ngOnInit(): void {

  //   this._productservice.getProducts().subscribe(res=>this.products=res,err=>console.log)
  // }

// }
