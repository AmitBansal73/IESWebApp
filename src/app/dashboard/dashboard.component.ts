import { Component, OnInit } from '@angular/core';

import {University} from '../model/university'

import {UniversityService} from '../services/university.service'

import {StudentCountChartComponent} from '../charts/student-count-chart/student-count-chart.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  universities: University[] = [
    
  ];

  constructor(private universityService: UniversityService) { }

  ngOnInit() {

    this.getUniversities();
  }

  getUniversities(): void {
      this.universityService.getTop4Universities()
      .subscribe(_universities => this.universities = _universities);
  }

}
