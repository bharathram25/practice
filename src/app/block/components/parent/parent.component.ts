import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  Action: any;
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',Action:['edit','delete']},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',Action:['edit','delete']},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',Action:['edit','delete']},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',Action:['edit','delete']},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',Action:['edit','delete']},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',Action:['edit','delete']},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',Action:['edit','delete']},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',Action:['edit','delete']},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',Action:['edit','delete']},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',Action:['edit','delete']},
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','Action'];
  dataSource = this.ELEMENT_DATA;

  tableData = { col:this.displayedColumns , datas:this.dataSource}

  //-----click function-----
  receive(event:any){
    if(event.icon=='edit'){
      this.edit();
    }else if(event.icon=='delete'){
      this.delete(event.records);
    }
  }

  edit(){
    console.log(event);
  }
  delete(data:any){
    const index=this.ELEMENT_DATA.findIndex(x=>x.position === data.position);
    console.log(index);
    this.ELEMENT_DATA.splice(index,1);
    console.log(this.ELEMENT_DATA);
    this.ELEMENT_DATA=this.ELEMENT_DATA;
  }
}
