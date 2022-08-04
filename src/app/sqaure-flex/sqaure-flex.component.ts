import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sqaure-flex',
  templateUrl: './sqaure-flex.component.html',
  styleUrls: ['./sqaure-flex.component.scss']
})
export class SqaureFlexComponent implements OnInit {
  @Input() divWidth = 200
  @Input() divHeight = 100
  constructor() { }

  ngOnInit(): void {
  }

}
