import { Component, OnInit, inject } from '@angular/core';
import { DataService } from 'src/app/Service/dataservice.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
    data:any[] = [
      {id:1, icon:'./../../../assets/icon/popularMenuIcon.png', title:'Popular'},
      {id:2, icon:'./../../../assets/icon/discountMenuIcon.png', title:'Deals'},
      {id:3, icon:'./../../../assets/icon/newMenuIcon.png', title:'New Launch'},
    ];
    
     service = inject(DataService)

    ngOnInit(){
    this.service.countQuantity()
    }
  
}
