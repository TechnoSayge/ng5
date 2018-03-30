import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText = 'Add an item';
  goalText = 'My first bucket list goal';
  goals = [];
    constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

    addItem() {
      this.goals.push(this.goalText);
      this.goalText = '';
      this.itemCount = this.goals.length;
    }

  // tslint:disable-next-line:eofline
  }