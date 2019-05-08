import { Component, OnInit } from '@angular/core';

import {Question} from '../../model/question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

   _question:Question = {
     id:1,
     question:"This is the place for putting up question",
     answer:"This is the place for Answer.",
     level:3
   };
  

  constructor() { }

  ngOnInit() {
  }

}
