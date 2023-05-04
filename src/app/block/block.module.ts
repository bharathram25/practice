import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { MaterialModule } from '../material/material.module';
import { TablechildComponent } from './components/tablechild/tablechild.component';
import { FormsComponent } from './components/forms/forms.component';
import { ObservableComponent } from './components/observable/observable.component';
import { TimePipe } from './components/time.pipe';



@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    TablechildComponent,
    FormsComponent,
    ObservableComponent,
    TimePipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ParentComponent,
    ChildComponent,
    FormsComponent,
    ObservableComponent
  ]
})
export class BlockModule { }
