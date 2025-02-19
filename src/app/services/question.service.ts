import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";

import{ Question } from '../model/question';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class QuestionService {

  private baseUrl= environment.apiUrl + 'api/Question/';
  private questionUrl= environment.apiUrl + 'api/Question/All';
  private newQuestionurl= environment.apiUrl + 'api/Question/AddQuestion/';

  constructor(private http:HttpClient) { }

  public getQuestion():Observable<Question[]>{
   // return this.http.get<Question[]>(url: 'this.questionUrl');
   return of([
    { QuestionID:123,
      Question:"What is a Quantum Theorem",
      Solution: "This is test question Answer",
      DifficultyLevel: 1,
      SubjectID: 123,
      TopicID:122
    }

  ]);
   
  }
  

  public getQuestionsForPaper(paperId:number):Observable<Question[]>{
    //return this.http.get<Question[]>(this.baseUrl + paperId);

    return of([
      { QuestionID:123,
        Question:"What is a Quantum Theorem",
        Solution: "This is test question Answer",
        DifficultyLevel: 1,
        SubjectID: 123,
        TopicID:122
      }
  
    ]);
  }

  
  public addQuestion(stream:Question, paperID:number){

    return this.http.post<Question>(this.newQuestionurl + paperID ,JSON.stringify(stream) ,httpOptions).pipe(
      tap(()=>console.log(`added Stream w/ id=`)),
      catchError(this.handleError<Question>('Add Stream'))
      );
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


}
