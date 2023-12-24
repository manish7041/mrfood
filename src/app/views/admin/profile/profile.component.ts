import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  hidee: boolean = false;
  inputId: string  = '0';


  hide(id: string) {
    this.inputId = id
    console.log(id);

    this.hidee = !this.hidee
    console.log(this.hidee);

  }


  handleFileInput(event: any) {
    const file = event.target.files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64String = e.target.result as string;
        this.convertImageToJSON(base64String);
      };
      reader.readAsDataURL(file);
    }
  }

  convertImageToJSON(base64String: string) {
    const imageObject = {
      imageData: base64String,
      // Other properties if needed
    };
  
    // Now you can use 'imageObject' in your application or send it to a server.
    console.log(imageObject);
  } 

}
