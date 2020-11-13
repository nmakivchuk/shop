import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})

export class ProductsListComponent implements OnInit {
  @Input() devices: Array<Product>;

  constructor() { }
  ngOnInit() { }
}
