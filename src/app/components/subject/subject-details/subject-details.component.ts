import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-subject-details',
  imports:[ NgxPaginationModule],
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.css']
})
export class SubjectDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
