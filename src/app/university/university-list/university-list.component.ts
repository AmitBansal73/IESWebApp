import { Component, OnInit } from '@angular/core';

import {University} from '../../model/university';

import {UniversityService} from '../../services/university.service'

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.css']
})

export class UniversityListComponent implements OnInit {

  universities:University[];

  constructor(private universityService: UniversityService) { 
  
  }

  ngOnInit() {
    this.getUniversities();
  }


  getUniversities():void{
    this.universityService.getUniversities()
    .subscribe(univer=> {
      
      //console.log(JSON.stringify(univer));
      
      this.universities = univer.$values});

   
  }

  delete(university: University): void {
   //this.universities = this.universities.filter(h => h !== university);
   this.universityService.deleteUniversity(university).subscribe();
 }

}
