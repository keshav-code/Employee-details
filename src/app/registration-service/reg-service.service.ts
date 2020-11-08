import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegServiceService {
  registration:any={};
  data=[];
  
  constructor() { }

  getRegDataServie()
  {
    return this.data;
  }

  setRegisterData(user)
  {
    
    if(localStorage.getItem('token'))
    {
      console.log("multi");
     this.data= JSON.parse(localStorage.getItem('token'));
    this.data=[user,...this.data];
    }else{
      console.log("single");
      this.data=[user];
    }
    localStorage.setItem('token',JSON.stringify(this.data));
  }
   
 




}
