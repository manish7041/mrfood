import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { DataService } from 'src/app/Service/dataservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  constructor(private http:HttpClient, private service:DataService){

  }

option:any;
user?:any =[{
  name:'',
  mobile:'',
  email:'',
  img:''
}];

ngOnInit(){
 this.option = this.service.option
// this.http.get('http://localhost:3000/Users').subscribe((res)=>{
//  this.user = res
// })
}
}
