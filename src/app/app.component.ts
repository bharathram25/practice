import { Component } from '@angular/core';
import { RegisterService } from './service/register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice';
  constructor(private register:RegisterService){}

  ngOnInit(){
    this.register.getMessage();
  }
}
