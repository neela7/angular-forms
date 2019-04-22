import { Component } from '@angular/core';

import { Hero }    from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
subscriptions = []
  trainings = ['Management Training​', 'Programming Training',
            'System Engineering Training', 'Database Training',
            'Quality Assurance Training', 'Youth Programming Training'];

  model = new Hero(18, 'Neela', 'neela7@gmail.com', '', this.trainings[0], '');

  submitted = false;
  

  onSubmit(){
    // we have all th details filled out in this.module
    this.subscriptions.push({
      ...this.model
    });

    // clear/reset the form
    this.newHero();
  }

   // delete redord
    delete(subscription){
var index = this.subscriptions.indexOf(subscription);
if (index > -1) {
  this.subscriptions.splice(index, 1);
}

  }
    // edit redord
    edit(subscription){
      this.model=subscription;
     
    }

  newHero() {
    this.model = new Hero(42, '', '', '', '', '');

    }



}
