import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/Product';
import { DashboardService } from '../services/dashboard.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public httpc: HttpClient, private _productservice: ProductService,private _dashboard: DashboardService, private _router: Router) { }

  public products: any = [];
  ngOnInit(): void { }

  adminprod: Product = new Product();
  adminprods: Array<Product> = new Array<Product>();

  AddProduct() {
      console.log(this.adminprod)
      var admindto = {
          id: Number(this.adminprod.id),
          productName: this.adminprod.productName,
          productDescription: this.adminprod.productDescription,
          catID: Number(this.adminprod.catID),
          productImage: this.adminprod.productImage,
          productMrp: Number(this.adminprod.productMrp),
          productDiscount: Number(this.adminprod.productDiscount),
          productFinal: Number(this.adminprod.productFinal),
          productQuantity: Number(this.adminprod.productQuantity),

      }
      this.httpc.post("https://localhost:44332/api/Product", admindto).subscribe(res => this.PostSuccess(res), res => this.PostError(res));
      this.adminprod = new Product();
  }
  PostSuccess(res: any) {
      console.log(res);

  }
  PostError(res: any) {
      console.log(res);
  }

  Show() {
      console.log("Hi");
      this.httpc.get("https://localhost:44332/api/Product").subscribe(res => this.GetSuccess(res), res => this.GetError(res));
  }
  removeItem(item: any) {
        this._dashboard.removeProductItem(item);
      }
  GetSuccess(input: any) {
      this.adminprods = (input);
  }
  GetError(input: any) {
      console.log(input);
  }
//   public products: any = [];
//   public grandTotal !: number;
//   constructor(private _cart: CartService, private _router: Router) { }

//   ngOnInit(): void {
//     this._cart.getProductts()
//       .subscribe(res => {
//         this.products = res;
//         this.grandTotal = this._cart.getTotalPrice();
//       })
//   }
//   removeItem(item: any) {
//     this._cart.removeCartItem(item);
//   }
//   emptycart() {
//     this._cart.removeAllCart();
//   }
}
