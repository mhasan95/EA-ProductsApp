import { visitAll } from '@angular/compiler/src/render3/r3_ast';
import { createDirectiveTypeParams } from '@angular/compiler/src/render3/view/compiler';
import { Component, OnInit } from '@angular/core';
import { AddToCartService} from '../add-to-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  finalItems: any =[];
  totalPrice: number = 0;
  
  constructor(public CartService : AddToCartService) {

    let counts = {};
   CartService.cartItems.forEach(function(x) { counts[x] = (counts[x] || 0)+1; }); //This is a function that will defined the frequency of the element in the array i.e frequency of the product in the cart

   for(var i = 0 ; i < CartService.products.length;i++)
   {
     var item = CartService.products[i];
     item.quantity = counts[item.id];
     if(item.quantity == undefined)
     {
        item.quantity = 0;
        continue;
     }
     if(item.quantity >= 3)         //This block of code will discount as a 3-for-2 discount where quantity is more or equal to 3
     this.totalPrice = this.totalPrice + (item.quantity - 1) * item.price ;
     else    this.totalPrice = this.totalPrice + (item.quantity) * item.price ;
     this.finalItems.push(item);
   }
 
  }
  ngOnInit(): void {
  }
  deleteItems(item)
  {
    var index = this.finalItems.indexOf(item); 
    this.finalItems.splice(index, 1);       //splice method in Javascript removes the element from the array i.e deleting a product array from the product list
    if(item.quantity >= 3)
    this.totalPrice = this.totalPrice - (item.price * (item.quantity - 1)); //this logic will calculate the discounted price again after a procuct has been removed to display the total
    else  this.totalPrice = this.totalPrice - (item.price * item.quantity);
  //  this.finalItems[index].quantity = 0;
  //  while(this.CartService.cartItems.indexOf(item.id) != -1)
  //    this.CartService.cartItems.splice(this.CartService.cartItems.indexOf(item.id) , 1);
  }

}
