import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "lazy", component: LazyComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LazyComponent]
})
export class LazyModule { 
  constructor(){
    console.log('Lazy component loaded');
  }
}
