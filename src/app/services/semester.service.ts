import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import {Semester} from '../model/semester';
import {Observable, of } from 'rxjs';
import {tap, catchError } from 'rxjs/operators';

import {CONSTANTS} from '../model/CONSTANTS';

const  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class SemesterService {

  private SemesterUrl = CONSTANTS.API_URL + 'api/Semester/All';
  
  constructor(private http: HttpClient) { }

  public getSemester(): Observable<Semester[]> {
    return this.http.get<Semester[]>(this.SemesterUrl);
   }

}
