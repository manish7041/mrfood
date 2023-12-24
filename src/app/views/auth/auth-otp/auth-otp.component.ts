import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-otp',
  templateUrl: './auth-otp.component.html',
  styleUrls: ['./auth-otp.component.css']
})
export class AuthOtpComponent {
display:boolean = true;
hidee:boolean = false;
key?:string;
show(){
  this.display = !this.display
}
hide(){
this.hidee = !this.hidee
}

setFocus(e:Event,c:HTMLInputElement,n:HTMLInputElement){
  let length = c.value.length;

console.log(e,c);
  if(length === 1){
   n.focus();
   
  }

}

}
