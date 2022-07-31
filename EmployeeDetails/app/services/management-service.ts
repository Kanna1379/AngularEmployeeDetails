import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Employee } from '../common/employee';
import { Department } from '../common/department';

@Injectable({
providedIn:'root'
})

export class ManagementService 
{

empurl = "http://localhost:8080/api/emp"
depturl = "http://localhost:8080/api/dept"

constructor( private httpClient : HttpClient){}

getAllEmployee() : Observable<Employee[]>{
    console.log(this.httpClient.get<getEmployeeResponse>(this.empurl).pipe(map(response => response._embedded.employees)));
    return this.httpClient.get<getEmployeeResponse>(this.empurl).pipe(map(response => response._embedded.employees));
}

getAllDepartment() : Observable<Department[]>{
    console.log(this.httpClient.get<getDepartmentResponse>(this.depturl).pipe(map(response => response._embedded.departments)));
    return this.httpClient.get<getDepartmentResponse>(this.depturl).pipe(map(response => response._embedded.departments));
}

}

interface getDepartmentResponse{
    _embedded:{
        departments: Department[]
    }
}


interface getEmployeeResponse{
    _embedded:{
        employees: Employee[]
    }
}
