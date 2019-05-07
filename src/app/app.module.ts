import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import {ChartModule} from 'angular-highcharts'

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { UniversityListComponent } from './university/university-list/university-list.component';
import { CollegeListComponent } from './college/college-list/college-list.component';
import { CollegeNewComponent } from './college/college-new/college-new.component';
import { UniversityNewComponent } from './university/university-new/university-new.component';
import { StudentCountChartComponent } from './charts/student-count-chart/student-count-chart.component';
import { SubjectComponent } from './subject/subject/subject.component';
import { StreamComponent } from './stream/stream/stream.component';
import { PaperComponent } from './papers/paper/paper.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UniversityListComponent,
    CollegeListComponent,
    CollegeNewComponent,
    UniversityNewComponent,
    StudentCountChartComponent,
    SubjectComponent,
    StreamComponent,
    PaperComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
