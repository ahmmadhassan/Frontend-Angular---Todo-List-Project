import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'ahmad'
  password = ''
  errorMessage = "Invalid Credentials"
  invalidLogin = false
  constructor(
    private router: Router,
    private  hradcodedAuthentication:HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService
    ) {
   }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.hradcodedAuthentication.authenticate(this.username, this.password)){
      this.router.navigate(['welcome', this.username])
      this.invalidLogin=false;

    }else{
      this.invalidLogin=true;
    }
  }

  handleJwtAuthLogin(){
    this.basicAuthenticationService.executeJwTAuthenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['welcome', this.username])
        this.invalidLogin=false;
      },
      error => {
        console.log(error);
        this.invalidLogin=true;
      })
  }

}
