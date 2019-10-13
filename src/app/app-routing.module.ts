import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importing Component below:
import { LoginFormComponent } from './login-form/login-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { NgTemplateNgForComponent } from './ng-template-ng-for/ng-template-ng-for.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AuthguardGuard } from './Services/authguard.guard';
import { RegistrationComponent } from './registration/registration.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

//Routing starts below:-
const appRoutes:Routes  = [
  { path:'', redirectTo:'/login-form', pathMatch:'full'},
  { path:'home',  component : HomeComponent },
  { path:'login-form',  component : LoginFormComponent },
  { path:'navbar',  canActivate : [AuthguardGuard], component : NavbarComponent },
  { path:'customer-list', canActivate :[AuthguardGuard], component : CustomerListComponent },
  // { path:'dashboard', canActivate :[AuthguardGuard], component : DashboardComponent },
  // { path:'ng-template-ng-for', canActivate :[AuthguardGuard], component : NgTemplateNgForComponent },
  { path:'ParentPage', canActivate :[AuthguardGuard], component : ParentComponent },
  { path:'ChildPage', component : ChildComponent },
  { path:'', loadChildren : '../app/employee-list/employee-list.module#EmployeeListModule' }, //Lazy Loading Example #1
  { path: 'employee-detail/:id', component: EmployeeDetailComponent},
  { path:'', loadChildren : '../app/lazy/lazy.module#LazyModule' }, //Lazy Loading Example #2
  { path:'registration', component : RegistrationComponent },
  { path: '**', component: NotFound404Component}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginFormComponent,
                                  NavbarComponent,
                                  HomeComponent,
                                  DashboardComponent,
                                  CustomerListComponent,
                                  NgTemplateNgForComponent,
                                  ParentComponent,
                                  ChildComponent,EmployeeDetailComponent,
                                  RegistrationComponent,
                                  NotFound404Component]