import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private http: HttpClient, private cartService: CartService) {

  }
  getManagers(){
    let api = 'http://localhost:8090/api/v1/managers';
    this.http.get(api).subscribe((response:any)=>{
      console.log(response[0]);
      this.cartService.setManagerObj(response[0]);

    });
  }


  share() {
    window.alert('Get all information about managers');
  }
}
