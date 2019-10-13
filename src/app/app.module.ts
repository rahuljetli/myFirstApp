// Importing Modules below:
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importing services below:
import { UserService } from  './Services/user.service';
import { AuthguardGuard } from './Services/authguard.guard';
import { EmployeeListService } from './Services/employee-list.service';
import { HttpClientModule } from '@angular/common/http';

//Importing Routing starts below:-
import { AppRoutingModule, routingComponents } from './app-routing.module';

// Importing Component below:
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// Importing Directive below:
import { CustomDirectiveDirective } from './custom-directive.directive';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    CustomDirectiveDirective,
    EmployeeDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService,AuthguardGuard,EmployeeListService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('App component loaded');
  }
}