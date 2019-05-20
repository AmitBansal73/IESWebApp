import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import{ University } from '../model/university';
import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';

const  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class UniversityService {

  private UniversitysUrl = 'http://www.kevintech.in/IES-WebApi/'+ 'api/University/All';

  private addUrl = 'http://www.kevintech.in/IES-WebApi/'+ 'api/University/New';
  
  encoded = encodeURI(this.UniversitysUrl);

  constructor(private http: HttpClient) { }

  public getTop4Universities(): Observable<University[]> {
    //return this.http.get<University[]>(this.UniversitysUrl);

    return of([
      {UnivID:1,
        name:'CCS University'},
        {UnivID:2,
        name: 'BR Ambedkar University'},
        {UnivID:3,
          name: 'Banaras Hindu University'}
    ]);
  }

  public getUniversities(): any {
    return this.http.get<any>(this.UniversitysUrl);

   /* return of([
      {id:1,
        name:'CCS University'},
        {id:2,
        name: 'BR Ambedkar University'},
        {id:3,
          name: 'Banaras Hindu University'},
          {id:4,
            name: 'University of Roorke'},
            {id:5,
              name: 'GB Pant University'}
    ]);*/
  }

  public deleteUniversity(univ: University){
    return of();
  }

  public addUniversity(university: University){
    return this.http.post<University>(this.addUrl, JSON.stringify(university), httpOptions).pipe(
      tap((newUniversity: University) => this.log(`added hero w/ id=${newUniversity.UnivID}`)),
      catchError(this.handleError<University>('addHero'))
    );
  }

  private HandleSuccess(data): Observable<University[]>{
    return data.$values;
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

  private log(message: string) {
    alert(`HeroService: ${message}`);
  }

}
