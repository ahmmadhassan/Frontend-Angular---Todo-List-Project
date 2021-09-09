import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthenticationService:BasicAuthenticationService
  ) { }



  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // let username ='ahmad'
    // let password = 'gishkori'
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' +password);
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let name = this.basicAuthenticationService.getAuthenticatedUser();

    if (basicAuthHeaderString && name) {
      req = req.clone({
        setHeaders : {
          Authorization : basicAuthHeaderString
        }
      })

    }
    return next.handle(req);

  }


}
