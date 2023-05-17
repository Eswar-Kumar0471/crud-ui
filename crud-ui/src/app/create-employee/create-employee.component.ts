import { Component } from '@angular/core';
import { EmployeeModal } from '../employee-modal';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})

export class CreateEmployeeComponent {

  employee: EmployeeModal = new EmployeeModal;
  id: any;
  updateEmp: boolean = false;

  constructor(private empService: EmployeeService,
              private router: Router,
              private activatedRout: ActivatedRoute) {
  
  }

  ngOnInit(): void {
    this.id = this.activatedRout.snapshot.params['id']
    if(this.id) {
      this.updateEmp = true;
      this.empService.getEmpById(this.id).subscribe((resp: EmployeeModal) => {
        this.employee = resp;
      },error => console.log(error));
    } else {
      this.updateEmp = false;
    }
  }

  saveEmployee() {
    this.empService.createEmployee(this.employee).subscribe(resp => {
      this.goToEmpList();
    },
    error => console.log(error));
  }

  goToEmpList(){
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    //console.log(this.employee);
    this.saveEmployee();
  }

  updateEmployee() {
    this.empService.updateEmployeeById(this.id, this.employee).subscribe(resp => {
      this.goToEmpList();
    }, error => console.log(error));
  }

}
