import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { confirmPasswordValidator } from '../confirm-password.validator';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerUserData : any = {};
  userInformation : User;

  reactiveRegisterForm: FormGroup;
  public passwordForm: FormGroup;

  constructor(private userService : UserService, private _router : Router){}

  ngOnInit(): void {

    this.passwordForm = new FormGroup({
      password: new FormControl(null,Validators.required),
      confPassword: new FormControl(null,Validators.required),
      }
      ,confirmPasswordValidator 
    ) 

    this.reactiveRegisterForm = new FormGroup({
      name : new FormControl(null,[Validators.required, Validators.minLength(4)]),
      email: new FormControl(null,[Validators.required, Validators.email]),
      mobileNumber: new FormControl(null,[Validators.required, Validators.minLength(10)]),
      dob: new FormControl(null, Validators.required),
      //password: new FormControl(null, []),
      //confPassword: new FormControl(null, [])
    });

  }
 
  RegisterUser(){
    //console.log(this.reactiveRegisterForm);
    //console.log(this.passwordForm);
    this.userService.Login(this.registerUserData)
    .subscribe(user=> {
      //console.log(JSON.stringify(_college));
      localStorage.setItem('Token', user.token);
      localStorage.setItem('user', user);
      this.userInformation = user
      this._router.navigate(['./dashboard'])
    },
    error => console.log(error)
    );
  }


}
