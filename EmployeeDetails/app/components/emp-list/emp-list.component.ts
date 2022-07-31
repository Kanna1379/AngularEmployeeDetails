import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/common/employee';
import { ManagementService } from 'src/app/services/management-service';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/common/department';
@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  employees : Employee[]
  constructor(private service : ManagementService) { }

  ngOnInit(): void {
    this.listOfEmployees()
    this.listOfDepartments()
  }

   listOfEmployees(){
    this.service.getAllEmployee().subscribe(data=>{
      console.log(data);
      this.employees = data;
    });
   }
   onSubmit(form:NgForm){
    this.employees.push(form.value);
    this.departments.push(form.value);
    }
    departments :Department[]

     listOfDepartments(){
      this.service.getAllDepartment().subscribe(data=>{
        console.log(data);
        this.departments = data;
      });
     }

    
}