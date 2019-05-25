import { Injectable } from '@angular/core';
import { Stream } from '../model/stream';

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
export class StreamService {
  private streamurl= CONSTANTS.API_URL+ 'api/Stream/All';
  private newstreamurl= CONSTANTS.API_URL+ 'api/Stream/New';
  encoded=encodeURI(this.streamurl); 
  constructor(private http:HttpClient) { }

  public getstream():Observable<Stream[]>{
    return this.http.get<Stream[]>(this.streamurl);
  }

  public log(message:string)
  {
    console.log(`StreamService: ${message}`);
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

  public addStream(stream:Stream){

    console.log(JSON.stringify(stream));
    return this.http.post<Stream>(this.newstreamurl,JSON.stringify(stream) ,HttpOptions).pipe(
      tap(()=>this.log(`added Stream w/ id=${stream.StreamName}`)),
      catchError(this.handleError<Stream>('Add Stream'))
      );
  }
}
