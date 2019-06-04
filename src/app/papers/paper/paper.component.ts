import { Component, OnInit } from '@angular/core';

import {Paper} from '../../model/paper';
import {PaperService} from '../../services/paper.service';

import {search} from '../../pipe/search';


@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})

export class PaperComponent implements OnInit {

  newPaper:boolean = false;

  papers : Paper[];
  SearchText:string;

  constructor(private paperService: PaperService) { 

  }

  ngOnInit() {
    this.GetPapers();
  }

  GetPapers():void{
    this.paperService.getPaper().subscribe(
      paper=> {
        this.papers = paper,
        console.log(paper);
      });
  }

  search(val: string): Paper[] {
    return val ? this.papers.filter(paper => paper.UniversityName.toLowerCase().indexOf(val.toLowerCase()) === 0)
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
