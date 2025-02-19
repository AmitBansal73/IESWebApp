import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{ University } from '../model/university';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UniversityService {
  http = inject(HttpClient);
  private UniversitysUrl = environment.apiUrl + 'api/university/All';
  private addUrl = environment.apiUrl + 'api/university/New';
  
  encoded = encodeURI(this.UniversitysUrl);

  university:University={ UniversityID: 0,
    UniversityName: "",
    CollegeCount:0};
  //constructor(private http: HttpClient) { }

  public getTop4Universities(): Observable<University[]> {
    //return this.http.get<University[]>(this.UniversitysUrl);
    return of([
      {UniversityID:1,
        UniversityName:'CCS University',
        CollegeCount:0},
        {UniversityID:2,
          UniversityName: 'BR Ambedkar University',
        CollegeCount:0},
        {UniversityID:3,
          UniversityName: 'Banaras Hindu University',
          CollegeCount:0}
    ]);
  }

  public getUniversities(): Observable<University[]> {
    //return this.http.get<University[]>(this.UniversitysUrl);

    return of([
      {UniversityID:1,
        UniversityName:'CCS University',
        CollegeCount:0},
        {UniversityID:2,
          UniversityName: 'BR Ambedkar University',
        CollegeCount:0},
        {UniversityID:3,
          UniversityName: 'Banaras Hindu University',
          CollegeCount:0}
    ]);
  }

  public deleteUniversity(univ: University){
    return of();
  }

  public addUniversity(university: University){
    return this.http.post<University>(this.addUrl, JSON.stringify(university), httpOptions).pipe(
      tap((newUniversity: University) => this.log(`added hero w/ id=${newUniversity.UniversityID}`)),
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
