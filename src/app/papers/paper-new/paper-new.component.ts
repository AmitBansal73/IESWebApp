import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '@angular/common';


import {BrowserModule} from '@angular/platform-browser';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

import {UniversityService} from '../../services/university.service'
import {University} from '../../model/university'

import {CollegeService} from '../../services/college.service'
import {College} from '../../model/college'

import {STREAM} from '../../data/mock-stream'
import {Stream} from '../../model/stream'

@Component({
  selector: 'app-paper-new',
  templateUrl: './paper-new.component.html',
  styleUrls: ['./paper-new.component.css']
})
export class PaperNewComponent implements OnInit {
  @Output() added = new EventEmitter<boolean>();

  universities : University[];
  selectedUniversity: any;
  selectedUniversityId: number;

  colleges : College[];
  selectedCollege:any;
  selectedCollegeId: number;

  streams : Stream[] = STREAM;
  selectedStream:any;
  selectedStreamId: number;

  semesters : string[] = ['1st', '2nd', '3rd', '4th', '5th','6th','7th','8th'];
  selectedSemester:string;

  constructor(
    private universityService: UniversityService,
    private collegeService: CollegeService,
    private location : Location
    ) { }

  ngOnInit() {
    this.getUniversities();
    this.getColleges();
  }

  getUniversities():void{
    this.universityService.getUniversities()
    .subscribe(univer=> this.universities = univer);
  }

  getColleges():void{
    this.collegeService.getCollege()
    .subscribe(colleges=> this.colleges = colleges);
  }

  Submit():void{
    this.location.back();
  }

  Cancel():void{
   this.location.back();
  }
}
