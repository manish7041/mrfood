import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Product } from './Model/product';
import { DataService } from './Service/dataservice.service';
// import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  constructor(private data: DataService) { }
  title = 'app';
  popupCardValue?: Product;
  card: Array<Product>;
  // cart?: Array<Product>;   

  ngOnInit() {
    this.card = this.data.data;
    
  }

  

  openCard(id: number) {
    this.card.find((e: any) => {
      if (e.id === id) {
        this.popupCardValue = e
      }
    })


    // this.popupCardValue = {
    //   title:title,
    //   image:image,
    //   disc:dic,
    //   price:price,
    // }
  }

  //adding item to cart
  addToCart(obj: Product) {
 this.data.data.find((e)=>{
      if(e === obj){
        e.quantity++;
      }
     }) 
     
     
     this.card = this.data.data
}

deleteToCart(obj: Product) {
  this.data.data.find((e)=>{
       if(e === obj){
         e.quantity--;
       }
      }) 
      
      
      this.card = this.data.data
 }
    //   let cartObject:Product = obj;
    //   cartObject.quantity = 1
    //  console.log(cartObject);
    //  this.cart?.push(cartObject)



   
  }

