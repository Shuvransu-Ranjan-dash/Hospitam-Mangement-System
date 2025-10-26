import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }

  authenticate(username:string,password:string){
    if(username=="Soumya" && password=="7077"){
      sessionStorage.setItem('username',username)
      return true
    }else{
      return false
    }
  }

  isUserLogedIn(){
    console.log("Done")
    let user = sessionStorage.getItem('username');
    return !(user==null)
  }
  
  logOut(){
    console.log("Done")
    sessionStorage.removeItem('username');
  }
}
