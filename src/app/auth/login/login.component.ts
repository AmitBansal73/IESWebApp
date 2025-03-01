import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginUserData : any = {};

  userInformation : User;
  reactiveForm:FormGroup ;
  
  constructor(private userService: UserService, private _router : Router){}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.reactiveForm = new FormGroup({
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)])
    });
  }

  Login(){

    //console.log(this.reactiveForm);
    this.userService.Login(this.loginUserData)
    .subscribe(user=> {
      //console.log(JSON.stringify(user));
      localStorage.setItem('Token', user.authToken);
      localStorage.setItem('RefreshToken', user.refreshToken);
      this.userInformation = user;
      this._router.navigate(['./dashboard'])

      //alert("Logged in");
    },
    error => console.log(error)
    );
  }


}
