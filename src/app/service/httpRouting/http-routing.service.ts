import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HttpRoutingService {
  backendUrl=environment.apiUrl;
  constructor(private httpClient:HttpClient) { }

  getMethod(url:any){
    console.log(this.backendUrl+url);
    return this.httpClient.get(this.backendUrl+url);
  }

  postMethod(url:string,data:any){
    return this.httpClient.post(this.backendUrl+url,data);
  }

  getMessagemethod(url:any){
    return this.httpClient.get('./assets/' + url);
  }
}
