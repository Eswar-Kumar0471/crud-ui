import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModal } from './employee-modal';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private basseUrl = "http://localhost:8080/api/emp-mgt/employees";
  constructor(private http: HttpClient) { }

  getEmployee(): Observable<EmployeeModal[]> {
    return this.http.get<EmployeeModal[]>(`${this.basseUrl}`);
  }

  createEmployee(employee: EmployeeModal): Observable<Object> {
    return this.http.post(`${this.basseUrl}`, employee);
  }

  getEmpById(id: any):Observable<EmployeeModal> {
    return this.http.get<EmployeeModal>(`${this.basseUrl}/${id}`);

  }

  updateEmployeeById(id: any, employee: EmployeeModal): Observable<Object> {
    return this.http.put(`${this.basseUrl}/${id}`,employee);
  }

  deleteEmployeeById(id: any): Observable<Object> {
    return this.http.delete(`${this.basseUrl}/${id}`);
  }

}
