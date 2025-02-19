import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";

import{ University } from '../model/university';
import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';

import {Enrolled} from '../model/Enrolled';


const  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private dashboardsUrl = environment.apiUrl+ 'api/dashboard/';
  constructor(private http: HttpClient) { }

  public getTop4University(): Observable<University[]> {
    return this.http.get<University[]>(this.dashboardsUrl + "top3");
  }

  public getDailyStudentCount(): Observable<Enrolled[]> {
    console.log(this.http.get<Enrolled[]>(this.dashboardsUrl + "popularity"));
    return this.http.get<Enrolled[]>(this.dashboardsUrl + "popularity");
  }
}
