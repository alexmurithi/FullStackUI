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
}