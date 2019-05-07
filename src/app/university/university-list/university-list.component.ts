import { Component, OnInit } from '@angular/core';

import {University} from '../../classes/university';

import {UniversityService} from '../../services/university.service'

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.css']
})
export class UniversityListComponent implements OnInit {

  universities:University[];

  constructor(private universityService: UniversityService) { 
    this.getUniversities();
  }

  ngOnInit() {
   
  }


  getUniversities():void{
    this.universityService.getUniversities()
    .subscribe(univer=> this.universities = univer);

   
  }

  delete(university: University): void {
   this.universities = this.universities.filter(h => h !== university);
   this.universityService.deleteUniversity(university).subscribe();
 }

}
