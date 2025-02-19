import { Component, OnInit } from '@angular/core';

import {Chart, ChartModule} from 'angular-highcharts'
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-student-count-chart',
  imports: [NgxPaginationModule, ChartModule],
  templateUrl: './student-count-chart.component.html',
  styleUrls: ['./student-count-chart.component.css']
})
export class StudentCountChartComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name:'Student Enroled',
        turboThreshold:5000,
        data: [100,200,300,120,125,130,150,122],
        type: 'line'
      }
    ]
  });

  constructor() { }

  ngOnInit() {
    this.chart.addPoint(Math.floor(Math.random() * 100));
    this.chart.addPoint(Math.floor(Math.random() * 1000));
    this.chart.addPoint(Math.floor(Math.random() * 1000));
    this.chart.addPoint(Math.floor(Math.random() * 1000));
  }

}
