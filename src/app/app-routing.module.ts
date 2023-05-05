import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './block/components/forms/forms.component';
import { ChildComponent } from './block/components/child/child.component';

const routes: Routes = [
  {path:'',redirectTo:"form",pathMatch:'full'},
  {path:'form',component:FormsComponent},
  {path:'form/:data/:id',component:FormsComponent},
  {path:'table',component:ChildComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
