import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import{ University } from '../classes/university';
import { Observable, of } from 'rxjs';

const  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class UniversityService {

  private UniversitysUrl = 'api/University';

  constructor(private http: HttpClient) { }

  public getTop4Universities(): Observable<University[]> {
    //return this.http.get<University[]>(this.UniversitysUrl);

    return of([
      {id:1,
        name:'CCS University'},
        {id:2,
        name: 'BR Ambedkar University'},
        {id:3,
          name: 'Banaras Hindu University'}
    ]);
  }

  public getUniversities(): Observable<University[]> {
    //return this.http.get<University[]>(this.UniversitysUrl);

    return of([
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
    ]);
  }

  public deleteUniversity(univ: University){
    return of();
  }

}
