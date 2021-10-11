import { Component, OnInit ,  } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-input-detail',
  templateUrl: './input-detail.component.html',
})
export class InputDetailComponent implements OnInit {

    quotes = [
    new Quotes(0, 'Job', 'A large chair does not make a King.', new Date(), 0, 0 ),
    new Quotes(0, 'Karani', 'We must all either wear out or rust out,every one of us.My choice is to wear out.', new Date(), 0, 0 ),

  ];

  addQuote(quote:Quotes) {
       const quoteLength = this.quotes.length;
       quote.id = quoteLength + 1;
       this.quotes.push(quote);

  }

  completequote(isComplete:boolean, index:number) {
    if (isComplete) {
        const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`);
        if (toDelete) {
            this.quotes.splice(index, 1);
        }
    }
}

  like(i:number) {
    this.quotes[i].likes += 1;

        console.log(this.quotes[i]);

}
dislike(i:number) {
  this.quotes[i].dislikes += 1;

      console.log(this.quotes[i]);
}

  constructor() { }

  ngOnInit() {
  }

}

