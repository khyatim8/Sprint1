import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  public productItemList: any = []
  public adminprods = new BehaviorSubject<any>([]);
  constructor() { }
  removeProductItem(productt: any) {
    this.productItemList.map((a: any, index: any) => {
      if (productt.id === a.id) {
        this.productItemList.splice(index, 1);
      }
    })
    this.adminprods.next(this.productItemList);
  }
}
