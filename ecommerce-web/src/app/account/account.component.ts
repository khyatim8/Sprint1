import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private _productservice: ProductService, private CartService: CartService) { }

  products: Array<Product> = new Array<Product>();
  ngOnInit(): void {
    this._productservice.getProducts().subscribe(res => {
      this.products = res;

      this.products.forEach((a: any) => {
        Object.assign(a, { quantity: 1 });
      });
    })
  }

  addtocart(product: any) {
    this.CartService.addtoCart(product);

  }

}
