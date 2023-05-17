import { Component } from '@angular/core';
import { EmployeeModal } from '../employee-modal';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {

 employees: EmployeeModal[] | undefined;

 constructor(private employeeService: EmployeeService,
            private router: Router){

 } 
 ngOnInit(): void {
  this.getEmployees();
 }

 private getEmployees() {
  this.employeeService.getEmployee().subscribe(resp => {
    this.employees = resp;
  })
 }

 updateEmployee(id: any) {
  this.router.navigate(['update-emp', id]);
 }

 deleteEmp(id: any) {
  this.employeeService.deleteEmployeeById(id).subscribe(resp => {
    this.getEmployees();
  })
 }

}
