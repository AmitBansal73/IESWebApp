import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import{UniversityListComponent} from './university/university-list/university-list.component';
import {UniversityNewComponent} from './university/university-new/university-new.component';

import {CollegeListComponent} from './college/college-list/college-list.component';
import {CollegeNewComponent} from './college/college-new/college-new.component';
import {StreamComponent} from './stream/stream/stream.component';
import {SubjectComponent} from './subject/subject/subject.component';
import {PaperComponent} from './papers/paper/paper.component'
import {QuestionListComponent} from './question/question-list/question-list.component'

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
  { path: 'ShowQuestions', component: QuestionListComponent}
];



@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})


export class AppRoutingModule { }
