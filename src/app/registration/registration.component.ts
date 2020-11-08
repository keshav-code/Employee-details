import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegServiceService } from '../registration-service/reg-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  ragistrationModel: any={};
  regs:any={};
  constructor(private regService:RegServiceService,public router: Router) { }

  ngOnInit(): void {
  }

  signIn(ragistration)
  {
  console.log('keshav');
  this.regs=Object.assign(this.regs,ragistration);
  this.regService.setRegisterData(this.regs);
  sessionStorage.setItem('session',"this.ragistrationModel.firstname");
   
  }


}
