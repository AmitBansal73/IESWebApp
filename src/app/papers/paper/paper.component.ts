import { Component, OnInit } from '@angular/core';

import {Paper} from '../../model/paper'

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})

export class PaperComponent implements OnInit {

  newPaper:boolean = false;

  papers: Paper[]=[
    {
      id:1,
      year: "2012",
      subject:"Fluid Mechanics",
      semester:4,
      college : "ITS",
      university: "CCS"
    },
    {
      id:2,
      year: "2013",
      subject:"Fluid Mechanics",
      semester:4,
      college : "ITS",
      university: "CCS"
    },
    {
      id:3,
      year: "2014",
      subject:"Fluid Mechanics",
      semester:4,
      college : "ITS",
      university: "CCS"
    }
    ,
    {
      id:4,
      year: "2013",
      subject:"Fluid Mechanics",
      semester:4,
      college : "ITS",
      university: "CCS"
    },
    {
      id:5,
      year: "2014",
      subject:"Fluid Mechanics",
      semester:4,
      college : "ITS",
      university: "CCS"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  NewPaper(): void {
    this.newPaper = true;
  }

  onAdd(agreed: boolean){
    if(agreed)
    {
      this.newPaper = false;
    }
  }
}
