import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
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
  appedendId!:number;
  fromEdit=false;

  constructor(
    private httpRouting:HttpClient,
    private registerService:RegisterService,
    private http:HttpRoutingService,
    private snackbar:MatSnackBar,
    private router:Router,
    private route:ActivatedRoute
    ){}
  ngOnInit(){
    this.formInit();
    this.registerService.getUsers('getUsers').subscribe((res:any  )=>{
      // console.log(res.response);
      this.detail=res.response;
      res.response.forEach((element:any )=> {
        // console.log(element);
        this.responseData=element;
        // this.formInit();
        // delete element.id;
        // this.employeeDetailForm.patchValue(element);
      });

      //get params data
      this.route.params.subscribe((res:any)=>{
        if(res && res.data){
          this.fromEdit=true;
          this.appedendId=res.id;
          console.log(this.appedendId);
          //get specific user
          this.registerService.getUser('getUser',{id:this.appedendId}).subscribe((res:any)=>{
            console.log(res.userDetails);
            this.employeeDetailForm.patchValue(res.userDetails);
          })
        }
      })
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

  onUpdate(){
    if(this.employeeDetailForm.valid){
      this.employeeDetailForm.value.id=+this.appedendId
      this.registerService.updateUser('updateUser',this.employeeDetailForm.value).subscribe((res:any)=>{
        this.employeeDetailForm.reset();
        this.snackbar.open('Record update successfully','ok');
        this.router.navigate(['table']);
      })
    }
  }


  table(){
    this.router.navigate(['table']);
  }
}
