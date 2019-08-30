import { Component, OnInit } from '@angular/core';

import {Subject} from '../../model/subject'
import {StreamService} from '../../services/stream.service'
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  p = 1;
  subjects:Subject[];
  SearchText;

  constructor( private subjectService: SubjectService) { }

  ngOnInit() {
    this.getSubject();
  }

  public getSubject():void{
    this.subjectService.getSubject().subscribe(_subject=>{
      this.subjects=_subject
    });
  }

}
