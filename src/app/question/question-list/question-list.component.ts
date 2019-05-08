import { Component, OnInit } from '@angular/core';

import {Question} from '../../model/question';
import {QUESTIONS} from '../../data/mock-questions';

import { KatexOptions } from 'ng-katex';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions:Question[] = QUESTIONS;
   _question:Question = QUESTIONS[1];
  
   equation: string = '\\sum_{i=1}^nx_i';

   answer:string = this._question.answer;

   paragraph: string = `You can write text, that contains expressions like this: $x ^ 2 + 5$ inside them. As you probably know.
    You also can write expressions in display mode as follows: $sum_{i=1}^n(x_i^2 - \\overline{x}^2)$.
    In first case you will need to use.
  `;

   options: KatexOptions = {
    displayMode: true,
    
  };

  constructor() { }

  ngOnInit() {
  }



}
