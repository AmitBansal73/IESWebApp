import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paper-new',
  templateUrl: './paper-new.component.html',
  styleUrls: ['./paper-new.component.css']
})
export class PaperNewComponent implements OnInit {
  @Output() added = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  Submit():void{
    this.added.emit(true);
  }

  Cancel():void{
    this.added.emit(true);
  }
}
