import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {PersonRequest} from "../models/person_request";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {observeOn} from "rxjs";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule] ,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(protected httpClient:HttpClient) {
  }

    personId:number=1;
    walletId?:number;
    onClick(){
      let url= "http://localhost:8080/wallet/create-wallet";
      let person: PersonRequest={
        personId: this.personId,
        balance:0
      };
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');

     const httpOptions = {
        headers: headers
      };

      console.log(person)
      this.httpClient.post(url,person,httpOptions).subscribe(x =>{
        this.walletId= parseInt(x.toString());
      });

    }
}
