import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


import{ Paper } from '../model/paper';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import {CONSTANTS} from '../model/CONSTANTS';

const  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class PaperService {

 
  private baseUrl = CONSTANTS.API_URL + 'api/Paper/';
  private paperUrl = CONSTANTS.API_URL + 'api/Paper/All';
  private newPaperurl = CONSTANTS.API_URL+ 'api/Paper/New';

  constructor(private http: HttpClient) { }

  
  public getPaper(): Observable<Paper[]> {
    return this.http.get<Paper[]>(this.paperUrl, httpOptions);
   }

   public getPaperDetails(paperId:number): Observable<Paper> {
    return this.http.get<Paper>(this.baseUrl+ paperId, httpOptions);
   }
  

  public addPaper(newPaper:Paper){
    return this.http.post<Paper>(this.newPaperurl, JSON.stringify(newPaper) ,httpOptions).pipe(
      tap((newPaper:Paper)=>this.log(`added new Paper w/ id=1}`)),
      catchError(this.handleError<Paper>('addPaper'))
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
