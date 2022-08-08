import { Injectable } from '@angular/core';
import { Customers } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  oldEmployee: [] = [

  ]
  employees: Customers[] = [
    // {
    //   id: 1,
    //   firstName: "Emplone",
    //   lastName: "oyee ",
    //   birthDate: new Date(3200 - 2 - 2),
    //   email: "ata@gmail.com",
    //   phone: 1111,
    //   bankAccountNumber: 11111111

    // },
    // {
    //   id: 2,
    //   firstName: "EmployTwo",
    //   lastName: "oyee ",
    //   birthDate: new Date(333 - 2 - 2),
    //   email: "ata@gmail.com",
    //   phone: 22,
    //   bankAccountNumber: 222222

    // }

  ];
  constructor() { }
  onGet() {

    return this.employees
  }


  getNewUserId() {

    const oldRecords = localStorage.getItem('userList');

    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      return userList.Length + 1
    } else {
      return 23;
    }
  }



  saveUser() {
    const latesId = this.getNewUserId();
    const oldRecords = localStorage.getItem('userList');




  }
  onAdd(employee: Customers) {
    this.employees.push(employee)

    const latesId = this.getNewUserId();
    const oldRecords = localStorage.getItem('userList');
    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords)
      userList.push(this.employees)
      localStorage.setItem('userList', JSON.stringify(userList));
    } else {
      const userArr = [];
      userArr.push(this.employees)
      localStorage.setItem('userList', JSON.stringify(userArr))
    }
  }
  onDelete(id: number) {
    let employee = this.employees.find(x => x.id === id);
    let index = this.employees.indexOf(employee!, 0);
    this.employees.splice(index, 1)
  }

  onGetEmployee(id: Number) {
    return this.employees.find(x => x.id === id)


  }



  onUpdate(employee: Customers) {

    console.log(this.oldEmployee)

    let oldEmployee = this.employees.find(x => x.id === employee.id);


    oldEmployee!.id = employee.id;
    oldEmployee!.firstName = employee.firstName;
    oldEmployee!.lastName = employee.lastName;
    oldEmployee!.birthDate = employee.birthDate;
    oldEmployee!.email = employee.email;
    oldEmployee!.phone = employee.phone;
    oldEmployee!.bankAccountNumber = employee.bankAccountNumber;

  }


}
