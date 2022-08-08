import { Component, Input, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customers } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  header!: string;



  employee: Customers = {



    id: 0,
    firstName: '',
    lastName: '',
    birthDate: new Date(),
    phone: 0,
    email: '',
    bankAccountNumber: 0,
  };
  constructor(private router: Router, private employeeService: EmployeeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.header = this.id === 0 ? 'Add Customer' : 'Edit Customer'
    if (this.id != 0) {

      this.employee.id = Number(this.route.snapshot.paramMap.get('id'))
      this.employee != this.employeeService.onGetEmployee(this.id)

    }
  }


  onSubmit(form: NgForm) {

    console.log(form)

    let employee: Customers = {
      id: form.value.id,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      birthDate: form.value.birthDate,
      email: form.value.email,
      phone: form.value.phone,
      bankAccountNumber: form.value.bankAccountNumber,
    }

    if (this.id === 0) {
      this.employeeService.onAdd(employee)

    } else {
      this.employeeService.onUpdate(employee)
    }



    this.router.navigateByUrl('')
  }
}
