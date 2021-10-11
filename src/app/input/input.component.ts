import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';


 @Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
  })
export class InputComponent implements OnInit {

  @Input() quote!: Quotes;
  @Output() addquote = new EventEmitter<Quotes>();

  freshQuote = new Quotes(0, '', '', new Date(), 0, 0 );

  submitform() {
    console.log(this.freshQuote)
              this.addquote.emit(this.freshQuote);
              alert('form submitted');
              console.log('form submitted');
  }
    

    constructor() { }

  ngOnInit() {
  }

}

