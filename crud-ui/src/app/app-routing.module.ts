import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'create-emp', component: CreateEmployeeComponent},
  {path:'', redirectTo: 'employees', pathMatch: 'full'},
  {path:'update-emp/:id', component: CreateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
