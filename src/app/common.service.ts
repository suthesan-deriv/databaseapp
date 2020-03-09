import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse, HttpHeaders, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
 
export class CommonService {

  constructor(private http: HttpClient) { }
    
  GetUser(){
	  return this.http.get('http://localhost:8080/api/getUser/') 
  }


}
