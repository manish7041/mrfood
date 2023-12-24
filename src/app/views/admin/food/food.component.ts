import { Component, ComponentFactoryResolver, DoCheck, ElementRef, Inject, ViewChild, ViewContainerRef } from '@angular/core';
import { DataService } from 'src/app/Service/dataservice.service';
import { Product } from 'src/app/Model/product';
import { ViewcontainerDirective } from 'src/app/Service/Directive/viewcontainer.directive';
import { PopupComponent } from '../popup/popup.component';


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements DoCheck {
  constructor(private d: DataService, private componentfactoryres: ComponentFactoryResolver) {
  }
  @ViewChild('cal') calor: ElementRef;
  @ViewChild(ViewcontainerDirective) container: ViewcontainerDirective
  calories: boolean = false;
  //  dataservice:DataService = Inject(DataService)
  //  display:boolean = false;
  itemsid: number;
  foodtitle: any
  food: Product[] = []
  ngOnInit() {
    this.food = this.d.data
  }
  ngDoCheck() {
    this.d.navdata.subscribe((navtitle) => {
      this.foodtitle = navtitle;
      this.d.countQuantity();
    })
  }

  showCalories() {
    if (this.calor.nativeElement.value === 'false') {
      this.calories = true;
    } else {
      this.calories = false
    }
    console.log(this.calories)
  }

  removeadd(obj: Product, va: HTMLButtonElement) {
    let value = va.value;
    console.log(value);
    this.d.deleteCart(obj, value);
  }

  addItem(id: number, obj: Product) {
    //  this.d.addItemCart(id);
    this.showDynamicComp(obj)
  }


  showDynamicComp(obj: Product) {
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
