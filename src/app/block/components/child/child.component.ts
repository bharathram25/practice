import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { RegisterService } from 'src/app/service/register.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  constructor(
    private registerservice : RegisterService,
    private snackbar:MatSnackBar,
    private route:Router
    ){}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['firstName', 'lastName', 'eMail', 'phoneNumber','action'];
  dataSource:any=[]

  ngOnInit(){
    this.registerservice.getUsers('getUsers').subscribe((res:any)=>{
      // console.log('response :', res.response);
      this.dataSource = new MatTableDataSource(res.response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  onDelete(data:any){
    console.log(data);
    this.registerservice.deleteUser('deleteUser',{id: data.id}).subscribe((res:any)=>{
      if(res){
        console.log(res);
        this.snackbar.open('Record deleted successfully','ok');
        this.ngOnInit();
      }
    })
  }

  onEdit(data:any){
    console.log(data);

    this.route.navigate(['form','edit',data.id]);

  }

  ngAfterViewInit() {  }

  form(){
    this.route.navigate(['form']);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
