import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import{UniversityListComponent} from './university/university-list/university-list.component';
import {UniversityNewComponent} from './university/university-new/university-new.component';

import {CollegeListComponent} from './college/college-list/college-list.component';
import {CollegeNewComponent} from './college/college-new/college-new.component';
import {StreamComponent} from './stream/stream/stream.component';
import {SubjectComponent} from './subject/subject/subject.component';
import {PaperComponent} from './papers/paper/paper.component';
import {PaperNewComponent} from './papers/paper-new/paper-new.component';
import {QuestionListComponent} from './question/question-list/question-list.component';
import {QuestionNewComponent} from './question/question-new/question-new.component';
import {StreamNewComponent} from './stream/stream-new/stream-new.component';
import {SubjectNewComponent} from './subject/subject-new/subject-new.component';
import {StudentComponent} from './student/student/student.component';

import {SubjectDetailsComponent} from './subject/subject-details/subject-details.component'
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'university', component: UniversityListComponent},
  { path: 'newUniversity', component: UniversityNewComponent},
  { path: 'college', component: CollegeListComponent},
  { path: 'newCollege', component: CollegeNewComponent},
  { path: 'stream', component: StreamComponent},
  { path: 'subject', component: SubjectComponent},
  { path: 'paper', component: PaperComponent},
  { path: 'ShowQuestions', component: QuestionListComponent},
  { path: 'newQuestion', component: QuestionNewComponent},
  { path: 'newStream', component: StreamNewComponent},
  { path: 'newSubject', component: SubjectNewComponent},
  { path: 'SubjectDetails', component: SubjectDetailsComponent},
  { path:'newPaper', component:PaperNewComponent},
  { path:'Student', component:StudentComponent}
  
  
];



@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})


export class AppRoutingModule { }
