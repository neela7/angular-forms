import { Component } from "@angular/core";

import { Hero } from "../hero";

@Component({
  selector: "app-hero-form",
  templateUrl: "./hero-form.component.html",
  styleUrls: ["./hero-form.component.css"]
})
export class HeroFormComponent {
  subscriptions = [];
  trainings = [
    "",
    "Management Training?",
    "Programming Training",
    "System Engineering Training",
    "Database Training",
    "Quality Assurance Training",
    "Youth Programming Training"
  ];

  model = new Hero(18, '', '', '', this.trainings[0], '');

  submitted = false;

  showList = false;

  onSubmit() {
    // we have all th details filled out in this.module
    const isNew = this.subscriptions.indexOf(this.model) === -1;
    if (isNew) {
      this.subscriptions.push({
        ...this.model
      });
    }

    // clear/reset the form
    this.newHero();

    this.toggleMode();
  }

  // delete record
  delete(subscription) {
    var index = this.subscriptions.indexOf(subscription);
    if (index > -1) {
      this.subscriptions.splice(index, 1);
    }
  }

  // edit record
  edit(subscription) {
    this.model = subscription;
    this.toggleMode();
  }
  newHero() {
    this.model = new Hero(18, '', '', '', this.trainings[0], '');
  }

  toggleMode() {
    this.showList = !this.showList;
  }
}