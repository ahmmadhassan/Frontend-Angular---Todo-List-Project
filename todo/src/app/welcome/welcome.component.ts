import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcomeMessageFromService:string | undefined
  message='Some Welcome Message'
  name=''

  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService) { }


  ngOnInit(): void {
    // console.log(this.message)
    this.name =this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    this.service.executeHelloWorldBean(this.name).subscribe(
      response => this.handleSuccessResponse(response),
      // error => this.handleErrorResponse(error)
    );

  }


  handleSuccessResponse(response: any){
    this.welcomeMessageFromService = response.message
  }

  handleErrorResponse(error:any){
    console.log(error);
    console.log(error.error);
    console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message
  }




}
