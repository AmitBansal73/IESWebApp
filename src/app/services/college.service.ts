import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";

import{ College } from '../model/college';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import {College_Streams} from '../model/college_streams';
import {iesCourse} from '../model/iesCourse';

const  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class CollegeService {
  private baseUrl = environment.apiUrl + 'api/College/';
  private CollegesUrl = environment.apiUrl + 'api/College/All';
  private newcollegeurl = environment.apiUrl + 'api/College/NewWithStream';
  http = inject(HttpClient);

  //constructor(private http: HttpClient) { }

  
  public getCollege(): Observable<College[]> {
    //return this.http.get<College[]>(this.baseUrl + "All");
    return of([
      {  CollegeID: 1,
        CollegeName: "Test",
        StreamCount:2,
        StreamName:"test",
        UnivID: 111,
        Address:"test",
        UniversityName:"test",
        City:"LA",
        StudentCount:100
      }

    ]);
   }


   public getCollegeDetails(collegeID:number): Observable<any> {
     console.log(this.baseUrl + collegeID);
    return this.http.get<any>(this.baseUrl + collegeID);
   }


   public getCollegeByUniversity(id:number): Observable<College[]> {
    return this.http.get<College[]>(this.baseUrl +"University/" +id );
   }


  public addCollege(college:College){
    return this.http.post<College>(this.newcollegeurl, JSON.stringify(college) ,httpOptions).pipe(
      tap((newCollege:College)=>this.log(`College added`)),
      catchError(this.handleError<College>('Add College'))
    );
  }

  public updateStream(courses:iesCourse){
    return this.http.post<iesCourse>(this.baseUrl + "UpdateStream", JSON.stringify(courses) ,httpOptions).pipe(
      tap(res=>this.log(`College Updaed`)),
      catchError(this.handleError<College>('Update College'))
    );
  }


  private log(message: string) {
    alert(`HeroService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
