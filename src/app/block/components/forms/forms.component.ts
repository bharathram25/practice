import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpRoutingService } from 'src/app/service/httpRouting/http-routing.service';
import { RegisterService } from 'src/app/service/register.service';
import { pattern } from 'src/assets/pattern';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  employeeDetailForm!: FormGroup;
  responseData:any;
  detail: any;
  time="12:12:00";
  message: any;

  constructor(
    private httpRouting:HttpClient,
    private registerService:RegisterService,
    private http:HttpRoutingService,
    private snackbar:MatSnackBar,
    private router:Router
    ){}
  ngOnInit(){
    this.formInit();
    this.registerService.getUsers('getUsers').subscribe((res:any  )=>{
      console.log(res.response);
      this.detail=res.response;
      res.response.forEach((element:any )=> {
        console.log(element);
        this.responseData=element;
        // this.formInit();
        // delete element.id;
        // this.employeeDetailForm.patchValue(element);
      });
    })

    this.registerService.messages.subscribe(res => {this.message=res;
      // console.log(this.message);


    });

  }

  formInit(){
    this.employeeDetailForm = new FormGroup({
    firstName : new FormControl(this.responseData && this.responseData.firstName?this.responseData.firstName:null,[Validators.pattern(pattern.stringvalidation)]),
      lastName : new FormControl(this.responseData && this.responseData.lastName?this.responseData.lastName:null),
      eMail : new FormControl(null),
      alternateEmail : new FormControl(null),
      phoneNumber : new FormControl(null,[Validators.pattern(pattern.numbervalidation)]),
      alternateNumber : new FormControl(null),
      // firstName : new FormControl(null),
      // lastName : new FormControl(null)
      // name : new FormControl(null)
    })
  }

  onSubmit(){
    if(this.employeeDetailForm.valid){
      console.log(this.employeeDetailForm.value);
      this.registerService.createUser('createUser',this.employeeDetailForm.value).subscribe((res:any)=>{
        console.log(res);
        this.employeeDetailForm.reset();
        this.router.navigate(['table']);
        this.snackbar.open('Record added successfully','ok')
      })
    }
  }

  // jsonapi(){
  //   this.http.getMethod('posts').subscribe(res=>{
  //     console.log(res);
  //   })
  // }

  table(){
    this.router.navigate(['table']);
  }
}
