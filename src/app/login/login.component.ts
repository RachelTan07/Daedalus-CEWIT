import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgxXml2jsonService } from 'ngx-xml2json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {


  value = '';
  onEnter(value: string) {
    this.value = value;
    console.log(this.value);
  }

  


  constructor(
    private http:Http,
    private ngxXml2jsonService: NgxXml2jsonService
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
