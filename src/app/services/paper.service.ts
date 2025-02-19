import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";

import{ Paper } from '../model/paper';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class PaperService {

  private baseUrl = environment.apiUrl + 'api/Paper/';
  private paperUrl = environment.apiUrl + 'api/Paper/All';
  private newPaperurl = environment.apiUrl+ 'api/Paper/New';

  constructor(private http: HttpClient) { }

  
  public getPaper(): Observable<Paper[]> {
    //return this.http.get<Paper[]>(this.paperUrl, httpOptions);

    return of([
      {      
        PaperID:111,
        UniversityID: 111,
        CollegeID: 222,
        StreamID: 222,
        SubjectID: 333,
        SemID: 11,
        Year: 2021,
        Cost: 121,
    
        SubjectName: "Math",
        CollegeName: "BHU",
        UniversityName: "UPTU",
        StreamName:"Civil",
        SemesterName:"IV",
        PaidAmount: 200,
        PurchaseDate: "23/07/2023",
        UserID: 123,
        questioncount: 25
      }

    ]);
   }

   public getPaperDetails(paperId:number): Observable<Paper> {
    //return this.http.get<Paper>(this.baseUrl+'Paper/' + paperId, httpOptions);
    return of(
      {      
        PaperID:111,
        UniversityID: 111,
        CollegeID: 222,
        StreamID: 222,
        SubjectID: 333,
        SemID: 11,
        Year: 2021,
        Cost: 121,
    
        SubjectName: "Math",
        CollegeName: "BHU",
        UniversityName: "UPTU",
        StreamName:"Civil",
        SemesterName:"IV",
        PaidAmount: 200,
        PurchaseDate: "23/07/2023",
        UserID: 123,
        questioncount: 25
      }

    );
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
