import { Component, OnInit } from '@angular/core';
import { EmployeeListService } from '../Services/employee-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = [];
  public employeeID;
  constructor(private _employeeListService: EmployeeListService, private router:Router,
              private route: ActivatedRoute  
  ) { }

  ngOnInit() {
    this._employeeListService.getEmployeeList()
      .subscribe(data => this.employees = data);
  }
  select(employee){
      // this.employeeID = this.route.snapshot.paramMap.get('id');
      this.router.navigateByUrl('/employee-detail/'+employee.id);
  }

  addEmployee(v){
    alert(v.value);
  }
  /*editUSer(employee){
    this.form.setValue(employee);
  }*/

  deleteUser(employee){
    if(confirm('Are you want to delete ?') == true){
      this._employeeListService.getEmployeeList()
        .subscribe(data => this.employees = data)
    }
  }
}