import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import{ University } from '../model/university';
import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';

import {Enrolled} from '../model/Enrolled';
import {CONSTANTS} from '../model/CONSTANTS';

const  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private dashboardsUrl = CONSTANTS.API_URL+ 'api/dashboard/';
  constructor(private http: HttpClient) { }

  public getTop4University(): Observable<University[]> {
    return this.http.get<University[]>(this.dashboardsUrl + "top3");
  }

  public getDailyStudentCount(): Observable<Enrolled[]> {
    console.log(this.http.get<Enrolled[]>(this.dashboardsUrl + "popularity"));
    return this.http.get<Enrolled[]>(this.dashboardsUrl + "popularity");
  }
}
