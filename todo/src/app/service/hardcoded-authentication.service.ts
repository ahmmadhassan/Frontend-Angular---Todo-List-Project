import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(name:string, pwd:string){
    console.log("before" + this.isUserLoggedIn());
    if(name==="ahmad" && pwd==="gishkori"){
      sessionStorage.setItem('authenticaterUser', name);
      return true;
    }else{
      return false;
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser')
    return (user !== null);
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }
}
