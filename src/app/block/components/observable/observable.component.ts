import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { type } from 'src/app/model/model';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})

// let details:any;

export class ObservableComponent {

//   details: type[] = [
//     {id:1,value:'gbhnujn'},
//     {id:2,value:'ihbnjm'},
//     {id:3,value:'jhgbjm'}
// ]
  data: any;

  ngOnInit(){
    let data = new Observable((subscribe: Observer<number>)=>{
    subscribe.next(1);
    subscribe.next(2);
    subscribe.error('this is an error');
  });
  this.data.subscribe((res: any) => {
    console.log('response' ,res);
  });
}
}
