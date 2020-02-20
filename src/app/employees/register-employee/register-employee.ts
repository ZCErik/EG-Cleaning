import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-register-employee',
    templateUrl: './register-employee.html',
    styleUrls: ['./register-employee.css']
  })

  export class RegisterEmployee implements OnInit {
    
    registerEmployee: FormGroup

    constructor(
      private formbuilder: FormBuilder
    ){}

    ngOnInit(): void {
      this.registerEmployee = this.formbuilder.group({
        firstName: ['', 
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20)
          ]
        ],
        middleName: ['',
          [   
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(20)
          ]  
        ],
        lastName: ['',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(25)
          ]
        ],
        street: [''],
        aptoUnit: [''],
        city: [''],
        province: [''],
        postalCode: [''],
        homePhone: [''],
        secondaryPhone: [''],
        email: [''],
        sinNumber: [''],
        birthDate: [''],
        maritalStatus: [''],
        spounseName: [''],
        spousePhone: [''],
        emergencyContact: [''],
        emergencyPhone: [''],
        eAddress:[''],
        eUnit:[''],
        eCity: [''],
        eProvince: [''],
        ePostalCode: [''],
        ePhone: ['']
      })
    }

    signup(){
      console.log("envinado...");
      console.log(this.registerEmployee);
      debugger
    }
  }