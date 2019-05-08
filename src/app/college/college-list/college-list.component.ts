import { Component, OnInit } from '@angular/core';

import {College} from '../../model/college'
import {CollegeService} from '../../services/college.service'

@Component({
  selector: 'app-college-list',
  templateUrl: './college-list.component.html',
  styleUrls: ['./college-list.component.css']
})
export class CollegeListComponent implements OnInit {

  colleges:College[];
  selectedCollege:College;

  constructor(private collegeService : CollegeService) { }

  ngOnInit() {
    this.getColleges();
  }

  getColleges():void{
    this.collegeService.getCollege()
    .subscribe(_Colllege=> this.colleges = _Colllege)
   
  }

  onSelect(college:College):void{
    this.selectedCollege= college;
  }

}
