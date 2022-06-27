import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-finalorder',
  templateUrl: './finalorder.component.html',
  styleUrls: ['./finalorder.component.css']
})
export class FinalorderComponent implements OnInit {

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

}
