import { Component, OnInit } from '@angular/core';

import {STUDENTS} from '../../../data/mock-students';

import {Student} from '../../../model/students';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  imports: [FormsModule],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  p = 1;
  students: Student[]= STUDENTS;

  constructor() { }

  ngOnInit() {
  }

}
