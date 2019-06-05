import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '@angular/common';


import {BrowserModule} from '@angular/platform-browser';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

import {UniversityService} from '../../services/university.service';
import {SubjectService} from '../../services/subject.service';
import {CollegeService} from '../../services/college.service';
import {StreamService} from '../../services/stream.service';
import {SemesterService} from '../../services/semester.service';
import {PaperService} from '../../services/paper.service';

import {College} from '../../model/college'
import {Stream} from '../../model/stream'
import {University} from '../../model/university'
import {Subject} from '../../model/subject'
import { Semester } from 'src/app/model/semester';
import { Paper } from 'src/app/model/paper';

@Component({
  selector: 'app-paper-new',
  templateUrl: './paper-new.component.html',
  styleUrls: ['./paper-new.component.css']
})
export class PaperNewComponent implements OnInit {
  @Output() added = new EventEmitter<boolean>();

  universities : University[];
  selectedUniversity: University;

  colleges : College[];
  selectedCollege:College;
 
  streams : Stream[];
  selectedStream:Stream;

  subjects: Subject[];
  selectedSubject:Subject;

  semesters:Semester[];
  selectedSemester : Semester;

  newPaper:Paper = { PaperID :0, UniversityID :0, CollegeID: 0, StreamID:0, SubjectID:0, SemID:0, Year:0, Cost:10,
    SubjectName: "" , CollegeName: "", UniversityName: "",  StreamName:"", SemesterName:"", PaidAmount: 100,
    PurchaseDate: "", UserID: 0 ,questioncount:0
   };

  year:number;

  constructor(
    private universityService: UniversityService,
    private collegeService: CollegeService,
    private location : Location,
    private subjectService : SubjectService,
    private semesterService : SemesterService,
    private paperService: PaperService,
    private streamService: StreamService
    ) { }

  ngOnInit() {
    this.getUniversities();
   // this.getColleges();
    this.getSubjects();
    this.getSemesters();
  }

  getUniversities():void{
    this.universityService.getUniversities()
    .subscribe(univer=> {this.universities = univer;
     });
  }

  getColleges():void{
    this.collegeService.getCollege()
    .subscribe(colleges=> {this.colleges = colleges;
    
    });
  }

  GetCollegeForUniversity():void{
   
    this.collegeService.getCollegeByUniversity(this.selectedUniversity.UniversityID)
    .subscribe(colleges=> {this.colleges = colleges;
  
    });
  }

  GetStreamForCollege():void{
   
    this.streamService.getstreamForCollege(this.selectedCollege.CollegeID)
    .subscribe(st=> {this.streams = st;
    console.log(st);
    });
  }

  getSubjects():void{
    this.subjectService.getSubject()
    .subscribe(subject=> {this.subjects = subject;
    
    });
  }

  getSemesters():void{
    this.semesterService.getSemester()
    .subscribe(sem=> {this.semesters = sem;
    
    });
  }

  AddPaper():void{
  
    this.newPaper.PaperID=0; 
    this.newPaper.UniversityID = this.selectedUniversity.UniversityID;
    this.newPaper.CollegeID= this.selectedCollege.CollegeID;
    this.newPaper.StreamID=this.selectedStream.StreamID;
    this.newPaper.SubjectID=this.selectedSubject.SubjectID;
    this.newPaper.SemID=this.selectedSubject.SubjectID;
    this.newPaper.Year = this.year;
    this.newPaper.Cost=10;

    this.paperService.addPaper(this.newPaper).subscribe(_paper=>
    {
      this.location.back();
    },
    err=> alert("error")
    );

  }

  Cancel():void{
   this.location.back();
  }
}
