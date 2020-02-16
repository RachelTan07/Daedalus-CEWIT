import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  patient = false;
  primary = false;
  ortho = false;
  error = false;

  login() {
    if(this.username == "Lincoln.Wu" && this.password == "Juandice"){
      this.patient = true;
      this.router.navigateByUrl('/dashboard');
    }else if(this.username == "Austin.Lee" && this.password == "PrimaryPhysician"){
      this.primary = true;
      this.router.navigateByUrl('/dashboard');
    }else if(this.username == "Karen.Smith" && this.password == "Dentist"){
      this.ortho = true;
      this.router.navigateByUrl('/dashboard');
    }else{
      this.error = true;
    }
  }

  constructor(
    private http:Http,
    private ngxXml2jsonService: NgxXml2jsonService,
    private router: Router

  ) { }
  payfone;

  ngOnInit() {
    this.http.get('http://api.staging.payfone.com/mobileauth/2014/07/01/authenticateEcho')
    .subscribe(response =>{
      this.payfone = response.json();
    })
    console.log(this.payfone);
  }

}
