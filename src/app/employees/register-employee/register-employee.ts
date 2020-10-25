import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Provinces
interface Province {
  value: number;
  viewValue: string;
}

@Component({
    selector: 'app-register-employee',
    templateUrl: './register-employee.html',
    styleUrls: ['./register-employee.css']
  })

  export class RegisterEmployee implements OnInit {
    
    provinces: Province[] = [
      { value: 0, viewValue: 'Ontario'},
      { value: 1, viewValue: 'British Columbia'},
      { value: 2, viewValue: 'Quebec'}
    ];

    registerEmployee: FormGroup
    submitted = false;

    constructor( private formbuilder: FormBuilder){}

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
        aptoUnit: [''],
        street: ['',
          [
            Validators.required,
            Validators.minLength(3)
          ]
        ],
        city: ['',
          [
            Validators.required,
            Validators.minLength(3)
          ]
        ],
        province: ['',
          [
            Validators.required,
            Validators.minLength(6)
          ]
        ],
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

    submit() {
      this.submitted = true;
      console.log("envinado...");
      console.log(this.registerEmployee);
      // debugger;
    }
  }