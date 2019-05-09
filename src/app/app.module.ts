import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import {ChartModule} from 'angular-highcharts';
import { KatexModule } from 'ng-katex';
import { FormsModule} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


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
import { PaperNewComponent } from './papers/paper-new/paper-new.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionTextComponent } from './question/question-text/question-text.component';
import { QuestionNewComponent } from './question/question-new/question-new.component';
import { StreamNewComponent } from './stream/stream-new/stream-new.component';
import { SubjectNewComponent } from './subject/subject-new/subject-new.component';

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
    PaperComponent,
    PaperNewComponent,
    QuestionListComponent,
    QuestionTextComponent,
    QuestionNewComponent,
    StreamNewComponent,
    SubjectNewComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartModule,
    AppRoutingModule,
    KatexModule,
    FormsModule,
    NgSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
