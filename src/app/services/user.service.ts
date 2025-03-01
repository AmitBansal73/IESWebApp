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
    private RegistrationUrl = environment.authenticationUrl + 'api/Authentication/Register';
    private loginUrl = environment.authenticationUrl + 'api/Authentication/Login';
    
    encoded = encodeURI(this.RegistrationUrl);

  constructor() { }


    public Register(user: User): Observable<any>{
      return this.http.post<any>(this.RegistrationUrl, JSON.stringify(user), httpOptions)
/*       return of({
        Name: "Amit",
        email: "amit.bansal1973@gmail.com",
        MobileNumber: "112223332",
        Password: "Test@123",
        Token: "TXTWEE"
      }); */
      ;
    }

    public Login(user: User): Observable<any>{
      return this.http.post<any>(`${environment.authenticationUrl}api/Authentication/Login`,
         JSON.stringify(user), httpOptions)

/*       return of({
        Name: "Amit",
        email: "amit.bansal1973@gmail.com",
        MobileNumber: "112223332",
        Password: "Test@123",
        Token: "TXTWEE"
      }); */
      
    }

    public LogOut(){
      return this.http.delete<any>(`${environment.authenticationUrl}api/Authentication/LogOut`, httpOptions);


/*       return of({
        Name: "Amit",
        email: "amit.bansal1973@gmail.com",
        MobileNumber: "112223332",
        Password: "Test@123",
        Token: "TXTWEE"
      }); */
      
    }

    loggedIn(){
      return !!localStorage.getItem('Token');
    }
}
