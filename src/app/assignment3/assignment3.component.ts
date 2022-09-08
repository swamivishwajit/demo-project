import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  showDetails:boolean = true;
  secretDetails: Array<number> = [];
  constructor() { }

  ngOnInit(): void {
  }

  onDiaplayDetails() {
    this.showDetails = !this.showDetails;
    this.secretDetails.push(Math.random());
  }

}
