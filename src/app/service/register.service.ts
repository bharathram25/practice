import { Injectable } from '@angular/core';
import { HttpRoutingService } from './httpRouting/http-routing.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  messages = new BehaviorSubject<any>(null);

  constructor(private httpRouting:HttpRoutingService) { }

  getUsers(url:any){
    return this.httpRouting.getMethod('v1/'+url);
  }

  getMessage(){
    return this.httpRouting.getMessagemethod('message.json').subscribe(res=>{
      // console.log(res);
      this.messages.next(res);
    })
  }

  createUser(url:string, data:any){
    return this.httpRouting.postMethod('v1/'+url,data);
  }

  deleteUser(url:string,data:any){
    return this.httpRouting.postMethod('v1/'+url, data);
  }

  getUser(url:string,data:any){
    return this.httpRouting.postMethod('v1/'+url, data);
  }

  updateUser(url:string,data:any){
    return this.httpRouting.postMethod('v1/'+url, data);
  }
}
