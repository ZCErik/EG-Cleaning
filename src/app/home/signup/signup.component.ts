import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.services';
import { NewUser } from './new-user';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [ UserNotTakenValidatorService ]
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup

  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private router: Router,
    private signUpService: SignupService,
    private platformDetectorService: PlatformDetectorService
  ) { }

  ngOnInit(): void {
    this.platformDetectorService.isPlatformBrowser() && 
      this.emailInput.nativeElement.focus();

    this.signupForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ],
      ],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      userName: ['',
        [
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30)
        ],

        this.userNotTakenValidatorService.checkUserNameTaken()

      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14)
        ]
      ]
    })
  }

  signup(){
    console.log("enviando...");
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signUpService.signup(newUser)
      .subscribe(() => {
        this.router.navigate(['']),
        err => console.log(err);
      })

  }
}
