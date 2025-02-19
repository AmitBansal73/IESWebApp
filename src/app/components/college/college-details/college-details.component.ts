import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';

import {CollegeService} from '../../../services/college.service';
import { College } from 'src/app/model/college';
import {College_Streams} from '../../../model/college_streams';
import {Stream} from '../../../model/stream';
import {Course} from '../../../model/course';
import {iesCourse} from '../../../model/iesCourse';

import {StreamService} from '../../../services/stream.service';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-college-details',
  imports: [FormsModule, NgSelectModule],
  templateUrl: './college-details.component.html',
  styleUrls: ['./college-details.component.css']
})
export class CollegeDetailsComponent implements OnInit {

  CollegeID:number;
  collegeDetails:College_Streams;
  streams:Stream[]; 
  courses:Course[];
  tempCourse:Course;
  selectedStream: Stream[];

  iescourse:iesCourse;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private collegeService: CollegeService,
    private streamService: StreamService
  ) { }

  ngOnInit() {
    this.CollegeID = +this.route.snapshot.paramMap.get('CollegeID');
    this.GetCollegeDetails(this.CollegeID);

    this.GetStream();
  }

  GetStream():void{
    this.streamService.getstream().subscribe(st => this.streams = st);

  }

  GetCollegeDetails(collegeId:number):void{

    this.collegeService.getCollegeDetails(collegeId).subscribe(college=>{
      this.collegeDetails=college
      this.selectedStream =  college.Streams;

    });
  }

  Submit():void{

    let arr = [10, 20, 30, 40];
    this.courses =  [];
    for (var val of this.selectedStream) {
      this.tempCourse = {CollegeID: this.CollegeID, StreamID: val.StreamID};
      this.courses.push(this.tempCourse);
       }

       this.iescourse = {courses:[]};
       this.iescourse.courses = this.courses;
    console.log(this.iescourse);
    this.collegeService.updateStream(this.iescourse)
    .subscribe(
      res=> { this.location.back();}
    ); 
  }

  Cancel():void{
    this.location.back();
  }
}
