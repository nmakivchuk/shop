import { Component, OnInit } from '@angular/core';
import { GadgetService} from '../gadget.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts: any;

  constructor() {}

  ngOnInit(): void {

  }
}
