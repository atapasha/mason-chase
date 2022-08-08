import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees!: Customers[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {

    this.employees = this.employeeService.onGet()
  }

  onDelete(id: number) {
    this.employeeService.onDelete(id)
  }

}
