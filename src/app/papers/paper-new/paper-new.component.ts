import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

import {UniversityService} from '../../services/university.service'
import {University} from '../../model/university'

import {CollegeService} from '../../services/college.service'
import {College} from '../../model/college'

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

  constructor(
    private universityService: UniversityService,
    private collegeService: CollegeService
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
    this.added.emit(true);
  }

  Cancel():void{
    this.added.emit(true);
  }
}
