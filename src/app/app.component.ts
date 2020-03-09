import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormsModule,} from '@angular/forms';
import {CommonService} from './common.service';
import {HttpClient,HttpResponse, HttpHeaders, HttpRequest} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databaseapp';
  constructor(private newService :CommonService,){}
  Repdata;
  
  ngOnInit(){
	  this.newService.GetUser().subscribe(data => this.Repdata = data)
  }
  
}
