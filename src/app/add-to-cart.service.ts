import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  cartItems : any = [];
  products: any =[];


  constructor() {
    this.products = [{id:1, name : 'Data Voucher' , desc : 'Data_Voucher' , price : 100 , url :'https://pbs.twimg.com/profile_images/735835271716044804/i6rmnQHQ.jpg'},
    {id : 2, name : 'Pigeon Beta T-Shirt' ,desc: 'TShirt',price : 10, url : 'https://media.gq-magazine.co.uk/photos/5f575108020908336ccd4d82/master/w_1000,c_limit/20200907-tshirt-05.jpg'},
    {id : 3,name : 'Pigeon Beta Coffee Mug', desc : 'Mug', price : 7.50,url : 'https://www.nespresso.com/ecom/medias/sys_master/public/11905842184222/A-0397-TQ.jpg?impolicy=productPdpSafeZone&imwidth=1238'}];
   }
}
//here we are describing all the products needed to be displayed along with thier Ids, Description, Price and Image URL