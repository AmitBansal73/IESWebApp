import { Component, OnInit } from '@angular/core';

import {Paper} from '../../model/paper';
import {PAPER} from '../../data/mock-paper';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})

export class PaperComponent implements OnInit {

  newPaper:boolean = false;

  papers : Paper[] = PAPER;

  constructor() { }

  ngOnInit() {
  }

  search(val: string): Paper[] {
    return val ? this.papers.filter(paper => paper.university.toLowerCase().indexOf(val.toLowerCase()) === 0)
      : this.papers;
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
