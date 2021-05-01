import { Component, OnInit } from '@angular/core';
import { AddToCartService} from '../add-to-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any =[];
  alert : boolean = false;
  results : string = "";

  constructor(public CartService : AddToCartService) {
   }

  ngOnInit(): void {
  }

  addToCart(product)
  {
    this.CartService.cartItems.push(product.id);    //This block will add the product to cart with a relevant id 
    this.alert = true;
    this.results = product.name + ' added to cart'; //This block will generate an alert when a product has been added to the cart sucessfully
    setTimeout(() => {              //this block will make the alert dissappear after the defined time has passed
      this.alert = false;     
      this.results = "";
    },800);

  }

  clearCart()
  {
    this.CartService.cartItems = []; //this is the logic for clearing the cart 
  }

}
