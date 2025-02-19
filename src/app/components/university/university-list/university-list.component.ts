import { Component, OnDestroy, OnInit } from '@angular/core';

import {University} from '../../../model/university';

import {UniversityService} from '../../../services/university.service'
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-university-list',
  imports: [FormsModule, NgxPaginationModule, RouterLink],
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.css']
})

export class UniversityListComponent implements OnInit {

  universities:University[];
  p:number=1;

  constructor(private universityService: UniversityService) { 
  
  }

  ngOnInit() {
    this.getUniversities();
  }

  getUniversities():void{
    this.universityService.getUniversities()
    .subscribe(univer=> {
      //console.log(JSON.stringify(univer));
      this.universities = univer}),
      error =>{
        console.log(error);
      }
      ;
  }

  delete(university: University): void {
   //this.universities = this.universities.filter(h => h !== university);
   this.universityService.deleteUniversity(university).subscribe();
 }

}
