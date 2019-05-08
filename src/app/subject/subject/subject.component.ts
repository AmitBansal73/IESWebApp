import { Component, OnInit } from '@angular/core';

import {Subject} from '../../model/subject'

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subjects: Subject[] = [
    {
      id: 1,
      name:'Strength Of Material'
    },
    {
      id:2,
      name:'Fluid Mechanics'
    },
    {
      id: 3,
      name:'Thermodynamics'
    },
    {
      id:4,
      name:'Image Processing'
    },
    {
      id: 1,
      name:'Engineering Drawing'
    },
    {
      id:2,
      name:'Basic Electrical Engineering'
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
