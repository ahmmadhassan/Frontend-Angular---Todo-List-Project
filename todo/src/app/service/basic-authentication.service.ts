import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { API_URL } from '../app.constant';


export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'


@Injectable({
  providedIn: 'root'
})

export class BasicAuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  // authenticate(name:string, pwd:string){
  //   console.log("before" + this.isUserLoggedIn());
  //   if(name==="Ahmad" && pwd==="gishkori"){
  //     sessionStorage.setItem('authenticaterUser', name);
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }

  executeJwTAuthenticationService(username : string, password : string){

    return this.http.post<any>(`${API_URL}/authenticate`,
    {
      username,
      password
    })
      .pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        }
      )
    );

  }


  executeBasicAuthenticationService(username: string, password: string){

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' +password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationService>(`${API_URL}/basicauth`,
    {headers}).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
          return data;
        }
      )
    );

  }


  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER)

  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
  }


  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return (user !== null);
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)

  }
}


export class AuthenticationService{
  constructor(public message:string){}
}
