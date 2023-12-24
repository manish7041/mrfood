import { Component, ComponentFactoryResolver, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewcontainerDirective } from 'src/app/Service/Directive/viewcontainer.directive';
import { Product } from 'src/app/Model/product';
import { DataService } from 'src/app/Service/dataservice.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, DoCheck{
  constructor(private d:DataService, private componentfactoryres:ComponentFactoryResolver){}
data:string[] = ['veg','jain veg'];
selected:any;
bool:boolean = false
onSelect(e:any){

  this.selected = e;
  console.log(e)
  this.bool = true
}
select(){
this.bool = false
}

//
@ViewChild('cal') calor:ElementRef 
calories:boolean = false;
@ViewChild(ViewcontainerDirective) container:ViewcontainerDirective;

food:Product[] = []

 ngOnInit(){
 this.food =  this.d.data;
 this.d.countQuantity();
 }
 ngDoCheck(){
  this.d.countQuantity();
 }

 showCalories(){
   if(this.calor.nativeElement.value === 'false'){
     this.calories = true;
   }else{
     this.calories = false
   }
  console.log(this.calories)
 }

 filterData:Product[] = []
 filterValue:string;

 filter(){
     let copy:Product[]= []
  if(this.filterValue.length < 3) return
  this.d.data.forEach((element)=>{
    let filterItem = element.title.toLocaleLowerCase().includes(this.filterValue.toLocaleLowerCase());
    
    if(filterItem && this.filterValue !== ''){
       copy.push(element)
      
    this.filterData = copy;
    copy = []
    }else if(this.filterValue == ''){
      this.filterData = []
    }
  })
}

removeadd(obj:Product, tag:HTMLButtonElement){
   this.d.deleteCart(obj,tag.value);
}

// addItem(id:number){
//  this.d.addItemCart(id)
// }
addItem(id: number, obj: Product) {
  this.showDynamicC(obj);
}

showDynamicC(obj: Product) {
  //creating instance of popucompnent
  const componentPopupFactory = this.componentfactoryres.resolveComponentFactory(PopupComponent);
  const viewContainerRef = this.container.viewcontainerref;
  viewContainerRef.clear();
  //rendering popucomp in template
  const componentref = viewContainerRef.createComponent(componentPopupFactory)
  componentref.instance.data = obj;
  let ob = componentref.instance.addData.subscribe((res) => {
    this.d.addItemCart(obj.id);
    viewContainerRef.clear();
    ob.unsubscribe();
})
}

}
