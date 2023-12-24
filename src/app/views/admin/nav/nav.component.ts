import { Component } from '@angular/core';
import { inject } from '@angular/core/testing';
import { DataService } from 'src/app/Service/dataservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
constructor(private d:DataService){

}
ngOnInit(){
  
}

currentLink:number;
  navItems = [
    {id:1, option:'Mood Break fast', img:""},
    {id:2, option:'Math Time Shares', img:""},
    {id:3, option:'Meals for One', img:""},
    {id:4, option:'Burgers &Wraps', img:""},
    {id:5, option:'Match Time Meals', img:""},
    {id:6, option:'Jain Frendly', img:""},
    {id:7, option:'Coffee & Beverages', img:""},
    {id:8, option:'Fries & sides', img:""},
    {id:9, option:'Desserts', img:""},
    {id:10, option:'Happy Meals', img:""},
    {id:11, option:'Navaratri speials', img:''}
  ]


  activeNav(id:number){
    this.currentLink = id;
    let data = this.navItems.find((e)=>e.id == this.currentLink)
    console.log(data.option)
    this.d.navData(data.option);
  }
}
