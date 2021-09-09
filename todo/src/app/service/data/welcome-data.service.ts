import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constant';


export class HelloWorldService{
  constructor(message:string){}
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBean(name:any){
    // let basicAuthHeaderString = this.createBasicAuthenticationHeader();

    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })

    return this.http.get<HelloWorldService>(`${API_URL}/hello/${name}`,
    // {headers: headers}
    );

  }

  // createBasicAuthenticationHeader(){
  //   let username ='ahmad'
  //   let password = 'gishkori'
  //   return (
  //     'Basic ' + window.btoa(username + ':' +password)
  //   );
  // }


}
