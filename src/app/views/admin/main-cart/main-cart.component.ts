import { Component, DoCheck, Inject, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/product';
import { DataService } from 'src/app/Service/dataservice.service';

@Component({
  selector: 'app-main-cart',
  templateUrl: './main-cart.component.html',
  styleUrls: ['./main-cart.component.css']
})
export class MainCartComponent implements OnInit, DoCheck {
  constructor(private d:DataService){}
totalItems:any;
totalPayable:number = 0;
subTotal:number = 0;
handlingCharge:number = 0;
Tax:number = 0;
display:boolean = false;
diplaybtn:string= '+';
priceObs;
quantityObs;

card:Product[]=[];
ngOnInit(){
this.card = this.d.data



}
ngDoCheck(){
  this.card = this.d.data

  //quantity
  this.d.countQuantity()
   this.quantityObs = this.d.totalQuantity.subscribe((res)=>{
    this.totalItems = res;
    if(res > 0){
      this.Tax = res * 15.09;
      this.handlingCharge = res * 7.9;

    }else{
      this.Tax = 0;
      this.handlingCharge = 0;
    }
    this.quantityObs.unsubscribe()
  })

  this.priceObs = this.d.totalPrice.subscribe((price)=>{
    this.subTotal = price;
    this.totalPayable = this.subTotal + (2*this.Tax) + this.handlingCharge;
    this.priceObs.unsubscribe()
  })
  
}

empty:false
deleteAll(){
  this.d.deleteAllCart()
};
removeadd(c:Product, plus:HTMLButtonElement){
  this.d.deleteCart(c,plus.value)
}


dI(){
  this.display = !this.display;
  if(this.display){
    this.diplaybtn = '-'
  }else{
    this.diplaybtn = '+'
  }
}


ngOnDestroy(){

}
}
