import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import {UniversityService} from '../../../services/university.service'
import { University } from 'src/app/model/university';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-university-new',
  imports: [FormsModule],
  templateUrl: './university-new.component.html',
  styleUrls: ['./university-new.component.css']
})
export class UniversityNewComponent implements OnInit {

  university:University= {UniversityID:0, UniversityName:"",CollegeCount:0};

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
