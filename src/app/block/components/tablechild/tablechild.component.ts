import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-tablechild',
  templateUrl: './tablechild.component.html',
  styleUrls: ['./tablechild.component.scss']
})
export class TablechildComponent {
  @Output() clicked=new EventEmitter<any>
  @Input() tableDatas !: any
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  event!:object;
  displayedColumns:any=[];
  dataSource:any=[];


ngOnInit(){

  this.displayedColumns = this.tableDatas.col;
  this.dataSource = this.tableDatas.datas;
  console.log(this.tableDatas);
}
ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}
send(data:any,icon:string){
  this.event={
    records:data,
    icon:icon
  }
  this.clicked.emit(this.event);
}
}
