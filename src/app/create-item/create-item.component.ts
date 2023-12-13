import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {itemRequest} from "../models/item_Request";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";






@Component({
  selector: 'app-create-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ReactiveFormsModule, FormsModule,HttpClientModule],
  templateUrl: './create-item.component.html',
  styleUrl: './create-item.component.css'
})
export class CreateItemComponent {
  constructor(public  httpClient:HttpClient) {
  }
  itemName? : string =" ";
  itemType? : string =" ";
  amount? : number ;
  arrayItemResponse : itemRequest[]=[];

  onClick(){
    let url= "http://localhost:8080/item/createItem";
    let item : itemRequest ={

      itemName: this.itemName,
      itemType : this.itemType,
      amount : this.amount
    };
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    const httpOptions = {
      headers: headers
    };
    console.log(item)
    this.httpClient.post(url,item,httpOptions).subscribe(x=> {})
  }

  findAll(){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    const httpOptions = {
      headers: headers
    };

  this.httpClient.get<Array<itemRequest>>("http://localhost:8080/item/find-all").subscribe(x=>{
      this.arrayItemResponse=x;
      this.findAll();
    })

  }

  ngOnInit(): void {
    this.findAll()
  }

}
