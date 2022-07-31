import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/common/department';
import { ManagementService } from 'src/app/services/management-service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {

  constructor(private service : ManagementService) { }

    departments :Department[]
    ngOnInit(): void {
      this.listOfDepartments()
    }
  
     listOfDepartments(){
      this.service.getAllDepartment().subscribe(data=>{
        console.log(data);
        this.departments = data;
      });
     }

     onSubmit(form:NgForm){
      this.departments.push(form.value);
     }
     
}
