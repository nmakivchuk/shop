import { Component, OnInit } from '@angular/core';
import { GadgetService} from '../gadget.service';
import { NgRedux } from '@angular-redux/store';
import { InitialState } from '../store/reducer';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts: any;

  constructor(private ngRedux: NgRedux<InitialState>) {
    this.ngRedux
      .select<Array<Product>>('cart')
      .subscribe((items: Array<Product>) => {
        this.cart = items;
      });
  }
  cart: Array<Product>;
  ngOnInit() {}
}
