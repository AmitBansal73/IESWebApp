import { Component, OnDestroy, OnInit } from '@angular/core';

import {University} from '../../model/university'

import {UniversityService} from '../../services/university.service';

import {StudentCountChartComponent} from '../../charts/student-count-chart/student-count-chart.component';

import {DashboardService} from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  imports: [StudentCountChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  universities: any[] = [
  
  ];

  constructor(private universityService: UniversityService ,private dashboardService: DashboardService) { }
  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
  }

  ngOnInit() {

    this.gettop3Universities();
  }

  getUniversities(): void {
      this.universityService.getTop4Universities()
      .subscribe(_universities => this.universities = _universities);
  }

  gettop3Universities(): void {
    this.dashboardService.getTop4University()
    .subscribe(_universities => { 
      this.universities = _universities
    console.log(_universities);
    });
}

}
