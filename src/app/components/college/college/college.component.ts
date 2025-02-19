import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { College } from 'src/app/model/college';
import { CollegeService } from 'src/app/services/college.service';

@Component({
  selector: 'app-college',
  imports: [FormsModule, NgxPaginationModule],
  templateUrl: './college.component.html',
  styleUrl: './college.component.css'
})
export class CollegeComponent {

    colleges:College[];
    selectedCollege:College;
    SearchText:string;
    p:number = 1;

    constructor(private collegeService : CollegeService) { }
}
