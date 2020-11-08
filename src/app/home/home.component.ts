import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RegServiceService } from '../registration-service/reg-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //regData:any ={};
 empdata=[];

  constructor() { }

  ngOnInit(){
    this.empdata=JSON.parse(localStorage.getItem('token'));
  console.log(this.empdata);
  }
  
}
