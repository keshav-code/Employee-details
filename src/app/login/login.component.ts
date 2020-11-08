import { Component, OnInit } from '@angular/core';
import { RegServiceService } from '../registration-service/reg-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginModel:any={};
  userName:string="admin";
  password:string="admin@123";
  usernamepassword:string="";
  
  constructor(public router: Router) { }

  ngOnInit(): void {   
  }
  

  onLogIn()
  {
    if(this.loginModel.userName===this.userName && this.loginModel.password===this.password )
    {
      
      this.router.navigate(['/home']);
      sessionStorage.setItem('session',"admin");
    }else{

      this.usernamepassword="*WrongUserName & Password";
      
    }
   
  }
  
  

  onTextChange(value)
  {
    console.log(value);
    this.loginModel.userName = value;
    if(this.loginModel.userName == '')
    {
      this.usernamepassword='';
      console.log(this.usernamepassword);
    }
    
  }

  
 

}
