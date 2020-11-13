import { Component, OnInit } from '@angular/core';
import { GetItems } from '../store/actions';
import { Product } from '../product/product.component';
import { NgRedux, select } from '@angular-redux/store';
import { InitialState } from '../store/reducer';
import { GadgetService } from '../gadget.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor(
    private ngRedux: NgRedux<InitialState>,
    private gadgetService: GadgetService
  ) {}

  @select('items') items$: Observable<Array<Product>>;

  ngOnInit() {
    this.gadgetService.getAll();
  }
}
