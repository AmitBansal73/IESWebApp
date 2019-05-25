import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import{ College } from '../model/college';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import {CONSTANTS} from '../model/CONSTANTS';

const  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class CollegeService {
  private CollegesUrl = CONSTANTS.API_URL + 'api/Colleges/All';
  private newcollegeurl = CONSTANTS.API_URL+ 'api/Colleges/NewWithStream';

  encode=encodeURI(this.CollegesUrl);
  constructor(private http: HttpClient) { }

  
  public getCollege(): Observable<College[]> {
    //return this.http.get<University[]>(this.UniversitysUrl);

    return this.http.get<College[]>(this.CollegesUrl);
  /*  return of([
      {id:1,
        name:'Institute of Science and Technology',
        univ_id:1,
        univ_name:'CCS University',
        student_count: 10
      },
      {id:1,
        name:'College of Enginnering',
        univ_id:1,
        univ_name:'CCS University',
        student_count: 10
      },
      {id:1,
        name:'AK Garg College of Engineering and Technology',
        univ_id:1,
        univ_name:'CCS University',
        student_count: 10
      }
    ]);*/
    //return this.http.get<College[]>(this.CollegesUrl);
  }

 /* public addUniversity(university: University){
    return this.http.post<University>(this.addUrl, JSON.stringify(university), httpOptions).pipe(
      tap((newUniversity: University) => this.log(`added hero w/ id=${newUniversity.UnivID}`)),
      catchError(this.handleError<University>('addHero'))
    );
  }*/

  public addCollege(college:College){
    return this.http.post<College>(this.newcollegeurl, JSON.stringify(college) ,httpOptions).pipe(
      tap((newCollege:College)=>this.log(`added hero w/ id=1}`)),
      catchError(this.handleError<College>('addHero'))
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
