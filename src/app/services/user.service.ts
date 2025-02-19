import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

const  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})


export class UserService {

  http = inject(HttpClient )
    private RegistrationUrl = environment.apiUrl + 'api/user/Register';
  
    private loginUrl = environment.apiUrl + 'api/user/Login';
    
    encoded = encodeURI(this.RegistrationUrl);

  constructor() { }


    public Register(user: User): Observable<any>{
      //return this.http.post<any>(this.RegistrationUrl, JSON.stringify(user), httpOptions)
      return of({
        Name: "Amit",
        email: "amit.bansal1973@gmail.com",
        MobileNumber: "112223332",
        Password: "Test@123",
        Token: "TXTWEE"
      });
      ;
    }

    public Login(user: User): Observable<any>{
      //return this.http.post<any>(this.RegistrationUrl, JSON.stringify(user), httpOptions)

      return of({
        Name: "Amit",
        email: "amit.bansal1973@gmail.com",
        MobileNumber: "112223332",
        Password: "Test@123",
        Token: "TXTWEE"
      });
      
    }

    loggedIn(){
      return !!localStorage.getItem('Token');
    }
}
