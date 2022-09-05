import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseAPIUrl: string =environment.baseAPIUrl;

  constructor(private http: HttpClient) { }
  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseAPIUrl + 'api/employees')
  }

  addEmployee(addEmployeeRequest:Employee):Observable<Employee>{
    addEmployeeRequest.id ="00000000-0000-0000-0000-000000000000"
    return this.http.post<Employee>(this.baseAPIUrl + 'api/employees',addEmployeeRequest)
  }

  getEmployee(id : string) : Observable<Employee>{
    return this.http.get<Employee>(this.baseAPIUrl + 'api/employees/' + id)
  }

  updateEmployee(id:string, updateEmployeeRequest:Employee ) : Observable<Employee>{
    return this.http.put<Employee>(this.baseAPIUrl + 'api/employees/' + id, updateEmployeeRequest)
  }
}
