import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list.component';

const routes: Routes = [
  { path: 'employee-list', component: EmployeeListComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmployeeListComponent]
})
export class EmployeeListModule { 
  constructor(){
  console.log('EmployeeList Module loaded...');
  }
}