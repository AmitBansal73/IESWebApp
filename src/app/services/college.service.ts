import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import{ College } from '../model/college';
import { Observable, of } from 'rxjs';

const  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class CollegeService {
  private CollegesUrl = 'api/College';

  constructor(private http: HttpClient) { }

  public getCollege(): Observable<College[]> {
    //return this.http.get<University[]>(this.UniversitysUrl);

    return of([
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
    ]);
  }

}
