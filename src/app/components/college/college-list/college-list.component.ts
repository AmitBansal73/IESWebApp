import { Component, OnDestroy, OnInit } from '@angular/core';

import {College} from '../../../model/college'
import {CollegeService} from '../../../services/college.service'
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-college-list',
  imports: [FormsModule, RouterLink, NgxPaginationModule],
  templateUrl: './college-list.component.html',
  styleUrls: ['./college-list.component.css']
})

export class CollegeListComponent implements OnInit {

  colleges:College[];
  selectedCollege:College;
  SearchText:string;
  p:number = 1;

  constructor(private collegeService : CollegeService) { }

  ngOnInit() {
    this.getColleges();
  }

   getColleges():void{
    this.collegeService.getCollege()
    .subscribe(_college=> {
      //console.log(JSON.stringify(_college));
      this.colleges = _college},
    error => console.log(error)
    );
   
  } 

/*   onSelect(college:College):void{
    this.selectedCollege= college;
  } */

}
