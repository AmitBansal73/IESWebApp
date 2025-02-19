import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';

import {UniversityService} from '../../../services/university.service';
import {SubjectService} from '../../../services/subject.service';
import {CollegeService} from '../../../services/college.service';
import {StreamService} from '../../../services/stream.service';
import {SemesterService} from '../../../services/semester.service';
import {PaperService} from '../../../services/paper.service';
import { Paper } from 'src/app/model/paper';
import { Question } from 'src/app/model/question';
import { QuestionService } from 'src/app/services/question.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question-new',
  imports: [FormsModule],
  templateUrl: './question-new.component.html',
  styleUrls: ['./question-new.component.css']
})


export class QuestionNewComponent implements OnInit {
  PaperID:number;
  paper:Paper;
  question:String;
  solution:String;

  newQuestion:Question={Question:"",Solution:"", QuestionID:0, DifficultyLevel:2,SubjectID:1, TopicID:1 };

  constructor( 
    private location: Location,
    private route: ActivatedRoute,
    private paperService:PaperService,
    private questionService:QuestionService
    ) { }



  ngOnInit() {
    this.PaperID = +this.route.snapshot.paramMap.get('PaperID');
    this.GetPaperDetails(this.PaperID);

  }


  GetPaperDetails(paperId:number):void{
    this.paperService.getPaperDetails(paperId).subscribe(paper=>{
      this.paper=paper
      this.newQuestion.SubjectID = paper.SubjectID;
      
    });
  }

  Cancel():void{
    this.location.back();
  }

  Submit():void{
    console.log(this.newQuestion);

    this.questionService.addQuestion(this.newQuestion, this.PaperID).subscribe(
      next=> {
        this.location.back();
        //console.log('Question Submitted');
      },
      err=> alert("Error Occured")
    );
  }

}
