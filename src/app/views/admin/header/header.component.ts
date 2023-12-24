import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DataService } from 'src/app/Service/dataservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck{
  constructor(private d:DataService, private activeroute:ActivatedRoute, private route:Router){}
ngOnInit(){
 this.selected ={id:1, icon:'./../../../assets/icon/delivery.png',title:'MrDelivery'}

 let a =this.route.url;
console.log(a);

}
totalItems?:number = 1
selected:any;
dropDownItem:any;
condition:any= false;
headerRoutes:string = ''

data:any= [
  {id:1, icon:'./../../../assets/icon/delivery.png',title:'MrDelivery'},
  {id:2, icon:'./../../../assets/icon/eat.png',title:'Dine-In'},
  {id:3, icon:'./../../../assets/icon/car.png',title:'Take Away'}

]
ngDoCheck(){
  let q = this.d.totalQuantity.subscribe((res)=>{
  this.totalItems  = res;
  q.unsubscribe()
 })
 
}

dropDown():void{
  let obj = Object.create(this.data);
  obj.splice(this.selected.id - 1, 1);
  this.dropDownItem = obj 
  this.condition = !this.condition; 
}

selectedItem(id:any):void{
  let value = this.data.find((e:any)=>e.id == id);
  this.selected = value;
  this.condition = !this.condition;
}

getCurrentRoute(){
  let a =this.route.url;
  console.log(a);
}

}
