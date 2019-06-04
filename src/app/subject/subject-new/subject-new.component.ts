import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import {SubjectService} from '../../services/subject.service'
import { Subject } from '../../model/subject';

@Component({
  selector: 'app-subject-new',
  templateUrl: './subject-new.component.html',
  styleUrls: ['./subject-new.component.css']
})
export class SubjectNewComponent implements OnInit {

  subject:Subject=
  {
    SubjectID: 0,
    SubjectName:"",
    Description: "",
    Unit: 0
  };

  constructor(private location: Location,
    private subjectService: SubjectService
    ) { }

  ngOnInit() {
  }


  Submit():void{
    this.subjectService.addSubject(this.subject).subscribe(_subject=>
      {
      this.location.back()
      });

    this.location.back();
  }

  Cancel():void{
    this.location.back();
  }

}
