import { Component, OnInit } from '@angular/core';

import {STUDENTS} from '../../data/mock-students';

import {Student} from '../../model/students';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Student[]= STUDENTS;

  constructor() { }

  ngOnInit() {
  }

}
