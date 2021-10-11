import { Component, OnInit ,  } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-input-detail',
  templateUrl: './input-detail.component.html',
})
export class InputDetailComponent implements OnInit {

    quotes = [
    new Quotes(0, 'Job', 'A large chair does not make a King.', new Date(), 0, 0 ),
    new Quotes(0, 'Ayub', 'We must all either wear out or rust out,every one of us.My choice is to wear out.', new Date(), 0, 0 ),

  ];

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

