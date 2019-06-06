import { Component, OnInit } from '@angular/core';

import {Question} from '../../model/question';
//import {QUESTIONS} from '../../data/mock-questions';

import { KatexOptions } from 'ng-katex';

import { ActivatedRoute } from '@angular/router';

import {PaperService} from '../../services/paper.service';
import {QuestionService} from '../../services/question.service';

import { Paper } from 'src/app/model/paper';
import { from } from 'rxjs';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  PaperID:number;
  paper:Paper;

  questions:Question[] = [{
    QuestionID:0,
    Question:'$sum_{i=1}^n(x_i^2 - \\overline{x}^2)$',
    Solution:'$sum_{i=1}^n(x_i^2 - \\overline{x}^2)$',
    DifficultyLevel:1,
    SubjectID:0,
    TopicID:0
  }];



   options: KatexOptions = {
    displayMode: true,
    
  };

  constructor(
    private route: ActivatedRoute,
    private paperService: PaperService,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.PaperID = +this.route.snapshot.paramMap.get('PaperID');
    this.GetPaperDetails(this.PaperID);
    this.GetQuestions(this.PaperID);
  }


  GetQuestions(paperId:number):void{
    this.questionService.getQuestionsForPaper(paperId).subscribe(quest=>{
      this.questions=quest
      console.log(quest[0]);
     // console.log(this.questions);
    },
    err=> console.log("Error in retreiving questions")
    );
  }

  GetPaperDetails(paperId:number):void{
    this.paperService.getPaperDetails(paperId).subscribe(paper=>{
      this.paper=paper
     // console.log(this.paper);
    });
  }

}
