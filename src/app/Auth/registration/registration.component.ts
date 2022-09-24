import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup | any;
  title = 'material-login';
  constructor(
    private router:Router
  ) {
    this.registrationForm = new FormGroup({
      name: new FormControl('', [Validators.required,Validators.pattern(
        '[a-zA-Z ]*',
      ),]),
      contact: new FormControl('', [Validators.required,Validators.pattern(
        '^((\\+91-?)|0)?[0-9]{10}$',
      ),]),
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]),
      password: new FormControl('', [Validators.required,Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )])
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    localStorage.setItem('form-data', JSON.stringify(this.registrationForm.value));
    this.router.navigate(['/']);
  }
}


