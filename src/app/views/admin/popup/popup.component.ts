import { Component, DoCheck, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from 'src/app/Model/product';
import { DataService } from 'src/app/Service/dataservice.service';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements DoCheck {
  constructor(private s:DataService){

  }
display:boolean = true;
@Input() data:Product;
ngDoCheck(){
}
addData:Subject<boolean> = new Subject<boolean>()
onAdd(value:any){
this.s.countQuantity();

  if(value == 'true'){
    this.display = !this.display;
    this.addData.next(true)
  }else{
    this.display = !this.display;
  }
 
}
}
