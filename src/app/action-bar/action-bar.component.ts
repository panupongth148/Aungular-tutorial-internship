import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
  @Input() counter = 0
  @Input() step: number = 1;
  @Output() counterChange = new EventEmitter();
  @Input() inputDisplay = true
  constructor() { }

  ngOnInit(): void {

  }

  decrese() {
    console.log("decrese")
    if (this.counter > 0) {
      this.counter -= this.step
      this.counterChange.emit(this.counter)
    }
  }

  increse() {
    if (this.counter < 100) {
      console.log("decrese")
      this.counter += this.step
      this.counterChange.emit(this.counter)
    }

  }
}
