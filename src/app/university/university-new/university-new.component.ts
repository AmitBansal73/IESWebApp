import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import {UniversityService} from '../../services/university.service'
import { University } from 'src/app/model/university';

@Component({
  selector: 'app-university-new',
  templateUrl: './university-new.component.html',
  styleUrls: ['./university-new.component.css']
})
export class UniversityNewComponent implements OnInit {

  university:University= {UnivID:0,Name:"",CollegeCount:0};

  constructor(
    private location: Location,
    private universityService: UniversityService
    ) { }

  ngOnInit() {
  }

  Submit():void{
    

      this.universityService.addUniversity(this.university).subscribe(univ=>
        {
        this.location.back();
        }
      );

   
  }

  Cancel():void{
    this.location.back();
  }

}
