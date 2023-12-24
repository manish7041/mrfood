import { Component, DoCheck, OnChanges,OnDestroy,OnInit } from '@angular/core';
import { reduce } from 'rxjs';
import { Product } from 'src/app/Model/product';
import { DataService } from 'src/app/Service/dataservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, DoCheck, OnDestroy{

  constructor(private data: DataService) { }
  card: Array<Product>;
  empty: any;
  totalItems: number;
  totalprice:number = 0;
  ngOnInit() {
    this.card = this.data.data;
  //  let total = this.card.map((e)=>{
  //   if(e.quantity > 0){
  //     // let eTprice = []
  //     return e.quantity * e.price
  //   }else{ return 0}
      
  //   })

  //   console.log(total);

  //   const initialValue = 0;
  //   this.totalprie = total.reduce(
  //     (accumulator, currentValue) => accumulator + currentValue,
  //     initialValue,
  //   );

  //   console.log(this.totalprie);
    
    
  }

ngDoCheck() {
  
    let empty = this.data.data.filter((e) => {
      if (e.quantity == 0) {
        return null
      } else {
        return e
      }
    })
    if (empty.length > 0) {
      this.empty = false
    } else {
      this.empty = true
    }

    this.card = this.data.data

  //quantity
  this.data.countQuantity()
  let v = this.data.totalQuantity.subscribe((res)=>{
    this.totalItems = res
  })
 
   
   //price
  let p =  this.data.totalPrice.subscribe((res)=>{
    this.totalprice = res
   })


//

    ///
    // let total = this.card.map((e)=>{
    //   if(e.quantity > 0){
    //     // let eTprice = []
    //     return e.quantity * e.price
    //   }else{ return 0}
        
    //   })
  
    //   console.log(total);
  
    //   const initialValue = 0;
    //   this.totalprice = total.reduce(
    //     (accumulator, currentValue) => accumulator + currentValue,
    //     initialValue,
    //   );
  

      // console.log(this.totalprice);
      
  }





  removeadd(obj: Product, va: HTMLButtonElement) {
    let value = va.value;
    console.log(value);
    this.data.deleteCart(obj, value);
      }

  deleteAll() {
    this.data.deleteAllCart();
  }

  ngOnDestroy(){

  }

}
