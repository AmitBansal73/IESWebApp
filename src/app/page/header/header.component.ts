import { Component, OnDestroy } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnDestroy {
  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
    return;
  }

  constructor(public userService : UserService, private _router: Router){}
  //isLoggedIn:boolean = false;

  isLoggedIn:boolean = localStorage.getItem('Token') === null? true: false; 

  logout(){
    localStorage.removeItem('Token');
    localStorage.removeItem('user');
    alert('logged out');
    this._router.navigate(['./login']);
  }
}

