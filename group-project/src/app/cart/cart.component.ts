import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  constructor(private cartService: CartService, private location: Location) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }
  goBack(): void {
    this.location.back();
  }
}
