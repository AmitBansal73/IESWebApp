import { Injectable,inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import {Semester} from '../model/semester';
import {Observable, of } from 'rxjs';
import {tap, catchError } from 'rxjs/operators';

const  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class SemesterService {

  private SemesterUrl = environment.apiUrl + 'api/Semester/All';
  
  http = inject(HttpClient);
  //constructor(private http: HttpClient) { }

  public getSemester(): Observable<Semester[]> {
    //return this.http.get<Semester[]>(this.SemesterUrl);

    return of([
      { SemID:121,
        SemesterName:"VI",
        Semester:"3"
      }
  
    ]);

   }

}
