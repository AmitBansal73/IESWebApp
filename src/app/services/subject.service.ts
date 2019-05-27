import { Injectable } from '@angular/core';

import { Subject } from '../model/subject';

import {HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import {CONSTANTS} from '../model/CONSTANTS';

const  HttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class SubjectService {

  private subject_url= CONSTANTS.API_URL+ 'api/Subject/All';
  private newSubject_url= CONSTANTS.API_URL+ 'api/Subject/New';
  
  

  constructor(private http:HttpClient) { }

  public getSubject():Observable<Subject[]>{
    return this.http.get<Subject[]>(this.subject_url);
  }

  public addSubject(subject:Subject){

    console.log(JSON.stringify(subject));

    return this.http.post<Subject>(this.newSubject_url,JSON.stringify(subject) ,HttpOptions).pipe(

      tap(()=>this.log(`added Subject w/ id=${subject.SubjectName}`)),
      catchError(this.handleError<Subject>('Add Subject'))

      );
  }

  public log(message:string)
  {
    console.log(`SubjectService: ${message}`);
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
