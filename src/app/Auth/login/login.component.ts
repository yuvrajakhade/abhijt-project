import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;
  title = 'material-login';
  constructor(
    private router:Router
  ) {
    this.loginForm = new FormGroup({
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
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      
      //alert(localStorage.setItem('Email',this.loginForm.Email.value))
     // localStorage.setItem('user',JSON.stringify(this.loginForm.value.Email))
      //var data=localStorage.getItem('form-data');
      let formValue = JSON.parse(localStorage.getItem('form-data')||'{}')
      //let a=JSON.parse(JSON.stringify(form-data))
      if(formValue.email==this.loginForm.value.email && formValue.password==this.loginForm.value.password)
      {
        
        this.router.navigate(['/Dashboard']);
      }
      
      
      //localStorage.clear();
      //sessionStorage.clear();
    }
  }

}
